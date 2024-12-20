import { Request, Response, NextFunction } from "express";
import { ICourseController } from "./interfaces/icourse.controller";
import { CourseService } from "./course.service";

export class CourseController implements ICourseController {
    private courseService: CourseService;

    constructor() {
        this.courseService = new CourseService();
    }

    public getAllCourses = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const courses = await this.courseService.getAllCourses();
            res.json(courses);
        } catch (error) {
            next(error);
        }
    };

    public getCourseById = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const courseId = req.params.id;
            const course = await this.courseService.getCourseById(courseId);
            if (!course) {
                res.status(404).json({ message: "Course not found" });
            } else {
                res.json(course);
            }
        } catch (error) {
            next(error);
        }
    };

    public getCourseBySubjectAndCatalogNumber = async (
        req: Request,
        res: Response,
        next: NextFunction
    ) => {
        try {
            const { subject, catalogNumber } = req.params;
            const course =
                await this.courseService.getCourseBySubjectAndCatalogNumber(
                    subject,
                    catalogNumber
                );
            if (!course) {
                res.status(404).json({ message: "Course not found" });
            } else {
                res.json(course);
            }
        } catch (error) {
            next(error);
        }
    };
}
