import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import CadastroEventoComponente from '../../components/cadastroEventoComponent/cadastroEvent';





function CadastrarEvento()
{

    return(

        <div id='cadastroEventoContainer'>
            <Header/>

            <CadastroEventoComponente/>

            <Footer/>
        </div>
    );
}

export default CadastrarEvento;