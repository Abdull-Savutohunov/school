import React from 'react'
import cls from '../scss/components/CreateClassDropDown.module.scss'

const CrateClassCard = ({ onSubmit  , textClasses , setTextClasses , numberClasses , setNumberClasses ,}) => {


  return (
    <>
      <div className={cls.container}>
        <form onSubmit={onSubmit}>
          <div className={cls.getData}>
            <select className={cls.getSelect1} value={textClasses} onChange={(e => setTextClasses(e.target.value))}>
              <option>class text</option>
              <option >A</option>
              <option >B</option>
              <option >C</option>
              <option >D</option>
            </select>

            <select className={cls.getSelect2} value={numberClasses} onChange={(e => setNumberClasses(e.target.value))}>
              <option>class number</option>
              <option >1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
              <option >5</option>
              <option >6</option>
              <option >7</option>
              <option >8</option>
              <option >9</option>
              <option >10</option>
              <option >11</option>
            </select>
            <div className={cls.postButtonData}>
              <button className={cls.postButton} type='submit'>
                submit
              </button>
          </div>
          </div>

        </form>
      </div>
    </>
  )
}

export default CrateClassCard