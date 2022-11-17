import React from "react";
import {endpoints} from "../../utils/api";
import {classLetterFilterList} from "../../Filteter/FilterUtils";
import cls from './LetterFilter.module.scss'

const LetterFilter = ({setState}) => {
  const [studentData , setStudentData] = React.useState(null)
  const [ letterfiltered, setLetterFiltered ] = React.useState(studentData)



  React.useEffect(() => {
    setState(letterfiltered)

    endpoints.getClass().then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setStudentData(newData)
    })
  }, [])

  function LetterFiltered(status) {
    if(status === 'all') {
      setLetterFiltered(studentData)
    } else {
      let newData = [...studentData].filter(item => item.textClasses === status)
      setLetterFiltered(newData)
    }
  }

  return (
    <>
      <div className={cls.container}>
        {
          classLetterFilterList.map((item , index) => (
            <div
              className={cls.card}
              key={index}
              onClick={() => LetterFiltered(`${item.onClickLetter}`)}
              value={item.valueLetter}
            >
              {item.titleLetter}
            </div>
          ))
        }
      </div>
    </>
  );
};

export default LetterFilter;