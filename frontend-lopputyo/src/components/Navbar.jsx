import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="App">
            <center>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/customer">Customers</Link></li>
                    <li><Link to="/training">Trainings</Link></li>
                    <li><Link to="/calendar">Calendar</Link></li>
                </ul>
            </center>
        </div>
    )
}