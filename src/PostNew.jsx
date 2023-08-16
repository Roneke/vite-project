export function PostNew(props) {
  // const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" />
        </div>
        <div>
          Description: <input type="text" name="body" />
        </div>
        <div>
          image: <input type="text" name="image" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
