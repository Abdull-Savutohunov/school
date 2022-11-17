import React from 'react';
import cls from "../scss/components/ClassesCard.module.scss";
import {endpoints} from "../utils/api";
import {useNavigate} from "react-router-dom";

const HomeClass = ({data}) => {

  const navigate = useNavigate()


  return (
    <>
      <div className={cls.container}>
        {
          data && data.map((item , index) => {
            // console.log(item);
            return(
              <div className={cls.addClass} onClick={() => navigate(`/home/class/${item.id}`)} key={index}>
                <p className={cls.class_number}>{item.numberClasses}</p>
                <h1 className={cls.class_text}>{item.textClasses}</h1>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default HomeClass;