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
          <Card.Group itemsPerRow={3}>
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
            {Data.subjects.map((subject, index) =>
                <Card centered as={NavLink} exact to={"/" + subject.url} key={index}>
                  <Card.Content>
                    <Card.Header>
                      {subject.title}
                    </Card.Header>
                  </Card.Content>
                </Card>
            )}
          </Card.Group>
        </Container>
    )
  }
}

class Home extends React.Component {
  render() {
    // const center = { textAlign: 'center', marginTop: '0.4em' };
    const mBot = {
      textAlign: 'center',
      marginBottom: '0em',
      fontSize: '5em',
      color: '#207133'
    };
    const hrRule = {marginBottom: '1em'};
    return (
        <Container>
          {/*<Image fluid src="teamCrop.jpg"/>*/}
          <div className='homeContent'>
            <h1 style={mBot}>
              University of Hawai'i at Manoa<br/>EE Course Guide
            </h1>
            {/*<h3 style={center}>*/}
              {/*By Charles "Chuck" Wolstein, Sasha Yamada, Sean Teramae, Hidemasa "Vincent" Mitsui, and Huy Lam.*/}
            {/*</h3>*/}
            <h1>
              Subjects
            </h1>
            <hr style={hrRule} />
            <Subjects/>
          </div>
        </Container>
    )
  }
}

class ListCourses extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    let extension = this.props.location.pathname;
    extension = extension.slice(1);
    return (
      <Container>
        {Data.hasOwnProperty(extension)? (Data[extension].map((course, index) =>
            <div className="courseTable" key={index}>
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
                        {course.hasOwnProperty('description')? course.description[index] : index }
                      </Table.Cell>
                      <Table.Cell><Icon name='external square'/><a href={resource}>{resource}</a></Table.Cell>
                  </Table.Row>
                )}
              </Table>
            </div>
        )) : null}
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
              <Route exact path="/math" component={ListCourses}/>
              <Route exact path="/chemistry" component={ListCourses}/>
              <Route exact path="/physics" component={ListCourses}/>
              <Route exact path="/eecore" component={ListCourses}/>
              <Route exact path="/computer" component={ListCourses}/>
              <Route exact path="/system" component={ListCourses}/>
              <Route exact path="/x96" component={ListCourses}/>
              <Route exact path="/ep" component={ListCourses}/>
            </Switch>
            <Footer/>
          </div>
        </Router>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));
