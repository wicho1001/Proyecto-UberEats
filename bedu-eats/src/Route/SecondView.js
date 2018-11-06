import React,{Component} from 'react'
import Header from "../Components/FirstView/Header";
import SecNav from "../Components/SecNav";
import ContainerTitle from "../Components/SecondView/ContainerTitle";
import MainContainer from "../Components/SecondView/MainContainer";
import "../index.css"

class SecondView extends Component{

    render(){
        return(
            <div>
                <Header/>
                <ContainerTitle/>
                <MainContainer/> 
                <SecNav/>  
            </div>
        )
    }
}

export default SecondView;