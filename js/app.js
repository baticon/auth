function regexChecker(text) {
  let regexPattern = /(?=^[a-zA-Z0-9-_]{0,}$)(?=.*[a-zA-Z].*)/g;
  let result = regexPattern.test(text);
  return result;
}

window.addEventListener('load', () => {
  const loginForm = document.querySelector('#login-form');
  const registrationForm = document.querySelector('#registration-form');
 
  if (loginForm) {
    const login = document.querySelector('#login');
    const password = document.querySelector('#password');

    const loginError = document.querySelector('#wrong-login');
    const passwordError = document.querySelector('#wrong-password');

    login.onfocus = (subEventOne) => {
      const boolCheck = regexChecker(login.value);
      if (boolCheck === false) {
        loginError.hidden = false;
      }
      else {
        loginError.hidden = true;
      }
    };
    login.onblur = (subEventOne) => {
      const boolCheck = regexChecker(login.value);
      if (boolCheck === false) {
        loginError.hidden = false;
      }
      else {
        loginError.hidden = true;
      }
    };

    password.onfocus = (subEventTwo) => {
      passwordError.hidden = !subEventTwo.srcElement.validity.patternMismatch;
    };
    password.onblur = (subEventTwo) => {
      passwordError.hidden = !subEventTwo.srcElement.validity.patternMismatch;
    };

    loginForm.addEventListener('submit', (event) => {
      console.log("SUBMIT")
      event.preventDefault();

      const loginValue = document.querySelector('#login').value;
      const passwordValue = document.querySelector('#password').value;

      if (regexChecker(loginValue) === true) {
        console.log('login: ' + loginValue);
        console.log('password: ' + passwordValue);
      }

    });
  }

  if (registrationForm) {

    const email = document.querySelector('#email');
      const login = document.querySelector('#login');
      const name = document.querySelector('#name');
      const surname = document.querySelector('#surname');
      const phone = document.querySelector('#phone');
      const password = document.querySelector('#password');
      const repeatedPassword = document.querySelector('#repeat-password');

      const emailError = document.querySelector('#wrong-email');
      email.onfocus = (subEventOne) => {
        emailError.hidden = !subEventOne.srcElement.validity.patternMismatch;
      };
      email.onblur = (subEventOne) => {
        emailError.hidden = !subEventOne.srcElement.validity.patternMismatch;
      };

      const loginError = document.querySelector('#wrong-login');
      login.onfocus = (subEventTwo) => {
        const boolCheck = regexChecker(login.value);
        if (boolCheck === false) {
          loginError.hidden = false;
        }
        else {
          loginError.hidden = true;
        }
      };
      login.onblur = (subEventTwo) => {
        const boolCheck = regexChecker(login.value);
        if (boolCheck === false) {
          loginError.hidden = false;
        }
        else {
          loginError.hidden = true;
        }
      };

      const nameError = document.querySelector('#wrong-name');
      name.onfocus = (subEventThree) => {
        console.log("subEventThree", subEventThree)
        nameError.hidden = !subEventThree.srcElement.validity.patternMismatch;
      };
      name.onblur = (subEventThree) => {
        nameError.hidden = !subEventThree.srcElement.validity.patternMismatch;
      };

      const surnameError = document.querySelector('#wrong-surname');
      surname.onfocus = (subEventFour) => {
        surnameError.hidden = !subEventFour.srcElement.validity.patternMismatch;
      };
      surname.onblur = (subEventFour) => {
        surnameError.hidden = !subEventFour.srcElement.validity.patternMismatch;
      };

      const phoneError = document.querySelector('#wrong-phone');
      phone.onfocus = (subEventFive) => {
        phoneError.hidden = !subEventFive.srcElement.validity.patternMismatch;
      };
      phone.onblur = (subEventFive) => {
        phoneError.hidden = !subEventFive.srcElement.validity.patternMismatch;
      };

      const passwordError = document.querySelector('#wrong-password');
      password.onfocus = (subEventSix) => {
        passwordError.hidden = !subEventSix.srcElement.validity.patternMismatch;
      };
      password.onblur = (subEventSix) => {
        passwordError.hidden = !subEventSix.srcElement.validity.patternMismatch;
      };

      const repeatedPasswordError = document.querySelector('#wrong-repeated-password');
      repeatedPassword.onfocus = (subEventSeven) => { repeatedPasswordError.hidden = !subEventSeven.srcElement.validity.patternMismatch;
      };
      repeatedPassword.onblur = (subEventSeven) => { repeatedPasswordError.hidden = !subEventSeven.srcElement.validity.patternMismatch;
      };

    registrationForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const emailValue = document.querySelector('#email').value;
      const loginValue = document.querySelector('#login').value;
      const nameValue = document.querySelector('#name').value;
      const surnameValue = document.querySelector('#surname').value;
      const phoneValue = document.querySelector('#phone').value;
      const passwordValue = document.querySelector('#password').value;
      const repeatedPasswordValue = document.querySelector('#repeat-password').value;

      if (regexChecker(loginValue) === true) {
        console.log('email: ' + emailValue);
        console.log('login: ' + loginValue);
        console.log('name: ' + nameValue);
        console.log('surname: ' + surnameValue);
        console.log('phone: ' + phoneValue);
        console.log('password: ' + passwordValue);
        console.log('password repeat' + repeatedPasswordValue);
      }

    });
  }
});
