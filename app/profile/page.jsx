'use client'
import React, { useState, useEffect } from 'react'
import { UserAuth } from '../context/AuthContext'

const page = () => {
  const {user} = UserAuth();
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuthentication = async () => {
        await new Promise((resolve) => setTimeout(resolve, 50));
        setLoading(false);
    }
    checkAuthentication
}, [user]);

  return (
    <div className='p-4'>
      {user ? (
        <p>Welcome, {user.displayName} - you are logged in</p>
      ) : (null)}
    </div>
  )
}

export default page