import React from 'react';
import { Courses } from '/imports/api/course/course';
import CourseCard from '/imports/ui/components/CourseCard';
import { Container, Card, Loader } from 'semantic-ui-react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

class ListCourses extends React.Component {
  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader>Getting data</Loader>;
  }

  renderPage() {
    return (
        <Container>
          <Card.Group>
            {this.props.courses.map((course, index) => <CourseCard course={course} key={index} />)}
          </Card.Group>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
ListCourses.propTypes = {
  courses: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  // Get access to Stuff documents.
  const subscription = Meteor.subscribe('Courses');
  return {
    courses: Courses.find({}).fetch(),
    ready: subscription.ready(),
  };
})(ListCourses);
