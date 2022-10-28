import styled from "styled-components";
import UseGetTimeZone from "../apis/hooks/useGetTimeZone";


const DetailsStyle = styled.div`
    margin-top: 40px;
    padding-inline: 26px;
    padding-bottom: 48px;
    padding-top: 48px;

    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(20px);
`

const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;


    & > * {
        color: #303030;
    } 

    &:last-child{
        margin-bottom: 0px; 
    }


`

const InfoTitle = styled.p`
    font-weight: 400;
    font-size: 10px;
    line-height: 28px;
    letter-spacing: 2px;
    text-transform: uppercase;
`

const InfoResult = styled.p`
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
`


const Details = () => {

    const {timeZoneData : data} = UseGetTimeZone();


    return (

            data && ( <DetailsStyle>
                <InfoContainer>
                    <InfoTitle>current timezone</InfoTitle>
                    <InfoResult>{data.timezone}</InfoResult>
                </InfoContainer>
    
                <InfoContainer>
                    <InfoTitle>day of the year</InfoTitle>
                    <InfoResult>{data.day_of_year}</InfoResult>
                </InfoContainer>
    
                <InfoContainer>
                    <InfoTitle>day of the week</InfoTitle>
                    <InfoResult>{data.day_of_week}</InfoResult>
                </InfoContainer>
    
                <InfoContainer>
                    <InfoTitle>week number</InfoTitle>
                    <InfoResult>{data.week_number}</InfoResult>
                </InfoContainer>
            </DetailsStyle>)
       
    );
}

export default Details;
