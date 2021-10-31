import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Select from 'react-select';
import NumericInput from 'react-numeric-input';
import '../../css/Styles.css';

export default function MyPage() {
  const options = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    // { value: "vanilla", label: "Vanilla" }
  ];

  const products = [
    { value: 'Chocoloate', label: 'Chocoloate' },
    { value: 'Biscuit', label: 'Biscuit' },
    { value: 'Daily Needs', label: 'Daily Needs' },
    { value: 'Ice-cream', label: 'Ice-cream' },
    { value: 'Study material', label: 'Study material' },
  ];

  return (
    <Form style={{ backgroundColor: '#19194d', padding: '15px' }}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Product Name</Form.Label>
          <Form.Control placeholder="Parle-G" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Product Category</Form.Label>
          <Select placeholder="Biscuit" options={products} />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridAddress1">
          <Form.Label>Product Code</Form.Label>
          <Form.Control placeholder="ABCDEF" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Product Size</Form.Label>
          <Form.Control placeholder="100g, 200mL, ..." />
        </Form.Group>
      </Row>

      <Row className="mb-3">
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
      </Row>

      <Row className="mb-3">
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
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
