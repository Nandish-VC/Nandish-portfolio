import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [status, setStatus] =
    useState("idle");

  const handleChange = (event) => {
    const {
      name,
      value,
    } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setErrors((previous) => ({
      ...previous,
      [name]: "",
    }));
  };

  const validateForm = () => {
  const newErrors = {};
 
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }
 
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!formData.email.includes("@")) {
    newErrors.email = "Enter a valid email";
  }
 
  if (formData.message.trim().length < 10) {
    newErrors.message =
      "Message must be at least 10 characters long";
  }
 
  return newErrors;
};

 const handleSubmit = async (event) => {
  event.preventDefault();
 
  const validationErrors = validateForm();
 
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }
 
  console.log("Form Data:", formData);
 
  setStatus("sending");
 
  await new Promise((resolve) =>
    setTimeout(resolve, 1500)
  );
 
  setStatus("success");
 
  setFormData({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
 
  setTimeout(() => {
    setStatus("idle");
  }, 2500);
};
  return (
    <section
      id="contact"
      className="contact-section"
    >
      <div className="section-container">

        <h2>Contact Me</h2>

        <p className="contact-intro">
          Have a project in mind?
        </p>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
          noValidate
        >

          <div className="form-group">
            <label htmlFor="name">
              Your Name
            </label>

            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={
                errors.name
                  ? "error"
                  : ""
              }
            />

            {errors.name && (
              <small className="error-msg">
                {errors.name}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email">
              Your Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={
                errors.email
                  ? "error"
                  : ""
              }
            />

            {errors.email && (
              <small className="error-msg">
                {errors.email}
              </small>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="subject">
              Subject
            </label>

            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            >
              <option value="">
                Select a topic
              </option>

              <option value="hire">
                I want to hire you
              </option>

              <option value="collab">
                I want to collaborate
              </option>

              <option value="others">
                Others
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project..."
              className={
                errors.message
                  ? "error"
                  : ""
              }
            />

            {errors.message && (
              <small className="error-msg">
                {errors.message}
              </small>
            )}
          </div>

          <button
            type="submit"
            disabled={
              status === "sending"
            }
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
              ? "Message Sent! ✓"
              : "Send Message 🚀"}
          </button>

        </form>
      </div>
    </section>
  );
}

export default Contact;