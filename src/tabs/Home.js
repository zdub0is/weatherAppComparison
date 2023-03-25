import { Container, Button, Row, Col } from 'react-bootstrap';

function Home() {
    return (
        <Container className="Home bg-dark text-light min-vw-100 min-vh-100">
        <Row className="d-flex justify-content-center" xs={2} md={3}>
            <Container className='text-center myCard p-3 mt-5'>
                <h1>Comparison of Multiple AIs</h1>
                <p>Lorem ipsum</p>
                <Row className='d-flex justify-content-center' xs={2} md={4}>
                    <Col>
                        <Button disabled>Portfolio</Button>
                    </Col>
                    <Col>
                        <Button >Github</Button>
                    </Col>
                </Row>
            </Container>
        </Row>
        <Row className="text-center my-3">
            <h1>The Details</h1>
        </Row>
        <Row xs={1} md={3} className="d-flex justify-content-center mx-md-5">
            <Col> 
                <Container className='text-center myCard p-2 my-3'>
                    <h2>The Purpose</h2>
                    <p>Right Here will go my purpose for making this project.</p>
                </Container>
            </Col>
            <Col>
                <Container className='text-center myCard p-2 my-3'>
                    <h2>The Plan</h2>
                    <p>Right Here will go my purpose for making this project.</p>
                </Container>
            </Col>
            <Col>
                <Container className='text-center myCard p-2 my-3'>
                    <h2>The Prompt(s)</h2>
                    <p>Right Here will go my purpose for making this project.</p>
                </Container>
            </Col>
            <Col>
                <Container className='text-center myCard p-2 my-3'>
                    <h2>The Participants</h2>
                    <p>Right Here will go my purpose for making this project.</p>
                </Container>
            </Col>
            <Col>
                <Container className='text-center myCard p-2 my-3'>
                    <h2>The Period</h2>
                    <p>Right Here will go my purpose for making this project.</p>
                </Container>
            </Col>
            <Col>
                <Container className='text-center myCard p-2 my-3'>
                    <h2>The Problems</h2>
                    <p>Right Here will go my purpose for making this project.</p>
                </Container>
            </Col>
            <Col>
                <Container className='text-center myCard p-2 my-3'>
                    <h2>The Payoff</h2>
                    <p>Right Here will go my purpose for making this project.</p>
                </Container>
            </Col>
        </Row>
        </Container>
    )
}

export default Home;