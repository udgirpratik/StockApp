import React from 'react';
//var React = require('react');

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchString : "" };
    }

    handleChange(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.
        console.log(e.target.value);
        this.setState({searchString:e.target.value});
    }

    render () {
        console.log(this.props.items);
        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)}  placeholder="Type here" />

                    <ul> 

                        { libraries.map(function(l){
                            return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                        }) }

                    </ul>

                </div>;

    }
};

                                                                                                                                                             
