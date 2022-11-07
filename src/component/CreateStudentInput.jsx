import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form'
import cls from '../scss/components/CreateClassCard.module.scss'
import {endpoints} from "../utils/api";
import {useParams} from "react-router-dom";



const CreateStudentInput = () => {
const [student , setStudent] = useState(null)
  const [changedInput, setChangedInput] = useState('')
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

  //update

  function postUpdate( classId, studentId, postData) {
    endpoints.changeStudent(classId, studentId,  changedInput).then(() => {
      endpoints.heandleClassMore(id).then(r => {
        const newData = Object.entries(r.data.students).map(([id, item]) => {
          return {
            id,
            ...item
          }
        })
        student(newData)
      })
    })
  }


  const {id} = useParams()
  const {handleSubmit , control} = useForm()
  const onSubmit = (value) => {
    const data = {
      ...value ,
      date: new Date().toLocaleDateString()
    }
    endpoints.postStudents(id , {...data})
  }
  return (
    <>
      <div className={cls.container}>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Controller
              name={'firstname'}
              control={control}
              render={({field }) => (
                <input
                  onChange={e => field.onChange(e)}
                  placeholder='firstname'
                />
              )}
            />
            <Controller
              name={'lastname'}
              control={control}
              render={({field }) => (
                <input
                  onChange={e => field.onChange(e)}
                  placeholder='lastname'
                />
              )}
            />
            <Controller
              name={'age'}
              control={control}
              render={({field }) => (
                <input
                  onChange={e => field.onChange(e)}
                  placeholder='age'
                />
              )}
            />
            <Controller
              name={'url'}
              control={control}
              render={({field }) => (
                <input
                  onChange={e => field.onChange(e)}
                  placeholder='url'
                />
              )}
            />
            <Controller
              name={'class'}
              control={control}
              render={({field }) => (
                <input
                  onChange={e => field.onChange(e)}
                  placeholder='class'
                />
              )}
            />
          </div>
          <div>
            <button type='submit'>Add Students Card</button>
          </div>
        </form>
        <div className={cls.subContainer}>
          {
            student && student.map((item , index) => (
              <div key={index} className={cls.card}>
                  <img className={cls.card_img} src={item.url} />

                  <div className={cls.text_container}>
                    <input
                      onChange={(e) => setChangedInput({ ...changedInput, class: e.target.value })}
                      defaultValue={item.class}
                    />
                    <button onClick={() => {postUpdate(id , item.id, item)}}>
                      update
                    </button>
                    <h5><b>{item.firstname}</b></h5>
                    <h5><b>{item.lastname}</b></h5>
                    <h5><b>{item.age}</b></h5>
                    <h5><b>{item.class}</b></h5>
                    <h5><b>{item.date}</b></h5>
                    <button className={cls.delete} onClick={() => {
                      endpoints.deleteToStudent(id , item.id)
                    }}>delete</button>


                  </div>
                </div>
            ))
          }


        </div>
      </div>
    </>
  );
};
export default CreateStudentInput;