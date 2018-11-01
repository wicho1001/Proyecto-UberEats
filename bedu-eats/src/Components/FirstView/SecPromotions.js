import React,{Component} from 'react';
import imagen1 from "./img/1.jpg";
import imagen2 from "./img/2.jpg";
import imagen3 from "./img/3.jpg";
import imagen4 from "./img/4.jpg";
import imagen5 from "./img/5.jpg";
import imagen6 from "./img/6.jpg";
import imagen7 from "./img/7.jpg";
import imagen8 from "./img/8.jpg";
import axios from 'axios';


class SecPromotions extends Component{


    state = {
        
    }
    
    handleChange = evt => {
        axios.get('http://localhost:3000/posts/')
        .then(res => {console.log(res);}
        )
    }


    componentDidMount(){
        this.handleChange();
    }
    



    render(){
        return(
    <div>      
    <section className="promociones container">
            <h3 className="titulos-secciones">Promociones</h3>
        <div className="row fila">
            <div className="item-promociones col-md-4">
                <div className="imagen">
                    <img src={imagen1} alt="" className="promociones"/>
                </div>
                <div className="titulo">Tacos Polanco</div>
                <div className="tipo">MEXICANA</div>
                <h3 className="promociones">15% en Paquete Amigos</h3>
                <div className="detalles">
                    <div className="precio">$20-100</div>
                    <div className="raiting"><i className="fas fa-star"></i> <span>4.2</span></div>
                </div>
            </div>
            <div className="item-promociones col-md-4">
                <div className="imagen">
                    <img src={imagen2} alt="" className="promociones"/>
                </div>
                <div className="titulo">Tacos Polanco</div>
                <div className="tipo">MEXICANA</div>
                <h3 className="promociones">15% en Paquete Amigos</h3>
                <div className="detalles">
                    <div className="precio">$20-100</div>
                    <div className="raiting"><i className="fas fa-star"></i> <span>4.2</span></div>
                </div>
            </div>
            <div className="item-promociones col-md-4">
                <div className="imagen">
                    <img src={imagen3} alt="" className="promociones"/>
                </div>
                <div className="titulo">Tacos Polanco</div>
                <div className="tipo">MEXICANA</div>
                <h3 className="promociones">15% en Paquete Amigos</h3>
                <div className="detalles">
                    <div className="precio">$20-100</div>
                    <div className="raiting"><i className="fas fa-star"></i> <span>4.2</span></div>
                </div>
            </div>   
        </div>


        <div className="row fila">
            <div className="item-promociones col-md-4">
                <div className="imagen">
                    <img src={imagen5} alt="" className="promociones"/>
                </div>
                <div className="titulo">Tacos Polanco</div>
                <div className="tipo">MEXICANA</div>
                <h3 className="promociones">15% en Paquete Amigos</h3>
                <div className="detalles">
                    <div className="precio">$20-100</div>
                    <div className="raiting"><i className="fas fa-star"></i> <span>4.2</span></div>
                </div>
            </div>
            <div className="item-promociones col-md-4">
                    <div className="imagen">
                        <img src={imagen6} alt="" className="promociones"/>
                    </div>
                    <div className="titulo">Tacos Polanco</div>
                    <div className="tipo">MEXICANA</div>
                    <h3 className="promociones">15% en Paquete Amigos</h3>
                    <div className="detalles">
                        <div className="precio">$20-100</div>
                        <div className="raiting"><i className="fas fa-star"></i> <span>4.2</span></div>
                    </div>
            </div>
            <div className="item-promociones col-md-4">
                    <div className="imagen">
                        <img src={imagen7} alt="" className="promociones"/>
                    </div>
                    <div className="titulo">Tacos Polanco</div>
                    <div className="tipo">MEXICANA</div>
                    <h3 className="promociones">15% en Paquete Amigos</h3>
                    <div className="detalles">
                        <div className="precio">$20-100</div>
                        <div className="raiting"><i className="fas fa-star"></i> <span>4.2</span></div>
                    </div>
            </div>             
        </div>
    </section>
    <footer>

    </footer>
    </div>
        )
    }

}

export default SecPromotions;