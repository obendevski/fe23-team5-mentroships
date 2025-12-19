import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchUsers.css';

type Users = Array<{
  name: string;
  email: string;
}>;

const SearchUsers = () => {
  const [users, setUsers] = useState<Users>([]);
  const [filteredUsers, setFilteredUsers] = useState<Users>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((res: Users) => {
        setUsers(res);
        setFilteredUsers(res);
      });
  }, []);

  const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const keyword = e.currentTarget.value;
    const filteredArr = users.filter(
      user => user.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
    );
    setFilteredUsers(filteredArr);
  };

  return (
    <div>
      <input
        className="search"
        placeholder="search..."
        onKeyUp={onKeyUpHandler}
      />
      {filteredUsers.map((user, i) => (
        <p key={i}>
          {user.name} <a href={'mailto:' + user.email}>Email Me</a>
        </p>
      ))}
    </div>
  );
};

export default SearchUsers;
