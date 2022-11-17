import React from "react";
import {endpoints} from "../../utils/api";
import { classNumberFilterList} from "../../Filteter/FilterUtils";
import cls from './NumberFilter.module.scss'

const NumberFilter = ({numberFilterChange}) => {
  const [studentData , setStudentData] = React.useState(null)
  const [ numberfiltered, setNumberFiltered ] = React.useState(studentData)



  numberFilterChange(numberfiltered)


  React.useEffect(() => {


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

  function NumberFiltered(status) {
    if(status === 'all') {
      setNumberFiltered(studentData)
    } else {
      let newData = [...studentData].filter(item => item.numberClasses === status)
      setNumberFiltered(newData)
    }
  }


  return (
    <>
      <div className={cls.container}>
        {
          classNumberFilterList.map((item , index) => (
            <div
              className={cls.card}
              key={index}
              onClick={() => NumberFiltered(`${item.onClickNumber}`)}
              value={item.valueNumber}
            >
              {item.titleNumber}
            </div>
          ))

        }
      </div>
    </>
  );
};

export default NumberFilter;