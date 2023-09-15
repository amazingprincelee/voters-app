"use client"
import { useState } from "react";
import users from "../data";
import VotingPage from "@/components/VotingPage";




function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authenticatedUser, setAuthenticatedUser] = useState(null);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleLogin() {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
      setAuthenticatedUser(user);
    } else {
      alert("Email or Password is not correct");
    }
  }

  // Function to handle sign-out
  function handleSignOut() {
    setIsAuthenticated(false);
    setAuthenticatedUser(null);
  }

  return (
    <div>
      {isAuthenticated ? (
        <VotingPage user={authenticatedUser} onSignOut={handleSignOut} />
      ) : (
        <div className="home">
          <h3 className="text-center text-white">VOTING APP</h3>
          <input
            type="email"
            value={email}
            placeholder="Enter Your Email"
            onChange={handleEmailChange}
          />
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <button onClick={handleLogin}>Sign In</button>
        </div>
      )}
    </div>
  );
}

export default Home;


