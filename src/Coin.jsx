import { useState } from "react";

const coinImages = [coin1, coin2];
import coin1 from "./assets/coin/coin1.png";
import coin2 from "./assets/coin/coin2.png";
import "./Coin.css";

function Coin() {
    const [coinValue, setCoinValue] = useState(1);
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");

    return (
        <>
            <article className="coin">
                <h2>🎲 Cipars vai ģērbonis 🎲</h2>
                <h2>{text1}</h2>
                <button onClick={() => flipCoin(setCoinValue, setText1, setText2)}>Mest</button><br></br>
                <img src={coinImages[coinValue - 1]} alt={"Monēta " + coinValue}/>
                <h2>{text2}</h2>
            </article>
        </>
    );
}

function flipCoin(setCoinValue, setText1, setText2) {
    setText1("  Monēta ir uzmesta un..");
    setTimeout(function(){
        const value = Math.floor(Math.random() * 2) + 1;
        setCoinValue(value);
        setText2("✨ E tu, tas i " + (value === 2 ? "ģērbonis ✨" : "cipars ✨"));
        setTimeout(function() {
                setText1("");
                setText2("");
            }, 2500)
    }, 1000)
}

export default Coin;
