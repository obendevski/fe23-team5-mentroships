import { PostType } from "../../../assets/posts";
import { Post } from "../Post/Post";

import classes from "./Feed.module.css";

export const Feed = ({ createdPosts }: { createdPosts: PostType[] }) => {
  return (
    <div className={classes.GalleryFeed}>
      {createdPosts
        .filter((post) => post.userName?.length !== 0)
        .map((post, index) => (
          <Post key={index} {...post}></Post>
        ))}
    </div>
  );
};
