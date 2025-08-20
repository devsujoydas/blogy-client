import React, { useState } from 'react';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log("Subscribed with email:", email);
    setEmail('');
    // এখানে তুমি API call বা Firebase integration করতে পারো
  };

  return (
    <section className="section newsletter">
      <h2 className="h2 section-title">
        Subscribe to <strong className="strong">new posts</strong>
      </h2>

      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          name="email_address"
          placeholder="Your email address"
          required
          className="email-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn">Subscribe</button>
      </form>
    </section>
  );
};

export default NewsLetter;
