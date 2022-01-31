import React, { useEffect, useState, usestate } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";
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

    useEffect(()=>{
        let timmer = setTimeout(() => {
           alertTrance(false) 
        }, 2000);
        console.log('hi')
    },[alert]);

    

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
            <input onChange={(e)=>{inputDataTrance(e.target.value)}}></input>

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
                    
                    <Info storage = {props.storage}></Info>


                    <button className="btn btn-danger" onClick={()=>{props.storageTrance([9,11,12])}}>주문하기</button>
                    <button className="btn btn-danger" onClick={() => {
                        history.goBack();
                    }}>뒤로가기</button>
                </div>
            </div>
        </div>
    )
}


function Info(props){
    return (
        <p>재고 : {props.storage[0]}</p>
    )
}

export default Detail;