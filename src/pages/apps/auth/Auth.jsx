import React from 'react'
import {GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import { auth } from '../../../utils/Firebase';
import {TiSocialGooglePlusCircular}  from 'react-icons/ti'
import { useNavigate, Link } from 'react-router-dom';
import cls from '../../../scss/pages/Auth.module.scss'
import {useForm} from "react-hook-form";
import FormButton from '../../../component/UI/FormButton'
import FormInput from '../../../component/UI/FormInput'


// const Auth = () => {
//   const [responseErrors, setResponseErrors] = React.useState(false)
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isValid },
//     reset,
//   } = useForm({
//     mode: 'onChange',
//   })
//
//   const navigate = useNavigate()
//   const provider = new GoogleAuthProvider()
//   const submitProvider = (provider) => signInWithPopup(auth , provider)
//
//   const handleFormSubmit = async (data) => {
//     try {
//       const user = await signInWithEmailAndPassword(
//         auth,
//         data.email,
//         data.password
//       )
//       user && navigate('/')
//     } catch (error) {
//       error && setResponseErrors(true)
//     } finally {
//       reset()
//     }
//   }
//
//   return (
//     <>
//       <div className={cls.container}>
//         <form className={cls.row} onSubmit={handleSubmit(handleFormSubmit)}>
//           {/* <IoMdClose className={cls.closeForm} onClick={() => navigate('/')} /> */}
//           <div className={cls.formHeader}>
//             <h3>авторизация</h3>
//           </div>
//           {responseErrors && (
//             // style={{ fontSize: 14, color: '#c72f31' }}
//             <span >
// 						  Непраильный Логин или пароль
// 					  </span>
//           )}
//           <div className={cls.formBody}>
//               <FormInput
//                 inputType='text'
//                 placeholder='Ваш email адресс'
//                 registerName='email'
//                 register={register}
//                 errors={errors.email?.message}
//               />
//               <FormInput
//                 inputType='password'
//                 placeholder='Введите пароль'
//                 registerName='password'
//                 register={register}
//                 errors={errors.password?.message}
//               />
//               <FormButton isValid={isValid} buttonText='Войти' />
//               <div className={cls.row}>
//                 <TiSocialGooglePlusCircular  className={cls.googleIcon} onClick={() => submitProvider(provider).then(() => navigate('/'))} />
//                 <Link  className={cls.link} to='/register'>У вас еще нет аккаунта?</Link>
//               </div>
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

const Auth = () => {
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()
  const submitProvider = (provider) => signInWithPopup(auth , provider)
  return (
    <>
      <div className={cls.container}>
        <div className={cls.row}>
          <TiSocialGooglePlusCircular  className={cls.googleIcon} onClick={() => submitProvider(provider).then(() => navigate('/'))} />
          <Link  className={cls.link} to='/register'>У вас еще нет аккаунта?</Link>
        </div>
      </div>
    </>
  )
}

export default Auth
