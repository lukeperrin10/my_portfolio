import React, { Component } from 'react';

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', message: '' };
  }

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch((error) => alert(error));

    e.preventDeafault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message } = this.state;
    return (
      <form onSubmit={this.handleSubmit} netlify name='contact'>
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <label>
            Your Name:
            <input
              type='text'
              name='name'
              value={name}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <input
              type='text'
              name='email'
              value={email}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <label>
            Your message:
            <input
              type='text'
              name='message'
              value={message}
              onChange={this.handleChange}
            />
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    );
  }
}

export default ContactForm;
