// function PostNew() {
//   return <div id="posts-new"></div>;
// }
export function PostNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <form>
        <div>
          Title: <input type="text" />
        </div>
        <div>
          Description: <input type="text" />
        </div>
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
}
