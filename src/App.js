/*eslint-disable */

import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Carousel } from 'react-bootstrap';
import { useState } from 'react';
import shoesData from './data.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoesChange] = useState(shoesData);

  function abc() {
    let arrayNew = [];
    for (let i = 0; i < shoes.length; i++) {
      arrayNew.push(
        <div className="col-md-4">
          <img src={"https://codingapple1.github.io/shop/shoes" + (i + 1) + ".jpg"} width="100%" />
          <h4>{shoes[i].title}</h4>
          <p>{shoes[i].content} & {shoes[i].price}</p>
        </div>)

    }
    return arrayNew
  }

  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Route exact path="/">
        <Carousel variant="dark" fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/background.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <div className="container">
          <div className="row">
            {abc()}
            {
              shoes.map(function (a, i) {
                return (
                  <Card shoes={shoes[i]} i={i} />
                )
              })
            }

          </div>
        </div>
      </Route>



      <Route path="/detail">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5"> {shoes[0].title} </h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button>
            </div>
          </div>
        </div>
      </Route>










    </div>
  );
}


function Card(props) {
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
    </div>
  )
}



export default App;
