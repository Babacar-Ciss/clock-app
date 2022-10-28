import styled from "styled-components";
import RefreshIcon from "../assets/desktop/icon-refresh.svg";
import useStore from "../Store.js"
import useGetQuotes from "../apis/hooks/useGetQuotes";


const QuotesStyle = styled.div`
    width: 86%;
    margin: 0 auto;
    display: ${props => props.isDetailShown ? "none" : "flex"};
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0px auto 0px auto;
`

const Quote = styled.p`
    font-size: 12px;
    line-height: 22px;
    margin-bottom: 8px;
    flex-basis: 89%;
`

const Author = styled.p`
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
`

const RefreshIconStyle = styled.img`
    width: 16px;
    height: 16px;
    font-weight: 700;
    font-size: 12px;
    line-height: 22px;
    cursor: pointer;
`

const Quotes = () => {
    const fetchQuotes = useStore((state) => state.fetchQuotes);
    const {data, loading, hasErrors} = useGetQuotes();
    const RANDOM_NUMBER_QUOTES = Math.floor(Math.random()*100+1);
    const isDetailShown = useStore((state) => state.isDetailShown)

    if (loading) { return <p>Loading</p> };
    if (hasErrors) { return <p>cannot read data</p> };

    return (
        
             data.length !== 0 &&
                            (<QuotesStyle isDetailShown = {isDetailShown}>
                                <Quote>“{data[RANDOM_NUMBER_QUOTES].en}”</Quote>
                                <RefreshIconStyle onClick = {fetchQuotes} src={RefreshIcon} alt = "Refresh Icon" />
                                <Author>{data[RANDOM_NUMBER_QUOTES].author}</Author>
                            </QuotesStyle>)
                             
            )
}

export default Quotes;
