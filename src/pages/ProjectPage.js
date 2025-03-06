import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/ProjectPages.css';

// Generate random data for items
const generateRandomPrice = () => {
    return `PHP${(Math.random() * (100 - 10) + 10).toFixed(2)}`;
};

const generateRandomRating = () => {
    return (Math.random() * 5).toFixed(1);
};

const generateRandomSoldCount = () => {
    return Math.floor(Math.random() * 10000) + 1;
};

const generateRandomDescription = () => {
    const descriptions = [
        "This high-voltage generator is perfect for industrial use, offering reliable performance and safety features.",
        "Capture every moment with this mini WiFi camera. It's compact, easy to use, and delivers high-quality recordings.",
        "Portable and stylish, this perfume atomizer is perfect for on-the-go use. Refillable and leak-proof design.",
        "Stay protected and stylish with this tactical balaclava. Ideal for outdoor activities and extreme weather conditions.",
        "Protect your phone's screen with this anti-spy tempered glass. Durable and easy to install.",
        "Keep your grooming routine mess-free with this shaving apron. Made from waterproof material for easy cleaning."
    ];
    return descriptions[Math.floor(Math.random() * descriptions.length)];
};

const generateRandomCategory = () => {
    const categories = ["Electronics", "Home & Kitchen", "Beauty", "Fashion", "Accessories", "Tools"];
    return categories[Math.floor(Math.random() * categories.length)];
};

// Example project thumbnails
const exampleProjects = [
    { id: 1, image: 'https://picsum.photos/100/100?random=7' },
    { id: 2, image: 'https://picsum.photos/100/100?random=8' },
    { id: 3, image: 'https://picsum.photos/100/100?random=9' },
    { id: 4, image: 'https://picsum.photos/100/100?random=10' },
    { id: 5, image: 'https://picsum.photos/100/100?random=11' },
    { id: 6, image: 'https://picsum.photos/100/100?random=12' },
];

// Related products
const relatedProducts = [
    { id: 1, title: 'Wireless Earbuds', image: 'https://picsum.photos/100/100?random=13', price: 'PHP 1,299.00' },
    { id: 2, title: 'Smart Watch', image: 'https://picsum.photos/100/100?random=14', price: 'PHP 2,499.00' },
    { id: 3, title: 'Bluetooth Speaker', image: 'https://picsum.photos/100/100?random=15', price: 'PHP 1,799.00' },
];

const items = [
    { id: 1, title: '400KV High Voltage Generator', image: 'https://picsum.photos/300/200?random=1', price: generateRandomPrice(), rating: generateRandomRating(), sold: generateRandomSoldCount(), description: generateRandomDescription(), category: generateRandomCategory() },
    { id: 2, title: 'Mini Camera A9 WiFi Record', image: 'https://picsum.photos/300/200?random=2', price: generateRandomPrice(), rating: generateRandomRating(), sold: generateRandomSoldCount(), description: generateRandomDescription(), category: generateRandomCategory() },
    { id: 3, title: '5ml Perfume Atomizer Portable', image: 'https://picsum.photos/300/200?random=3', price: generateRandomPrice(), rating: generateRandomRating(), sold: generateRandomSoldCount(), description: generateRandomDescription(), category: generateRandomCategory() },
    { id: 4, title: 'Multicam Tactical Balaclava Face Mask', image: 'https://picsum.photos/300/200?random=4', price: generateRandomPrice(), rating: generateRandomRating(), sold: generateRandomSoldCount(), description: generateRandomDescription(), category: generateRandomCategory() },
    { id: 5, title: '1-4Pcs Anti Spy Tempered Glass', image: 'https://picsum.photos/300/200?random=5', price: generateRandomPrice(), rating: generateRandomRating(), sold: generateRandomSoldCount(), description: generateRandomDescription(), category: generateRandomCategory() },
    { id: 6, title: 'Male Shaving Apron Beard Cape', image: 'https://picsum.photos/300/200?random=6', price: generateRandomPrice(), rating: generateRandomRating(), sold: generateRandomSoldCount(), description: generateRandomDescription(), category: generateRandomCategory() },
];

const ProjectPage = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [selectedExampleProject, setSelectedExampleProject] = useState(null);
    const [quantity, setQuantity] = useState(1);

    const handleViewDetails = (item) => {
        setSelectedItem(item);
    };

    const handleCloseModal = () => {
        setSelectedItem(null);
        setSelectedExampleProject(null);
    };

    const handleViewExampleProject = (project) => {
        setSelectedExampleProject(project);
    };

    const handleQuantityChange = (e) => {
        setQuantity(parseInt(e.target.value));
    };

    return (
        <section className="pt-5 pb-5 bg-dark text-white">
            <h1 className="pt-5 text-white text-center">Project list</h1>
            <p className={"text-center"}>Description of the projects goes here. You can add more details about the types of projects listed and
                what the section contains.</p>

            <div className="gallery-container my-5">
                <div className="row">
                    {items.map((item) => (
                        <div key={item.id} className="col-md-4 col-sm-6 mb-4">
                            <div className="item-card">
                                <div className="image-container">
                                    <img src={item.image} alt={item.title} className="item-image"/>
                                    <div className="overlay">
                                        <div className="action-buttons">
                                            <button className="btn btn-buy">Buy Now</button>
                                            <button className="btn btn-details"
                                                    onClick={() => handleViewDetails(item)}>View Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-details">
                                    <h5 className="item-title">{item.title}</h5>
                                    <div className="price-rating">
                                        <span className="item-price">{item.price}</span>
                                        <span className="item-rating">⭐ {item.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedItem && (
                    <div className="modal-overlay">
                        <div className="modal-content xl-modal">
                            <button className="modal-close" onClick={handleCloseModal}>×</button>
                            <div className="row">
                                {/* Left Side: Main Image and Example Pictures */}
                                <div className="col-md-6">
                                    <div className="modal-image-container">
                                        <img src={selectedItem.image} alt={selectedItem.title}
                                             className="modal-image img-fluid"/>
                                    </div>
                                    <div className="example-projects-horizontal">
                                        {exampleProjects.map((project) => (
                                            <img
                                                key={project.id}
                                                src={project.image}
                                                alt={`Example ${project.id}`}
                                                className="example-project-image"
                                                onClick={() => handleViewExampleProject(project)}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Details */}
                                <div className="col-md-6 overflow-x-hidden modal-details-scrollable">
                                    <h2 className="modal-title">{selectedItem.title}</h2>
                                    <p className="modal-category"><strong>Category:</strong> {selectedItem.category}</p>
                                    <p className="modal-description">{selectedItem.description}</p>

                                    {/* Product Highlights */}
                                    <div className="product-highlights">
                                        <h5>Product Highlights:</h5>
                                        <ul>
                                            <li>High-quality materials</li>
                                            <li>Easy to use</li>
                                            <li>Durable and long-lasting</li>
                                            <li>Eco-friendly design</li>
                                        </ul>
                                    </div>

                                    {/* Quantity Selector */}
                                    <div className="quantity-selector mb-3">
                                        <label htmlFor="quantity">Quantity:</label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            value={quantity}
                                            min="1"
                                            onChange={handleQuantityChange}
                                            className="form-control w-25"
                                        />
                                    </div>

                                    {/* Progress Bar for Stock Availability */}
                                    <div className="stock-availability mb-3">
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{width: '75%'}}
                                                aria-valuenow={75}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            >
                                                75% in stock
                                            </div>
                                        </div>
                                    </div>

                                    {/* Price and Rating */}
                                    <div className="modal-price-rating">
                                        <span className="modal-price">{selectedItem.price}</span>
                                        <span className="modal-rating">⭐ {selectedItem.rating}</span>
                                    </div>
                                    <div className="modal-sold-count">Sold: {selectedItem.sold}</div>

                                    {/* Action Buttons */}
                                    <div className="action-buttons-modal">
                                        <button className="btn btn-buy">Buy Now</button>
                                        <button className="btn btn-wishlist">Add to Wishlist</button>
                                    </div>

                                    {/* Related Products */}
                                    <div className="related-products mt-4">
                                        <h5>Related Products:</h5>
                                        <div className="row">
                                            {relatedProducts.map((product) => (
                                                <div key={product.id} className="col-md-4">
                                                    <img src={product.image} alt={product.title} className="img-fluid"/>
                                                    <p>{product.title}</p>
                                                    <p>{product.price}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {selectedExampleProject && (
                    <div className="modal-overlay">
                        <div className="modal-content xl-modal">
                            <button className="modal-close" onClick={() => setSelectedExampleProject(null)}>×</button>
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={selectedExampleProject.image} alt="Example Project"
                                         className="modal-image img-fluid"/>
                                </div>
                                <div className="col-md-6">
                                    <h2 className="modal-title">Example Project</h2>
                                    <p className="modal-description">Click on the images above to view more details
                                        about this product.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProjectPage;