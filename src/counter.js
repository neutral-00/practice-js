export function setupCounter() {
  document.querySelector("#outlet").innerHTML = `
  <div id="counterApp" class="flex flex-wrap justify-center">
    <h1 class="w-full text-center font-bold">Counter</h1>
    <div class="p-2 mt-2">
      <button id="counter" type="button"></button>
    </div>
  </div>
  `;
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  const element = document.querySelector("#counter");
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
