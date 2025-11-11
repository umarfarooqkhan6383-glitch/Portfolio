import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">Umar Farooq</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-3">
          <Link to="/">
            <Button color="primary" variant="flat">
              Home
            </Button>
          </Link>
          <Link to="/about">
            <Button color="primary" variant="flat">
              About
            </Button>
          </Link>
          <Link to="/projects">
            <Button color="primary" variant="flat">
              Projects
            </Button>
          </Link>
          <Link to="/contact">
            <Button color="primary" variant="flat">
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isOpen ? (
              <XMarkIcon className="w-8 h-8 text-blue-600" />
            ) : (
              <Bars3Icon className="w-8 h-8 text-blue-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white shadow-md transition-all duration-300 ${
          isOpen ? "max-h-96 p-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
          <Link to="/" onClick={() => setIsOpen(false)}>
            <Button color="primary" variant="flat" fullWidth>
              Home
            </Button>
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            <Button color="primary" variant="flat" fullWidth>
              About
            </Button>
          </Link>
          <Link to="/projects" onClick={() => setIsOpen(false)}>
            <Button color="primary" variant="flat" fullWidth>
              Projects
            </Button>
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            <Button color="primary" variant="flat" fullWidth>
              Contact
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
