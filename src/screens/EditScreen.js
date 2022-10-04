import React, { useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogForm from "../components/BlogForm";

const EditScreen = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find((blog) => {
    return blog.id === id;
  });

  return (
    <BlogForm
      onSubmit={(title, content) =>
        editBlogPost(title, content, id, () => {
          navigation.pop();
        })
      }
      initialValues={{ title: blogPost.title, content: blogPost.content }}
    />
  );
};

export default EditScreen;
