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
          Title: <input type="text" name="title" className="form-control" />
        </div>
        <div>
          Description:{" "}
          <input type="text" name="body" className="form-control" />
        </div>
        <div>
          image: <input type="text" name="image" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post{" "}
        </button>
      </form>
    </div>
  );
}
