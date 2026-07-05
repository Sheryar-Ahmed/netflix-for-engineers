import React, { useRef, useEffect } from "react";
import { useGithubUser } from "../hooks/useGithubUser";

const UserFinder = () => {
const [username, setUsername] = React.useState("");
  const { userData, loading, error, searchUser, inputRef } = useGithubUser(username);

  return (
    <div>
      <input
        ref={inputRef}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Search for a user"
      />
      <button onClick={searchUser}>Search</button>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && userData && (
        <div>
          <img src={userData.avatar_url} alt="github logo" />
          <h2>{userData.name}</h2>
          <p>Bio: {userData.bio}</p>
          <p>Followers: {userData.followers} </p>
        </div>
      )}
    </div>
  );
};

export default UserFinder;
