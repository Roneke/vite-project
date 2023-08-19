import { Link } from "react-router-dom";

export function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ backgroundColor: "#696969	" }}
    >
      <a id="blog-name" className="navbar-brand mx-4" href="#">
        BlogX
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="#">
              HOME <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/SignUp">
              SignUp <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">
              About <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/posts">
              ALL POST
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/post/new">
              Create Post <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Login">
              Login <span className="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/Logout">
              Logout <span className="sr-only"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
