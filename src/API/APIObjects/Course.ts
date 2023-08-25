import { APIObject, APIAttribute } from "../../global/APIObject.js";

export class Course implements APIObject {
    public id: APIAttribute;
    public course_name: APIAttribute;
    public registration_price: APIAttribute;

    constructor(id: string, course_name: string, registration_price: string) {
        this.id = {
            value: id,
            detail: true
        };
        this.course_name = {
            value: course_name,
            detail: false
        };
        this.registration_price = {
            value: registration_price,
            detail: false
        };
    }
    [key: string]: APIAttribute;
}