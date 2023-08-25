import { API } from "../API/API.js";
import { Plane } from "../API/APIObjects/Plane.js";
import { User } from "../API/APIObjects/User.js";
import { CheckBoxInput } from "../components/inputs/CheckBoxInput.js";

let planes: Array<Plane>;
let instructors: Array<User>;
const getInfos = async () => {
    planes = await API.getPlanes()
    instructors = await API.getUsers({
        role: "instructor"
    });
}

const getDisponibility = async () => {
    
}

window.onload = () => {
    getInfos().then(() => {
        const planeSelector = document.getElementById("selectPlane");
        const instructorSelector = document.getElementById("selectInstructor");
        for(const plane of planes) {
            const option = document.createElement("option");
            option.innerText = plane.plane_name.value;
            option.value = plane.id.value;
            planeSelector?.appendChild(option);
        }

        for(const instructor of instructors) {
            const option = document.createElement("option");
            option.innerText = instructor.first_name.value + " " + instructor.last_name.value;
            option.value = instructor.id.value;
            instructorSelector?.appendChild(option);
        }


        const checkbox = <HTMLInputElement> document.getElementById("withInstructor");
        if(checkbox) {
            checkbox.onclick = () => {
                if(instructorSelector) {
                    if(checkbox.checked) {
                            instructorSelector.hidden = false;
                    } else {
                        instructorSelector.hidden = true;
                    } 
                }
            }
        }

        const startDate = <HTMLInputElement> document.getElementById("startDate");
        const startHour = <HTMLInputElement> document.getElementById("startHour");
        const endDate = <HTMLInputElement> document.getElementById("endDate");
        const endHour = <HTMLInputElement> document.getElementById("endHour");

        const checkDatesSet = () => {
            if(startDate.value === "" || startHour.value === "" || endDate.value === "" || endHour.value === "") {
                checkbox.hidden = true;
                if(planeSelector) {
                    planeSelector.hidden = true;
                }
                if(instructorSelector) {
                    instructorSelector.hidden = true;
                }

                console.log(startHour.value);
                
            } else {
                checkbox.hidden = false;
                if(planeSelector) {
                    planeSelector.hidden = false
                }
                if(instructorSelector && checkbox.checked) {
                    instructorSelector.hidden = false;
                }
                    const fullStartDate = ``
                for(const instructor of instructors) {

                }
            }
        }

        window.onclick = () => checkDatesSet();
        
    })
}