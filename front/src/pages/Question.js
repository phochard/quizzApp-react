import React, { Component } from 'react';
import axios from 'axios';


class Question extends Component {
    state = {
        questions: [],
        randomQuestion : "",
        answers:[],
        output: [],
        choice: undefined,
        bgColor: "has-background-light",
        displayButton: "button is-info has-text-light m-5"
    }

    componentDidMount = () => {
        let slug = this.props.match.params.slug;
        axios.get(`http://localhost:8000/quizzs/${slug}`)
        .then(res => {
            this.setState({
                questions: res.data.questions,
                answers: {
                    answer: res.data.questions.map(question => question.answers.map(ans => ans.answer)),
                    output: res.data.questions.map(question => question.answers.map(ans => ans.correct))
                }
            });
     console.log(this.state.questions);
        })
    }

    handleChangeBg = (id) => {
        console.log(this.state.answers)
        
/*         this.setState({
            choice: this.state.output
        })
        if(this.state.output === true){
            this.setState({
                bgColor: "has-background-success"
            })        } else {this.setState({
            bgColor: "has-background-danger"
        })} */
    }

    handleNextQuestion = () => {
        let questionContent = this.state.questions.map(question => {
            let title = question.title;
            let answers = question.answers.map(answer => {
                return <button onClick={this.handleChangeBg.bind(this, this.state.questions.id)} className={this.state.bgColor}>{answer.answer}</button>
            });
            return <div className="card-content">
                <h2 className="card-header">{title}</h2>
                <ul ><li className="card-footer-item m2">{answers}</li></ul>
                <button  onClick={this.handleNextQuestion}>Next</button>
            </div>
        });        
    let question = 0;
    for (question in questionContent) {
        this.setState({
            randomQuestion : questionContent[Math.floor(Math.random() * questionContent.length)],
            output: this.state.randomQuestion
            });
        console.log(this.state.randomQuestion)
        }
        this.hideButton();
    }
       hideButton = () => {
        this.setState({
            displayButton: "is-hidden"
        }) 
    }
    
    render() {
    return (  
        <div className="question">
            {this.state.randomQuestion}
            <button  onClick={this.handleNextQuestion} className={this.state.displayButton}>Let's Go !</button>
        </div>
    );
    }
}
export default Question;