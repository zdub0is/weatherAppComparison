import { Container, Button, Row } from 'react-bootstrap';

function Home() {
    return (
        <Container className="Home d-flex bg-dark text-light bg">
        <Row>
            <Container className='text-center myCard mx-3 p-2'>
                <h1>Comparison of Multiple AIs</h1>
                <p>Lorem ipsum</p>
                <Row>
                <Button>Portfolio</Button>
                <Button>Github</Button>
                </Row>
            </Container>
        </Row>
        <Row md={2}>
            
        </Row>
        </Container>
    )
}

export default Home;