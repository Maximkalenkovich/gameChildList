import React, { memo } from 'react';
import './TagList.scss';

interface TagListProps {
    tags: string[];
    selectedTag: string | null;
    onTagClick: (tag: string) => void;
}

export const TagList: React.FC<TagListProps> = memo(({ tags, selectedTag, onTagClick }) => {
    console.log('tag')
    return (
        <div className="tag-list">
            {tags.map((tag) => (
                <button
                    key={tag}
                    className={`tag-button ${selectedTag === tag ? 'selected' : ''}`}
                    onClick={() => onTagClick(tag)}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
});


