import { API } from "./API/API.js";
import { Course } from "./API/APIObjects/Course.js";
import { CourseParticipation } from "./API/APIObjects/CourseParticipation.js";
import { SelectInput, SelectOption } from "./components/inputs/SelectInput.js";
import { Form } from "./global/form/Form.js";

let allCourses: Array<Course>;
let coursesParticipations: Array<CourseParticipation>;

const getInfosFromApi = async () => {
    allCourses = await API.getCourses();
    coursesParticipations = await API.getCourseParticipation();
}
const possibleCourses: Array<Course> = [];

getInfosFromApi().then(() => {
    for(const course of allCourses) {
        let available = true;
        for(const courseParticipation of coursesParticipations) {
            if(course.id == courseParticipation.course_id) {
                available = false;
            }
        }
        if(available) {
            possibleCourses.push(course);
        }
    }

    const selectOptions: Array<SelectOption> = [];
    
    for(const course of possibleCourses) {
        selectOptions.push({
            name: course.course_name.value,
            value: course.id.value
        });
    }

     const form = new Form([
        {
            name: "courses",
            input: new SelectInput(true, selectOptions)
        }
    ], "Start");

    

})
