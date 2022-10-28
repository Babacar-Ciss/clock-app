import styled from "styled-components";
import SunIcon from "../assets/desktop/icon-sun.svg";
import MoonIcon from "../assets/desktop/icon-moon.svg";
import ArrowDown from "../assets/desktop/icon-arrow-down.svg";
import UseGetTimeZone from "../apis/hooks/useGetTimeZone";
import {format, formatISO} from "date-fns";



import useStore from "../Store";
import UseGetIPAdress from "../apis/hooks/useGetIPAdress";
import { useState, useEffect } from "react";

const ClockStyle = styled.div`
    width: 86%;
    margin: 0px auto 40px auto;
    margin-top: ${props => props.isDetailShown ? "67px" : "0px"};
`

const TimeOfTheDay = styled.div`
    display: flex;
`

const DaytimeIcon = styled.img`
    margin-right: 16px;
    align-self: baseline;
`

const GreetingMomentOfTheDay= styled.p`
    text-transform: uppercase;
    font-size: 15px;
    line-height: 25px;
    letter-spacing: 3px;
    margin-bottom: 16px;
`

const HoursAndMinutesContainer = styled.div`
    display: flex;
    margin-bottom: 16px;

    & span {
        align-self: flex-end;
        font-size: 15px;
        line-height: 35px;
        font-weight: 300;
        text-transform: uppercase;
        margin-left: 5px;
    }

`

const HoursAndMinutes = styled.p`
    font-weight: 700;
    font-size: 100px;
    line-height: 100px;
    letter-spacing: -2.5px;
`

const LocationContainer = styled.div`
    font-weight: 700;
    font-size: 15px;
    line-height: 28px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 48px;
`

const ButtonContainerStyle = styled.div`
    width: 98px;
    height: 39px;
    background-color: #FFF;
    border-radius: 28px;
    
    display: flex;
    align-items: center;
    padding-left: 17px;
`

const Label = styled.p`
    color: rgba(0,0,0,0.5) ;
    font-size: 12px;
    line-height: 14px;
    font-weight: 700;
    letter-spacing: 3.75px;
    text-transform: uppercase;  
`

const ArrowContainer = styled.div`
    position: relative;
    width: 32px;
    height: 32px;
    background-color: #303030;
    border-radius: 50%;
    margin-right: 4px;
    margin-left: auto;
    background-image: url(${ArrowDown});
    background-position: center;
    background-repeat: no-repeat;
    transform: ${props => props.isDetailShown ? "rotate(180deg)" : null};
`

const Clock = () => {
    let city = null;
    let cnCode = null;
    const ToggleDetail = useStore(state => state.ToggleDetail);
    const isDetailShown = useStore(state => state.isDetailShown);
    const momentOfTheDay = useStore(state => state.momentOfTheDay);
    const setMomentOfTheDay = useStore(state => state.setMomentOfTheDay);
    const {timeZoneData} = UseGetTimeZone();
    const {CountryCode} = UseGetIPAdress();
    const [time, setTime] = useState(formatISO(new Date(), {representation : 'time'}).slice(0, 5));

    if(CountryCode) { 
        cnCode = CountryCode; 
    }

    if ( Object.keys(timeZoneData).length !== 0 ) {
        city = timeZoneData.timezone.split("/")[1]
    }


    useEffect(() => {
        const interval = setInterval(() => setTime(formatISO(new Date(), {representation : 'time'}).slice(0, 5)), 60000);
        setMomentOfTheDay(format(new Date(), "a"));
        return () => {
          clearInterval(interval);
        };
      });


      const GreetingText = momentOfTheDay === "PM" ? "good evening" : "good morning";


    return (

        Object.keys(timeZoneData).length !== 0 ? (
            <ClockStyle isDetailShown = {isDetailShown}>
            <TimeOfTheDay>
                <DaytimeIcon src={SunIcon} alt="sun icon" />
                <GreetingMomentOfTheDay> {GreetingText} </GreetingMomentOfTheDay>
            </TimeOfTheDay>

            <HoursAndMinutesContainer>
                 <HoursAndMinutes>{time}</HoursAndMinutes>
                 <span>bst</span>
            </HoursAndMinutesContainer>

            <LocationContainer>
                <span>in {city},</span>
                <span>&nbsp;{cnCode}</span>
            </LocationContainer>

            <ButtonContainerStyle>
                        <Label>{isDetailShown ? "Less" : "More"} </Label>
                        <ArrowContainer isDetailShown = {isDetailShown} onClick={ToggleDetail} />      
            </ButtonContainerStyle>   
        </ClockStyle>

        ) : null

       
    );
}

export default Clock;
