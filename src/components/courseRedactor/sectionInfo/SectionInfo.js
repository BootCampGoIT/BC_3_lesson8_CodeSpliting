import React from "react";

const SectionInfo = ({
  sectionName,
  number,
  onHandleChange,
  theory,
  youTube,
  pushState,
}) => {
  return (
    <form
      className='section'
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
      }}
      onSubmit={pushState}
      data-func='sections'
      >
      <label>
        Section name:
        <input
          type='text'
          name='sectionName'
          value={sectionName}
          onChange={onHandleChange}
          data-func='sections'
        />
      </label>
      <br />
      <label>Number: {number}</label>
      <br />

      <div>
        <h5>References:</h5>
        <label>
          Theory:
          <input
            type='text'
            name='theory'
            value={theory}
            onChange={onHandleChange}
            data-func='references'
          />
        </label>
        <label>
          WorkPage:
          <input
            type='text'
            name='youTube'
            value={youTube}
            onChange={onHandleChange}
            data-func='references'
          />
        </label>
      </div>
      <button type='submit'>Add section</button>
    </form>
  );
};

export default SectionInfo;
