import { useState, useRef } from "react";


export default function Player() {

  const playerName = useRef()

  const [enteredPlayerName, setEnteredPlayerName] = useState(null);


  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = '';
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2> {/*skraceno pisanje ovoga: {enteredPlayerName ? enteredPlayerName : 'unknown entity'}*/}
      <p>
        <input
          ref={playerName}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
