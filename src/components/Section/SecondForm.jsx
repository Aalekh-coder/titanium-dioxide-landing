"use client";
import { useState, useRef } from "react";
const SecondForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("Sending...");

  const form = e.target;
  const name = form.querySelector('#name').value;
  const phone = form.querySelector('#contact').value;
  const product = form.querySelector('#productSelect').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  const formData = new FormData();
  formData.append("Name", name);
  formData.append("Contact", phone);
  formData.append("Product", product);
  formData.append("Email", email);
  formData.append("Message", message);


  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/sales@aanyaenterprise.com",
      {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      }
    );

    if (response.ok) {
      setStatus("✅ Message sent successfully!");
      form.reset();

      // Prepare WhatsApp message
      const whatsappText = 
        `Hi, I am ${name}.\nProduct: ${product}\nEmail: ${email}\n\nMessage: ${message}\n\nContact: ${phone}`;
      const waUrl = `https://wa.me/918527557778?text=${encodeURIComponent(whatsappText)}`;

      // Delay WhatsApp redirect by 1 second to show success message
      setTimeout(() => {
        window.open(waUrl, "_blank");
      }, 1000);
    } else {
      setStatus("❌ Failed to send. Please try again.");
    }
  } catch (error) {
    console.error("FormSubmit Error:", error);
    setStatus("⚠️ Something went wrong. Please try later.");
  }
};

  return (
    <div className="bg-[#E2A651] mb-10 rounded-3xl px-5 py-5">
      <h3 className="font-extrabold text-4xl">How May We Help You!</h3>

      <form onSubmit={handleSubmit} className="text-white my-5">
        <div className="flex flex-col">
          <label htmlFor="name" className="font-medium">
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            className="bg-white text-black focus:outline-none py-2 px-4 placeholder:text-gray-400"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="contact" className="font-medium">
            Contact Number *
          </label>
          <input
            type="text"
            minLength={10}
            maxLength={10}
            id="contact"
            className="bg-white text-black  focus:outline-none py-2 px-4 placeholder:text-gray-400"
            placeholder="(XX) XXX-XXX"
          />
        </div>

        <div className="flex flex-col mb-3">
          <label htmlFor="productSelect" className=" font-medium mb-1">
            Product Select
          </label>
          <select
            type=""
            id="productSelect"
            className="border-black border px-1 py-2 bg-white text-black text-black"
          >
            <option value="">Products Select</option>
            <option value="titaniumDioxide">Titanium Dioxide Ti</option>
            <option value="titaniumDioxideRutile">
              Titanium Dioxide Rutile
            </option>
            <option value="lithopone">Lithopone</option>
            <option value="opticalBrighter">Optical Brighter</option>
            <option value="carbon">Carbon</option>
            <option value="calciumCarbonate">Calcium Carbonate</option>
          </select>
        </div>
        <div className="flex flex-col my-3">
          <label htmlFor="email" className="font-medium">
            Your Email *
          </label>
          <input
            type="email"
            id="email"
            className="bg-white text-black focus:outline-none py-2 px-4 placeholder:text-gray-400"
            placeholder="Your Email"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="font-medium">
            Message
          </label>
          <textarea
            type="email"
            id="message"
            className="bg-white text-black focus:outline-none py-2 px-4 placeholder:text-gray-400"
            placeholder="Message"
          />
        </div>

        <button type="submit" className="bg-black mt-5 px-5 w-full py-2 font-medium rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SecondForm;
