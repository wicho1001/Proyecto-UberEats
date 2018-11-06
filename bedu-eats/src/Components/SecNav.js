import React,{Component} from 'react';

class SecNav extends Component{

    render(){
        return(
        <section className="navegacion">
            <nav>
                <ul>
                    <li><a href=""><i className="fas fa-columns"></i><p>RESTAURANTES</p></a></li>
                    <li><a href=""><i className="fas fa-heart"></i><p>FAVORITOS</p></a></li>
                    <li><a href=""><i className="fas fa-cog"></i><p>CONFIGURACION</p></a></li>
                </ul>
            </nav>
        </section>
        )
    }

}

export default SecNav;



