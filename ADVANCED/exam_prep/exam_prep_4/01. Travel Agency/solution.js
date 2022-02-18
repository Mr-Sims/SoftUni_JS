window.addEventListener('load', solution);

function solution() {
	let inputs = {
		name: document.getElementById('fname'),
		email: document.getElementById('email'),
		phoneNr: document.getElementById('phone'),
		address: document.getElementById('address'),
		postCode: document.getElementById('code'),
	};

	let savedInputs = {
		name: null,
		email: null,
		phoneNr: null,
		address: null,
		postCode: null,
	};
	const submitBtn = document.getElementById('submitBTN');
	submitBtn.addEventListener('click', submit);

	let previewSection = document.getElementById('infoPreview');
	let mainBlockDiv = document.getElementById('block');

	let editBtn = document.getElementById('editBTN');
	let continueBtn = document.getElementById('continueBTN');

	editBtn.addEventListener('click', edit);
	continueBtn.addEventListener('click', continueFunc);

	function submit(ev) {
		if (inputs.name.value.trim() != '' && inputs.email.value.trim() != '') {
			for (let el in inputs) {
				let label = inputs[el].parentNode.children[0].textContent;
				let text = inputs[el].value;
				let liElement = createLi(label, text);
				previewSection.appendChild(liElement);
			};
			for (let el in inputs) {
				savedInputs[el] = inputs[el].value;
				inputs[el].value = '';
			};
			submitBtn.disabled = true;
			editBtn.disabled = false;
			continueBtn.disabled = false;
		};
	};

	function edit(ev) {
		while (previewSection.lastChild) {
			previewSection.removeChild(previewSection.lastChild);
		};

		for (let el in savedInputs) {
			inputs[el].value = savedInputs[el].trim();
		};
		submitBtn.disabled = false;
		editBtn.disabled = true;
		continueBtn.disabled = true;
	};

	function continueFunc(ev) {
		while (mainBlockDiv.lastChild) {
			mainBlockDiv.removeChild(mainBlockDiv.lastChild);
		}
		mainBlockDiv.innerHTML = `<h3>Thank you for your reservation!</h3>`;
	};

	function createLi(label, text) {
		let el = document.createElement('li');
		el.textContent = `${label} ${text}`;
		return el
	};
}
