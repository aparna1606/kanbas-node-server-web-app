import * as enrollmentDao from "./dao.js";
export default function EnrollmentRoutes(app) {
  app.post("/api/enrollment/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    enrollmentDao.enrollUserInCourse(userId, courseId);
    res.send(200);
  });
  app.delete("/api/enrollment/:userId/:courseId", (req, res) => {
    const { userId, courseId } = req.params;
    enrollmentDao.unenrollUserFromCourse(userId, courseId);
    res.send(204);
  });
  app.get("/api/enrollment/:userId", (req, res) => {
    const { userId } = req.params;
    const enrollments = enrollmentDao.getUserEnrollments(userId);
    console.log("enrollments are - ", enrollments);
    return res.json(enrollments);
  });
}