import Course, { ICourse } from "../types/models/course.schema";

export class CourseService {
    public async getAllCourses(): Promise<ICourse[]> {
        return Course.find().exec();
    }

    public async getCourseById(courseId: string): Promise<ICourse | null> {
        return Course.findById(courseId).exec();
    }

    public async searchCourses(query: any): Promise<ICourse[]> {
        // TODO: Implement search logic based on query parameters
        return Course.find(query).exec();
    }
}
