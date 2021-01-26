import React from "react";

const ModuleInfo = ({
  moduleName,
  number,
  sectionsCount,
  gitRepository,
  workPage,
  onHandleChange,
  pushState,
}) => {
  return (
    <form
      className='modules'
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
      onSubmit={pushState}
      data-func='modules'>
      <label>
        Module name:
        <input
          type='text'
          name='moduleName'
          value={moduleName}
          onChange={onHandleChange}
          data-func='modules'
        />
      </label>
      <br />
      <label>Number: {number}</label>
      <br />
      <label>Sections count: {sectionsCount}</label>
      <div>
        <h5>Homework:</h5>
        <label>
          Git-repository:
          <input
            type='text'
            name='gitRepository'
            value={gitRepository}
            onChange={onHandleChange}
            data-func='homeWork'
          />
        </label>
        <label>
          WorkPage:
          <input
            type='text'
            name='workPage'
            value={workPage}
            onChange={onHandleChange}
            data-func='homeWork'
          />
        </label>
      </div>
      <button type='submit'>Add module</button>
    </form>
  );
};

export default ModuleInfo;
