import {useState, useEffect} from 'react';

const useCustomFetch = (url, time) => {
    const [ data, setData] = useState(null)
    const [ loading, setLoading] = useState(false)
    const [ error, setError ] = useState(null)
    
    useEffect(() => {
        const timeOut = setTimeout(async() => {
                setLoading(true);
                setError(false);
                setData(null);
                try {
                    const resource = await fetch(url)
                    const dataAPI = await resource.json()
                    setData(dataAPI)
                } catch (error) {
                    setError(error);
                }
                setLoading(false)
          
            
        }, time);
        return () => {
            clearTimeout(timeOut)
        }
    }, [url, time])
    return { data, error, loading }
}
 
export default useCustomFetch