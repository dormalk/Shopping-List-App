import React from 'react';


export default class ItemDetails extends React.Component{
    constructor(props){
        super(props);
        this.onChangeQuantity=this.onChangeQuantity.bind(this);
        this.onChangePrice= this.onChangePrice.bind(this);
        this.onChangeDescription= this.onChangeDescription.bind(this);

        this.state = {
            title: this.props.title || '',
            quantity: this.props.quantity || '',
            price: this.props.price || '',
            description: this.props.description || ''
        }
    }

    onChangeQuantity = (e) => {
        const _quantity = e.target.value;
        if (!_quantity || _quantity.match(/^\d{1,}?$/)) {
            this.props.onChangeQuantity(this.props.index,_quantity);
            this.setState(() => ({quantity:_quantity}));
            }

    }


    onChangePrice = (e) => {
        const _price = e.target.value;
        if (!_price || _price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.props.onChangePrice(this.props.index,_price);
            this.setState(() => ({price:_price}));
        }

    }

    onChangeDescription = (e) => {
        const _description = e.target.value;
        this.props.onChangeDescription(this.props.index,_description);
        this.setState(() => ({description:_description}));

    }

    render(){
        return (            
            <div>
                <div className="widget_item_details">
                    <div className="widget-header">
                        <h3>{this.state.title.toUpperCase()} DETAILS</h3>
                    </div>
                    <div className="widget_item_details_body">
                        <label> Quantity
                            <input type="text"
                                    value={this.state.quantity}
                                    onChange={this.onChangeQuantity}
                            />
                        </label>
                        <label> price
                            <input type="text"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                            />
                        </label>
                        <label> description
                            <textarea type="text"
                                        value={this.state.description}
                                        onChange={this.onChangeDescription}/>
                        </label>
                    </div>
                </div>            
            </div>
        )
    }
}