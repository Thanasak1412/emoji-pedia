import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(({ id, emoji, name, meaning }) => {
          return <Entry key={id} emoji={emoji} name={name} meaning={meaning} />;
        })}
      </dl>
    </div>
  );
}

export default App;
