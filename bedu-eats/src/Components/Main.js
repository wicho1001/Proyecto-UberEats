import React, {Component} from 'react'


class Main extends Component{

    
    
    render(){
        return(
            <div className="container">
                <div className="imagenProgreso">
                    <h3>Burrito</h3>
                    <br/>
                    <img alt="algo" src="https://picsum.photos/100"/>
                </div > 
                <form className="form-check">
                    <div>
                        <h1>Preparalo </h1>
                        <h6>¿Lo quieres en Combo?</h6>
                        <div>
                            <input className="form-check-input" type="checkbox"/>
                            <label>Refresco</label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox"/>
                            <label>Papas</label>
                        </div>
                        <h6>Ingredientes adicionales</h6>
                        <div>
                            <input className="form-check-input" type="checkbox"/>
                            <label>cebolla</label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox"/>
                            <label>cilantro</label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox"/>
                            <label>chile</label>
                        </div>
                        <h6>Cantidad</h6>
                        <input className="form-number-input" type="number" min="1" max="5"/>
                    </div> 
                    <div >
                        <button className="btn btn-primary btn-lg btn-block btn btn-outline-success">PAGA</button>
                    </div>
                </form>
            </div> 
        )
    }
    
}

export default Main 