$(document).ready(function() {
  $('#qr-form').on('submit', function(event) {
    event.preventDefault();
    generate();
  });

  function generate() {
    let input = $('#url-input').val();
    let display = $('#qr-code');
    
    if (input.trim() === "") {
      alert("Please enter a URL");
      return;
    }

    // Clear any previous QR code
    display.empty();

    // Generate the QR code
    let qr = new QRious({
      value: input,
      size: 200 // You can adjust the size of the QR code
    });

    // Append the generated QR code to the container
    display.append(qr.canvas);

    // Clear the input field
    $('#url-input').val('');
  }
})
