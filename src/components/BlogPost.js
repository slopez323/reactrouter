import { useParams } from "react-router-dom";

const BlogPost = ({ blogs }) => {
  const params = useParams();
  const blog = blogs.find((blog) => blog.id === Number(params.blogId));
  return (
    <div>
      <p>Title: {blog.title}</p>
      <p>Text: {blog.text}</p>
      <p>Author: {blog.author}</p>
      <p>Created At: {blog.createdAt}</p>
      <p>ID: {blog.id}</p>
    </div>
  );
};

export default BlogPost;
