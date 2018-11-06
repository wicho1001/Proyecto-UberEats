import React,{Component} from 'react';
import axios from 'axios';


class SecSearch extends Component{
    
    state = {
        data:[]
    }

    forEachData = evt => {
        const data = this.state.data.map(element => element.restaurant)
        
        let data2 = (data) => data.filter((v,i) => data.indexOf(v) === i)
        
        const data3 = data2(data).forEach(function (element){
            if(evt.target.value = element){
                console.log(element);
            }
        });
    }

    // handleChange = evt => {
    
    //     this.forEachData()    
    //     // if(evt.target.value = ){
    //     //     console.log(evt.target.value)
    //     // }
    //    }

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
                    <input  onKeyUp={this.forEachData} 
                            type="search" 
                            placeholder=""/>
                            <i className="fas fa-search"></i>
                </form>
            </div>
        </section>
        )
    }

}

export default SecSearch;