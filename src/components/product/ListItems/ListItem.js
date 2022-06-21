import React, { useState } from 'react'
import AddToCartIcon from '../../../assets/icons/add_cart.svg'
import Modal from '../UI/Modal'

const ListItem = ({ data, onAdd, onRemove }) => {
    //  const [counter, setCounter] = useState(0);
    const [showModal, setShowModal] = useState(false)

    const increaseCounterByOne = (event) => {
        event.stopPropagation()
        onAdd(data.id)
        // setCounter(counter + 1)
    }

    const descreaseCounterByOne = (event) => {
        event.stopPropagation()
        onRemove(data.id)
        // if (counter === 0) {
        //     return;
        // }
        // if (counter >= 1) {
        //     onRemove(data.id);
        // }
        // setCounter(counter - 1)
    }

    const handleModal = () => {
        setShowModal(previousState => !previousState)
    }

    return (
        <>
            <div onClick={handleModal} className={"item-card"}>
                <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt='image' />
                <div className={"item-card__information"}>
                    <div className={"pricing"}>
                        <span> {data.discountedPrice}</span>
                        <small>
                            <strike> {data.price}</strike>
                        </small>
                    </div>
                    <div className={"title"}>
                        <h3>{data.title}</h3>
                    </div>
                </div>

                {
                    data.quantity < 1 ?

                        <button className={"cart-add"} onClick={increaseCounterByOne}>
                            <span>Add to cart</span>
                            <img src={AddToCartIcon} alt='' />
                        </button>
                        :
                        <div className={"cart-addon"}>
                            <button onClick={descreaseCounterByOne}><span>-</span></button>
                            <span className={"counter"}>{data.quantity}</span>
                            <button onClick={increaseCounterByOne}><span>+</span></button>
                        </div>
                }
            </div>
            {
                showModal &&
                <Modal onClose={handleModal}>
                    <div className='item-card__modal'>
                        <div className='img-wrap'>
                            <img className={"img-fluid"} src={`/assets/${data.thumbnail}`} alt='image' />
                        </div>
                        <div className='meta'>
                            <h3>{data.title}</h3>
                            <div className={"pricing"}>
                                <span> {data.discountedPrice}</span>
                                <small>
                                    <strike> {data.price}</strike>
                                </small>
                            </div>
                            <p>{data.description}</p>
                            {
                                data.quantity < 1 ?

                                    <button className={"cart-add"} onClick={increaseCounterByOne}>
                                        <span>Add to cart</span>
                                        <img src={AddToCartIcon} alt='' />
                                    </button>
                                    :
                                    <div className={"cart-addon"}>
                                        <button onClick={descreaseCounterByOne}><span>-</span></button>
                                        <span className={"counter"}>{data.quantity}</span>
                                        <button onClick={increaseCounterByOne}><span>+</span></button>
                                    </div>
                            }
                        </div>
                    </div>
                </Modal>
            }
        </>
    )
}
export default ListItem;
