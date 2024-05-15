import React from "react";
import './Courses.scss'



interface CoursesListType {
    id: string;
    name: string;
    image: string;
    bgColor: string;
}



export const CoursesList = React.memo(({ name, id, image, bgColor }: CoursesListType) => {
    console.log('course')
    return (
        <div className="course" >
            <img src={image} alt={name} style={{ backgroundColor: bgColor }}/>
            <h2>{name}</h2>
        </div>
    );
});

export default CoursesList;
