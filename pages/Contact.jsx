import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  // Handle submit
  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields ❌");
      setSuccess("");
      return;
    }

    setSuccess("Message Sent Successfully ✅");
    setError("");

    // Reset form
    setForm({
      name: "",
      email: "",
      message: ""
    });

    // Auto hide message after 3 sec
    setTimeout(() => {
      setSuccess("");
    }, 3000);
  };

  return (
    <div className="contact">
      <div className="form">
        <h1>Contact Me</h1>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
        ></textarea>

        <button onClick={handleSubmit}>
          Send Message
        </button>

        {/* Messages */}
        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </div>
    </div>
  );
}

export default Contact;