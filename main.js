// isolate the input field

const hexInput = document.querySelector('#hexchanger > input');
const docBody = document.querySelector('body');

// add a listener to it

const changeBackground = () => {
  const hexValue = hexInput.value;
  console.log('hello');
  docBody.setAttribute('style', 'background-color: hexValue');
};

const main = () => {
  hexInput.addEventListener('input', changeBackground());
};

// set attribute of body background to field input

main();
