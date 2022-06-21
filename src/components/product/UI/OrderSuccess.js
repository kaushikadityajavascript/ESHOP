import React from 'react'
import Modal from './Modal'
import OrderSuccessImage from '../../../assets/icons/order_success.svg'

const OrderSuccess = ({ onClose }) => {
    return (
        <Modal onClose={onClose}>
            <div className='order-container'>
                <div className='order-container--success'>
                    <img src={OrderSuccessImage} alt='success' className={'img-fluid'} />
                    <div className='message'>
                        <h1>Order Successfully Placed!</h1>
                        <span>Order ID #{Math.random().toString(32).slice(2)}</span>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default OrderSuccess