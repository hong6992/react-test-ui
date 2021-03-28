import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import logo from './Logo.png'
import View from './view.png'
import './App.css'
import { Button, Container, Row, Col, Form} from 'reactstrap'
import { FiMenu } from "react-icons/fi"
import { IoIosBed, IoIosArrowForward } from "react-icons/io"
import { FaBed, FaUserCog, FaReceipt, FaPaperPlane, FaToggleOn } from "react-icons/fa"
import { HiOutlineMailOpen } from "react-icons/hi"
import { CgArrowTopRightR } from "react-icons/cg"
import { AiFillCheckCircle, AiFillClockCircle, AiFillStar } from "react-icons/ai"
import { BiCalendarCheck, BiFontColor } from "react-icons/bi";

import 'bootstrap/dist/css/bootstrap.min.css' 

class App extends Component {
  render = () => {
    return (
      <div style={{ backgroundColor:"#F5F6F7" }}>
        <header>
          <div style={{ 
            paddingTop:"50px",
            paddingRight:"30px",
            paddingLeft:"30px",
            display:"flex",
            justifyContent:"space-between" }}>
          <img style={{ 
            width: "200px", 
            height:"40px",
            }} src={ logo }></img> 
            <p>CHOOSE A CITY<Button style={{ marginLeft:"5px", backgroundColor:"#FFFFFF", borderColor:"#FFFFFF", }}><FiMenu style={{color:"#8A8F9C"}}/></Button></p>
          </div>
        </header>
        <Container>
          <Row>
            <Col xs="3" >
              <div style={{
                marginTop:"50px",
                width:"40px",
                height:"40px",
                transform:"rotate(45deg)",
                backgroundColor:"#7C60FF",
              }}>
                <p style={{
                  transform:"rotate(-45deg)",
                  textAlign:"center",
                  padding:"5px 5px 5px 2px",
                  color:"#FFFFFF",
                }}>JD</p>
              </div>
              <div 
                style={{
                  marginTop:"5px ",
                  marginBottom:"50px",
                  }}>
                <h4 style={{ marginBottom:"1px" }}>John Doe</h4>
                <p style={{ color:"#8A8F9C" }}>Premium Nomad</p>
              </div>
              <div style={{ marginBottom:"35px"}}>
                <Button 
                  style={{ 
                  backgroundColor:"#7C60FF", 
                  marginBottom:"50px", 
                  width:"100%",
                  fontSize:"15px",
                  textAlign:"left",
                  }}><IoIosBed style={{ marginRight:"10px" }}/>Bookings</Button>
                <Button 
                  style={{ 
                  backgroundColor:"#F5F6F7",
                  color:"#8A8F9C",
                  fontSize:"15px",
                  width:"100%",
                  borderColor:"#F5F6F7",
                  textAlign:"left",
                  }}><FaBed style={{ marginRight:"10px" }}/>Refer and Earn</Button>
                <Button 
                  style={{ 
                  backgroundColor:"#F5F6F7",
                  color:"#8A8F9C",
                  fontSize:"15px",
                  borderColor:"#F5F6F7",
                  width:"100%",
                  textAlign:"left",
                  }}><FaUserCog style={{ marginRight:"10px" }}/>Account Settings</Button>
              </div>
              <div>
                <p style={{ color:"#8A8F9C" }}>SUPPORT</p>
                <Button 
                  style={{
                  color:"#8A8F9C",
                  width:"100%",
                  backgroundColor:"#F5F6F7",
                  borderColor:"#F5F6F7",
                  textAlign:"left",
                  }}><HiOutlineMailOpen style={{ marginRight:"10px" }}/>Contact Us</Button>
                <Button
                  style={{
                  color:"#8A8F9C",
                  width:"100%",
                  backgroundColor:"#F5F6F7",
                  borderColor:"#F5F6F7",
                  textAlign:"left",
                  }}><CgArrowTopRightR style={{ marginRight:"10px" }}/>FAQ</Button>
              </div>
              <div style={{ position:"absolute", bottom:"0px", }}>
                <p style={{ color:"#8A8F9C" }}><FaToggleOn style={{ color:"#7C60FF" ,marginRight:"10px" }}/>Sign out</p>
              </div>
            </Col>
            <Col xs="9" style={{}}>
              <div>
                <h1 style={{ marginBottom:"40px"}}>Bookings</h1>
                <h4 style={{ marginBottom:"15px"}}>Your current upcoming stays</h4>
                <p>Please update with the property if your travel plans should change or if you wish to make any changes to your stay</p>
                <IoIosArrowForward style={{ marginRight:"10px" }}/><Link to='/www.youtube.com'>Learn more about our premium subcriptions</Link>
              </div>
              <div style={{marginTop:"40px"}}>
                <Row style={{backgroundColor:"#FFFFFF"}}>
                  <Col xs="5" style={{ paddingRight:"0px", }}>
                    <img src={ View } style={{width:"100%", height:"100%", }}></img>
                  </Col>
                  <Col xs="7" style={{ textAlign:"left", paddingLeft:"0px", }}>
                    <div style={{marginBottom:"60px", marginLeft:"5%"}}>
                      <h5 style={{marginTop:"50px"}}>THE GREEN VIEW</h5>
                      <p style={{ color:"#8A8F9C" }}><AiFillCheckCircle style={{ marginRight:"10px" }}/>Booking request recieved</p>
                      <p style={{ color:"#7C60FF"}}><AiFillClockCircle style={{ marginRight:"10px" }}/>Awaiting confirmation from hotel</p>
                    </div>
                    <div style={{ marginLeft:"5%"}}>
                      <h5>Superior Premium</h5>
                      <Row>
                        <Col>
                        <p style={{ color:"#8A8F9C", marginBottom:"0px"}}><BiCalendarCheck style={{ marginRight:"10px"}}/>Check in:</p>
                        <h6 style={{ marginTop:"0px", marginLeft:"28px"}}>July 9th,2018</h6>
                        </Col>
                        <Col>
                        <p style={{ color:"#8A8F9C", marginBottom:"0px"}}><FaReceipt style={{ marginRight:"10px"}}/>Reference</p>
                        <h6 style={{ marginTop:"0px", marginLeft:"27px"}}>£UC311K</h6>
                        </Col>
                      </Row>
                    </div>
                    <div style={{ marginTop:"30px" }}>
                      <Button 
                        style={{ 
                        color:"#42B72A",
                        width:"100%",
                        height:"80px",
                        backgroundColor:"#F5F6F7",
                        borderColor:"#F5F6F7", 
                        }}><AiFillStar style={{ color:"#42B72A"}}/>Rate your stay</Button>
                      <Button 
                        style={{ 
                        color:"#42B72A", 
                        width:"100%",
                        height:"80px",
                        backgroundColor:"#F5F6F7",
                        borderColor:"#F5F6F7", 
                        }}><FaPaperPlane/>Email the property</Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default App;
