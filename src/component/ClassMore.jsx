import React from 'react';
import cls from "../scss/pages/Admin.module.scss";
import CreateStudentInput from "./CreateStudentInput";


const ClassMore = () => {

  return (
    <React.Fragment>
      <>
        <div className={cls.container}>
          <CreateStudentInput />
        </div>
      </>
    </React.Fragment>
  )
}

export default ClassMore