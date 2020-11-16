import logo from './logo.svg';
import Dropdown from 'react-dropdown';
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
        <div className="container">
            <div className="pageTitle">
                <h1>KURS: {course}</h1>
                <h1>TYP: {type}</h1>
                <h1>days: {daysLeft}</h1>
            </div>
            <div className="goBack">
                <Link to="/home">TILLBAKA</Link>
            </div>
        </div>
            
    </body>
  );
}

export default Details;
