import React from "react";
import Card from "./Card";
const Cards=(props)=>{
let courses=props.courses;
console.log(courses);
function getcourses()
{
 let allcourse=[];
 Object.values(courses).forEach(array => {
    array.forEach(courseData=>{
        allcourse.push(courseData);
    })
 });
 return allcourse;
}
return(
    <div>
        {
            getcourses().map((course)=>(
                <Card key={course.id} course={courses}/>
            ))
        }
    </div>
)
}
export default Cards;