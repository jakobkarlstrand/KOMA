import logo from './logo.svg';
import Dropdown from 'react-dropdown';
import './NewDeadline.css'


function TextInput({header, tooltip}){
    return(<div className="inputWrapper">
        <div className="header">
            <div className="header-left">
                <h2>{header}</h2>
            </div>
            <div className="header-right">
                <h2>{tooltip}</h2>
            </div>
        </div>
        <div className="textarea">
            <input></input>
        </div>
    </div>)
}

function HomePage() {
  const options = ['MT1', 'MT2', 'MT3'];
  return (
    <body>
        <div className="container">
            <div className="pageTitle">
                <h1>Ny påminnelse...</h1>
            </div>
            <TextInput header="TITEL" tooltip="(T.EX: MT-STYRELSEN)"></TextInput>
            <TextInput header="TYP" tooltip="(T.EX: MÖTE / INLÄMNING)"></TextInput>
            <TextInput header="DATUM" tooltip="(YYYY-MM-DD)"></TextInput>
            <TextInput header="ÖVRIGT" tooltip="(T.EX: SAL TP51)"></TextInput>
            <div className="addDeadlineButton"><h3>LÄGG TILL</h3></div>
        </div>
            
    </body>
  );
}

export default HomePage;
