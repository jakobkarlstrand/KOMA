import logo from './logo.svg';
import Dropdown from 'react-dropdown';
import './NewDeadline.css'
import './AddNew.css'
import { Link } from 'react-router-dom';




function HomePage() {
  const options = ['MT1', 'MT2', 'MT3'];
  return (
    <body>
        <div className="container">
            <div className="addCourseButton">
                <h2>Lägg till kurs</h2>
            </div>
            <Link to="/create-new-man">
            <div className="addManualButton">
                <h2>Skapa påminnelse</h2>
            </div>
            </Link>
            <div>
              <Link to="/home">TILLBAKA</Link>
            </div>
        </div>
            
    </body>
  );
}

export default HomePage;
