import "./footer.styles.css"
import {FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram} from "react-icons/fa"


export default function Footer (){
    return <div className="footer">
        <div>
            <p>Toll-free (800) 963-3328 | Routing # 265473511 | NMLS #409483© 2022 EFCU Financial Federal Credit Union. All Rights Reserved.Privacy Policy | Truth in Savings | Patriot Act | Site Map</p>
            <p>Site by: Digital Intersection</p>
        </div>
        <div>
            <FaFacebookSquare />
            <FaTwitter />
            <FaYoutube />
            <FaInstagram />
        </div>
        <div>
            <div>
                <img src="https://www.efcufinancial.org/images/ncua-logo.png" alt=""/>
            </div>
            <div>
                <img src="https://www.efcufinancial.org/images/equal-housing-lender-logo.png" alt=""/>
            </div>
            <div>
                <img src="https://seal-batonrouge.bbb.org/logo/ruhzbum/efcu-financial-11000533.png" alt=""/>
            </div>
        </div>
    </div>
}