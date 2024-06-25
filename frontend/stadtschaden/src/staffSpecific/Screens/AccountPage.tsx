import { useEffect, useState } from "react";
import useToken from "../getToken";

interface User {
  userName: string;
}

const AccountPage = () => {
  const [user, setUser] = useState<User>();
  const { token } = useToken();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(
          "http://localhost:5020/api/Account/currentUser",
          {
            method: "GET",
            headers: {
              accept: "text/plain",
              Authorization: `Bearer ${token}`,
            },
          },
        );
        if (!response.ok) {
          throw new Error(`Error fetching tickets: ${response.statusText}`);
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Error fetching tickets:", error);
        // Handle errors gracefully, e.g., display an error message to the user
      }
    };

    fetchUser();
    // eslint-disable-next-line
  }, []);

  return <div>User: {JSON.stringify(user)}</div>;
};

export default AccountPage;
