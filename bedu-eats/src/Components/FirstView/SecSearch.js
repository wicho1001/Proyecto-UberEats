import React,{Component} from 'react';

class SecSearch extends Component{

    render(){
        return(
        <section className="busqueda container">
            <div className="filtro">
                <span><i className="fas fa-filter"></i></span>Filtrar búsqueda
            </div>
            <div className="formulario">
                <form action="">
                    <input type="text" placeholder=""/><i className="fas fa-search"></i>
                </form>
            </div>
        </section>
        )
    }

}

export default SecSearch;