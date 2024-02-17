import UseFetch from "./UseFetch";
import BlogList from "./BlogList";
const Home = () => {
    const [data] = UseFetch('http://localhost:4002/blogs');
    return (
        <div className="home">

            {data && <BlogList blogs={data} title="All Blogs" /> }

        
            {/* {blogs && <BlogList blogs = {blogs} />}
            {/* {blogs.map((blog) => (
                <div className="preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>Written By: {blog.author}</p>
                </div>
            ))} */}
    </div>
);
}


export default Home;