import React from 'react'
import  useClass from "../hooks/useClass";
import cls from '../scss/pages/Admin.module.scss'
import CreateClassCard from "../component/CreateClassDropDown";
import {endpoints} from "../utils/api";
import {useNavigate} from "react-router-dom";


const Admin = () => {
  const navigate = useNavigate()
  const { actions } = useClass()
  const [textClasses , setTextClasses] = React.useState('')
  const [numberClasses , setNumberClasses] = React.useState('')


  const [rewData , setRewData] = React.useState('')
  // console.log(rewData)
  React.useEffect(() => {
    endpoints.getClass().then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setRewData(newData)
    })
  }, [])

  const heandleSubmit = e => {
    e.preventDefault()
    actions.post({
      textClasses,
      numberClasses,
    })
  }
  return (
    <React.Fragment>
      <>
        <div className={cls.container}>
          <CreateClassCard
                className={cls.subContainer}
                textClasses={textClasses}
                setTextClasses={setTextClasses}
                numberClasses={numberClasses}
                setNumberClasses={setNumberClasses}
                onSubmit={(heandleSubmit)} />
                
          <div className={cls.subContainer}>
            {
              rewData && rewData.map((item , index) => {
                return(
                  <div className={cls.addClass} onClick={() => navigate(`/class/${item.id}`)} key={index}>
                    <p className={cls.class_number}>{item.numberClasses}</p>
                    <h1 className={cls.class_text}>{item.textClasses}</h1>
                  </div>
                )
              })
            }
          </div>
        </div>
      </>
    </React.Fragment>
  )
}

export default Admin
