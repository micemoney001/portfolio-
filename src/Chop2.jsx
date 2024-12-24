import React, { useEffect, useState } from 'react'
import Chopingmatt from './Chopingmatt'

const Chop2 = () => {
    const [products, setProducts] = useState([])
    const [newproduct, setNewProduct] = useState({
        image: "https://i.pravatar.cc",
        title: "",
        description: "",
        price: ""
    })
    useEffect(() => {
        const fetchTheData = async () => {
            try {
                const getProducts = await fetch("https://fakestoreapi.com/products")
                const convertToJson = await getProducts.json()
                // const limitcontent = convertToJson.splice(onabort, 20)
                setProducts(convertToJson)
            }
            catch (error) {
                console.log("Error getting", error)
            }
        }
        fetchTheData()
    }, [])

    const handleDelete = (index) => {
        const updatedlist = products.filter((item, delIndex) => delIndex !== index)
        setProducts(updatedlist)
    }

    const addproduct = () => {
        setProducts([...products, newproduct])
    }
    return (
        <div>
            <br /><br /><br />
            <div className='api'>
                {products.map((product, index) => (
                    <Chopingmatt key={index}
                        image={product.image}
                        title={product.title}
                        description={product.description}
                        price={product.price}
                        btn={() => handleDelete(index)}
                    />
                ))}
            </div>
            <div>
                <label>Tittle:</label>
                <input type="text" value={newproduct.title} onChange={(e) => setNewProduct({ ...newproduct, title: e.target.value })} />
                <br />
                <label >Descriptoin:</label>
                <input type="text" value={newproduct.description} onChange={(e) => setNewProduct({ ...newproduct, description: e.target.value })} />
                <br />
                <label>Price:</label>
                <input type="text" value={newproduct.price} onChange={(e) => setNewProduct({ ...newproduct, price: e.target.value })} /> <br />
                <button onClick={() => addproduct()}>Add Product</button>
            </div>
        </div>
    )
}

export default Chop2