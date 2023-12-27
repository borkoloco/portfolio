import { useState, useEffect } from "react";
import { send } from "emailjs-com";
import { useTheme } from "./ThemeContext";

const serviceID = import.meta.env.VITE_serviceID;
const templateID = import.meta.env.VITE_templateID;
const publicKey = import.meta.env.VITE_publicKey;

const Notification = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {show && (
        <div
          className="notification"
          style={{
            backgroundColor: "#43d55c",
            color: "white",
            padding: "8px 16px",
            marginBottom: "16px",
            borderRadius: "4px",
            textAlign: "center",
          }}
        >
          Message sent! Thank you!
        </div>
      )}
    </>
  );
};

export default function Contact() {
  const { theme } = useTheme();
  const [toSend, setToSend] = useState({
    from_name: "",
    message: "",
    reply_to: "",
  });

  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!toSend.from_name || !toSend.reply_to || !toSend.message) {
      console.log("Validation failed");
      alert("Please fill out all fields");
      return;
    }

    send(serviceID, templateID, toSend, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSent(true);
        // Clear form
        e.target.reset();

        setToSend({
          from_name: "",
          message: "",
          reply_to: "",
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });

    e.target.reset();
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <h2 className={`page-header page-header-${theme}`}>Contact Me</h2>
      {/* Send confirmation message */}
      {isSent && <Notification />}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="to_name"
          placeholder="borkoloco"
          value="borkoloco"
          disabled
          hidden
        />
        <input
          type="text"
          className={theme === "light" ? "contact__input--light" : ""}
          name="from_name"
          required
          placeholder="Your name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          className={theme === "light" ? "contact__input--light" : ""}
          name="reply_to"
          required
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          name="message"
          className={theme === "light" ? "contact__input--light" : ""}
          placeholder="Your message"
          required
          rows={8}
          value={toSend.message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}
