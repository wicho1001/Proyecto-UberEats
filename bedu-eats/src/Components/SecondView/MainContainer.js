import React,{Component} from 'react';
import imagen1 from "../FirstView/img/1.jpg";
import imagen2 from "../FirstView/img/2.jpg";



class MainContainer extends Component{

    render(){
        return(
            <>
                <section class="container">       
                    <h5>También te puede interesar</h5> 
                        <div class="row fila">
                            <div class="item-promociones col-6">
                                <div class="imagen">
                                    <img src={imagen1} alt="" class="promociones"/>
                                </div>
                                <div class="titulo">Tacos Polanco</div>
                                <div class="tipo">MEXICANA</div>
                                
                                <div class="detalles">
                                    <div class="precio">$20-100</div>
                                    <div class="raiting"><i class="fas fa-star"></i> <span>4.2</span></div>
                                </div>
                            </div>
                            <div class="item-promociones col-6">
                                <div class="imagen">
                                    <img src={imagen2} alt="" class="promociones"/>
                                </div>
                                <div class="titulo">Tacos Polanco</div>
                                <div class="tipo">MEXICANA</div>
                            
                                <div class="detalles">
                                    <div class="precio">$20-100</div>
                                    <div class="raiting"><i class="fas fa-star"></i> <span>4.2</span></div>
                                </div>
                            </div>
                        </div>
                    </section>
                <footer></footer>            

            </>
        )
    }

}

export default MainContainer;