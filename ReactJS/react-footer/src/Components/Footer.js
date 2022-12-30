import React from "react";
import "./FooterStyles.css";

const Footer = () => {
    return (
        <div className="footer">
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="img-1">
                            <img src="https://www.marvel.com/static/images/favicon/android-chrome-icon-194.png" alt="marvel" style={{ width: 80, height: 120 }}></img>
                        </div>
                    </div>
                        
                        <div className="col">
                            <ul>
                                <li><a href =""> ABOUT MARVEL</a>
                                   
                                </li>
                                <li><a href ="">HELP/FAQS</a></li>
                                <li><a href="">CAREERS</a></li>
                                <li><a href="">INTERSHIPS</a></li>
                            </ul>

                        </div>
                        <div className="col">
                            <ul>
                                <li><a href=""> ADVERSTISING</a>
                                   
                                </li>
                                <li><a href="">DISNEY</a></li>
                                <li><a href="">MARVELHQ.COM</a></li>
                                <li><a href="">REDEEM DIGITAL</a></li>
                                <li><a href ="">COMICS</a></li>
                            </ul>

                        </div>
                        <div className="col">
                            <div className="img-2">
                                <img src="https://i0.wp.com/chipandco.com/wp-content/uploads/2016/07/Marvel_Insider_LOGO.jpg" alt="marvel insider" style={{ width: 40, height: 50 }}></img>

                            </div>
                            <br></br>
                           

                            <div className="img-3">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Marvel-Unlimited-Logo.png" alt="marvel unlimited" style={{ width: 40, height: 50 }}></img>


                            </div>


                        </div>
                        <div className="col-1">
                            <ul>
                                <li><a href="#"> MARVEL INSIDER</a>
                                 
                                </li>
                                <br></br>
                                <br></br>
                                <li><a href="#">MARVEL UNLIMITED</a></li>
                            </ul>
                        </div>
                        
                       

                    

                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer;