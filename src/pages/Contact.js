import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="py-16 text-xl font-bold">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0940848398122!2d77.67328021133875!3d12.901671416353619!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae13064f164139%3A0x7c7d954daf92a541!2sVishal%20Mega%20Mart!5e0!3m2!1sen!2sin!4v1713547956428!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="map address"
      ></iframe>
      <div>
        <form
          action="https://formspree.io/f/mkndkron"
          method="POST"
          className="flex flex-col justify-between gap-5 py-10"
        >
          <input
            className="border-2 border-gray-500 rounded-sm p-1"
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
          />
          <input
            className="border-2 border-gray-500 rounded-sm p-1"
            type="email"
            placeholder="Email"
            name="email"
            required
            autoComplete="off"
          />
          <textarea
            className="border-2 border-gray-500 rounded-sm p-1"
            name="message"
            placeholder="Enter a message"
            cols="30"
            rows="5"
            required
            autoComplete="off"
          ></textarea>
          <input
            className="rounded-sm p-1 mt-3 w-24 text-white bg-[#8a2be2]"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
