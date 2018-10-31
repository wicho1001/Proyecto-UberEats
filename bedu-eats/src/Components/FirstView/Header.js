import React,{Component} from 'react';

class Header extends Component{

    render(){
        return(
            <header>
                <div className="container-header container">
            
                    <div className="logo">
                        <h3>Bedu<span>Eats</span></h3>
                    </div>
                    <div className="avatar">
                        <img src="img/avatar.jpeg" alt=""/>                   
                    </div> 
                </div>    
            </header>
        )
    }

}

export default Header;