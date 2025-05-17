import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-y-5 w-[60vw] h-fit p-5 border-black border-2 rounded-lg mx-auto my-10">
      <input
        className="border rounded w-full p-2 "
        type="text"
        placeholder="enter your full Name"
      />
      <input
        className="border rounded w-full p-2 "
        type="text"
        placeholder="enter your Number"
      />
      <input
        className="border rounded w-full p-2 "
        type="text"
        placeholder="enter your email"
      />
      <textarea   className="border rounded w-full p-2 " placeholder="enter your message"></textarea>
   <button className="bg-black text-white text-center w-full rounded-lg p-2 my-2" >SUBMIT</button>
    </form>
  );
};

const ContactPage = () => {
  return (
    <>
      <NavBar nav3="contact us" />
      <main>
        <h1 className="font-bold text-4xl text-blue-600 text-center m-5">
          Contact Us
        </h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default ContactPage;
