import { blogPosts } from "../utils/sampleBlogs";
import { useSearchParams } from "react-router-dom";

const AllBlogs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder = searchParams.get("sortOrder");
  const sortField = searchParams.get("sortField");
  const limit = Number(searchParams.get("limit"))
    ? Number(searchParams.get("limit"))
    : blogPosts.length;
  const page = Number(searchParams.get("page")) + 1;

  const sortblogs = (a, b) => {
    if (sortOrder === "asc") {
      if (a[sortField] > b[sortField]) {
        return 1;
      } else {
        return -1;
      }
    } else if (sortOrder === "desc") {
      if (a[sortField] < b[sortField]) {
        return 1;
      } else {
        return -1;
      }
    }
    return 0;
  };

  const filterBlogs = (blog, index) => {
    if (index > page - 1 && index < page + limit) return true;
    return false;
  };

  return (
    <div>
      {blogPosts
        .filter((blog, index) => filterBlogs(blog, index))
        .sort((a, b) => sortblogs(a, b))
        .map((blog) => {
          return <Blog blog={blog} key={blog.id} />;
        })}
    </div>
  );
};

const Blog = ({ blog }) => {
  return (
    <div>
      <p>Title: {blog.title}</p>
      <p>Text: {blog.text}</p>
      <p>Author: {blog.author}</p>
      <p>Created At: {blog.createdAt}</p>
      <p>ID: {blog.id}</p>
      <hr />
    </div>
  );
};

export default AllBlogs;
