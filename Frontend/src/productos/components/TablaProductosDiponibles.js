import Product1 from "./Product";
import { Container, Row, Col } from "react-bootstrap";

const TablaProductos = () => {
  const Products = [
    {
        id : "001",
        title: "Bicicleta básica de ruta",
        description: "Bicicleta de ruta básica, grupo básico",
        price: 650000,
        category: "Ruta",
        url:"https://imagizer.imageshack.com/img923/4950/5dKOvw.jpg", 
    },
    {
        id: "002",
        title: "Bicicleta básica de montaña",
        description: "Bicicleta de montaña básica, grupo básico",
        price: 890000,
        category: "MTB",
        url: "https://imagizer.imageshack.com/img924/6297/xsOcZR.jpg",
    }
];


  return (
    <Container>
      <Row>
        {Products.map((product) => (
          <Col xs={4}>
            <Product1 Products={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TablaProductos;
