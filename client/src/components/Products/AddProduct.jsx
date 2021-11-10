import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React, {Fragment, useState} from 'react';
import {useHistory} from 'react-router-dom';
import '../../css/Styles.css';
import {addProduct} from '../../actions/product';
import {connect} from 'react-redux';

function AddProduct({addProduct}) {
 
  const [formData, setFormData] = useState({name : '', price : '', description : '', image : ''})

  let history = useHistory();

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
    addProduct({productData : formData, history})
  }

  return (
    <Form style={{ backgroundColor: '#19194d', height : '100vh', padding: '15px', paddingTop : '5%'}}>
      {/* <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Product Name</Form.Label>
          <Form.Control placeholder="Enter Product Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Product Price</Form.Label>
          <Select placeholder="Enter Price in Rs..." type="number" />
        </Form.Group>

        
      </Row> */}

      {/* <Row className="mb-6">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Product Description</Form.Label>
          <Form.Control placeholder="clears your head..." />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Price</Form.Label>
          <NumericInput
            className="form-control"
            style={false}
            placeholder="500"
          />
        </Form.Group>
      </Row> */}

      <h2 style={{padding : '20px', color: '#fff'}}>Add New Product</h2>
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
        Add Product
      </Button>
      {/* <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Stock Visibility</Form.Label>
          <Select options={options} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Refundable</Form.Label>
          <Select options={options} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cash On Delivery</Form.Label>
          <Select options={options} />
        </Form.Group>
      </Row> */}
    </Form>
   
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProduct : (obj) => dispatch(addProduct(obj))   //obj should contain history and productData
  }
}

export default connect(null, mapDispatchToProps)(AddProduct)