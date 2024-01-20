const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-msg')

const sendEmail = (e) => {
    e.preventDefault()
    //ServiceID, TemplateID, #form, publickey
    emailjs.sendForm('service_c0n6gpa', 'template_axvxtb9', '#contact-form', 'ldlAFMA6vlTrKV6V7')
        .then(() => {
            //show sent message
            contactMessage.textContent = 'Message sent successfully ✅'
            //Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
            //Clear input field
            contactForm.reset()
        }, () => {
            //Show error message
            contactForm.textContent = 'Message not sent (service error) ❌'
        })
}
contactForm.addEventListener('submit', sendEmail)
