import React, { useState } from "react";
const BlogForm = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [body, setBody] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // onSave({ title, author, body });
        setTitle('');
        setAuthor('');
        setBody('');
    
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="">Your blog</h1>
            <div className="BlogForm mb-3 p-2">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" placeholder="Enter Title" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="mb-3 p-2">
                <label htmlFor="author" className="form-label">Author</label>
                <input type="text" className="form-control" id="author" placeholder="Enter Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="mb-3 p-2">
                <label htmlFor="body" className="form-label">Body</label>
                <textarea className="form-control" placeholder="Enter Body" id="body" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                </div>
            <button type="submit" className="btn btn-primary">Save Blog</button>
            {/* <p>{title}</p>
            <p>{author}</p>
            <p>{body}</p> */}
        </form>
    )
    
}

export default BlogForm;