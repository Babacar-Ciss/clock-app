import {useState, useEffect} from 'react';
import UseGetIPAdress from './useGetIPAdress';
import axios from "axios"

const UseGetTimeZone = () => {
    const {IpAdress} = UseGetIPAdress();
    const [timeZoneData, setTimeZoneData] = useState({});


    const getTimeZoneData = async () => {
        const res = await axios.get(`http://worldtimeapi.org/api/ip/${IpAdress}`);
        setTimeZoneData(res.data);
    } 

    useEffect(() => {
      getTimeZoneData()
    }, [IpAdress])

    return {
        timeZoneData : timeZoneData
    }
}

export default UseGetTimeZone;
