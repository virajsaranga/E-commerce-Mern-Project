import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import { useGetProductsQuery } from "../slices/productApiSlice";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import Paginate from "../components/Paginate";
import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";
import Filters from "../components/Filters";

const HomeScreen = () => {
  const { keyword, pageNumber } = useParams();

  // State for selected category
  const [category, setCategory] = useState("All");

  // Fetch products, including category in query parameters if a category is selected
  const { data, isLoading, error } = useGetProductsQuery({
    keyword,
    pageNumber,
    category: category !== "All" ? category : undefined, // Only send if a specific category is selected
  });

  return (
    <>
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light my-3">
          Go Back
        </Link>
      )}
      <Row>
        {/* Filters Section */}
        <Col md={3}>
          <Filters setCategory={setCategory} selectedCategory={category} />
        </Col>

        {/* Products Section */}
        <Col md={9}>
          {isLoading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">
              {error?.data?.message || error.error}
            </Message>
          ) : (
            <>
              <Meta />
              <h1>Trending Products</h1>
              <Row>
                {data.products.map((product) => (
                  <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    <Product product={product} />
                  </Col>
                ))}
              </Row>
              <Paginate
                pages={data.pages}
                page={data.page}
                keyword={keyword ? keyword : ""}
              />
            </>
          )}
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
