import React from 'react'
import { endpoints } from "../../utils/api";
import { classLetterFilterList } from "../../Filteter/FilterUtils";
import cls from './LetterFilter.module.scss'
import { useNavigate } from 'react-router-dom';

const LetterFilter = () => {
  const [studentData, setStudentData] = React.useState(null)
  const [letterfiltered, setLetterFiltered] = React.useState(studentData)
  // const [ numberfiltered, setNumberFiltered ] = React.useState(studentData)

  // const [data, setData] = React.useState([])
  const navigate = useNavigate('')

  

  React.useEffect(() => {

    endpoints.getClass().then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setLetterFiltered(newData)
      setStudentData(newData)
      // setNumberFiltered(newData)
    })
  }, [])

  function LetterFiltered(status) {
    // console.log(status);
    if (status === 'all') {
      setLetterFiltered(studentData)
    } else {
      let newDatatext = [...studentData].filter(item => item.textClasses === status ? item.textClasses === status : item.numberClasses === status)
      setLetterFiltered(newDatatext)
    }
  } 

  return (
    <>

    <div className={cls.container}/>

      <div className={cls.inputContainer}>
        {
          classLetterFilterList.map((item, index) => (
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

      <div className={cls.cardContainer}>
        {
          letterfiltered && letterfiltered.map((item, index) => (
            <div className={cls.addClass} onClick={() => navigate(`/home/class/${item.id}`)} key={index}>
              <p className={cls.class_number}>{item.numberClasses}</p>
              <h1 className={cls.class_text}>{item.textClasses}</h1>
            </div>
          ))
        }
      </div>
      <div/>
    </>
  )
}

export default LetterFilter
