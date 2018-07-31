import React from 'react';


export default class Option extends React.Component {
    constructor(props){
        super(props);
        this.hendelEditOption = this.hendelEditOption.bind(this);
        this.hendelOnFocused = this.hendelOnFocused.bind(this);
        this.state = {
            checked: this.props.checked
        }
    }

    hendelEditOption = (e) => {
        const newVal = e.target.value;
        this.props.hendelEditOption(this.props.index,newVal);
    }

    hendelCheckChange = (e) => {
        this.setState({checked: !this.state.checked});
    }
    

    hendelOnFocused = (e) => {
        this.props.hendelOnFocused(this.props.index);
    }

    hendelOnUnFocused = (e) => {
        this.props.hendelOnFocused(this.props.index);       
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
                onBlur={ this.hendelOnUnFocused }
                disabled = {!this.state.checked? false:true}
                onFocus = {this.hendelOnFocused}
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
