import "./contact.css";
import { Body } from "./components/Body"
import { useNavigate } from "react-dom"

export const Contact = () => {
    return (
        <div className="contact">
            {/* <HeaderBar /> */}
            <h1 className="pageHeader">
                Visit Us
            </h1>
            <Body />
            {/* <Footer /> */}
        </div>
    )

}