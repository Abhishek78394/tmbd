import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Header.css';

function Header() {

  const navData = [
    {name:'Home', link:'/'},
    {name:'Movies', link:'/movies'},
    {name:'Tv Series', link:'/series'},
    {name:'Search', link:'/search'},
    {name:'Contact Us', link:'/contact'},
    {name: 'About Us', link: '/about'}
]

  return (
    <header  className='header'>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Movie</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        {
                            navData.map((item)=>{
                                return (
                                    <Nav className='nav-item' key={item.name}>
                                        <Link to={item.link}>{item.name}</Link>
                                    </Nav> 
                                )
                            })
                        }
                    </Nav>
                    
                    </Navbar.Collapse>
                </Container>
            </Navbar>
                    
        </header>
  )
}

export default Header
