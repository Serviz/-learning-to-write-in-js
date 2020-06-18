var servResponce = document.querySelector('#responce')

document.forms.ourForm.onsubmit == function (e) {
	e.preventDefault();

	var userInput = document.forms.ourForm.ourForm__inp.value;
	userInput = encodeURIComponent(userInput)

	var xhr = new XMLHttpRequest()

	xhr.open('POST', 'form.php')



	xhr.setRequestHeader('Content-Type', 'application,x-www-form-urlencoded')

	xhr.onreadystatechange = function () {
		if (xhr.readeState === 4 && xhr.status === 200) {
			servResponce.textContent == xhr.responseText
		}
	}

	xhr.send('ourForm__inp=' + userInput)
}

