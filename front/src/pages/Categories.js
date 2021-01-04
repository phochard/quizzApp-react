import React, { Component } from 'react';
import axios from 'axios';

class Categories extends Component {

    state = {
        categories: [],
    }

    componentDidMount = () => {
        axios.get('http://localhost:8000/categories')
            .then(res => {
                this.setState({
                    categories: res.data,
                })
            })
    }

    render() {
        let categories = this.state.categories.map(category => {
            return <div className="card">
                <h2 className="card-header-title" key={category.id}>{category.title}</h2>
                <img src={category.image} alt="logo" className="card-image"/> </div>
        });
        return ( <div className = "columns is-gapless is-multiline is-mobile" > 
            <h1 className = 'title is-1' > Catégories </h1>
            <h2 key={this.props.key}>{ this.props.category }</h2> 
            { categories } 
        </div>
        );
    }
}

export default Categories;