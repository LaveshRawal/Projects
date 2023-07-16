
const getPostData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

/* const getDogData = async () => {
  const res = await fetch("https://random.imagecdn.app/500/150");
  return res.json();
}; */

const MultiAPI = async () => {
  const [posts, users] = await Promise.all([
    getPostData(),
    getUsersData(),
  ]);

  return (
    <div>
      
      {posts.map((post:any) => (
        <p key={post.id}>Title: {post.title}</p>
      ))}
      <div>
        {users.map((user:any) => (
          <p key={user.id}>User Name: {user.username}</p>
        ))}
      </div>
    </div>
  );
};

export default MultiAPI;
