/*eslint-disable */

import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, Container, Carousel } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import shoesData from './data.js';
import Detail from './Detail.js';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Cart from './cart';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


let storageContext = React.createContext();

function App() {

  let [shoes, shoesChange] = useState(shoesData);
  let [storage,storageTrance] = useState([10,11,12])


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
            <Nav.Link as={Link} to={"/"}> Home </Nav.Link>
            <Nav.Link as={Link} to={"/detail"}>  Detail</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Switch>

      <Route exact  path="/">
        <Carousel variant="dark" fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/background.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 >First slide label</h3>
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

          <storageContext.Provider value={storage}>

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

          </storageContext.Provider>

          <button className="btn btn-primary" onClick={
            () => {
              
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                console.log(result.data);
                shoesChange([...shoes, ...result.data]);
              })
              .catch(()=>{
                console.log('실패했어요')
              });
            }
          }>더보기</button>
        </div>
      </Route>



      <Route  path="/detail/:id">
            <Detail shoes={shoes} storage={storage} storageTrance={storageTrance}/>
      </Route>

      <Route path="/cart">
          <Cart></Cart>
      </Route>



      <Route  path="/:id">
            <div>아무거나적었을때 이거 보여주셈</div>
      </Route>


      </Switch>




    </div>
  );
}





function Card(props) {

  let storage = useContext(storageContext);
  let history = useHistory();

  return (
    <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.shoes.id)}}>
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content} & {props.shoes.price}</p>
      <p>재고 : {storage[props.i]}</p>
      <Test></Test>
    </div>
  )
}

function Test(){
  let storage = useContext(storageContext);

  return <p>재고 : {storage[0]}</p>
}


export default App;
