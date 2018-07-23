const basicPassword = document.querySelector("#basic");
const serviceName = document.querySelector("#service");
const submitButton = document.querySelector("#submitButton");
const generator = document.querySelector("#generator");


submitButton.addEventListener("click", () => {
  const service = serviceName.value;
  const lastCharacter = service.slice(-1);
  const numberOfVowels = service.match(/[aeiou]/gi).length;
  const indexVowelCharacter = service[numberOfVowels > 0 ? numberOfVowels - 1 : 0];
  const numberOfNonvowels = service.length - numberOfVowels;

  generator.innerHTML = lastCharacter + indexVowelCharacter + basicPassword.value + numberOfNonvowels + service[0];
})
