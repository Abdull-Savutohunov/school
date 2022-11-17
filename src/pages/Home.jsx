import React from 'react'
import cls from '../scss/pages/Home.module.scss'
import HomeClass from "../component/HomeClass";
import NumberFilter from "../component/Fillter/NumberFilter";
import LetterFilter from "../component/Fillter/LetterFilter";
import {endpoints} from "../utils/api";

const Home = () => {
  const [rewData , setRewData] = React.useState('')
  const [rewDataNumber , setRewDataNumber] = React.useState('')


  React.useEffect(() => {
    
    endpoints.getClass().then(r => {
      const newData = Object.entries(r.data).map(([id, item]) => {
        return {
          id,
          ...item
        }
      })
      setRewDataNumber(newData)
      setRewData(newData)

    })
  }, [])

  return (
    <>
      <div className={cls.container}>
        <NumberFilter numberFilterChange={setRewDataNumber} />
        <LetterFilter setState={setRewData}/>
        <HomeClass data={rewData && rewDataNumber}/>
      </div>
    </>
  )
}

export default Home
