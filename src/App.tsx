import React, {useEffect, useState} from 'react';
import {IPost} from "./types/types";
import axios from "axios";
import './App.css'
import PostList from "./PostList";

const App = () => {
    const [posts, setPosts] = useState<IPost[]>([])
    const [limit, setLimit] = useState<number>(5)
    const [btn, setBtn] = useState<string>('Завантажити ще')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    useEffect(() => {
        fetchPosts()
    }, [limit])



    const fetchPosts = async () => {
        setIsLoading(true)
        setTimeout(async () => {
            const response = await axios.get<IPost[]>(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            setPosts(response.data)
            setIsLoading(false)
        }, 500)
    }


    const loadMorePosts = () => {
        setLimit(limit + 5)
        if(posts.length === 10) {
            setBtn('Завантажити усі пости')
        }
        if(posts.length === 15) {
            setLimit(35)
            setBtn('Сховати')
        }
        if(posts.length === 35) {
            setLimit(5)
            setBtn('Завантажити ще')
        }
    }

    return (
        <div>
            <button onClick={loadMorePosts}>{btn}</button>
            {isLoading
                ? <h1>Loading...</h1>
                : <PostList posts={posts} />
            }
        </div>
    );
};

export default App;
