import "./footer.scss"
import { Person, Email } from "@material-ui/icons";

export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="wrapper">
                <div className="contact" id="contact">
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+415 328 5678</span>
                    </div>
                    < div className="itemContainer">
                        <Email className="icon" />
                        <span>christiangflores0824@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
