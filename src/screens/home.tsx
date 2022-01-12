import { useEffect, useState } from "react";
import { getUser } from "../services/user-api";

function Home() {
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  //needs to recheck for user whenever the user is updated

  useEffect(() => {
    initialLoginScreenCheck();
  }, []);

  function initialLoginScreenCheck() {
    getUser({ user: "information" });
    console.log(
      "From the home screen... Check if user is logged in, if so redirect to focus screen, if not stay here"
    );
  }

  function handleUserInput(input: string) {
    setUserInput(input);
  }

  function handlePasswordInput(input: string) {
    setPasswordInput(input);
  }

  function handleSubmit(e: any) {
    e.preventDefault();
    console.log(`${userInput} logs in with ${passwordInput}`);
  }

  return (
    <div>
      <div className="App">login to begin</div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>
          User:
          <input
            type="text"
            name="name"
            value={userInput}
            onChange={(e) => handleUserInput(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="name"
            value={passwordInput}
            onChange={(e) => handlePasswordInput(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Home;
