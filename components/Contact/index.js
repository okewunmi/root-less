import React from 'react'
import { Wrapper } from './styles'
import { useForm, ValidationError } from '@formspree/react';

const index = () => {
    const [state, handleSubmit] = useForm("xwkdznkg");
    
    return (
        <Wrapper>
            <h1 className='heading'>Reach Out!</h1>
            <form className='form' onSubmit={handleSubmit} >
                <label htmlFor="name">Name</label>
                <input required type="text" name="name" className='form__name' id='name' placeholder='Full name'/>
                <label htmlFor="email">Email</label>
                <input required type="email" className='form__name' id='mail' name="email" placeholder='email@gmail.com'/>
                <label htmlFor="message">Message</label>
                <textarea required className='' name='message' placeholder='message.....'/>

                <div className='form__btn'>
                <button type='submit' className='btn' disabled={state.submitting}> send</button>
                </div>
              
            </form>
            
        </Wrapper>
    )
}

export default index

