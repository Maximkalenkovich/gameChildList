import React from 'react';
import './TagList.scss'; // импорт файла со стилями

interface TagListProps {
    tags: string[];
    selectedTag: string | null;
    onTagClick: (tag: string) => void;
}

export const TagList: React.FC<TagListProps> = ({ tags, selectedTag, onTagClick }) => {
    return (
        <div className="tag-list">
            {tags.map((tag) => (
                <button key={tag} className={`tag-button ${selectedTag === tag ? 'selected' : ''}`} onClick={() => onTagClick(tag)}>
                    {tag}
                </button>
            ))}
        </div>
    );
};