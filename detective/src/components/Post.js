import React from "react"
import { useEffect } from "react"
import sanityClient from "./client"
export default function Posts() {
    const [postData, setPost] = React.useState(null)
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "post"]{
                title,
                slug,
                body
            }`)
            .then(data => {
                setPost(data)
            })
    }, [])
    console.log(postData)
    return (
        <></>
    )
}