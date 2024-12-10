import Database from "../Database/index.js";
import model from "./model.js";
import courseModel from "../Courses/model.js";

export async function findModulesForCourse(courseId) {
  // const course = await courseModel.findOne({ _id: courseId });
  // console.log(`debugging - ${course}`);
  return await model.find({ course: courseId });
}
export function createModule(module) {
  delete module._id;
  console.log(`new module is - ${module}`);
  return model.create(module);
}
export function deleteModule(moduleId) {
  return model.deleteOne({ _id: moduleId });
}
export function updateModule(moduleId, moduleUpdates) {
  console.log(`updated module is - ${moduleUpdates}`);
  return model.updateOne({ _id: moduleId }, moduleUpdates);
}