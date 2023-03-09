import { useState } from "react";

export const CreateForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      {/* <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        required
      ></textarea> */}

      <button type="submit">Submit</button>
    </form>
  );
};
