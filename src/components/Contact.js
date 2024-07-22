import React, { useState } from "react";
import { contactData } from "../data";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  const { title, info, form } = contactData;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const response = await fetch("https://formspree.io/f/xleqzkjk", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        _subject: subject,
      }),
    });
    if (response.ok) {
      setModalVisible(true); // Sikeres üzenet modális ablak megjelenítése
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      // Hibás válasz esetén azonosítjuk a hibát
      let errorMessage =
        "Hiba történt az üzenet elküldése közben. Kérlek, próbáld újra később.";
      if (response.status === 429) {
        errorMessage = "Túl sok üzenetet küldtél. Kérlek, próbáld újra később.";
      } else if (response.status === 400) {
        errorMessage = "Érvénytelen kérés. Kérlek, ellenőrizd az űrlapot.";
      }
      setErrorMessage(errorMessage); // Hibaüzenet beállítása
      setErrorModalVisible(true); // Hiba modális ablak megjelenítése
    }
  };

  // Hiba modal bezárása
  const closeErrorModal = () => {
    setErrorModalVisible(false);
  };

  return (
    <section className="section">
      <div id="contact" className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <motion.div
            variants={fadeIn("right")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1"
          >
            <h2 className="h2 max-w-[490px]">{title}</h2>
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {info.map((item, index) => {
                const { title, subtitle, address, phone, email } = item;
                return (
                  <div key={index}>
                    <div className="font-primary uppercase font-medium text-xl mb-3">
                      {title}
                    </div>
                    <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">
                      {subtitle}
                    </div>
                    <div className="flex flex-col gap-y-3 mb-8">
                      <div className="flex items-center gap-[10px]">
                        <div>{address.icon}</div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{phone.icon}</div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>{email.icon}</div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left")}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex-1 xl:pl-[40px] flex justify-center items-center"
          >
            <form
              className="flex flex-col gap-y-10 w-full"
              onSubmit={handleSubmit}
            >
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                placeholder={form.name}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                placeholder={form.email}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                placeholder={form.phone}
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                placeholder={form.subject}
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <textarea
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06em] outline-none pb-4"
                placeholder={form.message}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button className="btn btn-sm btn-dark self-start" type="submit">
                {form.btnText}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Sikeres üzenet modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-bold mb-4">
              Az üzenetet sikeresen elküldtük!
            </h2>
            <button
              className="btn btn-sm btn-dark self-start mt-4"
              onClick={() => setModalVisible(false)}
            >
              Bezárás
            </button>
          </div>
        </div>
      )}

      {/* Hiba modal */}
      {errorModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-8 rounded-md">
            <h2 className="text-lg font-bold mb-4">
              Hiba történt az üzenet elküldése közben
            </h2>
            <p>{errorMessage}</p>
            <button
              className="btn btn-sm btn-dark self-start mt-4"
              onClick={closeErrorModal}
            >
              Bezárás
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
