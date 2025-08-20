import React from "react";

const featuredPosts = [
  {
    id: 1,
    img: "./assets/images/featured-1.jpg",
    authors: ["./assets/images/author-1.jpg", "./assets/images/author-2.jpg"],
    tags: ["Design", "Idea", "Review"],
    title: "New technology is not good or evil in and of itself",
    text: "Vestibulum vehicula dui venenatis neque tempor, accumsan iaculis sapien ornare. Sed at ante porta, ullamcorper massa eu, ullamcorper sapien. Donec pretium tortor augue. Integer egestas ut tellus sed pretium. Nullam tristique augue ut mattis vulputate. Duis et lorem in odio ultricies porttitor."
  },
  {
    id: 2,
    img: "./assets/images/featured-2.jpg",
    authors: ["./assets/images/author-3.jpg"],
    tags: ["Creative", "Product"],
    title: "It’s a new era in design, there are no rules",
    text: "Quibus autem in rebus tanta obscuratio non fit, fieri tamen potest..."
  },
  {
    id: 3,
    img: "./assets/images/featured-3.jpg",
    authors: ["./assets/images/author-4.jpg"],
    tags: ["Design", "Creative", "Idea"],
    title: "Perfection has to do with the end product",
    text: "Aenean eget urna aliquet, viverra orci quis, aliquam erat..."
  },
  {
    id: 4,
    img: "./assets/images/featured-4.jpg",
    authors: ["./assets/images/author-5.jpg", "./assets/images/author-2.jpg"],
    tags: ["People", "Story"],
    title: "Everyone has a different life story",
    text: "Non est igitur summum malum dolor. Tu autem inter haec tantam multitudinem..."
  },
  {
    id: 5,
    img: "./assets/images/featured-5.jpg",
    authors: ["./assets/images/author-6.jpg"],
    tags: ["Design", "Lifestyle", "Idea"],
    title: "The difference is quality",
    text: "Vide, ne etiam menses! nisi forte eum dicis, qui, simul atque arripuit, interficit..."
  },
  {
    id: 6,
    img: "./assets/images/featured-6.jpg",
    authors: ["./assets/images/author-3.jpg"],
    tags: ["Idea", "Creating"],
    title: "Problems are not stop signs, they are guidelines",
    text: "Quid ad utilitatem tantae pecuniae. Duo enim genera quae erant, fecit tria..."
  }
];

const FeaturedPost = () => {
  return (
    <section className="section featured" aria-label="featured post">
      <div className="container">
        <p className="section-subtitle">
          Get started with our <strong className="strong">best stories</strong>
        </p>

        <ul className="has-scrollbar">
          {featuredPosts.map((post) => (
            <li key={post.id} className="scrollbar-item">
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ "--width": "500px", "--height": "600px" }}>
                  <img src={post.img} width="500" height="600" loading="lazy" alt={post.title} className="img-cover" />
                  <ul className="avatar-list absolute">
                    {post.authors.map((author, idx) => (
                      <li key={idx} className="avatar-item">
                        <a href="#" className="avatar img-holder" style={{ "--width": "100px", "--height": "100px" }}>
                          <img src={author} width="100" height="100" loading="lazy" alt="Author" className="img-cover" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </figure>

                <div className="card-content">
                  <ul className="card-meta-list">
                    {post.tags.map((tag, idx) => (
                      <li key={idx}>
                        <a href="#" className="card-tag">{tag}</a>
                      </li>
                    ))}
                  </ul>

                  <h3 className="h4">
                    <a href="#" className="card-title hover:underline">{post.title}</a>
                  </h3>

                  <p className="card-text">{post.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturedPost;
