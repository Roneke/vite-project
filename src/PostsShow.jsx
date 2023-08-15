export function PostShow(props) {
  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <p> Description:{props.post.body}</p>
    </div>
  );
}
