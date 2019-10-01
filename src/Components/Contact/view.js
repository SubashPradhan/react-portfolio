import React from 'react'
import Tada from 'react-reveal/Tada';
import useForm from 'react-hook-form'
import "../Style/Contact.css";

export default function View(props) {

  const { register, handleSubmit, errors } = useForm()
  const { onSubmit, error, name } = props
  return <div align='center'>
    <Tada>
      <h1>Contact Me</h1>
    </Tada>

    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name :</label>
      <input name="name" ref={register({ required: true })} />
      {errors.name && <span className='error-msg'>Please enter your <b>Name !!</b></span>}

      <label>Email :</label>
      <input name="email" ref={register({ required: true })} />
      {errors.email && <span className='error-msg'>Please enter your <b>Email !!</b></span>}

      <label>Message :</label>
      <textarea name='msg' ref={register} className='textfield' />
      <input type="submit" />
    </form>
    {error && <div className='error-msg'>
      Thank you {name} for your message !!<br />
      Will get back to you soon !!!
      </div>}
  </div>
}
