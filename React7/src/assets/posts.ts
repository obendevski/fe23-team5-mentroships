export interface PostType {
  userName: string;
  title: string;
  dateCreated: string;
  description: string;
  imgUrl: string;
}

export const posts: PostType[] = [
  {
    userName: 'Random Person 1',
    title: 'Some random generic title from a user',
    dateCreated: '2021-02-01T22:45:00',
    description: 'Some random description from a user.',
    imgUrl:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  {
    userName: 'Random Person 2',
    dateCreated: '2021-02-01T21:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl: 'https://knowledge.ckgsb.edu.cn/wp-content/uploads/2017/10/simple-minimalism.jpg'
  },
  {
    userName: 'Random Person 3',
    dateCreated: '2021-02-01T21:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  {
    userName: 'Random Person 4',
    dateCreated: '2021-02-01T19:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl: 'https://pbs.twimg.com/profile_images/1342768807891378178/8le-DzgC.jpg'
  },
  {
    userName: 'Random Person 5',
    dateCreated: '2021-02-01T23:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  {
    userName: 'Random Person 6',
    dateCreated: '2021-02-02T10:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  }
];
