import React from 'react';
import {FaEllipsisH} from 'react-icons/fa';

interface Props {
  subtitle: string;
  title: string;
}

export const Trend = ({subtitle, title}: Props) => {
  return (
    <div style={style.Container}>
      <div style={style.Row}>
        <h4 style={style.Subtitle}>{subtitle}</h4>
        <FaEllipsisH />
      </div>
      <h3 style={style.Title}>{title}</h3>
    </div>
  );
};

const style: Record<string, React.CSSProperties> = {
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  Row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: 'white',
    width: '100%',
  },
  Subtitle: {
    fontSize: 14,
    color: 'rgb(110, 118, 125)',
  },
  Title: {
    fontSize: 16,
    color: 'white',
  },
};
