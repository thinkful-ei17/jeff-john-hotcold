import React from 'react';

import './guess-form.css';

export default function GuessForm(props) {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <input onChange={e => props.getInputText(e.currentTarget.value)} type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" min='1' max='100' autoComplete="off"
                placeholder="Enter your Guess"  required />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

