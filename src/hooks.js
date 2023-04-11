import { useState, useEffect } from 'react';
import axios from "axios";
import uuid from "uuid";


const useFlip = (initialState=true) => {
    const [state, setState] = useState(initialState)
    const toggleFlip = () => {
        setState(state => !state)
    }
    return [state, toggleFlip]
}

const useAxios = (url, name = "") => {
    const [data, setData] = useState([]);
    const [fetchTrigger, setFetchTrigger] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${url}${name}`);
          setData((prevData) => [...prevData, { ...response.data, id: uuid() }]);
        } catch (error) {
          console.error(error);
        }
      };
  
      if (fetchTrigger) {
        fetchData();
        setFetchTrigger(false);
      }
    }, [url, name, fetchTrigger]);
  
    const fetchData = () => {
      setFetchTrigger(true);
    };
  
    return { data, fetchData };
  };

export { useFlip, useAxios }