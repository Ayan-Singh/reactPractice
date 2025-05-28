import { useState } from "react";
import { useEffect } from "react";

function Fetch(){
    const [post,setPost] = useState({})

    async function getPosts(){
        const response = await fetch("link");
        const json = await response.json();
        setPost(json)
    }

    useEffect(()=>{
        getPosts();
    },[])

    return post.title;
}