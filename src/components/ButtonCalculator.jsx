import React from 'react'
import "../stylesheets/ButtonCalculator.css"
function ButtonCalculator({ character, screenHandler, Screen }) {

    const buttonHandler = (character) => {
        const ALL_OPERATORS = ["+", "-", "÷", "%", "x"];
        if (ALL_OPERATORS.includes(character)) {
            screenHandler((oldState) => {
                if (ALL_OPERATORS.includes(oldState[oldState.length - 1])) {
                    return `${oldState.substring(0, oldState.length - 1)}${character}`
                }
                else if (oldState === "") return "";
                else return `${oldState}${character}`
            });
        }
        if (typeof (character) === "number" || character === ".") screenHandler(oldState => `${oldState}${character}`);
        if (character === "Mc") screenHandler(oldState => "");
        if (character === "Sc") screenHandler(oldState => oldState.substring(0, oldState.length - 1))
        if (character === "=") screenHandler(oldState => resolve(Screen))
    }

    const resolve = (allData) => {
        if (!allData) return "";
        const allDataJS = allData.replace("x", "*").replace("÷", "/");
        const terms = allDataJS.split("+").map((term) => {
            return term.split("-")
        })
        console.log(terms, "XD");
        return `${eval(allDataJS)}`;
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