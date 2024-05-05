import React, { Component } from "react";

  class ContactForm extends Component {
    render() {
      return (
        <section className="contact-form">
          <h2>Свяжитесь с нами</h2>
          <form>
            <input type="text" placeholder="Ваше имя" />
            <input type="email" placeholder="Ваш email" />
            <textarea placeholder="Ваше сообщение" />
            <button type="submit">Отправить</button>
          </form>
        </section>
      );
    }
  }

export default ContactForm;