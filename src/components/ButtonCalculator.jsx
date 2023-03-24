import { evaluate } from 'mathjs';
import React from 'react'
import "../stylesheets/ButtonCalculator.css"
function ButtonCalculator({ character, screenHandler, screen }) {

    const buttonHandler = (character) => {
        const ALL_OPERATORS = ["+", "-", "÷", "%", "x"];
        if (ALL_OPERATORS.includes(character)) {
            screenHandler((oldState) => {
                const indexLastCharacterInScreen = oldState.length - 1;
                const lastCharacterInScreen = oldState[indexLastCharacterInScreen];
                const penultimateCharacterInScreen = oldState[indexLastCharacterInScreen - 1];
                if (character === "-" && lastCharacterInScreen !== "-") return `${oldState}${character}`;
                else if (ALL_OPERATORS.includes(lastCharacterInScreen)) {
                    if (ALL_OPERATORS.includes(penultimateCharacterInScreen)) return `${oldState.substring(0, indexLastCharacterInScreen - 1)}${character}`;
                    return `${oldState.substring(0, indexLastCharacterInScreen)}${character}`;
                }
                else if (oldState === "") return "";
                else return `${oldState}${character}`;
            });
        }
        if (typeof (character) === "number" || character === ".") screenHandler(oldState => `${oldState}${character}`);
        if (character === "Mc") screenHandler(oldState => "");
        if (character === "Sc") screenHandler(oldState => oldState.substring(0, oldState.length - 1))
        if (character === "=") screenHandler(oldState => resolve(screen))
    }

    const resolve = (allData) => {
        if (!allData) return "";
        const allDataJS = allData.replace("x", "*").replace("÷", "/");
        return `${evaluate(allDataJS)}`;
    }

    return (
        <div className={`button-container  ${character === "=" ? "button-equal" : ""}`}>
            <div className={`calculator-button`}
                onClick={() => {
                    buttonHandler(character);
                }}>{character}</div>
        </div>
    )
}

export default ButtonCalculator