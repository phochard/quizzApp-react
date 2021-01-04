import React, { Component } from 'react';

class Footer extends Component {
    state = {}
    render() {
        return ( < div className = "is-fixed-bottom has-background-primary" >
            <p className="has-text-centered"> Coucou, c'est moi le footer !!! </p> </div >
        );
    }
}
export default Footer;