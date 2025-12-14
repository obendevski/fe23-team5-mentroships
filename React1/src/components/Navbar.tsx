import {Button} from './Button';
import {NavLink} from './NavLink';
import React from 'react';
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaRegBookmark,
  FaClipboardList,
  FaUserAlt,
  FaEllipsisH,
} from 'react-icons/fa';

export const Navbar = () => {
  return (
    <div className="col-3" style={style.Container}>
      <NavLink to="/" icon={<FaTwitter size={30} />} />
      <NavLink to="/" text="Home" icon={<FaHome size={18} />} />
      <NavLink to="/explore" text="Explore" icon={<FaHashtag size={18} />} />
      <NavLink
        to="/notifications"
        text="Notifications"
        icon={<FaBell size={18} />}
      />
      <NavLink to="/messages" text="Messages" icon={<FaEnvelope size={18} />} />
      <NavLink
        to="/bookmarks"
        text="Bookmarks"
        icon={<FaRegBookmark size={18} />}
      />
      <NavLink to="/lists" text="Lists" icon={<FaClipboardList size={18} />} />
      <NavLink to="/profile" text="Profile" icon={<FaUserAlt size={18} />} />
      <NavLink to="/more" text="More" icon={<FaEllipsisH size={18} />} />
      <Button
        name="Tweet"
        backgroundColor="rgb(29, 155, 240)"
        textColor="white"
      />
    </div>
  );
};

const style = {
  Container: {
    background: 'black',
    paddingTop: 20,
  },
};
