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
            feedback: 'Make Your Guess',
            feedbackOptions: ['Hot','Warm','Kinda Hot','Cold'],
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
        const results = [...this.state.oldGuesses,' ',this.state.currentGuess];
        if (this.state.recentGuess !== this.state.currentGuess){
            this.setState({
                oldGuesses: results,
                recentGuess: this.state.currentGuess
        });
        let difference = Math.abs(this.state.currentGuess - this.state.correct);
        console.log(this.state.correct);
        if(difference <= 0){
            this.setState({
                feedback: 'YOU WIN!'
            })     
        }else if(difference <=10){
            this.setState({
                feedback: this.state.feedbackOptions[0]
            })     
        }else if(difference <= 20){
            this.setState({
                feedback: this.state.feedbackOptions[1]
            })     
        }else if(difference <= 30){
            this.setState({
                feedback: this.state.feedbackOptions[2]
            })     
        }else if(difference <= 100){
            this.setState({
                feedback: this.state.feedbackOptions[3]
            }) 
        }
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
                
                feedback={this.state.feedback} />
                <GuessCount count={this.state.oldGuesses.length} />
                <GuessList guesses={[this.state.oldGuesses]} />
            </div>
        );
    }
}
