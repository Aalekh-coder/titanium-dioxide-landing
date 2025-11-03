import Image from "next/image";
import React from "react";

const Chat = () => {
  return (
    <a
      href="https://wa.me/918920109583?text=hey%20i%20want%20your%20service"
      className="fixed bottom-10 left-10 z-30"
    >
      <Image
        src="/image/logo (3).webp"
        className="h-14 w-14"
        width={100}
        height={100}
        alt="chat of whatsapp"
      />
    </a>
  );
};

export default Chat;
