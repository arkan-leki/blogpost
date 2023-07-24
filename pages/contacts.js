import ContactForm from '@/components/contact/contact-form'
import Head from 'next/head'
import React from 'react'

const Contacts = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Contact Me" />
      </Head>
      <ContactForm />
    </React.Fragment>
  )
}

export default Contacts