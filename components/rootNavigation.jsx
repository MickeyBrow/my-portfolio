import { React, useState } from "react";
import App from '../src/App.jsx'
import Entry from "./entry.jsx";

export default function RootNavigation() {
  const [user, setUser] = useState(false)

  return user ? (
    <>
      <App signOutFunc={() => setUser(false)}/>
    </>
  ) : (
    <>
      <Entry signInFunc={() => setUser(true)}/>
    </>
  );
}