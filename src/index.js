import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Image, Menu, Card, Table, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Data from './data';
import Team from './about';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item as={NavLink} exact to="/"><p>HKN18</p></Menu.Item>
            <Menu.Item position="right" as={NavLink} exact to="/about"><p>About</p></Menu.Item>
            <Menu.Item as={NavLink} exact to="/subjects"><p>Subjects</p></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class Home extends React.Component {
  render() {
    return (
        <Image fluid src="team.jpg"/>
    )
  }
}

class Footer extends React.Component {
  render() {
    const lowerStyle = { color:"black", textAlign: "center" };
    return (
        <Container className="footer">
          <hr/>
          <p style={lowerStyle}>
            University of Hawai'i at Manoa<br/>
            Honolulu, HI 96822
          </p>
        </Container>
    )
  }
}

class About extends React.Component {
  render(){
    return(
        <Container>
          <Card.Group>
            {Team.map((person) =>
                <Card>
                  <Image className="aboutImage" src={person.image}/>
                  <Card.Content>
                    <Card.Header>
                      {person.name}
                    </Card.Header>
                    <Card.Meta>
                      {person.major}
                    </Card.Meta>
                    <Card.Description>
                      {person.description}
                    </Card.Description>
                  </Card.Content>
                </Card>
            )}
          </Card.Group>
        </Container>
    );
  }
}

class Subjects extends React.Component {
  render() {
    return (
        <Container>
          <Card.Group>
            {Data.subjects.map((subject) =>
                <Card centered as={NavLink} exact to={"/" + subject.url}>
                  <Card.Content>
                    <Card.Header>
                      {subject.title}
                    </Card.Header>
                    {/*<Card.Description>*/}
                    {/*{this.props.contact.description}*/}
                    {/*</Card.Description>*/}
                  </Card.Content>
                </Card>
            )}
          </Card.Group>
        </Container>
    )
  }
}

class Math extends React.Component {
  render() {
    return (
      <Container>
        {Data['math'].map((course) =>
            <div className="courseTable">
              <h2>
                {course.course}
              </h2>
              <Table celled striped>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Description</Table.HeaderCell>
                    <Table.HeaderCell>Link</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                {course.resources.map((resource, index) =>
                  <Table.Row>
                      <Table.Cell>
                        {index}
                      </Table.Cell>
                      <Table.Cell><Icon name='external square'/><a href={resource}>{resource}</a></Table.Cell>
                  </Table.Row>
                )}

              </Table>
            </div>
        )}
      </Container>
    );
  }
}

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
class App extends React.Component {
  render() {
    return (
        <Router>
          <div>
            <TopMenu/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/about" component={About}/>
              <Route exact path="/subjects" component={Subjects}/>
              <Route exact path="/math" component={Math}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
