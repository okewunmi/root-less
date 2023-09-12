import React from 'react'
import { Wrapper } from './styles'
const index = () => {
    return (
        <Wrapper>
            <h1 className='heading'>Reach Out!</h1>
            <form className='form'>
                <label for="name">Name</label>
                <input type="text" className='form__name' id='name' placeholder='Full name'/>
                <label for="mail">Email</label>
                <input type="email" className='form__name' id='mail' placeholder='email@gmail.com'/>
                <label for="message">Message</label>
                <textarea className='' name='message' placeholder='message.....'/>
                <label >How Can I help?</label>
                <div className='ckeck'>
                    <div>
                    <input type="checkbox" id="UX Design" name="interest" value="UX Design" />
                    <label htmlfor="UX Design">UX Design</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Digital Strategy" name="interest" value="Digital Strategy" />
                        <label htmlfor="Digital Strategy">Digital Strategy</label>
                        </div>
                        <div>
                    <input type="checkbox" id="Research" name="interest" value="Research" />
                    <label htmlfor="Research">Research</label>
                    </div>
                    <div>
                    <input type="checkbox" id="Branding" name="interest" value="Branding" />
                    <label htmlfor="Branding">Branding</label>
                    </div>
                    <div>
                    <input type="checkbox" id="Marketing" name="interest" value="Marketing" />
                    <label  for="Branding">Marketing</label>
                    </div>
                </div>
                <div className='form__btn'>
                <button type='submit'> send</button>
                </div>
              
            </form>
            
        </Wrapper>
    )
}

export default index