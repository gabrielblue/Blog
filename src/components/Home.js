import UseFetch from "./UseFetch";
import BlogList from "./BlogList";
const Home = () => {
    const {data} = UseFetch('http://localhost:4002/blogs');
    return (
        <div className="home">

            {data && <BlogList blogs= {data} title="All Blogs" /> }

    </div>
);
}


export default Home;