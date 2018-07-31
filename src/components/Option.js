import React from 'react';


export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.hendelEditOption = this.hendelEditOption.bind(this);
        this.state = {
            checked: this.props.checked
        }
    }

    hendelEditOption = (e) => {
        const newVal = e.target.value;
        this.props.hendelEditOption(this.props.optionText,newVal);
    }
    hendelCheckChange = (e) => {
        this.setState({checked: !this.state.checked});
    }
    

    render(){
        return (
            <div className="option">
            <input 
                type="checkbox"
                className="option__checkbox"
                onChange={this.hendelCheckChange}
                />
            <input 
                type="text"
                className={!this.state.checked? "option__text" : "option__text_lined" }
                value={this.props.optionText && `${this.props.optionText}`}
                onChange={this.hendelEditOption}
                />
            <button 
                className="button button--link"
                onClick={(e) => {
                    this.props.hendleRemoveOption(this.props.optionText);
                }}
            >
                x
            </button>
        </div>
            
        )
    }
}
