import React, { useState, useEffect } from "react";
import "./cadastroEvent.css";


function CadastroEventoComponente()
{

     /*Gets e sets dos campos que necessitam de validão: CPF, EMAIL, Senha */
     const [dataEvento, setDataEvento] = useState(new Date());
     const [horaInicial, setHoraInicial] = useState('12:00');
     const [horaFinal, setHoraFinal] = useState('12:00');
     const [descricao, setDescricao] = useState('');

     const handleHoraInicialChange = (event) => {
       // Atualiza o estado com a nova hora
       setHoraInicial(event.target.value);
     };

     const handleHoraFinalChange = (event) => {
        // Atualiza o estado com a nova hora
        setHoraFinal(event.target.value);
      };

    const handleDataEventoChange = (event) => {
    setDataEvento(new Date(event.target.value));
    };
   
    const handleDescricaoChange = (event) => {
        setDescricao(event.target.value);
    };


     
    return(

        <div>
           
            <main id='cadastroContainer' autoFocus>

            <div id="cadastro">
            <div id="cadastroTitle">
                    <span>CADASTRO DE EVENTO</span>
                </div>

                <form id="formCadastro">

                    <div className='formCadastroField'>
                        <span>Data do Evento</span>
                        <input 
                            type="date"
                            required
                            name="nome"
                            value={dataEvento}
                            onChange={handleDataEventoChange}/>
                    </div>
                    <div className='formCadastroField'>
                        <span>Hora de Início</span>
                        <input 
                            type="time"
                            required
                            name="horaInicio"
                            value={horaInicial}
                            onChange={handleHoraInicialChange}
                            />
                            
                    </div>      
                    <div className='formCadastroField'>
                        <span>Hora de Termínio</span>
                        <input 
                            type="time"
                            required
                            name="horaTerminio"
                            value={horaFinal}
                            onChange={handleHoraFinalChange}/>
                           
                    </div>  
                   
                    <div className='formCadastroField'>
                        <span>Descrição</span>
                        <textarea 
                            name="descricao"
                            id="descricao" 
                            required 
                            value={descricao}
                            onChange={handleDescricaoChange}
                            ></textarea>
                       
                    </div>
                    
                </form>

            </div>
                

            </main>

        </div>
    );
}

export default CadastroEventoComponente;