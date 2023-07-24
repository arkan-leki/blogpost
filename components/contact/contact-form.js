import classes from './contact-form.module.css'
import { useEffect, useState } from 'react'
import Notification from '../ui/notification';

async function sendContactData(contactDetails) {
    const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(contactDetails),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }
}

function ContactForm() {
    const [requestStatus, setRequestStatus] = useState(); // 'pending', 'success', 'error'
    const [requestError, setRequestError] = useState();


    useEffect(() => {
        if (requestStatus === 'success' || requestStatus === 'error') {
          const timer = setTimeout(() => {
            setRequestStatus(null);
            setRequestError(null);
          }, 3000);

          return () => clearTimeout(timer);
        }
      }, [requestStatus]);


    async function sendEmail(event) {
        event.preventDefault();
        const email = event.target.elements.email.value;
        const name = event.target.elements.name.value;
        const message = event.target.elements.message.value;
        // Send the email

        setRequestStatus('pending');

        try {
            await sendContactData({
                email,
                name,
                message
            });
            setRequestStatus('success');
            setRequestError(null);
            event.target.reset();
        } catch (error) {
            setRequestError(error.message);
            setRequestStatus('error');
        }
    }

    let notification;

    if (requestStatus === 'pending') {
        notification = {
            status: 'pending',
            title: 'Sending message...',
            message: 'Your message is on its way!',
        };
    }

    if (requestStatus === 'success') {
        notification = {
            status: 'success',
            title: 'Success!',
            message: 'Message sent successfully!',
        };
    }

    if (requestStatus === 'error') {
        notification = {
            status: 'error',
            title: 'Error!',
            message: requestError,
        };
    }

    return (
        <section className={classes.contact}>
            <h2>Contact</h2>
            <form className={classes.form} onSubmit={sendEmail}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <label forhtml="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={classes.control}>
                        <label forhtml="name">Your name</label>
                        <input type="text" id="name" required />
                    </div>
                </div>
                <div className={classes.control}>
                    <label forhtml="message">Message</label>
                    <textarea id="message" rows="5" required></textarea>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </form>
            {notification && <Notification
                status={notification.status}
                title={notification.title}
                message={notification.message}
            />}
        </section>
    )
}

export default ContactForm