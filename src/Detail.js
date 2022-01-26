import React, {usestate} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function Detail(props){

    let history = useHistory();

    return(
      <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5"> {props.shoes[0].title} </h4>
          <p>상품설명</p>
          <p>120000원</p>
          <button className="btn btn-danger">주문하기</button>
          <button className="btn btn-danger" onClick={()=>{
              history.goBack();
          }}>뒤로가기</button>
        </div>
      </div>
    </div>
    )
  }


  export default Detail;