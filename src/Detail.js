import React, { useEffect, useState, usestate } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
import { CSSTransition } from "react-transition-group";
import { Nav } from 'react-bootstrap';

import './detail.scss';




let Box = styled.div`
    padding : 20px;
`;

let Title = styled.h4`
    font-size : 25px;
    color : ${props => props.colour};
`;



function Detail(props) {

    let [alert, alertTrance] = useState(true);
    let [inputData, inputDataTrance] = useState('');
    let [tab, setTab] = useState(0);
    let [switche, setswitche] = useState(false);

    useEffect(() => {
        let timmer = setTimeout(() => {
            alertTrance(false)
        }, 2000);
        console.log('hi');
        return () => { clearTimeout(timmer) }
    }, []);



    let { id } = useParams();
    let history = useHistory();
    let findItem = props.shoes.find(function (item) {
        return item.id == id
    })



    return (
        <div className="container">

            <Box>
                <Title className="red" >Detail</Title>
            </Box>

            {inputData}
            <input onChange={(e) => { inputDataTrance(e.target.value) }}></input>

            {
                alert === true
                    ? (<div className="my-alert-yellow">
                        <p>재고가 얼마 남지 않았습니다</p>
                    </div>)
                    : null

            }






            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5"> {findItem.title} </h4>
                    <p>{findItem.content}</p>
                    <p>{findItem.price}원</p>

                    <Info storage={props.storage}></Info>


                    <button className="btn btn-danger" onClick={() => { props.storageTrance([9, 11, 12]) }}>주문하기</button>
                    <button className="btn btn-danger" onClick={() => {
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
            </div>


            <div>
                <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
                    <Nav.Item>
                        <Nav.Link eventKey="link-0" onClick={() => { setswitche(false); setTab(0) }}>Active</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1" onClick={() => { setswitche(false); setTab(1) }}>Option 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2" onClick={() => { setswitche(false); setTab(2) }}>Option 3</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
            <CSSTransition in={switche} classNames="wow" timeout={500}>
                <TabContent tab={tab} setswitche={setswitche} />
            </CSSTransition>

        </div>
    )
}


function TabContent(props) {

    useEffect(() => {
        props.setswitche(true);
    })


    if (props.tab == 0) {
        return <div>0번째 내용입니다</div>
    } else if (props.tab == 1) {
        return <div>1번째 내용입니다</div>
    } else if (props.tab == 2) {
        return <div>2번째 내용입니다</div>
    }
}




function Info(props) {
    return (
        <p>재고 : {props.storage[0]}</p>
    )
}

export default Detail;