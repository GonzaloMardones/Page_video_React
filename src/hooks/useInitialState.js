import {useState, useEffect} from 'react'

const useInitialState = (API) => {
    const [ videos, setVideos] = useState({
        'mylist':[],
        'trends':[],
        'originals':[]
    })
    //const API = 'http://localhost:3000/initalState'
    useEffect(() =>{
        fetch(API)
            .then(response => response.json() )
            .then(data => setVideos(data))
    }, [])

    return videos
}

export default useInitialState 