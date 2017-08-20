(() => {
  'use strict';

  const Css = {
    ADDRESS: 'address',
    LINK: 'link',
    TOAST: 'toast',
    TOAST_SHOW: 'show'
  };
  const COPIED_TEXT = 'copied';
  const getElByClass = (name) => document.getElementsByClassName(name)[0];
  const getEmailFn = () => atob('IGN0ZXJlZmlua29AZ21haWwuY29tIA==').trim();

  const addressEl = getElByClass(Css.ADDRESS);
  const clipboard = new Clipboard(addressEl, {
    text: getEmailFn
  });
  clipboard.on('success', () => {
    addressEl.textContent = getEmailFn();
    addressEl.classList.remove(Css.LINK);
    clipboard.destroy();
    showToast(COPIED_TEXT);
  });

  function showToast(content) {
    const toast = getElByClass(Css.TOAST);
    toast.textContent = content;
    toast.classList.add(Css.TOAST_SHOW);

    setTimeout(() => {
      toast.classList.remove(Css.TOAST_SHOW);
    }, 2900);
  }
})();
