import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form'
import cls from '../scss/components/CreateStudentInput.module.scss'
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
  function postUpdate( classId, studentId) {
    endpoints.changeStudent(classId, studentId,  changedInput).then(res => {
      res.status === 200 && endpoints.heandleClassMore(id).then(r => {
        const newData = Object.entries(r.data.students).map(([id, item]) => {
          return {
            id,
            ...item
          }
        })
        setStudent( newData )
      })
    })
  }

  const deleteStudent = (classId, studentId ) => {
    endpoints.deleteToStudent(classId , studentId).then(res => {
      res.status === 200 && endpoints.heandleClassMore(id).then(r => {
        const newDate = Object.entries(r.data.students).map(([id , item]) => {
          return{
            id ,
            ...item
          }
        })
        setStudent(newDate)
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
    endpoints.postStudents(id , {...data}).then(res => {
      res.status === 200 && endpoints.heandleClassMore(id).then(r => {
        const newDate = Object.entries(r.data.students).map(([id , item]) => {
          return{
            id ,
            ...item
          }
        })
        setStudent(newDate)
      })
    })
  }
  return (
    <>
      <div className={cls.container}>
        <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={cls.inputContainer}>
            <Controller
              name={'firstname'}
              control={control}
              render={({field }) => (
                <input
                  className={cls.ControllerInput}
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
                  className={cls.ControllerInput}
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
                  className={cls.ControllerInput}
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
                  className={cls.ControllerInput}
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
                  className={cls.ControllerInput}
                  onChange={e => field.onChange(e)}
                  placeholder='class'
                />
              )}
            />
            <div>
              <button type='submit'>Add Students Card</button>
            </div>
          </div>

        </form>
        <div className={cls.subContainer}>
          {
            student && student.map((item , index) => (
              <div key={index} className={cls.card}>
                  <img className={cls.card_img} src={item.url} />

                  <div className={cls.text_container}>
                    <h5>
                    <input
                      className={cls.updateInput}
                      onChange={(e) => setChangedInput({ ...changedInput, firstname: e.target.value })}
                      defaultValue={item.firstname}
                    />
                      {/* <b>{item.firstname}</b> */}
                    </h5>
                    <h5>
                      <input
                        className={cls.updateInput}
                        onChange={(e) => setChangedInput({ ...changedInput, lastname: e.target.value })}
                        defaultValue={item.lastname}
                      />
                      {/* <p>{item.lastname}</p> */}
                    </h5>
                    <h5>
                      <input
                        className={cls.updateInput}
                        onChange={(e) => setChangedInput({ ...changedInput, age: e.target.value })}
                        defaultValue={item.age}
                      />
                      {/* <b>{item.age}</b> */}
                    </h5>
                    <h5>
                      <input
                        className={cls.updateInput}
                        onChange={(e) => setChangedInput({ ...changedInput, class: e.target.value })}
                        defaultValue={item.class}
                      />
                      {/* <b>{item.class}</b> */}
                    </h5>
                    <h5>
                      <input
                        className={cls.updateInput}
                        onChange={(e) => setChangedInput({ ...changedInput, date: e.target.value })}
                        defaultValue={item.date}
                      />
                      {/* <b>{item.date}</b> */}
                    </h5>
                    <div className={cls.updateContainer}>
                      <button className={cls.updateButton} onClick={() => {postUpdate(id , item.id, item)}}>
                        update
                      </button>
                      <button className={cls.delete} onClick={() => {
                        deleteStudent(id, item.id)
                      }}>
                        delete 
                      </button>
                    </div>
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











































// import React, {useState} from 'react';
// import {Controller, useForm} from 'react-hook-form'
// import cls from '../scss/components/CreateStudentInput.module.scss'
// import {endpoints} from "../utils/api";
// import {useParams} from "react-router-dom";



// const CreateStudentInput = () => {
// const [student , setStudent] = useState(null)
//   const [changedInput, setChangedInput] = useState('')
//   React.useEffect(() => {
//     endpoints.heandleClassMore(id).then(r => {
//       const newDate = Object.entries(r.data.students).map(([id , item]) => {
//         return{
//           id ,
//           ...item
//         }
//       })
//       setStudent(newDate)
//     })
//   }, [])

//   //update

//   function postUpdate( classId, studentId) {
//     endpoints.changeStudent(classId, studentId,  changedInput).then(() => {
//       endpoints.heandleClassMore(id).then(r => {
//         const newData = Object.entries(r.data.students).map(([id, item]) => {
//           return {
//             id,
//             ...item
//           }
//         })
//         student(newData)
//       })
//     })
//   }

//   const deleteStudent = (classId, studentId ) => {
//     endpoints.deleteToStudent(classId , studentId).then(res => {
//       res.status === 200 && endpoints.heandleClassMore(id).then(r => {
//         const newDate = Object.entries(r.data.students).map(([id , item]) => {
//           return{
//             id ,
//             ...item
//           }
//         })
//         setStudent(newDate)
//       })
//     })

//   }

//   const {id} = useParams()
//   const {handleSubmit , control} = useForm()

//   const createStudentsCard = () => {
//     endpoints.postStudents(id , {...data}).then(res => {
//       res.status === 200 && endpoints.heandleClassMore(id).then(r => {
//         const newDates = new Date().toLocaleDateString().map(([id , data]) => {
//           return{
//             id ,
//             ...data
//           }
//         })
//         setStudent(newDates)
//       })
//     })

//   }

//   const onSubmit = (value) => {
//     const data = {
//       ...value ,
//       date: new Date().toLocaleDateString()
//     }
//     endpoints.postStudents(id , {...data})
//   }
//   return (
//     <>
//       <div className={cls.container}>
//         <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
//           <div className={cls.inputContainer}>
//             <Controller
//               name={'firstname'}
//               control={control}
//               render={({field }) => (
//                 <input
//                   className={cls.ControllerInput}
//                   onChange={e => field.onChange(e)}
//                   placeholder='firstname'
//                 />
//               )}
//             />
//             <Controller
//               name={'lastname'}
//               control={control}
//               render={({field }) => (
//                 <input
//                   className={cls.ControllerInput}
//                   onChange={e => field.onChange(e)}
//                   placeholder='lastname'
//                 />
//               )}
//             />
//             <Controller
//               name={'age'}
//               control={control}
//               render={({field }) => (
//                 <input
//                   className={cls.ControllerInput}
//                   onChange={e => field.onChange(e)}
//                   placeholder='age'
//                 />
//               )}
//             />
//             <Controller
//               name={'url'}
//               control={control}
//               render={({field }) => (
//                 <input
//                   className={cls.ControllerInput}
//                   onChange={e => field.onChange(e)}
//                   placeholder='url'
//                 />
//               )}
//             />
//             <Controller
//               name={'class'}
//               control={control}
//               render={({field }) => (
//                 <input
//                   className={cls.ControllerInput}
//                   onChange={e => field.onChange(e)}
//                   placeholder='class'
//                 />
//               )}
//             />
//             <div>
//               <button type='submit' onClick={() => {
//                 createStudentsCard(id)}}

            
//               >
//                 Add Students Card
//               </button>
//             </div>
//           </div>

//         </form>
//         <div className={cls.subContainer}>
//           {
//             student && student.map((item , index) => (
//               <div key={index} className={cls.card}>
//                   <img className={cls.card_img} src={item.url} />

//                   <div className={cls.text_container}>
//                     <h5>
//                     <input
//                       className={cls.updateInput}
//                       onChange={(e) => setChangedInput({ ...changedInput, firstname: e.target.value })}
//                       defaultValue={item.firstname}
//                     />
//                       {/* <b>{item.firstname}</b> */}
//                     </h5>
//                     <h5>
//                       <input
//                         className={cls.updateInput}
//                         onChange={(e) => setChangedInput({ ...changedInput, lastname: e.target.value })}
//                         defaultValue={item.lastname}
//                       />
//                       {/* <b>{item.lastname}</b> */}
//                     </h5>
//                     <h5>
//                       <input
//                         className={cls.updateInput}
//                         onChange={(e) => setChangedInput({ ...changedInput, age: e.target.value })}
//                         defaultValue={item.age}
//                       />
//                       {/* <b>{item.age}</b> */}
//                     </h5>
//                     <h5>
//                       <input
//                         className={cls.updateInput}
//                         onChange={(e) => setChangedInput({ ...changedInput, class: e.target.value })}
//                         defaultValue={item.class}
//                       />
//                       {/* <b>{item.class}</b> */}
//                     </h5>
//                     <h5>
//                       <input
//                         className={cls.updateInput}
//                         onChange={(e) => setChangedInput({ ...changedInput, date: e.target.value })}
//                         defaultValue={item.date}
//                       />
//                       {/* <b>{item.date}</b> */}
//                     </h5>
//                     <div className={cls.updateContainer}>
//                       <button className={cls.updateButton} onClick={() => {postUpdate(id , item.id, item)}}>
//                         update
//                       </button>
//                       <button className={cls.delete} onClick={() => {
//                         deleteStudent(id, item.id)
//                       }}>
//                         delete 
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//             ))
//           }


//         </div>
//       </div>
//     </>
//   );
// };
// export default CreateStudentInput;