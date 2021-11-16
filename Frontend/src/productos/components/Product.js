import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Product1 = ({ Products }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Header>
        <center>
          <h2>{Products}</h2>
        </center>
      </Card.Header>
      <Card.Img
        variant="top"
        src={Products.url}
        width={300}
        height={300}
        alt="300x300"
        rounded
      />
      <Card.Body>
        <Card.Title>{Products.title}</Card.Title>
        <Card.Text>{Products.description}</Card.Text>
        <Button variant="danger" size="sm">
          ${Products.price}
        </Button>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button variant="danger" size="sm">
          {Products.category}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product1;
