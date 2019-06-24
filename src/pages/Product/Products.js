import React, { Component } from 'react';
import { Stitch, RemoteMongoClient } from 'mongodb-stitch-browser-sdk';
import BSON from 'bson';// BSON v4+ causing errors on product fetch/GET request

import Products from '../../components/Products/Products';

class ProductsPage extends Component {
  state = { isLoading: true, products: [] };
  componentDidMount() {
    this.fetchData();
  }

  productDeleteHandler = productId => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      'mongodb-atlas'
    );
    mongodb
      .db('shop')
      .collection('products')
      .deleteOne({ _id: new BSON.ObjectId(productId) })
      .then(result => {
        console.log(result);
        this.fetchData();
      })
      .catch(err => {
        this.props.onError(
          'Deleting the product failed. Please try again later'
        );
        console.log(err);
      });
  };

  fetchData = () => {
    const mongodb = Stitch.defaultAppClient.getServiceClient(
      RemoteMongoClient.factory,
      'mongodb-atlas'
    );
    mongodb
      .db('shop')
      .collection('products')
      .find()
      .asArray()
      .then(products => {//parse ObjectID & Decimal128 object types into normal javascript
        const transformedProducts = products.map(product => {
          product._id = product._id.toString();
          product.price = product.price.toString();
          return product;
        });
        console.log(products);//set isLoading to false because we are no longer 'loading' data at this point
        this.setState({ isLoading: false, products: products });
      })
      .catch(err => {
        this.setState({ isLoading: false });
        this.props.onError(
          'Fetching the products failed. Please try again later'
        );
        console.log(err);
      });
  };

  render() {

    let content = <p>Loading products...</p>;
    const logo = <img width="300px" src="./guitar-emporium.png" alt="guitar" />;


    if (!this.state.isLoading && this.state.products.length > 0) {
      content = (
        <Products
          products={this.state.products}
          onDeleteProduct={this.productDeleteHandler}
        />
      );
    }
    if (!this.state.isLoading && this.state.products.length === 0) {
      content = <p>Found no products. Try again later.</p>;
    }
    return <main>{content}</main>;
  }
}

export default ProductsPage;
