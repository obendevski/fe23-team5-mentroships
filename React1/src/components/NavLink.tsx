import React from 'react';

interface Props {
  to: string;
  text?: string;
  icon?: JSX.Element;
}

export const NavLink = ({icon, to, text}: Props) => {
  return (
    <a style={styles.Container} href={to}>
      <div style={styles.IconWrapper}>{icon}</div>
      <p style={styles.TextWrapper}>{text}</p>
    </a>
  );
};

const styles = {
  Container: {
    display: 'flex',
    height: '50px',
    marginBottom: '10px',
  },
  IconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1',
    color: 'white',
  },
  TextWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    color: 'white',
    paddingLeft: '10px',
    height: '50px',
    flex: '4',
  },
};
