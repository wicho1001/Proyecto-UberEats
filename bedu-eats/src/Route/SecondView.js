import React,{Component} from 'react'
import Header from "../Components/FirstView/Header";
import Main from "../Components/Main";
import "../index.css"

class SecondView extends Component{

    render(){
        return(
            <div>
                <Header/>
                <Main/>
            </div>
        )
    }
}

export default SecondView;