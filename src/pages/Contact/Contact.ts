import './Contact.css'

export default function Contact(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
      <div class='contact'>
        <div class='contact-hero'>
            <div>
                <h1>Contact US</h1>
                <p>We love to hear from you.</p>
            </div>
        </div>
        <div class='contact-content'>
            <h2 class='title'>Contact Us Wherever you go!</h2>
            <div class='contact-divider'>
                <div class='contact-left'>
                    <h2>Get In Touch</h2>
                    <div>
                        <form>
                            <div class='form-inputs'>
                                <label class='label' for='name'>Your Name</label>
                                <input class='inputs' type='text' id='name' />
                            </div>
                            <div class='form-inputs'>
                                <label class='label' for='email'>Your Email</label>
                                <input class='inputs' type='email' id='email' name='email' />
                            </div>
                            <div class='form-inputs'>
                                <label class='label' for='message'>Your Message</label>
                                <textarea class='inputs' id='message' name='message'></textarea>
                            </div>
                            <button>SEND</button>
                        </form>
                    </div>
                </div>
                <div class='contact-right'>
                    <h2>Find US</h2>
                    <ul>
                        <li>Phone : (02) 8478893</li>
                        <li>Email: food_reservation@hotchicks.com</li>
                        <li>Address: 196 Somewhere St. Brgy. NeverEnding, Laguna</li>
                    <ul>
                </div>
            </div>
        </div>
      </div>
  `);

  const inputFields = DOM.querySelectorAll('.inputs') as NodeListOf<HTMLInputElement | HTMLTextAreaElement>;

  inputFields.forEach((input) => {
    input.addEventListener('focus', () => {
      const correspondingLabel = input.previousElementSibling as HTMLLabelElement;
      if (correspondingLabel.classList.contains('label')) {
        correspondingLabel.classList.add('active');
      }
    });

    input.addEventListener('blur', () => {
      if (input.value === '') {
        const correspondingLabel = input.previousElementSibling as HTMLLabelElement;
        if (correspondingLabel.classList.contains('label')) {
          correspondingLabel.classList.remove('active');
        }
      }
    });
  });

}
