import { useState } from "react"

export default function Player({ initialName, sybol: symbol, isActive, onChangeName }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const editClickHandler = () => {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    const changeHandler = (event) => {
        setPlayerName(event.target.value);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    //let buttonCaption = 'Edit';
    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={changeHandler} />;
        //buttonCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editClickHandler}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}