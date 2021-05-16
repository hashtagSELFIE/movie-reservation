import { Container, Card, Button } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
const Promotion = () => {
  return (
    <Container>
      <Container fluid className="d-flex p-3">
        <Card style={{ backgroundColor: "transparent" }}>
          <Card.Header className="text-center">NEWS</Card.Header>
          <Card.Body>
            <Card.Img
              className="vh-50"
              variant="top"
              src="https://cdn.pixabay.com/photo/2017/11/24/10/43/ticket-2974645_1280.jpg"
            />
            <Card.Title style={{ marginTop: ".75rem" }}>
              discount up to 50% on Wednesday!
            </Card.Title>
            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              iaculis vel est ut rhoncus. Donec gravida eu quam eget venenatis.
              Maecenas interdum odio semper viverra auctor. Nulla tincidunt eros
              vel quam accumsan ornare. Sed lorem nisi, facilisis vel luctus
              quis, pharetra eget elit. Suspendisse potenti. Quisque placerat
              magna eu elit lacinia consequat. Duis nibh elit, tincidunt eu arcu
              volutpat, cursus viverra nibh. Donec id euismod risus.
            </Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted">10/5/2021</Card.Footer>
        </Card>
      </Container>
    </Container>
  );
};
export default Promotion;
