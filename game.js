const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


const firstInput = document.querySelector('#firstNum');
const secondInput = document.querySelector('#secondNum');
const result = document.querySelector('.result');
const submit = document.querySelector('.btn');


function checkUserInput() {
	const showFirstInput = firstInput.value;
	const showSecondInput = secondInput.value;
	if (showFirstInput > showSecondInput) {
		result.textContent = 'Great!!! From the numbers entered, ' + showFirstInput + ' is greater than ' + showSecondInput;
		result.style.backgroundColor = 'green';
		
	}
	else if (showSecondInput > showFirstInput) {
		result.textContent = 'Great!!! From the numbers entered, ' + showSecondInput + ' is greater than ' + showFirstInput;
		result.style.backgroundColor = 'green';
		
	}
	else if(showSecondInput == showFirstInput) {
		result.textContent = 'No!!! Of the two numbers, make sure a number is bigger than the other';
		result.style.backgroundColor = 'red';

	}
	else {
		result.textContent = " Do not leave input empty. Enter a number";
		result.style.backgroundColor = 'red';
		
	}
}



submit.addEventListener("click",  function(){
	checkUserInput();
  });

  firstInput.value = "";
  secondInput.value = "";