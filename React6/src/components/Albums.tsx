import React from 'react';
import { useFetch } from '../hooks/useFetch';

interface Album {
  userId: number;
  id: number;
  title: string;
}

export const Albums = () => {
  const { data, loading, error } = useFetch<Album>('https://jsonplaceholder.typicode.com/albums');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ul>
      {data.map((item: Album) => {
        return <li>{item.title}</li>;
      })}
    </ul>
  );
};
