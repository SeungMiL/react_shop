import React, { useState } from "react";
import { Table } from 'react-bootstrap';
import { connect } from "react-redux";

function Cart(props) {

    let [modalToggle, setmodalToggle] = useState(true);

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
                    props.state.map((a, i) => {
                        return (
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td><button onClick={() => { props.dispatch({ type: '수량증가' }) }}>+</button>
                                    <button onClick={() => { props.dispatch({ type: '수량감소' }) }}>-</button>
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

        </div>

    )
}

function Exam(state) {
    return {
        state: state.reducer,
        state2: state.reducer2,
    }
}

export default connect(Exam)(Cart)

// export default Cart;