import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);
    const apiUrl = 'https://fakestoreapi.com/products';

    useEffect(() => {
        fetchData();
    }, [category]);

    const fetchData = () => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleCategoryClick = category => {
        setCategory(category);
    };

    const filteredProducts = category ? products.filter(product => product.category === category) : products;

    const categories = ['electronics', 'jewelery', "men's clothing", "women's clothing", null];

    const cardStyle = {
        width: '18rem', // Set a fixed width
        height: '30rem', // Set a fixed height
    };

    const cardImageStyle = {
        height: '200px', // Adjust height of the image to fit within card
        objectFit: 'contain', // Ensure the entire image is visible within the area
    };

    const cardBodyStyle = {
        overflow: 'auto', // Allow scrolling if content overflows
    };

    return (
        <Container>
            <Row className="mt-4">
                {categories.map(cat => (
                    <Col key={cat}>
                        <Button variant="primary" onClick={() => handleCategoryClick(cat)}>
                            {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : 'All'}
                        </Button>
                    </Col>
                ))}
            </Row>
            <Row className="mt-4">
                {filteredProducts.map(product => (
                    <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Card style={{ ...cardStyle, marginBottom: '20px' }}>
                            <Card.Img variant="top" src={product.image} style={cardImageStyle} />
                            <Card.Body style={cardBodyStyle}>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>{product.category}</Card.Text>
                                <Card.Text>${product.price}</Card.Text>
                                <Button variant="danger">Order Now</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Home;
