import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css';

import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <>
     <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className='text-light ' >
                            <h3 className='head_3 m-auto text-center mb-3'>Follow us :- </h3>
                            <ul className='socialIconsList m-auto w-50 d-flex justify-content-evenly'>
                                <li>
                                    <a rel="noreferrer" href="/" target="_blank">
                                        <BsFacebook />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="/" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="" target="_blank">
                                        <BsTwitter />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="" target="_blank">
                                        <BsStackOverflow />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="/" target="_blank">
                                        <BsGoogle />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="" target="_blank">
                                        <BsYoutube />
                                    </a>
                                </li> 
                            </ul>
                            
                        </Col>
                        <div className='m-auto text-center text-white mt-3' >
                            <div className="footerCopyright">
                                <small>© abhishek joshi</small>
                            </div>
                        </div>
                   </Row>
                </Container>
            </footer>
    </>
  )
}

export default Footer