import React, { useState, useEffect } from 'react'

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...args) => {
        setLoading(true);
        try {
            const response = await apiFunc(...args);
            setLoading(false);
            if (!response.ok) {
                setData(response.data)
                return setError(true);
            }
            setError(false);
            setData(response.data)        
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
               
    }

    return { data, error, loading, request };
}