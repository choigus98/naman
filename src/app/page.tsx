import React from 'react'

const About = () => {
  console.log(process.env.NEXT_PUBLIC_NAVER_CLIENT_ID)
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to 꿀차장</h1>
      <p className="mt-4 text-lg text-gray-600">Sweet free parking tips.</p>
    </div>
  )
}

export default About
