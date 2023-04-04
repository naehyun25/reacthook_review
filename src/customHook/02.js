import { useFetch } from "./useFetch";

//import {useState, useEffect } from 'react';

const url = "https://jsonplaceholder.typicode.com";
function C02() {
    // const [data, setData]=useState(null);
    // const fetchUrl= (type) => {
    //     fetch(url+ '/'+ type)
    //     .then((res) => res.json())
    //     .then((res) =>{return setData(res)})
    //     //중괄호 있으면 return 필요함
    // }
	// useEffect(() => {
    //     fetchUrl("users")
	// }, []);

    const {data, fetchUrl}=useFetch(url, "users")
	return (
		<div>
			<h1>useFetch</h1>
            <button onClick={()=>{fetchUrl("posts")}}>posts</button>
            <button onClick={()=>{fetchUrl("users")}}>users</button>
            <button onClick={()=>{fetchUrl("todos")}}>todos</button>
            <div>
            <pre>
                {JSON.stringify(data,null,2)}
            </pre>
            </div>
		</div>
	);
}

function C03(){
    const {data:userData}=useFetch(url, "users")
    const {data:postData}=useFetch(url, "posts")
    
    return(
        <div>
            <hr/>
            <h1>C03</h1>
            <h3>user</h3>
            <pre>{userData && JSON.stringify(userData[0],null,2)}</pre>
            <h3>post</h3>
            <pre>{JSON.stringify(postData,null,2)}</pre>
        </div>
    )
}

export {C02, C03};
