import React from 'react'
import { Wrapper } from './styles'
const index = () => {
    return (
        <Wrapper>
            <h1 className='heading'>Reach Out!</h1>
            <form className='form'>
                <label for="name">Name</label>
                <input required type="text" className='form__name' id='name' placeholder='Full name'/>
                <label for="mail">Email</label>
                <input required type="email" className='form__name' id='mail' placeholder='email@gmail.com'/>
                <label for="message">Message</label>
                <textarea required className='' name='message' placeholder='message.....'/>

                <div className='form__btn'>
                <button type='submit' className='btn'> send</button>
                </div>
              
            </form>
            
        </Wrapper>
    )
}

export default index