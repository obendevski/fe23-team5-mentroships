import React, {useState, useEffect} from 'react';
import './App.css';
import SearchUsers from './components/SearchUsers';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = (): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('username')) {
      setLoggedIn(true);
    }
  }, []);

  const onSubmit = () => {
    localStorage.setItem('username', username);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('username');
  };

  return (
    <div className="main">
      <header>
        {loggedIn && (
          <button className="btn btn-primary" onClick={logout}>
            LOGOUT
          </button>
        )}
      </header>
      {!loggedIn && (
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              id="username"
              value={username}
              onChange={onChange}
            />
          </div>
          <div>
            <button className="btn btn-primary" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </form>
      )}
      {loggedIn && <SearchUsers />}
    </div>
  );
};

export default App;
