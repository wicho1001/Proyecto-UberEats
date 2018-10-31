import React, {Component} from 'react'


class Main extends Component{
    
    
    
    render(){
        return(
            <div>
                <div className="imagenProgreso">
                    <h3>Burrito</h3>
                    <br/>
                    <img alt="algo" src="https://picsum.photos/100"/>
                </div> 
                <form>
                    <div>
                        <h1>Preparalo </h1>
                        <h6>¿Lo quieres en Combo?</h6>
                        <input type="checkbox"/><label>Refresco</label>
                        <br/>
                        <input type="checkbox"/><label>Papas</label>
                        <h6>Ingredientes adicionales</h6>
                        <input type="checkbox"/><label>cebolla</label>
                        <br/>
                        <input type="checkbox"/><label>cilantro</label>
                        <br/>
                        <input type="checkbox"/><label>chile</label>
                        <h6>Cantidad</h6>
                        <input type="number" min="1" max="5"/>
                    </div> 
                    <div >
                        <button className="botonPaga">PAGA</button>
                    </div>
                </form>
            </div> 
        )
    }
    
}

export default Main 