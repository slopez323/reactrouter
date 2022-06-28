import { useParams } from "react-router-dom";
import { blogPosts } from "../utils/sampleBlogs";

const BlogPost = () => {
  const params = useParams();
  const blog = blogPosts.find((blog) => blog.id === Number(params.blogId));
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
