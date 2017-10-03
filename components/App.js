import React from 'react';
import Rate from '../components/Rate.js'

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { searchString : "" };
    }

    handleChange(e){

        // If you comment out this line, the text box will not change its value.
        // This is because in React, an input cannot change independently of the value
        // that was assigned to it. In our case this is this.state.searchString.
        this.setState({searchString:e.target.value});
    }

    render () {
        var libraries = this.props.items,
            searchString = this.state.searchString.trim().toLowerCase();


        if(searchString.length > 0){

            // We are searching. Filter the results.

            libraries = libraries.filter(function(l){
                return l.name.toLowerCase().match( searchString );
            });

        }

        return <div>
                    <Rate/>
                    <input type="text" value={this.state.searchString} onChange={this.handleChange.bind(this)}  placeholder="Type here" />

                    <ul> 

                        { libraries.map(function(l){
                            return <li>{l.name} <a href={l.url}>{l.url}</a></li>
                        }) }

                    </ul>

                </div>;

    }
};

                                                                                                                                                             
