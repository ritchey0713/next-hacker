import Link from "next/link";

const Layout = () => (
  <div>
    <div className="container">
      <nav>
        <Link href="/">
          <a>
            <span>Hacker Next</span>
          </a>
        </Link>
      </nav>
    </div>
  </div>
);

export default Layout;
