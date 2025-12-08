/*
Name: Samuel MAcaulay
File: script.js
Date: 2025-12-08
A very brief description: Minimal JavaScript for the starter accessibility demo.
*/

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('feedback-form');
  const status = document.getElementById('form-status');
  const clearBtn = document.getElementById('clear');

  // Simple client-side validation and accessible status messages
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    status.classList.remove('sr-only');
    status.textContent = '';

    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const comments = form.elements['comments'].value.trim();

    const problems = [];
    if (!name) problems.push('Please enter your name.');
    if (!email) problems.push('Please enter your email address.');
    if (!comments) problems.push('Please enter some comments.');

    if (problems.length) {
      // announce the first problem to assistive tech
      status.textContent = problems.join(' ');
      status.setAttribute('role', 'status');
      status.setAttribute('aria-atomic', 'true');
      status.classList.remove('sr-only');
      status.focus?.();
      return;
    }

    // Simulate successful submission (no network call)
    status.textContent = 'Thanks — your feedback has been recorded.';
    status.setAttribute('role', 'status');
    status.setAttribute('aria-atomic', 'true');
    status.classList.remove('sr-only');

    // clear fields after successful submit
    form.reset();
  });

  clearBtn.addEventListener('click', function () {
    form.reset();
    status.textContent = 'Form cleared.';
    status.classList.remove('sr-only');
  });
});