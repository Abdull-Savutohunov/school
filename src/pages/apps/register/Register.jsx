import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../../utils/Firebase';
import {TiSocialGooglePlusCircular}  from 'react-icons/ti'
import { useNavigate, Link, Navigate } from 'react-router-dom';
import cls from '../../../scss/pages/Register.module.scss'
import useIsAuth from './../../../hooks/useIsAuth';

const Register = () => {
  // const []

  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()
  const submitProvider = (provider) => signInWithPopup(auth , provider)
  const {isAuth} = useIsAuth()

  if(isAuth) return <Navigate to="/"/>
  return (
    <>
      <div className={cls.container}>
        <div className={cls.row}>
            <TiSocialGooglePlusCircular
              className={cls.googleIcon}
              onClick={() => submitProvider(provider)
                .then(() => navigate('/'))
            }
            />
          <Link className={cls.link} to='/auth'>У вас уже есть аккаунт?</Link>
        </div>
      </div>
    </>
  )
}

export default Register
