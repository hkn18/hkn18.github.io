import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** The CourseCard will display on the course listing page */
class CourseCard extends React.Component {
  render() {
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            {this.props.course.className}
          </Card.Header>
          <Card.Description>
            {this.props.course.description}
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
/** Require an array of Stuff documents in the props. */
CourseCard.propTypes = {
  course: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(CourseCard);
