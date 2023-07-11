import React, { useState, useEffect, createContext, useContext } from 'react';
import product from "../src/product.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';

function ManageProduct() {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [deletedProduct, setDeletedProduct] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    

    useEffect(() => {
        // Đọc danh sách sản phẩm từ file db.json
        setProducts(product.products);
    }, []);
    useEffect(() => {
        if (!isLoggedIn) {
            window.location.href = '/login';
        }
    }, [isLoggedIn]);
    const handleViewDetail = (productId) => {
        // Xử lý hiển thị chi tiết sản phẩm với ID tương ứng
        console.log('View detail of product with ID:', productId);
        const product = products.find((product) => product.id === productId);
        setSelectedProduct(product);
    };

    const handleEdit = (productId) => {
        // Xử lý chuyển đến trang chỉnh sửa sản phẩm với ID tương ứng
        console.log('Edit product with ID:', productId);
    };

    const handleDelete = (productId) => {
        // Xử lý xóa sản phẩm với ID tương ứng

        console.log('Delete product with ID:', productId);
    };

    const handleCloseDetail = () => {
        // Đóng form chi tiết sản phẩm và đặt lại state
        setSelectedProduct(null);
    };

    return (
            <div>
            <h1 className='text-center' >Manage Products </h1>
            
            <Button onClick={() => setIsLoggedIn(false)}>Sign out</Button>
            <Table hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="table-primary">
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>
                                <Button  onClick={() => handleViewDetail(product.id)} color="primary">
                                    View detail
                                </Button>
                                <Button className='m-3' onClick={() => handleEdit(product.id)} color="warning">Edit</Button>
                                <Button  onClick={() => handleDelete(product.id)} color="danger">Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Hiển thị form chi tiết sản phẩm nếu có */}
            {selectedProduct && (
                <div>
                    <h2>Product Details</h2>
                    <p>ID: {selectedProduct.id}</p>
                    <p>Name: {selectedProduct.name}</p>
                    <p>Price: {selectedProduct.price}</p>
                    <button onClick={handleCloseDetail}>Close</button>
                </div>
            )}
        </div>
    );
}

export default ManageProduct;