import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavigationList from './Navigationlist';
import { Image } from 'react-bootstrap';
import shopLogo from './images/shop_logo.png';
function OffcanvasExample() {
  return (
    <>
      <Navbar bg='light' expand='false' className='mb-3 d-md-none d-xs-block'>
        <Container fluid>
          <Navbar.Brand href='#'>
            <Image
              src={shopLogo}
              style={{ width: 'auto', height: '40px' }}
            ></Image>
            <strong className='px-5'>My shop</strong>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-sm`}
            aria-labelledby={`offcanvasNavbarLabel-expand-sm`}
            placement='end'
          >
            <Offcanvas.Header closeButton>
              {/* <Offcanvas.Title id={`offcanvasNavbarLabel-expand-sm`}>
                Offcanvas
              </Offcanvas.Title> */}
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <NavigationList />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
