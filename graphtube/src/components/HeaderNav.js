import React from "react";
import {
  Navbar,
  Container,
  Row,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import grahCallLogo from "../assets/images/logo.png";
import { BsSearch } from "react-icons/bs";

class HeaderNav extends React.Component {
  handleChange = (event) => {
    this.setState({
      term: event.target.value,
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleFormSubmit(this.state.term);
  };
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Container>
          <Row className="align-items-center">
            <Navbar.Brand className="col-md" href="https://graphcall.com">
              <img
                className="img-fluid logo"
                src={grahCallLogo}
                alt="Graphcall Logo"
              />
            </Navbar.Brand>
          </Row>
          <Row className="align-items-center text-center">
            <Form onSubmit={this.handleSubmit} inline className="col-md">
              <Form.Text className="text-muted mr-3">
                Search for any video on youtube, we will do all the rest.
              </Form.Text>
              <Form.Group controlId="search">
                <FormControl
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Search"
                  className="mr-3"
                />
              </Form.Group>
              <Button type="submit" variant="dark">
                <BsSearch></BsSearch>
              </Button>
            </Form>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default HeaderNav;
