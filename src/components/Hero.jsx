import React from 'react'

const Hero = () => {
    return (
        <section class="section hero" aria-label="home">
            <div class="container">

                <h1 class="h1 hero-title">
                    <strong class="strong">Hey, we’re Blogy.</strong> See our thoughts, stories and ideas.
                </h1>

                <div class="wrapper">

                    <form action="" class="newsletter-form">
                        <input type="email" name="email_address" placeholder="Your email address" class="email-field">

                            <button type="submit" class="btn">Subscribe</button>
                    </form>

                    <p class="newsletter-text">
                        Get the email newsletter and unlock access to members-only content and updates
                    </p>

                </div>

            </div>
        </section>
    )
}

export default Hero