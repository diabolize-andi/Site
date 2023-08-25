import { APIObject, APIAttribute } from "../../global/APIObject.js";

export class CourseParticipation implements APIObject {
    [key: string]: APIAttribute;
    user_id: APIAttribute;
    course_id: APIAttribute;
    participation_date_time: APIAttribute;
    status: APIAttribute;

    constructor(user_id: string, course_id: string, participation_date_time: string, status: string) {
        this.user_id = {
            value: user_id,
            detail: false
        };

        this.course_id = {
            value: course_id,
            detail: false
        };

        this.participation_date_time = {
            value: participation_date_time,
            detail: false
        };

        this.status = {
            value: status,
            detail: false
        };
    }
}