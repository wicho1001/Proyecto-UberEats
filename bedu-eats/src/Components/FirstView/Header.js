import React,{Component} from 'react';
import avatar from "./img/avatar.jpeg";


class Header extends Component{

    render(){
        return(
            <header>
                <div className="container-header container">
            
                    <div className="logo">
                        <h3>Bedu<span>Eats</span></h3>
                    </div>
                    <div className="avatar">
                        <img src={avatar} alt="avatar"/>                   
                    </div> 
                </div>    
            </header>
        )
    }

}

export default Header;


