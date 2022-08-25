const Bloglist = ({blogs,title,handleDelete}) => {
  return ( <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
              <h3>{blog.title}</h3>
              <p>authored by {blog.author}</p>
              <p>{blog.body}</p>
              <button onClick={()=>handleDelete(blog.id)}>Aproved</button>
              <button onClick={()=>handleDelete(blog.id)}>Delete</button>
          </div>
      ))}
  </div> );
}

export default Bloglist;