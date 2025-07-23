emailjs.init('ssSRpGPXlKcgNLafj');

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('submitBtn').addEventListener('click', function() {
    const form = document.getElementById('contactForm');
    
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    
    this.textContent = 'Sending...';
    this.disabled = true;
    
    emailjs.sendForm('onur.unal492@gmail.com', 'template_6jsroul', form)
      .then(() => {
        alert('Message sent!');
        form.reset();
        this.textContent = 'Submit';
        this.disabled = false;
      })
      .catch(() => {
        alert('Failed to send.');
        this.textContent = 'Submit';
        this.disabled = false;
      });
  });
});
