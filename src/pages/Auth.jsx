import React from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import {TiSocialGooglePlusCircular}  from 'react-icons/ti'
import { useNavigate } from 'react-router-dom';

const AuthProvider = () => {

const navigate = useNavigate()
  const provider = new GoogleAuthProvider()
  const submitProvider = (provider) => signInWithPopup(auth , provider)

  return (
    <>
      <TiSocialGooglePlusCircular  onClick={() => submitProvider(provider).then(() => navigate('/'))} />

    </>
  )
}

export default AuthProvider
