import { useState, useEffect, useContext } from "react";
import { AppProvider } from "./context/AppContext";
import { UserContext } from "./context/UserContext";
import Home from "./Home";
import Login from "./Login";
import axios from "axios";

function App() {
  const [user, setUser] = useContext(UserContext);
  const [finishedLoading, setFinishedLoading] = useState(false);

  async function getUser() {
    try {
      const response = await axios.get("/user");

      if (response.data.data.length !== 0) {
        setUser(response.data.data[0]);
        setFinishedLoading(true);
      } else {
        setFinishedLoading(true);
      }
    } catch (e) {
      setFinishedLoading(true);
    }
  }

  // Calls getUser to check auth status
  useEffect(() => {
    getUser();
    // eslint-disable-next-line
  }, []);

  if (finishedLoading === true && Object.keys(user).length !== 0) {
    return (
      <>
        <AppProvider>
          <Home />
        </AppProvider>
      </>
    );
  } else if (finishedLoading === true && Object.keys(user).length === 0) {
    return (
      <>
        <Login />
      </>
    );
  } else {
    return <div>LOADING</div>;
  }
}

export default App;
