import {useEffect, useState} from 'react';
import axios from "axios";

const UseGetIPAdress = () => {
    const [ip, setIP] = useState('');
    const [CountryCode, setCountryCode] = useState('');

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        setIP(res.data.IPv4);
        setCountryCode(res.data.country_code);
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        IpAdress : ip,
        CountryCode : CountryCode
    }
}

export default UseGetIPAdress;
