window.onload = () => {
	let emailModalState = false;
	const closeModalBtn = document.getElementsByClassName(
		'login-modal__close-btn'
	)[0];
	const emailModal = document.getElementsByClassName('login-modal')[0];
	const modal = document.getElementById('modal-container');
	const emailInput = document.getElementById('emailInput');
	const errorMessage = document.getElementsByClassName(
		'login-modal__error-message'
	)[0];
	const sendBtn = document.getElementsByClassName('login-modal__button')[0];
	const emailForm = document.getElementsByClassName('login-modal__form')[0];
	const notInterested = document.getElementsByClassName(
		'login-modal__decline'
	)[0];

	document.body.addEventListener('mouseleave', () => {
		if (emailModalState == false) {
			emailModal.classList.add('login-modal__visibile');
			emailInput.value = '';
			emailModalState = true;
		}
	});

	//closing modal when on outside click of modal window
	document.body.addEventListener('click', e => {
		let target = e.target;
		do {
			if (target == modal) {
				emailInput.focus();
				return;
			}
			target = target.parentNode;
		} while (target);
		closeEmailModal();
		removeError();
	});

	const closeEmailModal = () => {
		emailModal.classList.remove('login-modal__visibile');
	};

	closeModalBtn.addEventListener('click', () => {
		closeEmailModal();
	});

	notInterested.addEventListener('click', () => {
		closeEmailModal();
	});

	const validEmail = email => {
		return /\S+@\S+\.\S+/.test(email);
	};

	const addError = () => {
		errorMessage.style.transition = 'all 0.3s ease-in-out';
		errorMessage.style.visibility = 'visible';
		emailForm.classList.add('login-modal__error-message');
	};

	const removeError = () => {
        errorMessage.style.transition = 'all 0.3s ease-in-out';
        errorMessage.style.visibility = 'hidden';
        emailForm.classList.remove('login-modal__error-message');
	};

	sendBtn.addEventListener('click', e => {
		e.preventDefault();
		if (validEmail(emailInput.value)) {
			removeError();
			thankYouMessage();
			setTimeout(() => {
				closeEmailModal();
			}, 3000);
		} else {
			addError();
		}
	});

	const thankYouMessage = () => {
		document
			.getElementsByClassName('email-thankyou')[0]
			.classList.add('email-thankyou__email-submited');
	};
};