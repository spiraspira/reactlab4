  import React, { Component } from "react";

  class Testimonials extends Component {
    render() {
        const { testimonials } = this.props;
  
      return (
        <section className="testimonials">
          <h2>Отзывы клиентов</h2>
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>{testimonial.quote}</p>
              <p>- {testimonial.author}</p>
            </div>
          ))}
        </section>
      );
    }
  }

export default Testimonials;