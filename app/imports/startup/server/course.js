import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { Courses } from '../../api/course/course.js';

/** Initialize the database with a default data document. */
function addData(data) {
  console.log(`  Adding: ${data.className}`);
  Courses.insert(data);
}

/** Initialize the collection if empty. */
if (Courses.find().count() === 0) {
  if (Meteor.settings.classData) {
    console.log('Creating default data.');
    Meteor.settings.classData.map(data => addData(data));
  }
}

/** This subscription publishes only the documents associated with the logged in user */
Meteor.publish('Courses', function publish() {
  return Courses.find();
  return this.ready();
});

/** This subscription publishes all documents regardless of user, but only if the logged in user is the Admin. */
Meteor.publish('CoursesAdmin', function publish() {
  if (this.userId && Roles.userIsInRole(this.userId, 'admin')) {
    return Courses.find();
  }
  return this.ready();
});
