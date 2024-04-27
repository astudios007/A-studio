const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}
if(close){
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}




document.getElementById('sizeSelect').addEventListener('change', function() {
  var customSelected = this.value === 'Custom';
  document.getElementById('heightSelect').style.display = customSelected ? 'inline-block' : 'none';
  
});

document.getElementById('addToCartButton').addEventListener('click', function() {
  var selectedSize = document.getElementById('sizeSelect').value;
  var selectedHeight = document.getElementById('heightSelect').value;

  var quantity = document.getElementById('quantityInput').value;
  
  // Construct WhatsApp message with selected values
  var message = "Product:  Frame " + selectedSize + "\n";
  if (selectedSize === "Custom") {
    message += "Size: " + selectedHeight + "\n";
    
  }
  message += "Quantity: " + quantity;
  
  // Redirect to WhatsApp with the message
  var whatsappLink = "https://wa.me/919080000155?text=" + encodeURIComponent(message);
  window.location.href = whatsappLink;
});
