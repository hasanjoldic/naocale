import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <nav style={{ marginTop: "2rem" }}>
        <Link to="/">Go to Home</Link>
      </nav>
    </div>
  );
}
