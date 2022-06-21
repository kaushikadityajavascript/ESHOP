import axios from 'axios'
import React, { useState, useEffect } from 'react'
import ListItem from './ListItems/ListItem'
import Loader from './UI/Loader'

const Product = ({ onAddItem, onRemoveItem, eventState }) => {
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)

    useEffect(() => {

        async function fetchItems() {
            try {
                const response = await axios.get(`https://final-cart-d4d9d-default-rtdb.firebaseio.com/items.json`)
                const data = response.data
                const transformedData = data.map((item, index) => {
                    return {
                        ...item,
                        quantity: 0,
                        id: index
                    }
                })

                // console.log(transformedData)
                //  setLoader(false)
                setItems(transformedData)

            }
            catch (error) {
                // setLoader(false)
                console.log("error:", error)
                alert("some error occured")
            }
            finally {
                setLoader(false)
            }
        }
        fetchItems();
    }, [])

    useEffect(() => {
        if (eventState.id) {
            if (eventState.type === 1) {
                handleAddItem(eventState.id)
            }
            else if (eventState.type === -1) {
                handleRemoveItem(eventState.id)
            }
        }
    }, [eventState])

    const handleAddItem = (id) => {
        console.log(id)
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        data[index].quantity += 1
        setItems([...data])
        onAddItem(data[index])
    }

    const handleRemoveItem = (id) => {
        let data = [...items]
        let index = data.findIndex(i => i.id === id)
        if (data[index].quantity !== 0) {
            data[index].quantity -= 1
            setItems([...data])
            onRemoveItem(data[index])
        }
    }
    return (
        <>
            <div className={"product-list"}>
                <div className={"product-list--wrapper"}>
                    {/* <ListItem data={items[0]} />
                <ListItem data={items[1]} /> */}
                    {
                        items.map((item) => {
                            return (<ListItem
                                key={item.id}
                                data={item}
                                onAdd={handleAddItem}
                                onRemove={handleRemoveItem}
                            />)
                        })
                    }
                </div>
            </div>
            {loader && <Loader />}
        </>
    )
}

export default Product