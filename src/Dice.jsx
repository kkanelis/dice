import { useState } from "react";

const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
import dice1 from "./assets/dice/dice-1.svg";
import dice2 from "./assets/dice/dice-2.svg";
import dice3 from "./assets/dice/dice-3.svg";
import dice4 from "./assets/dice/dice-4.svg";
import dice5 from "./assets/dice/dice-5.svg";
import dice6 from "./assets/dice/dice-6.svg";
import "./Dice.css";

function Dice() {
    const [diceValue, setDiceValue] = useState(1);
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    return (
        <>
            <article className="dice">
                <h2>Metamais kauliņš</h2>
                <h2>{text1}</h2>
                <button onClick={() => rollDice(setDiceValue, setText1, setText2)}>Mest</button><br></br>
                <img src={diceImages[diceValue - 1]} alt={"Metamais kauliņš " + diceValue}/>
                <h2>{text2}</h2>
            </article>
        </>
    );
}

function rollDice(setDiceValue, setText1, setText2) {
    setText1("Kaulins izmests un tas ir..");
    setTimeout(function(){
        const value = Math.floor(Math.random() * 6) + 1;
        setDiceValue(value);
        setText2("uhhh tas ir " + value);
        setTimeout(function() {
                setText1("");
                setText2("");
            }, 2000)
    }, 1000)
}

export default Dice;
