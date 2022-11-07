import React from 'react'
import cls from '../scss/pages/Home.module.scss'
// import ClassesCard from "../component/ClassesCard";
import AllFilter from "../component/AllFilter";
import HomeClass from "../component/HomeClass";
const Home = () => {
  return (
    <>
      <div className={cls.container}>
        <HomeClass/>
        <AllFilter />
      </div>
    </>
  )
}

export default Home
