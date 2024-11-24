import React from "react";
import BlogCard from "./BlogCard";
import Button from "./Button";
import "./Blog.module.css";

function Blog() {
  const blogPosts = [
    {
      title: "5 Digital Marketing Strategies for 2024",
      summary:
        "Stay ahead of the curve with these top digital marketing strategies that will dominate in 2024...",
      image: "/path/to/blog1.jpg",
      link: "/blog/5-digital-marketing-strategies-for-2024",
    },
    {
      title: "How SEO Can Boost Your Website Traffic",
      summary:
        "SEO is crucial for increasing your website's visibility. Learn how to leverage SEO techniques for growth...",
      image: "/path/to/blog2.jpg",
      link: "/blog/how-seo-can-boost-your-website-traffic",
    },
    {
      title: "The Importance of Social Media Marketing",
      summary:
        "Social media marketing is a powerful tool. Discover why your business needs a strong social media presence...",
      image: "/path/to/blog3.jpg",
      link: "/blog/importance-of-social-media-marketing",
    },
    {
      title: "Email Marketing Best Practices in 2024",
      summary:
        "Maximize your email marketing efforts by following these best practices that will ensure higher engagement...",
      image: "/path/to/blog4.jpg",
      link: "/blog/email-marketing-best-practices-2024",
    },
  ];

  return (
    <div className="blog-page">
      <header className="blog-header">
        <h1>Our Blog</h1>
        <p>Stay updated with the latest insights and trends in digital marketing.</p>
      </header>

      <section className="blog-section">
        <div className="blog-cards">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              title={post.title}
              summary={post.summary}
              image={post.image}
              link={post.link}
            />
          ))}
        </div>
      </section>

      <section className="cta">
        <h2>Want More Insights?</h2>
        <Button text="Contact Us" className="cta-button" link="/contact" />
      </section>
    </div>
  );
}

export default Blog;
