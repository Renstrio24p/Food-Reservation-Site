import './index.css';

export default function Footer(DOM: HTMLDivElement) {

  DOM.innerHTML = `
    <div class='footer-content'>
        <div class='col'>
            <div class='logo-container'>
                <img src='/food.png' alt='logo footer' />
                <div>
                    <h5><span>Pot</span>session <span>in Tuao</span></h5>
                    <p>Cagayan</p>
                </div>
            </div>
            <div class='input-content'>
                <label class='placer' for='email'>Your Email</label>
                <input type='email' class='email' id='email' name='email'/>
            </div>
            <button>Subscribe</button>
        </div>
        <div class='col'>
            <h5>Hotlines</h5>
            <p><i class='bx bxs-phone'></i> Phone : (02) 8478893</p>
            <p><i class='bx bxs-envelope'></i> Email: food_reservation@hotchicks.com</p>
            <p><i class='bx bxs-store-alt' ></i> Address: 196 Somewhere St. Brgy. NeverEnding, Laguna</p>
        </div>
        <div class='col'>
            <h5>Recent News</h5>
            <p>About Us</p>
            <p>Delivery</p>
            <p>Get In Touch</p>
        </div>
        <div class='col'>
            <h5>Links</h5>
            <p><i class='bx bxl-windows' ></i> Download for Windows</p>
            <p><i class='bx bxl-apple' ></i> Download for MacOs</p>
            <p><i class='bx bxl-android' ></i> Download for Andriod</p>
        </div>
    </div>
    <div class='credits'>
        <p>&copy; Copyright 2024, Food Reservation Allrights Reserved &trade;</p>
    </div>
  `;

  const placeholder = document.querySelector('.placer') as HTMLParagraphElement;
  const inputField = document.querySelector('.email') as HTMLInputElement;

  inputField.addEventListener('focus', () => {
    placeholder.classList.add('active');
  });

  inputField.addEventListener('blur', () => {
    if (inputField.value) {
      placeholder.classList.add('active');
    } else {
        placeholder.classList.remove('active');
    }
  });
}
