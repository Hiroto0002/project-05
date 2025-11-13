// scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#menu');
  const themeBtn = document.querySelector('#theme-toggle');
  const form = document.querySelector('#contact-form');
  const status = document.querySelector('#form-status');

  // ナビ開閉（モバイル）
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      menu.style.display = expanded ? 'none' : 'block';
    });
  }

  // テーマ切替（CSS変数のトグル）
  themeBtn?.addEventListener('click', () => {
    const dark = document.documentElement.dataset.theme !== 'light';
    document.documentElement.dataset.theme = dark ? 'light' : 'dark';
    status.textContent = `テーマ: ${dark ? 'ライト' : 'ダーク'}`;
  });

  // フォーム基本検証（HTML5 Constraint API）
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    status.textContent = '';
    if (!form.checkValidity()) {
      status.textContent = '入力内容を確認してください。';
      return;
    }
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());
    // ここで送信処理（fetch 等）を擬似
    setTimeout(() => {
      status.textContent = '送信しました。ありがとうございます！';
      form.reset();
    }, 600);
  });
});
