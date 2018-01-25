import React from 'react';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';


export default  class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            recentGuess: null,
            currentGuess: null,
            oldGuesses: [],
            feedback: null,
            feedbackOptions: ['Hot','Cold','Kinda Hot','Warm'],
            correct: Math.round(Math.random() * 100)
        };
    }

    render(){
        return (
            <div>
                <Header />
                <GuessSection getInputText={value => {
                    // this.onTextInput(value) 
                    console.log(value)
                    }} feedback="Make your guess!" />
                <GuessCount count={this.state.oldGuesses.length + 1} />
                <GuessList guesses={[10, 15, 25]} />
            </div>
        );

    }
}

