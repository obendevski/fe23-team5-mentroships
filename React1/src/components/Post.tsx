import React from 'react';

interface Props {
  title: string;
  body: string;
  id: number;
  userId: number;
}

export const Post = ({title, body}: Props) => {
  return (
    <div style={style.Container}>
      <h4 style={style.Title}>{title}</h4>
      <p style={style.Content}>{body}</p>
    </div>
  );
};

const style: Record<string, React.CSSProperties> = {
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    border: '1px solid white',
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
  },
  Title: {margin: 0, padding: 0, color: 'white', textAlign: 'left'},
  Content: {
    color: 'white',
  },
};
