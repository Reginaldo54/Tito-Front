import React, { useState, useEffect } from "react";
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import InscreverVisitaComponente from "../../components/InscreverVisitComponent/inscreverVisita";


function InscreverVisita()
{

    
    return(

        <div id="screenContent">
            <Header/>
            <InscreverVisitaComponente/>
            <Footer/>
        </div>
    );
}

export default InscreverVisita;