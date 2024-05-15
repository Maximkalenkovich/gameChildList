import React, {useCallback, useMemo} from 'react';
import {TagList} from "../components/tagList/TagList";
import './App.scss';
import {CoursesList} from "../components/courses/CoursesList";
import {useCourses} from "./useCourses/useCourses";

const App: React.FC = () => {
    console.log('app')
    const { courses, error, getUniqueTags, filteredCourses, handleTagClick,selectedTag } = useCourses();
    const uniqueTags = useMemo(getUniqueTags, [courses, getUniqueTags]);
    const filteredCoursesList = useMemo(() => filteredCourses, [filteredCourses]);

    const handleTagClickMemoized = useCallback(handleTagClick, [handleTagClick]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    return (
        <div className="App">
            <TagList tags={uniqueTags} selectedTag={selectedTag} onTagClick={handleTagClickMemoized} />
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

// оставил React.Fragment для возможного расширения

export default App;