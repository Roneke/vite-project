export function PostIndex(props) {
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p> Description:{post.body}</p>
        </div>
      ))}
    </div>
  );
}
