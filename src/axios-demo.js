import axios from "axios";

// add authorization token and base url
const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: "Bearer SOME_JWT_TOKEN",
  },
});

//  using req iterceptor to log request
axiosInstance.interceptors.request.use((config) => {
  console.log(
    `[${config.method.toUpperCase()}] ${config.url} | ${new Date().getTime()}`,
  );
  return config;
});

// using response interceptor for global api error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Global Error Hanlder | Request failed:", error.message);
    return Promise.reject(error);
  },
);

export function getTodos() {
  axiosInstance
    .get("/todos/?_limit=5")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

function postTodo() {
  axiosInstance
    .post("/todos", {
      userId: 1,
      title: "learn axios",
      completed: true,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

function putTodo() {
  axiosInstance
    .put("/todos/1", {
      title: "Learn singals",
      completed: true,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

function patchTodo() {
  axiosInstance
    .patch("/todos/1", {
      title: "learn signal",
      completed: true,
    })
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

function deleteTodo() {
  axiosInstance
    .delete("/todos/1")
    .then((res) => showOutput(res))
    .catch((err) => console.error(err));
}

// we can use the .then and .catch
// but below is the modern approach of async and await
async function getTodosAndUser() {
  const [userRes, todoRes] = await Promise.all([
    axiosInstance.get("/users/1"),
    axiosInstance.get("/todos/1"),
  ]);

  showOutput(userRes);
  console.log(todoRes);
}

async function triggerInvalidTodo() {
  try {
    const res = await axiosInstance.get("/todoss?_limit=5");
    showOutput(res);
  } catch (error) {
    console.log("some error occured");
  }
}

export function setupTodoApp() {
  document.querySelector("#outlet").innerHTML = `
    <h1 class="text-xl text-center font-bold">TODO</h1>
    <div class="p-2">
      <button id="getBtn">GET</button>
      <button id="postBtn">POST</button>
      <button id="putBtn">PUT</button>
      <button id="patchBtn">PATCH</button>
      <button id="deleteBtn">DELETE</button>
      <button id="getTodosAndUserBtn">TODO + USER</button>
      <button id="invalidApiBtn">INVALID API</button>
      <div id="res" class="mt-1"></div>
    </div>
  `;
  // add event handlers
  const getBtn = document.querySelector("#getBtn");
  getBtn.addEventListener("click", () => getTodos());
  const postBtn = document.querySelector("#postBtn");
  postBtn.addEventListener("click", () => postTodo());
  const putBtn = document.querySelector("#putBtn");
  putBtn.addEventListener("click", () => putTodo());
  const patchBtn = document.querySelector("#patchBtn");
  patchBtn.addEventListener("click", () => patchTodo());
  const deleteBtn = document.querySelector("#deleteBtn");
  deleteBtn.addEventListener("click", () => deleteTodo());
  const getTodosAndUserBtn = document.querySelector("#getTodosAndUserBtn");
  getTodosAndUserBtn.addEventListener("click", () => getTodosAndUser());
  const invalidApiBtn = document.querySelector("#invalidApiBtn");
  invalidApiBtn.addEventListener("click", () => triggerInvalidTodo());
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
      <pre class="bg-slate-700 text-slate-100 p-3 rounded text-sm overflow-x-auto">${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="mt-3">
    <div class="px-3 py-1 bg-slate-600">
      Data
    </div>
    <div class="">
      <pre class="bg-slate-700 text-slate-100 p-3 rounded text-sm overflow-x-auto">${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="mt-3">
    <div class="px-3 py-1 bg-slate-600">
      Config
    </div>
    <div class="">
      <pre class="bg-slate-700 text-slate-100 p-3 rounded text-sm overflow-x-auto">${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}
