import React from 'react';
import './header.css';
import '../../index.css';
import UserIconSvg from '../../assets/userIcon.svg';
import ExemploLogo from '../../assets/exemploLogo.jpg';
//import { Link } from 'react-router-dom';
import Login, { ToggleModal } from '../../pages/login/login';

function Header()
{
    const handleComponentLogin = () => {
        ToggleModal();
     };

    return (
        <div>
            <Login/>
            <div id='headerUpper'>
            
            <div id='align'>
                <div id="headerSiteName">
                    <div
                    to='/'>
                        <img id='logo' src={ExemploLogo} alt="Logo do Impulsione Ai, onde a letra i é no formato de uma mola" /> 
                    </div>
                </div>

               
                    
                    <div 
                    id='headerHome'
                    className="headerScreenLinks"
                    to='/'
                    >Todas visitas</div>

                    <div 
                    id='headerSobre'
                    className="headerScreenLinks"
                    to='/inscreverVisita'
                    >Inscrever na visita</div>

                    <div 
                    id='headerSobre'
                    className="headerScreenLinks"
                    to='/cadastrarEvento'
                    >Cadastrar Evento</div>
                 


                    <div
                    id='headerLogin'
                    className='centralizeItems headerScreenLinks'
                    to='/login' onClick={handleComponentLogin}> 
                        <img src={UserIconSvg} alt="Icone, para informar login" className='headerIcon' id="headerIconParceiros"/>
                        <span>Login</span> 
                    </div>
            
                </div>

            </div>

            <hr id='headerHR' 
                style={{ 
                        width: '100%', // Largura da linha horizontal
                        height: '5px', // Espessura da linha horizontal
                        backgroundColor: '#F9D876', // Cor de fundo da linha horizontal
                        margin: 0
                    }} />
        </div>
       


    );
}

export default Header;