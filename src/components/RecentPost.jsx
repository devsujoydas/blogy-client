import React from "react";

const topAuthors = [
  "./assets/images/author-1.jpg",
  "./assets/images/author-2.jpg",
  "./assets/images/author-3.jpg",
  "./assets/images/author-4.jpg",
  "./assets/images/author-5.jpg",
];

const recentPosts = [
  {
    id: 1,
    img: "./assets/images/recent-1.jpg",
    authors: ["./assets/images/author-3.jpg", "./assets/images/author-5.jpg"],
    tags: ["Lifestyle", "People", "Review"],
    title: "Creating is a privilege but it’s also a gift",
    text: "Nullam vel lectus vel velit pellentesque dignissim nec id magna..."
  },
  {
    id: 2,
    img: "./assets/images/recent-2.jpg",
    authors: ["./assets/images/author-5.jpg"],
    tags: ["Design", "Product", "Idea"],
    title: "Being unique is better than being perfect",
    text: "Nam in pretium dui. Phasellus dapibus, mi at molestie cursus..."
  },
  {
    id: 3,
    img: "./assets/images/recent-3.jpg",
    authors: ["./assets/images/author-2.jpg", "./assets/images/author-5.jpg", "./assets/images/author-1.jpg"],
    tags: ["Idea", "Product", "Review"],
    title: "Now we’re getting somewhere",
    text: "Class aptent taciti sociosqu ad litora torquent per conubia nostra..."
  },
  {
    id: 4,
    img: "./assets/images/recent-4.jpg",
    authors: ["./assets/images/author-3.jpg"],
    tags: ["Lifestyle", "Design"],
    title: "The trick to getting more done is to have the freedom to roam around",
    text: "Integer nec mi cursus, blandit est et, auctor mauris..."
  },
  {
    id: 5,
    img: "./assets/images/recent-5.jpg",
    authors: ["./assets/images/author-1.jpg", "./assets/images/author-6.jpg"],
    tags: ["People", "Story", "Lifestyle"],
    title: "Every day, in every city and town across the country",
    text: "Morbi a facilisis lectus. Ut eu dapibus risus, a interdum justo..."
  },
  {
    id: 6,
    img: "./assets/images/recent-6.jpg",
    authors: ["./assets/images/author-6.jpg"],
    tags: ["People", "Review", "Story"],
    title: "Your voice, your mind, your story, your vision",
    text: "Nullam auctor nisi non tortor porta, id dapibus lectus rhoncus..."
  }
];

const RecentPost = () => {
  return (
    <section className="section recent" aria-label="recent post">
      <div className="container">

        <div className="title-wrapper">
          <h2 className="h2 section-title">
            See what we’ve <strong className="strong">written lately</strong>
          </h2>

          <div className="top-author">
            <ul className="avatar-list">
              {topAuthors.map((author, idx) => (
                <li key={idx} className="avatar-item">
                  <a href="#" className="avatar large img-holder" style={{ "--width": "100px", "--height": "100px" }}>
                    <img src={author} width="100" height="100" alt="top author" className="img-cover" />
                  </a>
                </li>
              ))}
            </ul>
            <span className="span">Meet our top authors</span>
          </div>
        </div>

        <ul className="grid-list">
          {recentPosts.map((post) => (
            <li key={post.id}>
              <div className="blog-card">
                <figure className="card-banner img-holder" style={{ "--width": "550px", "--height": "660px" }}>
                  <img src={post.img} width="550" height="660" loading="lazy" alt={post.title} className="img-cover" />
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
                      <li key={idx}><a href="#" className="card-tag">{tag}</a></li>
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

        <button className="btn">Load more</button>
      </div>
    </section>
  );
};

export default RecentPost;
