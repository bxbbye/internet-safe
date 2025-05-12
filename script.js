
function checkQuiz() {
    let q1 = document.querySelector('input[name="q1"]:checked');
    let q2 = document.querySelector('input[name="q2"]:checked');
    let score = 0;

    if (q1 && q1.value === "b") score++;
    if (q2 && q2.value === "b") score++;

    const result = document.getElementById("result");
    result.textContent = "Ваш результат: " + score + "/2";
}
