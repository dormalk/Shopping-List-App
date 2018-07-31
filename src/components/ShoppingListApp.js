import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Options from './Options.js';

export default class ShoppingListApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }

    componentDidMount = () => {
        try{
            const data = localStorage.getItem('options');
            const options = JSON.parse(data);
    
            if(options){
                this.setState(() => ({options}));
            }    
        }
        catch(e){

        }
    }

    componentDidUpdate = (prevProps,prevState) => {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }

    hendleAddOption = (option) => { 
        this.setState((prevState) => ({ options: prevState.options.concat('') }));
    }

    hendelEditOption = (oldVal,newVal) => {
        this.setState((prevState) => ({
            options: prevState.options.map((option) => {
                if(option === oldVal){
                    return newVal;
                }
            })
        }));
    }
    
    hendleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="widget">
                        <Options 
                            options = {this.state.options}
                            hendleRemoveOption = {this.hendleRemoveOption}
                            hendelEditOption = {this.hendelEditOption}
                        />
                        <AddOption hendleAddOption = {this.hendleAddOption}/>                
                    </div>
                </div>
            </div>    
        );
    }
}
