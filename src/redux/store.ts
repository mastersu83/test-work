import { attr, createReducer, fk, many, Model, oneToOne, ORM } from "redux-orm";
import { configureStore } from "@reduxjs/toolkit";

export class Post extends Model {}
Post.modelName = "Post";
Post.fields = {
  comment: fk("Comment"),
  users: oneToOne("Users"),
};

export class Comment extends Model {}
Comment.modelName = "Comment";
Comment.fields = {
  post: fk("Post"),
  users: oneToOne("Users"),
};

export class Users extends Model {}
Users.modelName = "Users";
Users.fields = {
  id: attr(),
  title: attr(),
  comments: many("Comment"),
  posts: many("Post"),
};

const orm = new ORM();
orm.register(Post, Comment, Users);

// const rootReducer = combineReducers({
//   orm: createReducer(orm),
// });
console.log(orm.getDatabase());
export const setupState = () => {
  return configureStore({
    reducer: {
      her: createReducer(orm),
    },
  });
};

// export let store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware())
// );
