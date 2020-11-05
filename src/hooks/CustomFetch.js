import {useState, useEffect} from 'react';

const useCustomFetch = (url, time) => {
    const [ data, setData] = useState(null)
    const [ loading, setLoading] = useState(false)
    const [ error, setError ] = useState(null)
    
    useEffect(() => {
        const timeOut = setTimeout(async() => {
            if(url){
                setLoading(true);
                setError(false);
                setData(null);
                try {
                    const resource = await fetch(url)
                    const dataAPI = await resource.json()
                    setData(dataAPI.data)
                } catch (error) {
                    setError(error);
                }
                setLoading(false)
            } else {
                setData(null);
                setError(null)
            }
            
        }, time);
        return () => {
            clearTimeout(timeOut)
        }
    }, [url, time])
    return { data, error, loading }
}
 
export default useCustomFetch;

