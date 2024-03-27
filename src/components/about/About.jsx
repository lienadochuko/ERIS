import React from 'react';
import "./about.css"
import black from "../../images/driven.png";
import sch5 from "../../images/Asp.Net Core 7.png";
import sch6 from "../../images/scc.png";
import sch7 from "../../images/Ultimate-React-Course.png";
import sch8 from "../../images/Secure Coding.png"

import sch from "../../images/HRBA.png";
import sch2 from "../../images/Meritorious Service.png";
import sch3 from "../../images/jobberman.png";
import sch4 from "../../images/certificate-cola.png"


const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-cardbg"></div>
                <div className="a-card">
                    <img src={black} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                <p className="a-sub">
                    The web is truly in our grasp or to be more precise the web is a place
                    where we developer can build and create borders, give titles, and
                    determine the colour/fashion trends("Our own little Kingdom"). <br />
                    I have ever since the beginning been a builder
                    and discoverer, can still hear the echos of my mother's voice
                    in my head.
                </p>
                <p className="a-desc">
                    I am a Web developer, I build and develop websites to
                    put it simple, for customers, be it stylish, modern
                    websites, online stores, web services and even site-Cloning.
                    I am also a UI/UX Designer and Graphics Designer.
                </p>
                <br />
                <p className="a-desc">
                    I Graduated with a B.sc in Computer Science from Hill City
                    University, Republic of Benin. While in school I engaged in
                    various projects in different programming languages, it was
                    a rush to be honest, but it was worth it because everything
                    in the Tech-World share the same foundation.
                </p>
                <div className="a-award-wrapper">
                    <div className="a-award-ani">
                        <div className="a-award">
                            <img src={sch5} alt="" className="a-award-img" />
                            <div className="a-award-text">
                                <h4 className="a-award-title">Certificate of Completion</h4>
                                <p className="a-award-desc">
                                Asp.Net Core 7(.Net7)<br />
                                    Udemy<br />
                                    2023
                                </p>
                            </div>
                        </div>
                        <div className="a-award">
                            <img src={sch7} alt="" className="a-award-img" />
                            <div className="a-award-text">
                                <h4 className="a-award-title">Certificate of Completion</h4>
                                <p className="a-award-desc">
                                The Ultimate React Course 2023: React, Redux<br />
                                    Udemy<br />
                                    2023
                                </p>
                            </div>
                        </div>
                        <div className="a-award">
                            <img src={sch6} alt="" className="a-award-img" />
                            <div className="a-award-text">
                                <h4 className="a-award-title">Professional Certification</h4>
                                <p className="a-award-desc">
                                ISO/IEC 27001:2022 (INFORMATION SECURITY MANAGEMENT SYSTEM),Foundation.<br />
                                Standard & Best Practice<br />
                                    2023
                                </p>
                            </div>
                        </div>
                        <div className="a-award">
                            <img src={sch8} alt="" className="a-award-img" />
                            <div className="a-award-text">
                                <h4 className="a-award-title">Certificate of Completion</h4>
                                <p className="a-award-desc">
                                Secure Coding – Secure application Development<br />
                                    Udemy<br />
                                    2023
                                </p>
                            </div>
                        </div>


                        <div className="a-award">
                            <img src={sch4} alt="" className="a-award-img" />
                            <div className="a-award-text">
                                <h4 className="a-award-title">Certificate of Completion</h4>
                                <p className="a-award-desc">
                                    Nigerian Bottling Company Limited<br />
                                    #YouthEmpower2021<br />
                                    #DiscoverDevelopSuceed
                                </p>
                            </div>
                        </div>
                        <div className="a-award">
                            <img src={sch3} alt="" className="a-award-img" />
                            <div className="a-award-text">
                                <h4 className="a-award-title">Certificate of Completion</h4>
                                <p className="a-award-desc">
                                    Jobberman<br />
                                    Certificate showing completion
                                    and satisfaction of all Requirement Approved for Jobberman Soft-Skills Training</p>
                            </div>
                        </div>
                        <div className="a-award">
                            <img src={sch2} alt="" className="a-award-img" />
                            <div className="a-award-text">
                                <h4 className="a-award-title">Certificate of Meritorious Service</h4>
                                <p className="a-award-desc">Certificate showing recognition of immense
                                    contribution towards improving the quality of primary healthcare data</p>
                            </div>
                        </div>
                        <div className="a-award">
                            <img src={sch} alt="" className="a-award-img" />
                            <div className="a-award-text">
                                <h4 className="a-award-title">Certificate of Completion</h4>
                                <p className="a-award-desc">Succesful completion of the Human Rights
                                    Based Approach course</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
