import { Outlet } from 'react-router-dom';
import './App.css'
import './phg-ashes.css';
import { Col, Container, Row } from 'react-bootstrap'

function App() {

  return (
    <Container >
      <Row className="justify-content-md-center">
        <Col xs={12} className='cardlist-container' >
          <Outlet />
        </Col>
      </Row>
    </Container>
  )
}

export default App
