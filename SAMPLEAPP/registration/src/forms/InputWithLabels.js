import React, {Component} from 'react';

class InputWithLabels extends Component{

    constructor(props){
        super(props);
        console.log(props)
    }

    render(){
        const {min,max,name,value,onChange,label} = this.props;
        return(
            <div>
                <label>{label}<input type="text" name={name} value={value} minLength={min} maxLength={max} onChange={onChange} onBlur={this.handleOnBlur}/></label>
            </div>
        )
    }
}
export default InputWithLabels