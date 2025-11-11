import React from 'react'
import { Button } from '@heroui/react'

const Home = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center  from-blue-50 to-blue-200 p-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-blue-700">Hi, I’m Umar Farooq 👋</h1>
      <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
        A passionate <span className="text-blue-600 font-semibold">Web Developer</span> skilled in React, TypeScript, Express.js & modern web technologies.
      </p>
      <div className="mt-6 flex gap-4">
        <Button color="primary" as="a" href="/projects">View Projects</Button>
        <Button variant="flat" color="secondary" as="a" href="/contact">Contact Me</Button>
      </div>
    </section>
  )
}

export default Home
