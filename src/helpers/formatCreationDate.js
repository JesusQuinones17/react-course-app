function formatCreationDate (courseDate) {
    const courseDay = courseDate.slice(0, 2);
    const courseMonth = courseDate.slice(3, 5)
    const courseYear = courseDate.slice(6)
    const newCourseDate = courseDay + '.' + courseMonth + '.' + courseYear;
    return newCourseDate; 
 }

 export default formatCreationDate;