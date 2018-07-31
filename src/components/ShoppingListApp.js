import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Options from './Options.js';
import ItemDetails from './ItemDetails';
export default class ShoppingListApp extends React.Component {
    state = {
        options: [],
        selectedOption: '',
        prevSelect:'e12eqwfsdaf243f343g4'
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
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json);
    }

    hendleAddOption = (option) => { 
        this.setState((prevState) => ({ options: prevState.options.concat({
                title: '',
                quantity: '',
                price: '',
                description: ''
            }) 
         }));
    }

    hendelEditOption = (index,newVal) => {
        const newOptions = this.state.options.slice();
        newOptions[index].title = newVal;
        this.setState((prevState) => ({ options: newOptions }));
    }
    
    hendleRemoveOption = (optionToRemove) => {
        this.setState((prevState) => ({ selectedOption: '' }));
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => option.title !== optionToRemove)
        }));
    }

    hendelOnFocused = (index) => {
        this.setState((prevState) => ({ selectedOption: index }));
    }

    onChangeQuantity = (index,newVal) => {
        const newOptions = this.state.options.slice();
        newOptions[index].quantity = newVal;
        this.setState((prevState) => ({ options: newOptions }));
    }


    onChangePrice = (index,newVal) => {
        const newOptions = this.state.options.slice();
        newOptions[index].price = newVal;
        this.setState((prevState) => ({ options: newOptions }));
    }

    onChangeDescription = (index,newVal) => {
        const newOptions = this.state.options.slice();
        newOptions[index].description = newVal;
        this.setState((prevState) => ({ options: newOptions }));
    }

    onPick = () => {
        if(this.state.selectedOption === '') {
            return false;
        }
        else{
            if(this.state.selectedOption == this.state.prevSelect){
                return true;
            }
            else{
                this.setState(() => ({ prevSelect: this.state.selectedOption }));
                return false;
            }    
        }
    }

    render() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <div className="flexs">
                        <div className="widget">
                            <Options 
                                options = {this.state.options}
                                hendleRemoveOption = {this.hendleRemoveOption}
                                hendelEditOption = {this.hendelEditOption}
                                hendelOnFocused = {this.hendelOnFocused}
                            />
                            <AddOption hendleAddOption = {this.hendleAddOption}/>                
                        </div>
                        {this.onPick() &&
                            <ItemDetails
                                onChangeQuantity={this.onChangeQuantity}
                                onChangePrice={this.onChangePrice}
                                onChangeDescription={this.onChangeDescription}
                                title ={this.state.options[this.state.selectedOption].title}
                                quantity= {this.state.options[this.state.selectedOption].quantity}
                                price= {this.state.options[this.state.selectedOption].price}
                                description= {this.state.options[this.state.selectedOption].description}
                                index={this.state.selectedOption}
                                
                            />
                        }
                    </div>
                </div>
            </div>    
        );
    }
}
