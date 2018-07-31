import React from 'react';

export default class AddOption extends React.Component {    
    render() {
        return (
            <div>
                <button className="button" onClick={this.props.hendleAddOption}>Add Option</button>
            </div>
        );
    }
}

