import { useState } from "react";
import "./Flower.css";

function Flower() {
    const [flowerValue, setFlowerValue] = useState(-1);
    const phrases = ["Mīl ❤️", "Nemīl 💔"];

    const finalPhrase = phrases[Math.floor(Math.random() * 2)];

    return (
        <>
            <article className="flower">
                <h2>Ziedlapiņu ziediņš 🌸</h2>
                {flowerValue === 0 && <h2>{finalPhrase}</h2>}
                <div className="emoji">
                    {Array.from({ length: flowerValue }).map((_, index) => (
                        <h1 key={index} style={{ margin: 0 }}>🍃</h1>
                    ))}
                </div>
                {flowerValue > 0 && <button onClick={() => setFlowerValue(flowerValue - 1)} disabled={flowerValue <= 0}>
                    Noņemt ziedu 🌱
                </button>}
                <br></br>

                {flowerValue <= 0 && <button onClick={() => removeFlower(setFlowerValue)}>
                    Meklējam puķi 🌺
                </button>}
            </article>
        </>
    );
}

function removeFlower(setFlowerValue) {
    const value = Math.floor(Math.random() * 7) + 5;
    setFlowerValue(value);
}

export default Flower;
