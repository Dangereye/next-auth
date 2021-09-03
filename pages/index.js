import { useSession } from "next-auth/client";

function Home() {
  const [session, loading] = useSession();

  return (
    <main className="main">
      <div className="container">
        <h1>Home Page</h1>
        <p>Welcome to Next Auth {session ? session.user.name : "Guest"}</p>
      </div>
    </main>
  );
}

export default Home;
