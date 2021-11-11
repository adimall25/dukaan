import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {Fragment, useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import '../../css/Styles.css';
import {getProductUsingId, updateProductUsingId} from '../../actions/product';
import {connect} from 'react-redux';
import Spinner from '../Spinner';

function UpdateProduct({getProductUsingId, product, updateProductUsingId}) {
 
  let history = useHistory();

  const {product_id} = useParams();

  const [formData, setFormData] = useState({
    name : product.product?.name, 
    price : product.product?.price,
    description : product.product?.description, 
    image : product.product?.image
  })

  useEffect(() => {
      getProductUsingId(product_id)
  }, [getProductUsingId])

  useEffect(() => {
    setFormData({
        ...formData,
        name: product.product?.name,
        price : product.product?.price,
        description : product.product?.description,
        image : product.product?.image
    })
  }, [product.product?.name])

  

  function changeFormData(event)
  {
    setFormData({
      ...formData,
      [event.target.name] : event.target.value
    })
  }

  function formSubmit(event)
  {
    event.preventDefault();
    updateProductUsingId({productData : {...product.product, ...formData}, history})
  }

  return (
      product.loading || product.product === null ? <Spinner /> : <Fragment>
        <Form style={{ backgroundColor: '#19194d', height : '100vh', padding: '15px', paddingTop : '5%'}}>

        <h2 style={{padding : '20px', color: '#fff'}}>Update Product Details</h2>
        <hr style={{color:'#fff'}}></hr>
        <Row className="mb-6" style={{padding : '20px'}}>
            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control name = "name" placeholder="Enter Product Name" value={formData.name} onChange = {e => changeFormData(e)}/>
            </Form.Group>
        </Row>

        <Row className="mb-6" style={{padding : '20px'}}>
            <Form.Group as={Col} controlId="formGridAddress1">
            <Form.Label>Product Price</Form.Label>
            <Form.Control name = "price" placeholder="Enter price of product in Rs." type="number" value={formData.price} onChange = {e => changeFormData(e)}/>
            </Form.Group>
        </Row>

        <Row className="mb-6" style={{padding : '20px'}}>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Product Description</Form.Label>
            <Form.Control name = "description" as="textarea" placeholder="Describe your product" type="textarea" value={formData.description} onChange = {e => changeFormData(e)}/>
            </Form.Group>
        </Row>

        <Row className="mb-6" style={{padding : '20px'}}>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Image</Form.Label>
            <Form.Control name = "image" placeholder="Image Link..." value={formData.image} onChange = {e => changeFormData(e)}/>
            </Form.Group>
        </Row>

        <Button variant="primary" style={{margin : '20px'}} onClick={(e) => formSubmit(e)}>
            Update Product
        </Button>
        </Form>
      </Fragment>
    
   
  );
}

const mapStateToProps = (state) => {
    return {
        product : state.product
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProductUsingId : (product_id) => dispatch(getProductUsingId(product_id)),
    updateProductUsingId : (obj) => dispatch(updateProductUsingId(obj)) //obj contains productData and history
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateProduct)