import React, {Component} from 'react'
import "../index.css"
    
    
class Logo extends Component{

    render(){
        return(
            <div className="logo">
                <img alt="algo" src="https://picsum.photos/100/50" />
                <img alt="algo" src="https://picsum.photos/40/40" className="imagen2"/>
            </div>
            )
    }
}

export default Logo;