import React, {useState} from 'react';
import cls from "../scss/components/HomeClassMore.module.scss";
  import {endpoints} from "../utils/api";
import {useParams} from "react-router-dom";

const HomeClassMore = () => {
  const [student , setStudent] = useState(null)
  const {id} = useParams()


  React.useEffect(() => {
    endpoints.heandleClassMore(id).then(r => {
      const newDate = Object.entries(r.data.students).map(([id , item]) => {
        return{
          id ,
          ...item
        }
      })
      setStudent(newDate)
    })
  }, [])


  return (
    <>
      <div className={cls.container}>
        <div className={cls.card_container}>
          {
            student && student.map((item , index) => (
              <div key={index} className={cls.card}>
                <img className={cls.card_img} src={item.url} />

                <div className={cls.text_container}>
                  <h5><b>{item.firstname}</b></h5>
                  <h5><b>{item.lastname}</b></h5>
                  <h5><b>{item.age}</b></h5>
                  <h5><b className={cls.class}>{item.class}</b></h5>
                  <h5><b>{item.date}</b></h5>
                </div>
              </div>
            ))
          }
        </div>
       
      </div>

    </>
  );
};

export default HomeClassMore;