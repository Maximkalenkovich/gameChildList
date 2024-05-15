import {useEffect, useState} from "react";
import {Course, getCourses} from "../../api/api";

export function useCourses() {
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

    return { courses, error, getUniqueTags, filteredCourses, handleTagClick,selectedTag };
}
