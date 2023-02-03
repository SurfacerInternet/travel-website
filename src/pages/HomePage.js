import { applyMiddleware } from "@reduxjs/toolkit";
import { Route } from "react-router-dom";
import { Container, Row, Col, Button,} from "reactstrap";
import Thailand from '../app/assets/img/thailand.jpg';
import ItineraryPage from "./ItineraryPage";

const HomePage = () => {

    return ( 
       <div>
            <div className="contain">   
                 <img src={Thailand} alt='Thailand' className="img-fluid" width='max'/>
                 <div className="centered"> Travel Wiz </div>
            </div>
            <Row className="row-content p-4 border-right" >
                <Col sm='4'>
                  <h3> Get Travel Tips</h3>
                  <p> Make more of your trip with useful knowledge</p>
                </Col>
                <Col sm='4' >
                   <h3> Discover Travel Options </h3>
                   <p> Check out cool options for your dream trip </p>
                </Col>
                <Col sm='4'>
                    <h3> Make an Itinerary</h3>
                    <p> Make planning painless by making a travel itinerary</p> 
                </Col>
            </Row>
            <Row className="bg-white">
                <Col sm='2' className="mx-auto">
                    <Button>
                        Plan Your Trip!
                    </Button>
                </Col>
            </Row>
            </div>
                
    )
};

export default HomePage;


//How to get the button to respond, when you click it?
//Make a function outside then, put it in, or what ?
//useState, onclick