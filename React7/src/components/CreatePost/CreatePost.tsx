import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import styles from "./CreatePost.module.css";
import { User } from "./types";
import { PostType } from "../../assets/posts";

export const CreatePost = ({ onNewCreatedPost }) => {
  const [newPost, setNewPost] = useState<PostType>({
    userName: "",
    title: "",
    description: "",
    dateCreated: "",
    imgUrl: "",
  });
  const [userList, setUserList] = useState<User[]>([]);

  const handleInput = (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>,
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    const dateCreated = format(new Date(), "yyyy-MM-dd'T'HH:mm:ss");
    setNewPost({ ...newPost, [name]: value, dateCreated: dateCreated });
  };

  let onPostSubmit = (e) => {
    e.preventDefault();

    onNewCreatedPost(newPost);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => {
        setUserList(response);
      });
  }, []);

  return (
    <div className={styles.CreateForm}>
      <span className={styles.FormTitle}>Enter a new post</span>
      <form onSubmit={(e) => onPostSubmit(e)}>
        <label>
          Post Title:
          <input type="text" name="title" onChange={(e) => handleInput(e)} />
        </label>
        <label>
          Post Description:
          <input
            type="text"
            name="description"
            onChange={(e) => handleInput(e)}
          />
        </label>
        <label>
          User:
          <select name="userName" onChange={(e) => handleInput(e)}>
            <option value="--">Select user</option>
            {userList.map((user) => {
              return (
                <option key={user.id} value={user.name}>
                  {user.name}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          Image URL:
          <input type="text" name="imgUrl" onChange={(e) => handleInput(e)} />
        </label>
        <button
          disabled={
            !newPost.title ||
            !newPost.description ||
            !newPost.imgUrl ||
            !newPost.userName
          }
          type="submit"
          className={styles.SubmitButton}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
