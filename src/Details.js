import logo from './logo.svg';
import Dropdown from 'react-dropdown';
import chev from './images/chevron.svg';
import './Details.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";

function Details() {

    let { course } = useParams();
    let { type } = useParams();
    let { daysLeft } = useParams();

  return (
    <body>
        <div className="cont">
            <div className="pageTitle">
                <h1>KURS: {course}</h1>
                <h1>TYP: {type}</h1>
                <h1>days: {daysLeft}</h1>
                <h2>Lägg till anteckning</h2>
            </div>

            <div className="note">
           
             <input></input>
            
           </div>
           
            <div className="linkTillbaka">
                <Link to="/home"> 
                 <img className="chev" src={chev}/>
                 </Link>
            </div>
        </div>
            
    </body>
  );
}

export default Details;
