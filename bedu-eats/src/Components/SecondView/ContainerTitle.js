import React,{Component} from 'react';
import imagen5 from "../FirstView/img/5.jpg";



class ContainerTitle extends Component{

    render(){
        return(
            <>
                <div class="restaurante-titulo">El Gran Burrito</div>
                <section class="container titulo">
                    <div class="row">
                        <div class="col-12 platillo-titulo">
                            Burrito Maxus
                        </div>
                    </div>
                </section>
                <section class="container">
                    <div class="row">
                        <div class="col-12 platillo-img">
                            <img src={imagen5} alt=""/>
                        </div>
                    </div>
                    <div class="platillo-descripcion">
                        El burrito o burrito de harina, especialmente de harina y no es guisado​ es un platillo que consiste en una tortilla de harina de trigo enrollada en forma cilíndrica en la que se rellena de carne asada y frijoles refritos.
                    </div>
                    <div class="platillo-btn col-5 offset-7">
                        Preparar
                    </div>
                </section>
            </>
        )
    }

}

export default ContainerTitle;