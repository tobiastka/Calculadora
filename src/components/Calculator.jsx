import React, { useState } from 'react';
import ButtonCalculator from './ButtonCalculator';
import "../stylesheets/Calculator.css";


function Calculator() {

    const [Screen, setScreen] = useState("");

    return (
        <div className='calculator '>
            <div className="calculator-screen ">
                <span>{Screen}</span>
                <span className='parpadea'>{Screen === "" ? "Hi ^^ |" : "|"}</span>
            </div>
            <div className="calculator-body">
                <div className="row">
                    <ButtonCalculator screenHandler={setScreen} character={"Mc"} />
                    <ButtonCalculator screenHandler={setScreen} character={"Sc"} />
                    <ButtonCalculator screenHandler={setScreen} character={"%"} />
                    <ButtonCalculator screenHandler={setScreen} character={"÷"} />
                </div>
                <div className="row">
                    <ButtonCalculator screenHandler={setScreen} character={7} />
                    <ButtonCalculator screenHandler={setScreen} character={8} />
                    <ButtonCalculator screenHandler={setScreen} character={9} />
                    <ButtonCalculator screenHandler={setScreen} character={"x"} />
                </div>
                <div className="row">
                    <ButtonCalculator screenHandler={setScreen} character={4} />
                    <ButtonCalculator screenHandler={setScreen} character={5} />
                    <ButtonCalculator screenHandler={setScreen} character={6} />
                    <ButtonCalculator screenHandler={setScreen} character={"-"} />
                </div>
                <div className="row">
                    <ButtonCalculator screenHandler={setScreen} character={1} />
                    <ButtonCalculator screenHandler={setScreen} character={2} />
                    <ButtonCalculator screenHandler={setScreen} character={3} />
                    <ButtonCalculator screenHandler={setScreen} character={"+"} />
                </div>
                <div className="row">
                    <ButtonCalculator screenHandler={setScreen} character={0} />
                    <ButtonCalculator screenHandler={setScreen} character={"."} />
                    <ButtonCalculator Screen={Screen} screenHandler={setScreen} character={"="} />
                </div>
            </div>
        </div>
    )
}

export default Calculator