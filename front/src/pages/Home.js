import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class Home extends Component {

    state = {
        categories: [],
        quizzs:[]
    }

    componentDidMount = () => {
        axios.get('http://localhost:8000/categories')
        .then(res => {
            this.setState({
                categories: res.data,
            });
        }); 
        axios.get('http://localhost:8000/quizzs')
        .then(result => {
            this.setState({
                quizzs: result.data,
            })            
        });
    }

    render() {       
        
        let categoriesList = this.state.categories.map(category =>
            {
            return <div>
                    <Link to={'/categories/'+category.slug} category={category}> 
                        <div className="card" >
                        <h2 className="card-header-title" key={category.id}>{category.title}</h2>
                        <img src={category.image} alt="logo" className="card-image"/>
                        </div>
                    </Link>
                    </div>
            });

            let lastQuizzs = this.state.quizzs.map(quizz => {
            return <div >
                <Link to = { '/quizzs/' + quizz.slug} > 
                < p className = "card" key = { quizz.id }> {quizz.title } </p>
                </Link >
                </div>}).splice(0, 3);

        return ( 
        <div className = "container" >

            <h1 className = "title is-1 has-text-centered" > Bienvenue! </h1> 
            
            <div className = "box justify-content-center has-background-primary" >
                <h2 className = 'title is-2 has-text-centered' > Liste des catégories </h2> 
                <div className = "columns is-gapless is-multiline is-mobile"> {categoriesList}
                </div> 
            </div> 

            <div className = "box justify-content-center has-background-primary" >
                <h2 className = 'title is-2 has-text-centered' > Derniers quizzs </h2> 
                <div className = "columns is-gapless is-multiline is-mobile"> { lastQuizzs } 
                </div> 
            </div>

        </div>);
        }
    }

    export default Home;