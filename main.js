(() => {
  'use strict';

  const addressEl = document.getElementsByClassName('address')[0];
  function copyAddress() {
    const email = atob('IGN0ZXJlZmlua29AZ21haWwuY29tIA==').trim();

    // Update the element to have the email and stop listening.
    addressEl.textContent = email;
    addressEl.classList.remove('link');
    addressEl.removeEventListener('touchend', copyAddress);
    addressEl.removeEventListener('click', copyAddress);

    // Create a fake textarea to copy from.
    const target = document.createElement('textarea');
    target.value = email;
    target.classList = 'offscreen';
    // Prevent zooming on iOS.
    target.style.fontSize = '12pt';
    // Move element out of screen horizontally.
    target.style.position = 'absolute';
    target.style.left = '-9999px';
    // Move element to the same position vertically
    const yPosition = window.pageYOffset || document.documentElement.scrollTop;
    target.style.top = yPosition + 'px';
    target.setAttribute('readonly', '');
    document.body.appendChild(target);

    // Focus, select the text, copy it, and then remove the fake target.
    target.select();
    const result = document.execCommand('copy');
    document.body.removeChild(target);

    if (result) {
      showToast('copied');
    }
  }
  addressEl.addEventListener('touchend', copyAddress);
  addressEl.addEventListener('click', copyAddress);

  function showToast(content) {
    const toast = document.getElementsByClassName('toast')[0];
    toast.textContent = content;
    toast.classList.add('show');

    setTimeout(() => {
      toast.classList.remove('show');
    }, 2900);
  }
})();
