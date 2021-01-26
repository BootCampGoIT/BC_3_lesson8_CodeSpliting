import React from "react";

const CourseInfo = ({ courseName, onHandleChange, modulesCount }) => {
  return (
    <div
      className='courseInfo'
      style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
      <label>
        Title:
        <input
          type='text'
          name='courseName'
          value={courseName}
          onChange={onHandleChange}
          data-func='courses'
        />
      </label>
      <label> Modules count: {modulesCount}</label>
    </div>
  );
};

export default CourseInfo;
