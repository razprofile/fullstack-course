import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course.name}</h1>
    )
}
  


const Part = ({ part }) => {
    return (
      <p>
        {part.name} {part.exercises}
      </p>    
    )
}

const Total = ({ course }) => {
    const total = course.parts.map(part => part.exercises).reduce((s, p) => s + p);
    return(
      <strong>total of {total} exercises</strong>
    ) 
}

const Content = ({ course }) => {
    return (
      <div>
        {course.parts.map(part => <Part key={part.id} part={part} />)}
        {/* <Part part={course.parts[0]} />
        <Part part={course.parts[1]} />
        <Part part={course.parts[2]} /> */}
      </div>
    )
}

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
}

export default Course