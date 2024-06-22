"use client";
import React, { useState, useEffect } from "react";

const texts = ["I'm Fernando Durban", "Web Developer"];
const typingDelay = 50;
const deletingDelay = 50;
const pauseDelay = 2000;

const TypeWriter = () => {
  const [text, setText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[sentenceIndex];
      if (isDeleting) {
        // Deleting mode
        if (text.length > 0) {
          setText(currentText.substring(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setSentenceIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }
      } else {
        if (text.length < currentText.length) {
          setText(currentText.substring(0, text.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDelay);
        }
      }
    };

    const timeoutId = setTimeout(
      handleTyping,
      isDeleting ? deletingDelay : typingDelay
    );
    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, sentenceIndex]);

  return (
    <>
      <h1 className="text-penn_blue text-5xl font-bold lg:text-nowrap">
        {text}
        <span className="animate-blink text-penn_blue">|</span>
      </h1>
    </>
  );
};

export default TypeWriter;
