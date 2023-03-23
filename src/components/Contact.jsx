import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Map from "./Map"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`
const Container = styled.div`
  width: 100%;
  display:flex;
  justify-content: space-between;
  gap:50px;
  `
const Left = styled.div`
  flex:1;
  display:flex;
  align-items: center;
  justify-content:flex-end;
  `
const Title = styled.h1`
  font-weight:200;
`
const Form = styled.form`
  width:500px;
  display:flex;
  flex-direction:column;
  gap:25px;
`
const Input = styled.input`
  padding:20px;
  background-color: lightgray;
  border: none;
  border-radius:5px;
  color: black;
`
const TextArea = styled.textarea`
  padding:20px;
  background-color: lightgray;
  border: none;
  border-radius:5px;
  color: black;
`
const Button = styled.button`
  background-color:pink;
  color: white;
  border:none;
  font-weight: bold;
  cursor:pointer;
  border-radius:5px;
  padding:14px;
`

const Right = styled.div`
  flex:1;
`;


const Contact = () => {
  const ref = useRef()
  const [success, setSuccess] = useState(null);

  const handleSubmit =e=>{
   e.preventDefault()

  emailjs.sendForm('service_60k2wqw', 'template_obcgbzq', ref.current, 'CkYaf3ZCbxe52tIRA')
  .then((result) => {
      console.log(result.text);
      setSuccess(true);
  }, (error) => {
      console.log(error.text);
      setSuccess(false);
  });
}

  return (
    <Section>
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title> Contact Me </Title>
            <Input placeholder="Name" name="name"/>
            <Input placeholder="Email" email="email"/>
            <TextArea placeholder="Write your message" rows={10} message="message"/>
            <Button type="submit"> Send </Button>
            {success &&
              "Your message has been sent. I'll get back to you ASAP"}
          </Form>
        </Left>
        <Right>
          <Map/>
        </Right>
      </Container>
    </Section>
  )
}

export default Contact
