import React, { useState, useEffect } from "react";
import "./inscreverVisita.css";


 /*Função de validação de formatação do contéudo do input CPF
 Vai verificar se o cpf segue o padrão: 123.123.123-12 ou vai ter apenas 11 numeros, tem retorno boleano*/
 function isValidCPF(cpf) {
  
    const cpfRegex = /^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
    return cpfRegex.test(cpf);
}

// Função de validação de email, vai verificar a formatação do input do campo email, tem retorno boleano
function isValidEmail(email){
    // Expressão regular para validar e-mail simples
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

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


function InscreverVisitaComponente()
{

     /*Gets e sets dos campos que necessitam de validão: CPF, EMAIL, Senha */
     const [cpf, setCpf] = useState('');
     const [email, setEmail] = useState('');
     const [cpfValido, setCpfValido] = useState(true);
     const [emailValido, setEmailValido] = useState(true);
 
 
     // Guardando resultado em uma variável bool para que possa ser usada para mostrar
     // a mensagem de error de digitação, caso seja false.
     
     useEffect(() => {
         setCpfValido(isValidCPF(cpf));
     }, [cpf]);
 
     useEffect(() => {
         setEmailValido(isValidEmail(email));
     }, [email]);
 
     // Funções colocando no evento Onchange para pegar os valores que estão sendo digitados em tempo real
     const handleCpfChange = (event) => {
         setCpf(event.target.value);
     };
 
     const handleEmailChange = (event) => {
         setEmail(event.target.value);
     };
 
 
     const [dados, setDadosUsuario] = useState({
         nome:'',
         cpf: '',
         email: ''
     });

     
    return(

        <div>
           
            <main id='inscricaoContainer'>

            <div id="inscricao">
            <div id="inscricaoTitle">
                    <span>INSCRIÇÃO DE VISITA</span>
                </div>

                <form id="form">

                    <div className='formInscricaoField'>
                        <span>Nome</span>
                        <input 
                            type='text'
                            required
                            name="nome"/>
                    </div>
                    <div className='formInscricaoField'>
                        <span>CPF</span>
                        <input 
                            type='text'
                            required
                            pattern="^(\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$"   
                            maxLength="14" 
                            placeholder="123.123.123-12"
                            onKeyDown={apenasNumeros}
                            name="cpf"
                            value={cpf}
                            onChange={handleCpfChange}/>
                             {/*Se o cpf for inválido está parte vai ser mostrada em baixo do input do campo cpf*/}
                            <span className="invalidInput">
                                {cpf !== '' && !cpfValido && <span className="error">CPF inválido</span>}
                            </span> 
                    </div>       
                   
                    <div className='formInscricaoField'>
                        <span>Email</span>
                        <input 
                            type="email" 
                            required
                            name="email"
                            value={email}
                            onChange={handleEmailChange}/>
                              {/*Mensagem de error posicionada para aparecer...*/}
                              <span className="invalidInput">
                                    {email !== '' && !emailValido && <span className="error">Email inválido</span>}
                              </span>
                    </div>
                    
                </form>

            </div>
                

            </main>

        </div>
    );
}

export default InscreverVisitaComponente;