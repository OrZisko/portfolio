import emailjs from '@emailjs/browser'
import { useRef } from 'react';

function Contact() {

    const form = useRef()

    const sendEmail = async (ev) => {
        ev.preventDefault()
        try {
            const email = await emailjs.sendForm('service_50b3qzg', 'template_oiauwbe', form.current, 'SOeOpg11srwf352LI')
            console.log(email);
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div id='contact' className='contact main-cmp'>
            <div className='contact-container'>
                <h1>Contact</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input className='form-name' type="text" name='name' placeholder='Name' />
                    <input className='form-email' type="email" name='reply_to' placeholder='Email' />
                    <input className='form-subject' type="text" name="subject" placeholder='Subject' />
                    <textarea placeholder='Message' className='form-message' name="message" cols="30" rows="10"></textarea>
                    <button className='form-send' type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;