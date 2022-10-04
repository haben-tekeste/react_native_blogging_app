import createContextData from "./createContextData";
import "react-native-get-random-values";
import jsonServer from "../api/jsonServer";
import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "get_BlogPosts":
      return action.payload;
    case "delete_BlogPost":
      return state.filter((post) => {
        return post.id !== action.payload;
      });
    case "edit_BlogPost":
      return state.map((post) => {
        return post.id === action.payload.id ? action.payload : post;
      });

    default:
      break;
  }
};

const getBlogPosts = (dispatch) => {
  return async () => {
    const { data } = await jsonServer.get("/blogPosts");
    dispatch({
      type: "get_BlogPosts",
      payload: data,
    });
  };
};

const addBlogPost = (dispatch) => {
  return async (title, content, cb) => {
    await jsonServer.post("/blogPosts", { title, content });
    cb();
  };
};

const editBlogPost = (dispatch) => {
  return async (title, content, id, cb) => {
    dispatch({
      type: "edit_BlogPost",
      payload: {
        title,
        content,
        id,
      },
    });
    cb();
  };
};

const deleteBlogPost = (dispatch) => {
  return async (id) => {
    await jsonServer.delete(`/blogPosts/${id}`);
    dispatch({
      type: "delete_BlogPost",
      payload: id,
    });
  };
};

export const { Context, Provider } = createContextData(
  reducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
);
