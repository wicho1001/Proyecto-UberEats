import React,{Component} from 'react';

class SecPromotions extends Component{

    render(){
        return(
          
    <section className="promociones container">
            <h3 className="titulos-secciones">Promociones</h3>
        <div className="row fila">
            <div className="item-promociones col-md-4">
                <div className="imagen">
                    <img src="/img" alt="" className="promociones"/>
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
                    <img src="img/2.jpg" alt="" className="promociones"/>
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
                    <img src="img/3.jpg" alt="" className="promociones"/>
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
                    <img src="img/5.jpg" alt="" className="promociones"/>
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
                        <img src="img/6.jpg" alt="" className="promociones"/>
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
                        <img src="img/7.jpg" alt="" className="promociones"/>
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

        )
    }

}

export default SecPromotions;