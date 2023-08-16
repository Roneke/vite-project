import axios from "axios";

export function PostShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    axios
      .patch(`http://localhost:3000/posts/${props.post.id}.json`, params)
      .then((response) => {
        console.log(response.data);
      });
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
    </div>
  );
}
