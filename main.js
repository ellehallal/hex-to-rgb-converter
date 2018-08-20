const hexInput = document.querySelector('input[type="text"]');
const submitColour = document.getElementById('buttoncolour');



const main = () => {
  const changeBackground = () => {
    let hexValue = hexInput.value;
    document.body.style.backgroundColor = hexValue;
  };


  const hextorgb = () => {
    let hexInputValue = hexInput.value;
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexInputValue);
    console.log(result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    } : null);

  };

  submitColour.addEventListener('click', changeBackground);
  hextorgb();
};

main();
