
const getPostData = async () => {
const res = await fetch('https://jsonplaceholder.typicode.com/posts');
return res.json();
}

const SingleAPI = async () => {

const posts = await getPostData();
  return (
    <div>
    {posts.map((post:any)=>{
    return (
    <>
    <p>Post Number: {post.id} => {post.title}</p>
    </>
    )
    
    })}
    </div>
  )
}

export default SingleAPI