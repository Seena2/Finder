import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Lead" },
    { name: "description", content: "locates whatever you are looking for" },
  ];
}

export default function Home() {
  return (
    <>
      <div className="container hero">
        <div className="">
          <h1>Explore items</h1>
          <p>
            Are you looking for something specific?, then we can help you find
            it.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="btn-group">
            <Link to="/category" className="btn-primary">
              Find now
            </Link>

            <Link to="/about" className="btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="">
          <img src="./vase.jpg" alt="" />
        </div>
      </div>
    </>
  );
}
