import React from 'react'
import cls from '../scss/pages/Home.module.scss'
import LetterFilter from "../component/Fillter/LetterFilter";
import {endpoints} from "../utils/api";

const Home = () => {



  // React.useEffect(() => {
    
  //   endpoints.getClass().then(r => {
  //     const newData = Object.entries(r.data).map(([id, item]) => {
  //       return {
  //         id,
  //         ...item
  //       }
  //     })
  //     // setRewDataNumber(newData)
  //     // setRewData(newData)
  //     console.log(newData);

  //   })
  // }, [])

  return (
    <>
      <div className={cls.container}>
        <LetterFilter />
      </div> 
    </>
  )
}

export default Home
