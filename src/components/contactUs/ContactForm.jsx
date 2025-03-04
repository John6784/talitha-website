import React, { useState } from "react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // Handle form submission (e.g., API call)
  };

  return (
    <div className="mx-auto p-10 rounded-lg sm:grid grid-cols-3 grid-rows-3 gap-6">
      {/* Column 1 */}
      <div className="pt-10 border-t-[1px] border-slate-300">
        <h2 className="text-md uppercase font-semibold col-span-1 row-span-1">
          Contact Us
        </h2>
      </div>
      <div className="font-tinos pt-10 sm:border-t-[1px] border-slate-300 col-span-2 row-span-1 text-2xl sm:text-5xl font-bold text-talithaRed">
        <div className=" max-w-[40rem]">
          <h3>Ready to innovate?</h3>
          <h3>Reach out, let’s do something great together!</h3>
        </div>
      </div>
      <p className="hidden sm:block mt-20 max-w-96 col-span-1 row-span-1 text-gray-600 dark:text-foreground">
        We receive a lot of inquiries, so it may take us a little while to get
        back to you if we think that there might be a fit. We hope to see you
        soon!
      </p>
      {/* Column 2 & 3 */}
      <form onSubmit={handleSubmit} className="mt-10 sm:mt-20 col-span-2 row-span-2 space-y-4">
        <div className="sm:grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-foreground">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border-b border-gray-600 focus:outline-none bg-transparent"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-foreground">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border-b border-gray-600 focus:outline-none bg-transparent"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-foreground">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full sm:w-[50%] p-2 border-b border-gray-600 focus:outline-none h-32 bg-transparent"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-36 bg-talithaRed text-white py-2 rounded-2xl hover:bg-red-600"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
