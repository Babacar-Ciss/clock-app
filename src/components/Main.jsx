import styled from "styled-components";
import Clock from "./Clock";
import Details from "./Details";
import Quotes from "./Quotes";
import DayTimeBG from "../assets/mobile/bg-image-daytime.jpg";
import NightTimeBG from "../assets/mobile/bg-image-nighttime.jpg";
import useStore from "../Store";


const MainStyle = styled.main`
    width: 100%;
    background : url(${props => props.momentOfTheDay === "PM" ? DayTimeBG : NightTimeBG });
    background-repeat: no-repeat;
    background-size: 100% 100%;
`

const Container = styled.div`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-top: 32px;
      height: 100vh;
      background-color: rgba(0,0,0,0.4);
`

const Main = () => {
    const isDetailShown = useStore((state) => state.isDetailShown);
    const momentOfTheDay = useStore(state => state.momentOfTheDay);

    return (
        <MainStyle momentOfTheDay = {momentOfTheDay}>
            <Container>
                <Quotes />  
                <Clock />
              {isDetailShown ? <Details /> : null} 
            </Container>
        </MainStyle>
    );
}

export default Main;
