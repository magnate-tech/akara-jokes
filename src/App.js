import React, { useState } from "react";
//Importing the various components to be used from React Bootstrap
import {
  Accordion,
  Card,
  Form,
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
//Importing Axios to easily use API
import axios from "axios";

function App() {
  //Dynamic storage of Joke Category
  const [category, setCategory] = useState();
  //Dynamic storage of data gotten from API
  const [dataa, setData] = useState({});
  //API LINK
  const apiLink = `https://v2.jokeapi.dev/joke/${category}?blacklistFlags=sexist&type=twopart`;
  //Function to get data from API on execution of an event
  const searchJoke = () => {
    axios.get(apiLink).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };
  return (
    <div className="app">
      <div className="container">
        <Card className="card">
          <Card.Body>
            <div className="top">
              <Container>
                <Row>
                  <Col xs={7}>
                    <Form.Select
                      size="lg"
                      value={category}
                      name="category"
                      id="jokeCategory"
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      <option value="Miscellaneous">Joke Category</option>
                      <option value="Miscellaneous">Miscellaneous</option>
                      <option value="Programming">Programming</option>
                      <option value="Dark">Dark</option>
                      <option value="Pun">Pun</option>
                      <option value="Spooky">Spooky</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Button variant="success" size="lg" onClick={searchJoke}>
                      Generate
                    </Button>
                  </Col>
                </Row>
              </Container>
            </div>
            {/*Data in body would not display until a sucsessful response is gotten from the API */}
            {dataa.setup !== undefined && (
              <div className="body">
                <div className="setup">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Setup</Accordion.Header>
                      <Accordion.Body>{dataa.setup}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
                <div className="delivery">
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>Delivery</Accordion.Header>
                      <Accordion.Body>{dataa.delivery}</Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default App;
