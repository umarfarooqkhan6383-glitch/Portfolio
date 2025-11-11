import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center p-4 mt-10">
      <p>© {new Date().getFullYear()} Umar Farooq | All Rights Reserved</p>
      <p className="text-sm mt-2">Built with ❤️ using React, TailwindCSS & HeroUI</p>
    </footer>
  )
}

export default Footer
