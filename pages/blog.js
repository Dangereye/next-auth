import { getSession, useSession } from "next-auth/client";

function Blog({ data }) {
  const [session] = useSession();

  if (session) {
    console.log(`Logged in as ${session.user.name}`);
  }

  return (
    <main className="main">
      <div className="container">
        <h1>Blogs Page.</h1>
        <p>{data}</p>
      </div>
    </main>
  );
}

export default Blog;

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
      data: session
        ? "List of 100 personalized blog posts"
        : "List of free blog posts",
    },
  };
}
