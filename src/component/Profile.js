import { useContext, useState } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "Umudvar", bio: "he is learning, I am he" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "Login"}
        </button>
      )}

      <br />
      <code>{JSON.stringify(user)}</code>
      <br />

      {user && (
        <button onClick={handleLogout}>
          {loading ? "loading..." : "Logout"}
        </button>
      )}
    </div>
  );
}

export default Profile;
