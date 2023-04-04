import {useState, useEffect } from 'react';
export function useFetch(url, initType){
    const [data, setData]=useState(null);
    const fetchUrl= (type) => {
        fetch(url+ '/'+ type)
        .then((res) => res.json())
        .then((res) =>{return setData(res)})
        //중괄호 있으면 return 필요함
    }
	useEffect(() => {
        fetchUrl(initType)
	}, []);
    return{data, fetchUrl}
}