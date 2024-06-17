"use client";
import React, { useRef, FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import MainText from "./ui/MainText/MainText";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_USER_ID!
        )
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
            setMessage("Your message has been sent successfully!");
          },
          (error) => {
            console.log("FAILED...", error);
            setMessage("Failed to send your message. Please try again later.");
          }
        );
    } else {
      console.error("Form reference is null");
    }
  };

  return (
    <>
      <MainText>Get in touch</MainText>
      <center className="text-xl mb-8 text-penn_blue">
        I&apos;m always excited to connect with new people and collaborate on
        interesting projects. Feel free to reach out to me using the form below.
      </center>

      <form
        className="flex flex-col gap-4 max-w-md mx-auto"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="user_name"
          className="rounded-lg p-3 focus:border-penn_blue border border-gray-300 focus:outline-none focus:ring-2 focus:ring-penn_blue bg-white shadow-sm"
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="user_email"
          className="rounded-lg p-3 focus:border-penn_blue border border-gray-300 focus:outline-none focus:ring-2 focus:ring-penn_blue bg-white shadow-sm"
          placeholder="Email"
          required
        />
        <textarea
          name="message"
          className="rounded-lg p-3 focus:border-penn_blue border border-gray-300 focus:outline-none focus:ring-2 focus:ring-penn_blue bg-white shadow-sm"
          placeholder="Message"
          rows={5}
          required
        ></textarea>
        <button className="rounded-lg p-3 bg-penn_blue text-white font-bold hover:bg-blue-700 transition duration-300">
          Send
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 ${
            message.includes("success")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          } rounded-lg`}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default ContactForm;
