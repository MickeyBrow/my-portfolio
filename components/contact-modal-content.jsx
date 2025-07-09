import './contact-modal-content.css'

function ContactModal() {
    return (
        <div className='modal-content-contact'>
            <p>Whats your email?</p>
            <input placeholder='email'/>
            <p>Whats your message?</p>
            <input style={{width: '70%', height: '40%'}} placeholder='message'/>
            <button>Send</button>
        </div>
    )
}
export default ContactModal