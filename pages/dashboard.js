import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import { useRouter } from "next/router";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const securePage = async () => {
      const session = await getSession();
      if (!session) {
        router.push("/");
      } else {
        setLoading(false);
      }
    };
    securePage();
  }, []);
  if (loading) {
    return (
      <main className="main">
        <div className="container">
          <h1>Dashboard.</h1>
          <p>Loading...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="container">
        <h1>Dashboard</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis
          sint dolores esse saepe commodi. Beatae, consectetur? Sit illum
          perferendis dolorem aut atque vel enim ad nam quo placeat ut quae
          impedit adipisci laboriosam ullam ab non, labore odio voluptatum
          deleniti exercitationem? Quam, cum incidunt consequatur labore harum
          ut autem nostrum.
        </p>
      </div>
    </main>
  );
}

export default Dashboard;
