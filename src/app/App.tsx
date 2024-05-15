import React, {useEffect, useState} from 'react';
import {Course,getCourses} from "../api/api";
import {TagList} from "../components/tagList/TagList";
import './App.scss';
import {CoursesList} from "../components/courses/CoursesList";


const App: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);


    useEffect(() => {
        getCourses()
            .then(data => {
                setCourses(data);
            })
            .catch(error => {
                setError(error);
            });
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const getUniqueTags = (): string[] => {
        const allTags = courses.flatMap((course) => course.tags);
        return Array.from(new Set(allTags));
    };

    const filteredCourses = selectedTag
        ? courses.filter((course) =>
            course.tags.some((tag) => tag.toLowerCase() === selectedTag.toLowerCase())
        )
        : courses;

    const handleTagClick = (tag: string) => {
        setSelectedTag(tag);
    };

    return (
        <div className="App">
            <TagList tags={getUniqueTags()} selectedTag={selectedTag} onTagClick={handleTagClick} />
          <div className={'courses-list'}>
            {filteredCourses.map((course) => (
                <div className={'courses-list__course'}>
                    <CoursesList name={course.name} id={course.id} image={course.image} />
                </div>

            ))}
          </div>
        </div>
    );
  }



export default App;