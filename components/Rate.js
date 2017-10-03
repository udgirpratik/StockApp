import React from 'react';
import $ from 'jquery';


export default class Rate extends React.Component {

    constructor(props) {
        super(props);
        this.state = { valueString : "NOT KNOWN" };
    }

    componentDidMount(){
        console.log('didMount');
        $.ajax({
            url : 'https://finance.google.com/finance?q=NASDAQ:CHEK',
            dataType : 'json',
            cache : false,
            success : function(data){
                console.log(data);
            }.bind(this),
            error : function (xhr, status, error){
                console.error(this.props.url, status, error.toString())
            }.bind(this)


        });
    }

    render () {
        
        return <div>
                    <label>{this.state.valueString}  </label>

                </div>;

    }
};