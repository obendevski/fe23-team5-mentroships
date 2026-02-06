import React from 'react';
import { useFetch } from '../hooks/useFetch';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export const Comments = () => {
  const { data, loading, error } = useFetch<Comment>(
    'https://jsonplaceholder.typicode.com/comments'
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {data.map((item: Comment) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  );
};
