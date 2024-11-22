import Database from "../Database/index.js";
export function enrollUserInCourse(userId, courseId) {
  const { enrollments } = Database;
  const enrollment = { _id: Date.now(), user: userId, course: courseId };
  enrollments.push(enrollment);
  return enrollment;
}
export function unenrollUserFromCourse(userId, courseId) {
  const { enrollments } = Database;
  Database.enrollments = enrollments.filter(
    (enrollment) => enrollment.user !== userId || enrollment.course !== courseId
  );
}
export function getUserEnrollments(userId) {
  const { enrollments } = Database;
  const userEnrollments = enrollments.filter(
    (enrollment) => enrollment.user === userId
  );
  return userEnrollments;
}