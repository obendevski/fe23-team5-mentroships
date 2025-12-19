import React from "react";
import { Post } from "./Post";
import type { Post as PostType } from "./types";

interface State {
  data: PostType[];
}

export class Main extends React.Component<{}, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
      res.json()
    );
  }

  public render() {
    return (
      <main className="col-6" style={style.Container}>
        {this.state.data?.map((post) => {
          return <Post key={post.id} {...post} />;
        })}
      </main>
    );
  }
}

const style: Record<string, React.CSSProperties> = {
  Container: {
    background: "black",
    paddingTop: 20,
    borderRight: "1px solid rgb(110, 118, 125)",
    borderLeft: "1px solid rgb(110, 118, 125)",
  },
};
