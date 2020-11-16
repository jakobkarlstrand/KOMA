import logo from './logo.svg';
import Dropdown from 'react-dropdown';
import './Home.css'
import './Landing.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
  } from "react-router-dom";

function InfoRow({course, type, daysLeft}){
    let styler =""
    if(daysLeft < 5){
        styler = <td style={{color: "red"}}>{daysLeft}</td>
    }
    else{
        styler = <td>{daysLeft}</td>
    }
let row = <Link to={"/details/" + course + "/" + type + "/" + daysLeft}><tr><td>{course}</td><td>{type}</td>{styler}</tr><br></br></Link>
    return row;
}

function HomePage() {
  const options = ['MT1', 'MT2', 'MT3'];
  return (
    <body>
        <div className="home-container">
            <div className="upperButtons">
                <div className="helpButtonWrapper">
                    <Link to="/"> 
                        <div className="helpButton">BYT PROGRAM.
                        </div>
                    </Link>
                </div>
                <div className="settingsButtonWrapper">
                    <div className="settingsButton">set.
                    </div>
                </div>
            </div>
            <div className="wrapper-counter">
                <div className="counter-container">
                    <h1>3</h1>
                </div>
            </div>
            <div className="infoTable">
                <table>
                    <tr><th>KURS</th><th>TYP</th><th>DAGAR</th></tr>
                    <InfoRow course="TNA006" type="tenta" daysLeft="2"></InfoRow>
                    <InfoRow course="TNM046" type="tenta" daysLeft="4"></InfoRow>
                    <InfoRow course="PRIVAT" type="Ansöka om jobb" daysLeft="6"></InfoRow>
                    <InfoRow course="TNM043" type="inlämning" daysLeft="9"></InfoRow>
                </table>
            </div>
            <div className="lowerButton">
                <Link to="add">
                    <div className="addButton"><span>+</span></div>
                </Link>
            </div>
        </div>
    </body>
  );
}

export default HomePage;
