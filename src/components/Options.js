import React from 'react';
import Option from './Option.js';


const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3>ADD YOUR ITEMS HERE</h3>
        </div>
        {props.options.length === 0 && <p className="widget-message">Please add option to get started!</p>}
        {
            props.options.map((option,index) => (
                <Option 
                    optionText={option.title}
                    index = {index}
                    hendleRemoveOption = {props.hendleRemoveOption}
                    hendelEditOption = {props.hendelEditOption}
                    hendelOnFocused = {props.hendelOnFocused}
                />
            ))
        }
    </div>
);
export default Options;