import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button, Offcanvas } from 'reactstrap';

  
  export default function Header() {
    return (
      <>
      <Button variant="primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Link with href
      </Button>
      <Button variant="primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Button with data-bs-target
      </Button>

      <Offcanvas placement="start" show={true} onHide={() => {}} scroll={true} backdrop={true} keyboard={true} className="offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasExampleLabel">Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            Some text as a placeholder. In real life, you can have the elements you have chosen, like text, images, lists, etc.
          </div>
          <div className="dropdown mt-3">
            <Button variant="secondary" className="dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Dropdown button
            </Button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Action</a></li>
              <li><a className="dropdown-item" href="#">Another action</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>

    );
  }
  