export function PostShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    props.closeModal();
    event.target.reset();
  };
  const handleClick = () => {
    props.onDestroyPost(props.post.id);
  };
  return (
    <div id="posts-show">
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title:{" "}
          <input type="text" name="title" defaultValue={props.post.title} />
        </div>
        <div>
          Description:{" "}
          <input type="text" name="body" defaultValue={props.post.body} />
        </div>
        <div>
          image:{" "}
          <input type="text" name="image" defaultValue={props.post.image} />
        </div>
        <button type="submit">Edit</button>
      </form>
      <button onClick={handleClick}>Delete Product</button>
    </div>
  );
}
