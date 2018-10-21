// index.erb

const page = document.documentElement;
const panel = document.querySelector('.panel');
const themeBtns = document.querySelectorAll('.theme > button');

themeBtns.forEach(button => {
	button.addEventListener('click', changeTheme);
})

function changeTheme(e) {
	if (e.target.value == 'sealife') {
		page.style.setProperty('--bg', '#B3E5FC');
		page.style.setProperty('--bg-text', 'darkblue');
		page.style.setProperty('--font', 'Lato'); // not working
		panel.style.setProperty('--bg', 'lightblue'); // not working
	} else if (e.target.value == 'misty-rose') {
		page.style.setProperty('--bg', 'mistyrose');
		page.style.setProperty('--bg-text', 'brown');
	}
}

//places_go.erb

const toGoBtn = document.querySelector('.btn-edit-to-go');

toGoBtn.addEventListener('click', () => {
	document.querySelector('.to-go-new-form').style.display = 'block';
})


