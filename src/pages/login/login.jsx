import React,{useState} from "react";
import './login.css';
import iconModalClose from '../../assets/iconLoginModalClose.svg';
import BoxInfo from "../../components/boxInfo/boxInfo";
//import { Link } from "react-router-dom";


// Função que faz com que o campo recuse o input de letras no input. A função é colocada no evento onKeyDown -> ao pressionar a tecla.
function apenasNumeros(evt) {
    // Obtém o código ASCII do caractere digitado
    var charCode = (evt.which) ? evt.which : evt.keyCode;

    // Verifica se o caractere digitado é uma letra
    let letrasMaiusculas = charCode >= 65 && charCode <= 90;
    let letrasMinusculas = charCode >= 97 && charCode <= 122;
    if ( letrasMinusculas|| letrasMaiusculas) {
        // Cancela o evento de digitação (não insere o caractere no campo)
        evt.preventDefault();
    }
}

 /*Função de fechar o modal. Ele vai adicionar/tirar a classe hide na div loginCentralize, 
que vai fazer a div sumir/aparecer, quando o botão escolhido for clicado.*/
export function ToggleModal()
{
    const loginCentralize = document.querySelector("#loginCentralize");
    loginCentralize.classList.toggle("hideLogin");
    const back = document.querySelector("#backLogin");
    back.classList.toggle("hideLogin");
}


function Login()
{
   
    const [matricula, setMatricula] = useState('');
    const [senha, setSenha] = useState('');

    return(
        <div id="backLogin" className="hideLogin">
            
            <div id="loginCentralize" className="hideLogin" >

                <div id="loginContainer">

                    <div>
                        <button id = "closeModal" onClick={ToggleModal}>
                            <img src={iconModalClose} alt="icone para fechar o modal, tem formato de X"/>
                        </button>
                    </div>
                                       
                    <BoxInfo title={'Login'} idBox='titleBoxPreto' idDivisor='divisorPreto'></BoxInfo>
                    <div id="loginBody">

                        <div className="loginInputs">
                            <span className="nameInput">Matrícula</span>
                            <input type="text"
                                    value={matricula}
                                    onKeyDown={apenasNumeros}
                                    onChange={(e) => setMatricula(e.target.value)}/>
                        </div>

                        <div className="loginInputs">
                            <span className="nameInput">Senha</span>
                            <input type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}/>
                            <div
                            to='/esqueciSenha'>
                                <span className="forgotPassword">Esqueci minha senha</span> 
                            </div>
                        </div>
                        
                        <div id="loginButtons">
                            <button id="loginButtonSignIn">ENTRAR</button>
                            <div id="loginButtonSignUp" to='/cadastro'
                                >Não possuo cadastro
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
    );
}

export default Login;