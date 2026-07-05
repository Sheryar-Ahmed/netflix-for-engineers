import React, { useEffect, useRef } from "react";

export function useGithubUser(userQuery) {
  const [loading, setLoading] = React.useState(false);
  const [userData, setUserData] = React.useState(null);
  const [error, setError] = React.useState(null);
  // 3 states loading, failed, worked.

  const searchUser = async () => {
    setLoading(true);
    setError(null);
    setUserData(null);
    // axios (auto parsed + error handling) vs fetch (manual parsing + error handling)
    try {
      const res = await fetch(`https://api.github.com/users/${userQuery}`);
      if (!res.ok) throw new Error("User not found");

      const data = await res.json();
      setUserData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current?.focus(); // Focus the input field when the component mounts
    }
  }, []);

  return { userData, loading, error, searchUser, inputRef };
}
