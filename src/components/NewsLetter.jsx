import React from 'react'

const NewsLetter = () => {
  return (
    <section class="section newsletter">

        <h2 class="h2 section-title">
          Subscribe to <strong class="strong">new posts</strong>
        </h2>

        <form action="" class="newsletter-form">
          <input type="email" name="email_address" placeholder="Your email address" required class="email-field"/>

          <button type="submit" class="btn">Subscribe</button>
        </form>

      </section>
  )
}

export default NewsLetter