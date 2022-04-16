import React from 'react';
import { product_data } from '../product_data';


class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product_data: product_data,
            current_page:"t_shirts"
        }
    }
    render(){

        return(
            <div>

            </div>
        )
    }
}

export default Test;