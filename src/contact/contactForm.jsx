import React, {useRef} from 'react'
import { Button, Form, Input, Radio, Tag } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import emailjs from 'emailjs-com';

const ContactForm = () => {

  const onSubmit = (values) => { 
    const form = document.querySelector('form');
    const lastSentTime = localStorage.getItem('lastSentTime');
    const currentTime = new Date().getTime();

    if (lastSentTime && currentTime - lastSentTime < 60000) {
      alert('You can only send one message per minute');
      return;
    }

    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID, 
      import.meta.env.VITE_TEMPLATE_ID,
      form, 
      import.meta.env.VITE_USER_ID
    )
    .then((result) => {
      console.log(result.text);
      alert('Your message has been sent successfully');
      localStorage.setItem('lastSentTime', currentTime);
    }, (error) => {
      console.log(error.text);
      alert('There was an error sending your message');
    });
  }


  return (
    <div className="contact-form" >
      <h1>Contact me</h1>
      <Form
        name="layout-multiple-vertical"
        layout="vertical"
        labelCol={{
          span: 12,
        }}
        wrapperCol={{
          span: 40,
        }}
        onFinish={onSubmit}
      >
        <Form.Item
          layout="vertical"
          label="Name"
          name="from_name"
          className='name-input'
          rules={[{ required: true, message: 'Please input your name!' }]}
        >
          <Input name='from_name' size='large' placeholder='Your Name'/>
        </Form.Item>
        <Form.Item
          layout="vertical"
          label="Email"
          name="from_email"
          className='email-input'
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input name="from-email" size="large" placeholder='Your email'/>
        </Form.Item>
        <Form.Item
          layout="vertical"
          label="Message"
          name="message"
          className='message-input'
          rules={[{ required: true, message: 'Please write your message!' }]}
        >
          <TextArea name='message' size="large" rows={4} placeholder='Your message'/>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" size='large' className='email-submit-btn'>Sumbit</Button>
        </Form.Item>
      </Form>
      
    </div>
    )
    
}

export default ContactForm;