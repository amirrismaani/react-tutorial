import { Component, useState } from "react";
import Product from "../Product/Product";

// Function based component
// Version 16.8 >
// 2018 >
// Use lifecycle and state
const Products = () => {
    // useState return an array with 2 item => [data, updateDataFunction]
    const [products, setProducts] = useState([
        { id: 1, name: 'React', price: '100 $' },
        { id: 2, name: 'Vue', price: '99 $' },
        { id: 3, name: 'JavaScript', price: '90 $' }
    ]);

    const changePriceHandler = () => {
        setProducts([
            { id: 1, name: 'React', price: '150 $' },
            { id: 2, name: 'Vue', price: '160 $' },
            { id: 3, name: 'JavaScript', price: '120 $' }
        ])
    }

    return (
        <div>
            <h1>Products</h1>
            {products.map(product => <Product name={product.name} price={product.price} key={product.id} />)}
            <button onClick={changePriceHandler}>Change price</button>
        </div>
    );
}

// Class based component
// class Products extends Component {
//     state = {
//         products: [
//             { id: 1, name: 'React', price: '99 $' },
//             { id: 2, name: 'Vue', price: '99 $' },
//             { id: 3, name: 'JavaScript', price: '90 $' }
//         ]
//     }

//     changePriceHandler = () => {
//         this.setState({
//             products: [
//                 { id: 1, name: 'React', price: '120 $' },
//                 { id: 2, name: 'Vue', price: '120 $' },
//                 { id: 3, name: 'JavaScript', price: '100 $' }
//             ]
//         })
//     }

//     render() {
//         return (
//             <div>
//                 <h1>Products</h1>
//                 {this.state.products.map(product => <Product name={product.name} price={product.price} key={product.id} />)}
//                 <button onClick={this.changePriceHandler}>Change price</button>
//             </div>
//         );
//     }
// }

export default Products;