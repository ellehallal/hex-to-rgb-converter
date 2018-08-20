const hexInput = document.querySelector('input[type="text"]');
const submitColour = document.getElementById('buttoncolour');
const result1 = document.querySelector('#result1');
const hex = document.querySelector('#hex');
const resultr = document.querySelector('#resultr');
const resultg = document.querySelector('#resultg');
const resultb = document.querySelector('#resultb');

const main = () => {
  const changeBackground = () => {
    let hexValue = hexInput.value;
    document.body.style.backgroundColor = hexValue;
  };


  const hextorgb = () => {
    let hexInputValue = hexInput.value;
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexInputValue);

    resultr.innerHTML = `${parseInt(result[1], 16)}`;
    resultg.innerHTML = `${parseInt(result[2], 16)}`;
    resultb.innerHTML = `${parseInt(result[3], 16)}`;

    // console.log(result ? {
    //   r: parseInt(result[1], 16),
    //   g: parseInt(result[2], 16),
    //   b: parseInt(result[3], 16),
    // } : null);

  };

  submitColour.addEventListener('click', changeBackground);
  submitColour.addEventListener('click', hextorgb);
};

main();
