import React, { useState } from "react";
import { Button, Input, Textarea } from "@heroui/react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen  from-blue-100 to-blue-50 flex flex-col items-center justify-center py-16 px-6">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-8">Get In Touch</h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg text-left">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">Contact Information</h2>
            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <MapPinIcon className="w-6 h-6 text-blue-500" /> Bhakkar, Pakistan
              </p>
              <p className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-500" /> fullstackstudio1@gmail.com
              </p>
              <p className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-500" /> +92 371 1450657
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg space-y-4"
          >
            <Input
              name="name"
              label="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              label="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Textarea
              name="message"
              label="Your Message"
              value={form.message}
              onChange={handleChange}
              required
            />
            <Button color="primary" type="submit" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
