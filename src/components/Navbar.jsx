import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@heroui/react'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">Umar Farooq</h1>
        <div className="flex gap-3">
          <Link to="/"><Button color="primary" variant="flat">Home</Button></Link>
          <Link to="/about"><Button color="primary" variant="flat">About</Button></Link>
          <Link to="/projects"><Button color="primary" variant="flat">Projects</Button></Link>
          <Link to="/contact"><Button color="primary" variant="flat">Contact</Button></Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
