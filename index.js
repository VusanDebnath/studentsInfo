import {students} from "./studentsInfo.js";

students.map((student) => {
    let Result = ` ${student.name}, Roll number ${student.roll}, and rank is.`
    console.log(Result);
});
