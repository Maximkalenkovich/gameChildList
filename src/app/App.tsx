import React, {useMemo} from 'react';
import {TagList} from "../components/tagList/TagList";
import './App.scss';
import {CoursesList} from "../components/courses/CoursesList";
import {useCourses} from "./useCourses";

const App: React.FC = () => {
    const { courses, error, getUniqueTags, filteredCourses, handleTagClick,selectedTag } = useCourses();

    const uniqueTags = useMemo(getUniqueTags, [courses]);
    const filteredCoursesList = useMemo(() => filteredCourses, [filteredCourses]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="App">
            <TagList tags={uniqueTags} selectedTag={selectedTag} onTagClick={handleTagClick} />
            <div className={'courses-list'}>
                {filteredCoursesList.map((course) => (
                    <React.Fragment key={course.id}>
                        <CoursesList
                            name={course.name}
                            id={course.id}
                            image={course.image}
                            bgColor={course.bgColor}
                        />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default App;