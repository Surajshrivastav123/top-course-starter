import React from "react";
import {FcLike} from "react-icons";
const Card=(props)=>{
   let course=props.course;
    let likedcourse=props.likedcourse;
    let setLikedcourse=props.setLikedcourse;
return(
    <div>
       <div>
        <img src={course.image.url}/>
       </div>
        <div>
            <p>{course.title}</p>
            <p>{course.description}</p>
        </div>

    </div>
)


}
export default Card;