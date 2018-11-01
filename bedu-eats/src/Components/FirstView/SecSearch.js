import React,{Component} from 'react';
import axios from 'axios';


class SecSearch extends Component{
    
    state = {
        data:[]
    }

    forEachData = () => {
        const data = this.state.data.map(element => element.restaurant)
        console.log(data);
        
    }

    
    
    handleChange = evt => {
        this.forEachData()    
       }


    componentDidMount(){
        axios.get('http://localhost:3000/posts/')
        .then(res => {this.setState({data:res.data});}
        )
    }

    render(){

        return(
        <section className="busqueda container">
            <div className="filtro">
                <span><i className="fas fa-filter"></i></span>Filtrar búsqueda
            </div>
            <div className="formulario">
                <form action="">
                    <input onKeyUp={this.handleChange} type="text" placeholder=""/><i className="fas fa-search"></i>
                </form>
            </div>
        </section>
        )
    }

}

export default SecSearch;