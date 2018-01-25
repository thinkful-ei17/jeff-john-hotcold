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
    };

    Restart(){
        this.setState({
                feedback: null,
                recentGuess:null,
                oldGuesses: [],
                currentGuess: null,
                correct: Math.round(Math.random() * 100)
            })
    }

    onUserInput(value) {
        const results = [...this.state.oldGuesses,this.state.currentGuess];
        if (this.state.recentGuess !== this.state.currentGuess){
        this.setState({
            oldGuesses: results,
            recentGuess: this.state.currentGuess
        });
    }
    }

    render(){
        return (
            <div>
                <Header Restart={()=> this.Restart()} />
                <GuessSection 
                onUserInput={()=> this.onUserInput()}
                getUserInput={value => this.setState({currentGuess: value})} 
                getButtonInput={value => this.onUserInput(value) }
                
                feedback="Make your guess!" />
                <GuessCount count={this.state.oldGuesses.length} />
                <GuessList guesses={[this.state.oldGuesses]} />
            </div>
        );

    }
}
