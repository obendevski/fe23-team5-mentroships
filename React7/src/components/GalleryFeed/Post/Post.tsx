import classes from './Post.module.css';
import { formatDistance, parseISO } from 'date-fns';
import { PostType } from '../../../assets/posts';

export const Post = ({ userName, imgUrl, description, title, dateCreated }: PostType) => {
  let dateCreatedFormat = '';

  if (dateCreated) {
    dateCreatedFormat = formatDistance(new Date(), parseISO(dateCreated));
  }

  return (
    <div className={classes.Card}>
      <span className={classes.CardTitle}>{title}</span>
      <p className={classes.UserText}>by {userName}</p>
      <img src={imgUrl} alt="userPicture"></img>
      <p>{description}</p>
      <p className={classes.DateText}>posted {dateCreatedFormat} ago</p>
    </div>
  );
};
