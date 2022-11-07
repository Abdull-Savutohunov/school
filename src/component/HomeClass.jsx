import React from 'react';
import cls from "../scss/components/ClassesCard.module.scss";
import {endpoints} from "../utils/api";
import {useNavigate} from "react-router-dom";

const HomeClass = () => {
  const [rewData , setRewData] = React.useState('')
  const navigate = useNavigate()
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

  return (
    <div>
      {
        rewData && rewData.map((item , index) => {
          // console.log(item);
          return(
            <div onClick={() => navigate(`/home/class/${item.id}`)} key={index}>
              <p className={cls.class_number}>{item.numberClasses}</p>
              <h1 className={cls.class_text}>{item.textClasses}</h1>
            </div>
          )
        })
      }
    </div>
  );
};

export default HomeClass;