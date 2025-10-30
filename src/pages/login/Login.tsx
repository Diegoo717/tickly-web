import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { SmartNavBar } from '../../components/common/navigation/navbar/SmartNavBar' 
import Footer from '../../components/common/navigation/footer/Footer'
import { SignInForm } from '../../components/auth/SignInForm'
import { useAuth } from '../../contexts/AuthContext' 

export const Login = () => {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  const navigate = useNavigate()
  const { session, loading } = useAuth() 

  useEffect(() => {
    if (session) {
      navigate('/')
    }
  }, [session, navigate])

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <>
      <SmartNavBar /> 
      <SignInForm />
      <Footer />
    </>
  )
}