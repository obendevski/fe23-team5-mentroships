import React from 'react';
import {Trend} from './Trend';

export const Trends = () => {
  return (
    <div style={style.Container}>
      <h2 style={style.Title}>Trends for you</h2>
      <Trend
        subtitle="Trending in Sport"
        title="LA Lakers wins against the Suns"
      />
      <Trend subtitle="Trending in World" title="War in Ukraine" />
      <Trend subtitle="Trending in Weather" title="Sunny in Skopje" />
      <Trend subtitle="Trending in Food" title="10 Best Pizza Recipes" />
    </div>
  );
};

const style: Record<string, React.CSSProperties> = {
  Container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    background: 'rgb(21, 24, 28)',
    borderRadius: 14,
    padding: 16,
    height: 350,
    marginTop: 20,
    marginLeft: 10,
  },
  Title: {
    fontSize: 18,
    color: 'white',
  },
};
