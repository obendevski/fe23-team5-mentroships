import React from 'react';
import { useFetch } from '../hooks/useFetch';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const { data, loading, error } = useFetch<Post>('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {data.map((item: Post) => {
        return <li>{item.title}</li>;
      })}
    </ul>
  );
};
