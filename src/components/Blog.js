import { useEffect, useState } from "react";
import axios  from "axios";
import BlogList from "./BlogList";
const MyBlog = () => {
    const [blogs,setBlogs] = useState('')
    useEffect(() => {
        axios.get('http://localhost:4000/blogs')

        .then(res => {
            setBlogs(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    })
// let blogList = blogs.map((blog) => (
//     <h1 key={blog.id}>{blog.author},{blog.title}</h1>
// ));
    return (
    
        <div className="home">
            {blogs && <BlogList blogs = {blogs} />}
            {/* {blogs.map((blog) => (
                <div className="preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written By: {blog.author}</p>
                </div>
            ))} */}
    </div>
);
}


export default MyBlog