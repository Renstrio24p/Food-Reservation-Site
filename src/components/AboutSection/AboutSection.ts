import './AboutSection.css'

export default function AboutSection(DOM: HTMLDivElement) {

    DOM.innerHTML = (`
    <div class='about-section'>
      <h3>About Us</h3>
      <div class='about-content'>
        <div class='about-left'>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque quos eligendi fugit repellendus beatae fuga saepe cupiditate sequi corporis odio.
            </p>
            <button>Read more</button>
        </div>
        <div class='about-right'>
            <img src='/sinigang.png' alt='food logo'/>
            <div class='blurr'></div>
        </div>
      </div>
    </div>
  `);

}