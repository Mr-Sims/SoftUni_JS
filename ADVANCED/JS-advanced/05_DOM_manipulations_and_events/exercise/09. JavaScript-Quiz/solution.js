function solve() {

	const sections = document.getElementsByTagName("section");
	console.log(sections)
	console.log(Array.from(sections))
	const resultSection = document.getElementById("results");
	const resultH1 = document.querySelector("#results > li > h1");

	const correctAnswers = {
			0: "onclick",
			1: "JSON.stringify()",
			2: "A programming API for HTML and XML documents",
		};

	let wrongAnswers = 0;
	let i = 0;

	document.body.addEventListener("click", e => {
		if (e.target.className === "answer-text") {
			const sectionsArr = Array.from(sections);
			sectionsArr[i].style.display = "none";

			if (e.target.textContent != correctAnswers[i]) {
				wrongAnswers++;
			}

			if (sectionsArr[i + 1] !== undefined) {
				sectionsArr[i + 1].style.display = "block";
				i++;
			} else {
				resultSection.style.display = "block";
				resultH1.innerHTML =
					wrongAnswers > 0
						? `You have ${3 - wrongAnswers} right answers`
						: "You are recognized as top JavaScript fan!"
			}
		}
	})
}


// function solve() {
// 	const quiz = document.querySelectorAll('#quizzie section')
// 	let correctAnswers = 0

// 	let resultSection = document.getElementById('results')
// 	let resultSectionH1 = document.getElementById('results').children[0].children[0]

// 	for (let i = 0; i < quiz.length; i++) {

// 		quiz[i].addEventListener('click', checkAnswer)

// 		function checkAnswer(ev) {
// 			if (ev.target.parentNode.parentNode.className == "quiz-answer low-value") {
// 				correctAnswers++
// 				quiz[i].classList.add('hidden')
// 				if (i != quiz.length - 1) {
// 					quiz[i + 1].className = ''
// 				}
// 			} else if (ev.target.parentNode.parentNode.className == 'quiz-answer high-value') {
// 				quiz[i].classList.add('hidden')
// 				if (i != quiz.length - 1) {
// 					quiz[i + 1].className = ''
// 				}
// 			}
// 		}
// 		if (i == quiz.length - 1) {
// 			if (correctAnswers == quiz.length) {
// 				resultSection.style.display = 'block'
// 				resultSectionH1.textContent += 'You are recognized as top JavaScript fan!'
// 			} else {
// 				resultSection.style.display = 'block'
// 				resultSectionH1.textContent += `You have ${correctAnswers} right answers`

// 			}
// 		}
// 	}
// }
