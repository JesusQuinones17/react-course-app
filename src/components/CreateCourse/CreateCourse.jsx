import { useState } from 'react';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import { mockedAuthorsList } from '../../constants';

import './CreateCourse.css';
const forbiddenSymbols = /[@#$%^&]/;

function CreateCourse({ onClick }) {
    const [newAuthor, setNewAuthor] = useState('');
    const [courseData, setCourseData] = useState({
        title: '',
        description: '',
        authors: [],
        duration: ''
    });

    const handleAuthorChange = (event) => {
        setNewAuthor(event.target.value);
    }

    const handleTitleChange = (event) => {
        setCourseData({ ...courseData, title: event.target.value });
    };

    const handleDescriptionChange = (event) => {
        setCourseData({ ...courseData, description: event.target.value });
    };

    const handleCourseDurationChange = (event) => {
		setCourseData({ ...courseData, duration: event.target.value });
	};

    const handleCreateAuthor = () => {
		if (newAuthor.length >= 2) {
			const newAuthorId = `author-${Date.now()}`;
			const newAuthorObj = { id: newAuthorId, name: newAuthor };
			mockedAuthorsList.push(newAuthorObj);
			setNewAuthor(...newAuthor);
		} else {
			alert('Author name must be at least 2 characters');
		}
	};

    const handleCreateCourse = () => {
        if (courseData.title.length <= 2 && courseData.description.length <= 2 && courseData.authors.length <= 0 && courseData.duration <= 0) {
            alert('All fielrs are required!');
        } else {
            const courseId = `course-${Date.now()}`;
            const courseDate = new Date();
            const newCourse = {
                id: courseId,
                title: courseData.title,
                description: courseData.description,
                creationDate: courseDate,
                duration: courseData.duration,
                authors: courseData.authors
            };
            console.log(newCourse);
            onClick(newCourse);
        }
    }

    const handleAddAuthor = (authorId) => {
        const author = mockedAuthorsList.find((author) => author.id === authorId);
            if (author) {
                setCourseData({
                    ...courseData,
                    authors: [...courseData.authors, authorId]
                });
            }
    };

    const handleDeleteAuthor = (authorId) => {
        const updatedAuthors = courseData.authors.filter((id) => id !== authorId);
        setCourseData({ ...courseData, authors: updatedAuthors });
    };

    return (
        <div className='createCourse-form'>
            <div className='createCourse-form-info'>
                <form>
                    <label className='createCourse-form-text'>
                        Title: 
                        <input 
                            className='createCourse-form-title'
                            value={courseData.title}
                            type='text'
                            onChange={handleTitleChange}
                        />
                    </label>
                    <label className='createCourse-form-textarea'>
                        Description: 
                        <textarea 
                            className='createCourse-form-description'
                            value={courseData.description}
                            type='textarea'
                            onChange={handleDescriptionChange}
                        />
                    </label>
                </form>
                <div className='createCourse-authors'>
                    <div className='createCourse-authors-inputs'>
                        <div className='createCourse-authors-author-name'>
                        <div>
                                <Input 
                                    labelText='Author name'
                                    idInput='authorName'
                                    placeholderText='Enter author name'
                                    onChange={handleAuthorChange}
                                />
                                <Button onClick={handleCreateAuthor} buttonText='Create an author' />
                            </div>
                            <div className='createCourse-authors-courseDuration'>
                                <Input 
                                    labelText='Duration'
                                    idInput='courseDuration'
                                    placeholderText='Enter course duration' 
                                    onChange={handleCourseDurationChange}                                 
                                />
                                <Button onClick={handleCreateCourse} buttonText='Create course' />
                            </div>
                        </div>
                    </div>
                    <div className='createCourse-authors-right'>
                        <div className='createCourse-authors-created'>
                            <ul>
                                <h3>Authors: </h3>
                                {mockedAuthorsList.map((author) => (
                                    <li 
                                        className='createCourse-authors-author-name'
                                        key={author.id}
                                    >
                                            {author.name}
                                            <Button 
                                                className='createCourse-authors-author-btn'
                                                buttonText='Add author' 
                                                onClick={() => handleAddAuthor(author.id)}
                                            />
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='createCourse-authors-course-authors'>
                            <h3>Course Authors: </h3>
                            <ul>
                                {courseData.authors.map((authorId) => (
                                    <li key={authorId}>
                                        {mockedAuthorsList.find((author) => author.id === authorId)?.name}
                                        <Button 
                                            buttonText='Delete author'
                                            onClick={() => handleDeleteAuthor(authorId)} 
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCourse;
