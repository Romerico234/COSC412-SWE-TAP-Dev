import { ICourseService } from "./interfaces/icourse.service";
import Course, { ICourse } from "../../shared/types/models/course.schema";

export class CourseService implements ICourseService {
    public async getAllCourses(): Promise<ICourse[]> {
        return Course.find().exec();
    }

    public async getCourseById(courseId: string): Promise<ICourse | null> {
        return Course.findById(courseId).exec();
    }

    public async getCourseBySubjectAndCatalogNumber(
        subject: string,
        catalogNumber: string
    ): Promise<ICourse | null> {
        return Course.findOne({
            subject: subject,
            catalogNumber: catalogNumber,
        }).exec();
    }
}
