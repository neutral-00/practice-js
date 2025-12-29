import axios from "axios";

export function getTodos() {
  axios({
    method: "get",
    url: "https://jsonplaceholder.typicode.com/todos?_limit=5",
  })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

export function setupTodoApp() {
  document.querySelector("#outlet").innerHTML = `
    <h1 class="text-xl text-center font-bold">TODO</h1>
    <div class="p-2">
      <button id="getTodoBtn">GET</button>
      <div id="res" class="mt-1"></div>
    </div>
  `;
  // add event handlers
  const getBtn = document.querySelector("#getTodoBtn");
  getBtn.addEventListener("click", () => getTodos());
}

function showOutput(res) {
  document.getElementById("res").innerHTML = `
  <div class="my-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="mt-3">
    <div class="px-3 py-1 bg-slate-600">
      Headers
    </div>
    <div>
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="mt-3">
    <div class="px-3 py-1 bg-slate-600">
      Data
    </div>
    <div class="">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="mt-3">
    <div class="px-3 py-1 bg-slate-600">
      Config
    </div>
    <div class="">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}
