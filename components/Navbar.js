import Link from "next/link";
import { signIn, signOut } from "next-auth/client";

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
            <Link href="/api/auth/signin">
              <a
                className="nav__link"
                onClick={(e) => {
                  e.preventDefault();
                  signIn("github");
                }}
              >
                Sign In
              </a>
            </Link>
          </li>
          <li className="nav__item">
            <Link href="/api/auth/signout">
              <a
                className="nav__link"
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
              >
                Sign Out
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
