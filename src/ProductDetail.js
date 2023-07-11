import { useParams } from 'react-router-dom';
import product from './db.json';

function ProductDetail() {
    const { id } = useParams();

    // Lấy thông tin sản phẩm từ ID trong đường dẫn
    const productDetail = product.products.find(
        (product) => product.id === parseInt(id)
    );

    if (!productDetail) {
        return <div>Product not found</div>;
    }

    return (
        <div>
            <h2>Product Detail</h2>
            <p>ID: {productDetail.id}</p>
            <p>Name: {productDetail.name}</p>
            <p>Price: {productDetail.price}</p>
        </div>
    );
}

export default ProductDetail;