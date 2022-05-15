import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { delProduct } from "../redux/action/index"

import { Modal } from "./Modal"

const Cart = () => {
    const dispatch = useDispatch();

    const state = useSelector((state) => state.handleCart)
    const [fprice, setFprice] = useState(null)


    useEffect(() => {

        const sum = state.reduce((accumulator, object) => {
            return accumulator + Number(object.final)
        }, 0);
        setFprice(sum)
    }, [state])

    const clearproduct = (product) => {
        // console.log(product)
        dispatch(delProduct(product))
    }

    // console.log(state)

    return (
        <div>
            <h1 className="text-center">cart</h1>
            <div className="container my-5 py-5">
                {
                    state.map((cart, i) => {
                        return (
                            <>
                                <div className="row mt-3" key={i}>
                                    <div className="col-md-4">
                                        <img src={cart.image} alt={cart.title} height="200px" width="180px" />
                                    </div>
                                    <div className="col-md-4">
                                        <h3>{cart.title}</h3>
                                        <p className="lead fw-bold">
                                            {cart.qty} X Rs.{cart.price} = Rs.{cart.qty * cart.price}
                                        </p>

                                    </div>
                                    <div className="col-md-4">
                                        <button className='btn btn-outline-dark px-4 py-2' onClick={() => clearproduct(cart)}>Delete</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }

                {state.length > 0 ? <div>
                    <h2 className="mt-5">Final Amount: Rs.{fprice}</h2>
                    <Modal props={fprice} />
                </div> : ""
                }
            </div>

        </div>
    )
}

export default Cart



