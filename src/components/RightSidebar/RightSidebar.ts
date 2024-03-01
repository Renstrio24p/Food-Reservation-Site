import './RightSidebar.css'

export default function RightSidebar(DOM: HTMLDivElement) {

  DOM.innerHTML = (`
      <div class='account-tier'>
         <a herf='/login'>Account</a>
         <h2>Food Reservation</h2>
         <p class='status'> <i class='bx bxs-circle'></i> Open Now</p>
      </div>
      <div class='account-tier deliver'>
          <div class='tiers'>
            <div>
                <i class='bx bxs-car'></i>
            </div>
            <select>
                <option value=''>Select Delivery</option>
                <option value='cod'>Cash on Delivery</option>
                <option value='otc'>Over the Counter</option>
            </select>
          </div>
          <div class='tiers'>
            <div>
                <i class='bx bxs-map'></i>
            </div>
            <label class='label' for='address'>Enter Address</label>
            <input id='address' name='address' type='text'/>
          </div>
          <div class='tiers cart'>
                <h2>Your Cart</h2>
                <div>
                    <i class='bx bx-cart'></i>
                    <p>You cart is empty</p>
                    <button>Goto Checkout</button>
                    <p>Have a coupon ?</p>
                </div>
          </div>
      </div>
      <div class='account-tier ads'>
          <div class='banner'>
            <p>Special</p>
            <h3>Cheezy Pizza</h3>
            <h4>Overload</h4>
            <h5>20% Off</h5>
          </div>
      </div>
  `);

   const addressInput = document.getElementById('address') as HTMLInputElement
   const labelAddress = DOM.querySelector('.label') as HTMLLabelElement

   addressInput.addEventListener('focus', () => {
    labelAddress.classList.add('active');
  });

  addressInput.addEventListener('blur', () => {
    if (addressInput.value) {
      labelAddress.classList.add('active');
    } else {
        labelAddress.classList.remove('active');
    }
  });
}