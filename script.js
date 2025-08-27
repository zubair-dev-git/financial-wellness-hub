document.getElementById('interestForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const P = parseFloat(document.getElementById('principal').value);
  const r = parseFloat(document.getElementById('rate').value) / 100;
  const t = parseFloat(document.getElementById('time').value);
  const n = parseInt(document.getElementById('frequency').value);

  const A = P * Math.pow((1 + r / n), n * t);
  const interest = A - P;

  document.getElementById('result').innerHTML = `
    <strong>Future Value:</strong> ৳${A.toFixed(2)}<br/>
    <strong>Total Interest:</strong> ৳${interest.toFixed(2)}
  `;
});