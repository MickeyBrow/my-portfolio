import { useRef, useState } from 'react';
import './contact-modal-content.css'
import emailjs from '@emailjs/browser';

function ContactModal() {
    const [alreadyEmailed, setAlreadyEmailed] = useState(false)
    const [second_screen_info, setSecondScreenInfo] = useState("")
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
              setSecondScreenInfo("Email sent!")
              setAlreadyEmailed(true)
            },
            (error) => {
              console.log('FAILED...', error.text);
              setSecondScreenInfo("Something went wrong!")
              setAlreadyEmailed(true)
            },
          );
    };

    return (
        <>
            {alreadyEmailed ?
            <>
                <p>{second_screen_info}</p>
            </> 
            :
            <>
                <form ref={form} onSubmit={sendEmail} className='modal-content-contact'>
                    <label>What is your email?</label>
                    <input type="email" name="user_email" />
                    <label style={{marginTop: '2%'}}>What is your message?</label>
                    <textarea name="message" style={{height: '20%', marginBottom: '2%'}}/>
                    <input type="submit" value="Send" />
                </form>
            </>
        }
        </>
    )
}
export default ContactModal