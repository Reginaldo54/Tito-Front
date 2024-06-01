import React from "react";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import TodasVisitasComponente from "../../components/todasVisitasComponent/todasVisitas";

function TodasVisitas() {
    return(
        <div>
            <Header/>
            <TodasVisitasComponente/>
            <Footer/>
        </div>
    );
}

export default TodasVisitas;