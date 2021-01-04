import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

class Quizz extends Component {

    state = {
        quizzs: [],
        questions: [],
        categories: [],
        id: ""
    }

    componentDidMount = () => {
        let slug = this.props.match.params.slug
            axios.get(`http://localhost:8000/categories/${slug}`)
            .then(res => {
                this.setState({
                    id: res.data._id
                })
            })
            ;(axios.get(`http://localhost:8000/quizzs?category=${this.state.id}`)
                .then(res => {
                    //console.log(this.state.id);
                    this.setState({
                        quizzs: res.data.map(data => data.category).find(id => id === this.state.id),
                        questions: res.data.map(question => question).filter(question => question.category === this.state.id)
                });console.log(this.state.questions)
        }))
    }


    render() { 
        let listQuestions = this.state.questions.map(question => {
            return <div >
                <Link to = { '/questions/' + question.slug } >
                <div className = "card" key={question.id}>
                <h2 className = "card-head-title"> { question.title } </h2> 
                <p > { question.answers } </p>                     
            </div > 
            </Link> 
            </div >
        }); 
        return ( <div className = "quizz" >
            <h2 className = 'title is-2 has-text-centered' > Liste des quizzs </h2> 
    <div className = "columns is-gapless is-multiline is-mobile" >{listQuestions} </div> </div >
        );
    }
}

export default Quizz;