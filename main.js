const hexInput = document.querySelector('input[type="text"]');
const submitColour = document.getElementById('buttoncolour');


const main = () => {
  const changeBackground = () => {
    const hexValue = hexInput.value;
    document.body.style.backgroundColor = hexValue;
  };

  submitColour.addEventListener('click', changeBackground);
};

main();
