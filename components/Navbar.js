import Link from "next/link";

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <Link className="logo" href="/">
          <a>Next Auth.</a>
        </Link>
        <ul className="nav__links">
          <li className="nav__item">
            <Link href="/dashboard">
              <a className="nav__link">Dashboard</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/blog">
              <a className="nav__link">Blog</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/sign-in">
              <a className="nav__link">Sign In</a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/sign-out">
              <a className="nav__link">Sign Out</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
