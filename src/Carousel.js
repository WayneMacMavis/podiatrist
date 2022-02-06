import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Image from './image.jpg';
import Image2 from './image2.jpg';
import Image3 from './image3.jpg';
import Logo from './logo.jpg';
import Pic from './picture.jpg';
import './Carousel.css';
  
export default function App() {
  return (
    <div className="main" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '67%', padding: 0, margin: 'auto', fontFamily: 'Merriweather, serif', textAlign: 'center'}}>

<Row className="row" xs={12} md={12} lg={12} style={{
  display: 'flex',
  flexDirection: 'row',
          width: '55vw',
          height: '20vh',
          marginBottom: '10px',
        }}>
        <Col style={{
          // backgroundColor: 'red',
          // width: '40vw',
          textAlign: 'center', 
        }}>
          <img style={{height: '22vh', margin: 'auto',}}
          className="d-block w-100"
src={Logo}
          alt="One"
        />
      </Col>
        <Col className='col' xs={6} md={6} lg={6} style={{
          // width: '10vw',
          // backgroundColor: 'yellow',
          height: `14vh`,
          textAlign: 'center', 
          borderBottom: '1px solid lightgrey',
          marginTop: '20px',
          color: '#008080',
        }}>
          <h1 style={{fontSize: '35px'}}>Name of Company</h1>
          <h2 style={{fontSize: '24px'}}>Dr Somebody</h2>
          <h3 style={{fontSize: '18px'}}>123 Unknown Road, Table View, Cape Town</h3>
      </Col>
        <Col style={{
          // backgroundColor: 'green',
        }}>
          <div className="btn-container" style={{display: 'flex', alignItems: 'center', flexDirection: 'column', marginTop: '40px', marginLeft: '0px', width: '100%'}}>
          <Button className="btn btn-primary" style={{width: '70%', height: '40px', padding: '5px', marginLeft: '40px', marginBottom: '20px', boxShadow: '2px 2px 8px #888888', backgroundColor: '#008080',}} variant="primary" size="lg" active>
    BOOKINGS
  </Button>{' '}
  <Button className="btn btn-primary" style={{width: '70%', height: '40px', marginLeft: '40px', padding: '5px', boxShadow: '2px 2px 8px #888888', backgroundColor: ' #000080',}} variant="primary" size="lg" active>
    ENQUIRES
  </Button>{' '}
  </div>
      </Col>
      </Row>
      <Navbar className="nav" style={{position: 'absolute', top: '17%', fontSize: '20px', display: 'flex', justifyContent: 'center', boxShadow: 'none'}} collapseOnSelect expand="lg">
      <Navbar.Toggle style={{boxShadow: 'none'}} aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Item className='item'>
        <Nav.Link className="link" style={{color: '#008080',}} href="/home"><h5>HOME</h5></Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link style={{color: '#008080',}}eventKey="link-1"><h5>TREATMENTS</h5></Nav.Link>
    </Nav.Item>
        </Nav>
        <Nav className="mr-auto" style={{backgroundColor: 'none', height: '100%'}}>
        <Nav.Item>
      <Nav.Link style={{color: '#008080',}}eventKey="link-2"><h5>BOOKINGS</h5></Nav.Link>
    </Nav.Item>
    <Nav.Item>
    <Nav.Link style={{color: '#008080',}}eventKey="link-3"><h5>CONTACT</h5></Nav.Link>
    </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Carousel fade className="carousel" style={{position: 'relative', height: '100%',boxShadow: '5px 5px 8px #888888', marginTop: '5vh'}}>
      <Carousel.Item interval={5000}>
        <img style={{width: '100vw', height: '60vh', margin: 'auto',}}
src={Image}
          alt="One"
        />
        <Carousel.Caption>
          <h3>Label for first slide</h3>
          <p>Sample Text for Image One</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img style={{height: '60vh', margin: 'auto',}}
src={Image2}
          alt="Two"
        />
        <Carousel.Caption>
          <h3>Label for second slide</h3>
          <p>Sample Text for Image Two</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img style={{height: '60vh', margin: 'auto',}}
src={Image3}
          alt="Three"
        />
        <Carousel.Caption>
          <h3>Label for second slide</h3>
          <p>Sample Text for Image Three</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Row className="row" xs={12} md={12} lg={12} style={{
  display: 'flex',
  flexDirection: 'row',
  padding: '40px',
          width: '75vw',
          height: '50vh',
          marginTop: '10px',
        }}>
        <Col style={{
          textAlign: 'center', 
          margin: '30px',
          marginRight: '-20px',
        }}>
          <img style={{height: '50vh', margin: 'auto',}}
          className="d-block w-100"
src={Pic}
          alt="One"
        />
      </Col>
        <Col className='col' xs={6} md={6} lg={6} style={{
          width: '25vw',
          height: `14vh`,
          textAlign: 'center', 
          margin: '30x',
        }}>
          <h1 style={{color: '#008080',}}>Podiatry</h1>
<p>Commodo nulla facilisi nullam vehicula ipsum. In fermentum posuere urna nec tincidunt praesent semper feugiat. Sollicitudin aliquam ultrices sagittis orci a scelerisque. Libero justo laoreet sit amet cursus sit. Elementum eu facilisis sed odio morbi quis. Orci sagittis eu volutpat odio facilisis mauris. Laoreet suspendisse interdum consectetur libero id faucibus nisl tincidunt eget. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Sit amet risus nullam eget felis eget. Pretium lectus quam id leo.</p>
<p>Adipiscing elit duis tristique sollicitudin nibh sit. Ultrices sagittis orci a scelerisque purus semper. Tristique senectus et netus et. Integer eget aliquet nibh praesent. Mauris pharetra et ultrices neque ornare aenean euismod elementum nisi. Sit amet nisl purus in mollis nunc sed. Congue quisque egestas diam in arcu cursus euismod quis. Eu consequat ac felis donec et odio pellentesque diam. Mollis aliquam ut porttitor leo.</p>

      </Col>
      <Col className='col' style={{
          height: `10vh`,
          textAlign: 'center', 
          marginTop: '30px',
        }}>
          <h3 style={{color: '#008080',}}>ADDRESS :</h3>
          <h4 style={{fontSize: '18px'}}>123 Unknown Road, Table View, Cape Town</h4>
<h3 style={{color: '#008080',}}>OFFICE HOURS</h3>
          <h4 style={{fontSize: '18px'}}>Monday-Thursday: 10am-5pm</h4>
          <h4 style={{fontSize: '18px'}}>Friday: 10am-5pm</h4>
          <h4 style={{fontSize: '18px'}}>Saterday-Sunday: (Closed)</h4>
          <h3 style={{color: '#008080',}}>CONTACT DETAILS</h3>
          <h4 style={{fontSize: '18px'}}>+27 12 345 6789</h4>
          <h4 style={{fontSize: '18px', color: ' #000080'}}>bookings@business.com</h4>
          <h4 style={{fontSize: '18px'}}>Whatsapp, Email, or book online for appointments</h4>

      </Col>
      </Row>

  </div>
  );
}
