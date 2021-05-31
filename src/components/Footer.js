import React from "react";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { FiMail } from "react-icons/fi";
import "./Footer.css"
import {FcEnteringHeavenAlive} from "react-icons/all";

const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-center text-lg-start mt-7" id="footer">
                <div
                    className="text-center p-3 text-light"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    <a href="https://www.facebook.com/trojancode/">
                        <SiFacebook
                            style={{ color: "#1877F2" }}
                            className="mr-4 mb-3 mt-3"
                        />
                    </a>
                    {" "}
                    <a href="mailto:2018ugec@nitjsr.ac.in">
                        <FiMail style={{ color: "#FF0000" }} className="mr-4 mb-3 mt-3" />
                    </a>
                    {" "}
                    <a href="https://www.instagram.com/the_akhilesh_pandey/">
                        <SiInstagram
                            style={{ color: "#E1306C" }}
                            className="mr-4 mb-3 mt-3"
                        />
                    </a>
                    {" "}
                    Copyright © 2021 {" "}
                    <a className="text-light" href="https://trojancode.me">
                        Akhilesh
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
