import React from "react";
import './Courses.scss'




interface CoursesListType {
    id: string;
    name: string;
    image: string;
    bgColor: string;
}

export const CoursesList = (props: CoursesListType) => {
    return (
            <div  className={`course`}>
                <img src={props.image} alt={props.name} style={{ backgroundColor: props.bgColor }}/>
                <h2>{props.name}</h2>
            </div>

    );
};
