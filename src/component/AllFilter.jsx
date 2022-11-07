import React from "react";
import {endpoints} from "../utils/api";
import {classNumberFilterList} from "../Filteter/FilterUtils";


const AllFilter = () => {
  const [studentData , setStudentData] = React.useState(null)
  const [ numberfiltered, setNumberFiltered ] = React.useState(studentData)
  console.log(numberfiltered)


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
      let newTodo = [...studentData].filter(item => item.numberClasses === status)
      setNumberFiltered(newTodo)
    }
  }

  return (
    <div>
      {
        classNumberFilterList.map((item , index) => (
          <div
            key={index}
            onClick={() => NumberFiltered(`${item.onClickNumber}`)}
            value={item.valueNumber}
          >
            {item.titleNumber}
          </div>
        ))
      }

    </div>
  );
};

export default AllFilter;