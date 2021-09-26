import "./topbar.scss";
import {Person,Email} from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#header" className="logo">fire.</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+451 328 5678</span>
                        < div className="itemContainer">
                            <Email className="icon" />
                            <span>christiangflores0824@gmail.com</span>
                        </div>
                    </div>
                    <div className="right">
                        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                            <span className="line1"> </span>
                            <span className="line2"> </span>
                            <span className="line3"> </span>
                        </div>
                </div>
            </div>
        </div>
     </div>  
    )     
}
