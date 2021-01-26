import axios from "axios";
import React, { useState, useEffect } from "react";
import CourseInfo from "./courseInfo/CourseInfo";
import ModuleInfo from "./moduleInfo/ModuleInfo";
import SectionInfo from "./sectionInfo/SectionInfo";

const initialState = {
  courses: [],
};

const courseInitialState = {
  courseName: "",
  modulesCount: 0,
  modules: [],
};

const modulesInitialState = {
  moduleName: "",
  number: 0,
  sectionsCount: 0,
  homeWork: {
    gitRepository: "",
    workPage: "",
  },
  sections: [],
};

const sectionInitialState = {
  sectionName: "",
  number: 0,
  references: {
    theory: "",
    youTube: "",
  },
};

const CourseRedactor = () => {
  const [courses, setCourses] = useState({ ...initialState });
  const [course, setCourse] = useState({ ...courseInitialState });
  const [mod, setModule] = useState({ ...modulesInitialState });
  const [sec, setSection] = useState({ ...sectionInitialState });

  useEffect(() => {
    axios
      .get(`https://rest-6b03b-default-rtdb.firebaseio.com/courses.json`)
      .then((res) =>
        setCourses((prevState) => ({
          ...prevState,
          courses: [
            ...Object.keys(res.data).map((key) => ({
              id: key,
              ...res.data[key],
            })),
          ],
        }))
      );
  }, []);

  const onHandleSubmit = () => {
    axios
      .post(
        `https://rest-6b03b-default-rtdb.firebaseio.com/courses.json`,
        course
      )
      .then(() => setCourse({ ...courseInitialState }));
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    const callbackName = e.target.dataset.func;
    switch (callbackName) {
      case "courses":
        setCourse((prevState) => ({ ...prevState, [name]: value }));
        break;
      case "modules":
        setModule((prevState) => ({ ...prevState, [name]: value }));
        break;
      case "homeWork":
        setModule((prevState) => ({
          ...prevState,
          homeWork: { ...prevState.homeWork, [name]: value },
        }));
        break;
      case "sections":
        setSection((prevState) => ({ ...prevState, [name]: value }));
        break;

      case "references":
        setSection((prevState) => ({
          ...prevState,
          references: { ...prevState.references, [name]: value },
        }));
        break;

      default:
        return;
    }
  };

  const pushState = (e) => {
    e.preventDefault();
    const callbackName = e.target.dataset.func;
    switch (callbackName) {
      case "modules":
        setCourse((prevState) => ({
          ...prevState,
          modulesCount: prevState.modulesCount + 1,
          modules: [...prevState.modules, mod],
        }));

        setModule({ ...modulesInitialState });
        break;

      case "sections":
        setModule((prevState) => ({
          ...prevState,
          sectionsCount: prevState.sectionsCount + 1,
          sections: [...prevState.sections, sec],
        }));
        setSection({ ...sectionInitialState });
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <CourseInfo
        courseName={course.courseName}
        modulesCount={course.modulesCount}
        onHandleChange={onHandleChange}
      />
      <ModuleInfo
        moduleName={mod.moduleName}
        number={mod.number}
        sectionsCount={mod.sectionsCount}
        gitRepository={mod.homeWork.gitRepository}
        workPage={mod.homeWork.workPage}
        onHandleChange={onHandleChange}
        pushState={pushState}
      />
      <SectionInfo
        sectionName={sec.sectionName}
        number={sec.number}
        theory={sec.references.theory}
        youTube={sec.references.youTube}
        onHandleChange={onHandleChange}
        pushState={pushState}
      />
      <button type='button' onClick={onHandleSubmit}>
        Save course
      </button>
    </div>
  );
};

export default CourseRedactor;

// const courses = [
//   {
//     id: "eretert",
//     courseName: "html",
//     modulesCount: 0,
//     modules: [
//       {
//         moduleName: "tags",
//         number: "0",
//         sectionsCount: 0,
//         homeWork: {
//           gitRepository: "000000000",
//           workPage: "11111111111",
//         },
//         sections: [
//           {
//             sectionName: "",
//             number: "0",
//             references: {
//               theory: "",
//               youTube: "",
//             },
//           },
//         ],
//       },
//       {
//         moduleName: "Browser environments",
//         number: "0",
//         sectionsCount: 0,
//         homeWork: {
//           gitRepository: "000000000",
//           workPage: "11111111111",
//         },
//         sections: [
//           {
//             sectionName: "",
//             number: "0",
//             references: {
//               theory: "",
//               youTube: "",
//             },
//           },
//         ],
//       },
//     ],
//   },
// ];
