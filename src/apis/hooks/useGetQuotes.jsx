import useStore from "../../Store";
import { useEffect } from "react";

const UseGetQuotes = () => {
    const data = useStore((state) => state.data);
    const loading = useStore((state) => state.loading);
    const hasErrors = useStore((state) => state.hasErrors);
    const fetchQuotes = useStore((state) => state.fetchQuotes);
    
    useEffect(() => {
        fetchQuotes()
    },[])

    return {data, loading, hasErrors}
}

export default UseGetQuotes;
