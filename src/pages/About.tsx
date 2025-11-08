import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>This is an example About page with React Router.</p>
      <nav style={{ marginTop: "2rem" }}>
        <Link to="/">Back to Home</Link>
      </nav>
    </div>
  );
}
