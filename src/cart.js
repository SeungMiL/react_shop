import React, { useEffect, useState, memo } from "react";
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {

    let [modalToggle, setmodalToggle] = useState(true);

    let state = useSelector((state) => state);
    console.log(state.reducer);

    let dispatch = useDispatch();

    return (

        <div>
            <Table responsive>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>

                {
                    state.reducer.map((a, i) => {
                        return (
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td><button onClick={() => { dispatch({ type: '수량증가', payload: a.id }) }}>+</button>
                                    <button onClick={() => { dispatch({ type: '수량감소', payload: a.id }) }}>-</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </Table>
            {props.state2 === true
                ? <div className="my-alert2">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={() => { props.dispatch({ type: '모달창닫기' }) }}>닫기</button>
                </div>
                : null
            }
            {modalToggle === true
                ? <div className="my-alert2">
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={() => { setmodalToggle(false) }}>닫기</button>
                </div>
                : null
            }
            <Parent name="승민" age="29"></Parent>
        </div>

    )
}

function Exam(state) {
    return {
        state: state.reducer,
        state2: state.reducer2,
    }
}

function Parent(props) {
    return (
        <div>
            <Child1 name={props.name}></Child1>
            <Child2 age={props.age}></Child2>
        </div>
    )
}

function Child1(props) {
    useEffect(() => { console.log('렌더링됨1') });
    return <div>1111</div>
}
let Child2 = memo(function(){
    useEffect(() => { console.log('렌더링됨2') });
    return <div>2222</div>
});

export default connect(Exam)(Cart)

// export default Cart;