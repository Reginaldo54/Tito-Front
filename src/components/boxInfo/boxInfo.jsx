import './boxInfo.css';
import '../../index.css';
// import GrowIcon from '../../assets/growIcon.svg';
// import StoreIcon from '../../assets/storeIcon.svg';
// import PuzzleIcon from '../../assets/puzzleIcon.svg'; 
// import Informations from '../informations/informations.jsx';

function BoxInfo({title, idBox, idDivisor}) {
    return(
        <section>
            <div className="titleBox" id={idBox}>
                <h1 className="title">{title}</h1>
            </div>
           
            <div className='divisor' id={idDivisor}></div>
            <hr 
                style={{ 
                        width: '100%', // Largura da linha horizontal
                        height: '2.5px', // Espessura da linha horizontal
                        backgroundColor: '#F9D876', // Cor de fundo da linha horizontal
                        margin: 0
                    }} />
        </section>
    )
}
export default BoxInfo