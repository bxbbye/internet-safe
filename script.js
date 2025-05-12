
document.getElementById('quiz-form').addEventListener('submit', function(e) {
  e.preventDefault();
  let score = 0;
  const answers = {
    q1: 'b',
    q2: 'b'
  };
  for (let key in answers) {
    const selected = document.querySelector(`input[name="${key}"]:checked`);
    if (selected && selected.value === answers[key]) score++;
  }
  document.getElementById('quiz-result').textContent = `Ты набрал(а) ${score} из 2 баллов.`;
});
