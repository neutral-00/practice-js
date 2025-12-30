# Axios - Tutorial

Let's learn to make api calls using the axios library.

#### What is Axios?

> Axios is a promise-based HTTP client used to communicate with APIs. It simplifies request configuration, interceptors, and error handling compared to the native `fetch` API.

---

## Project Metatdata

- repository: https://github.com/neutral-00/practice-js
- parent branch: main
- branch: 10-axios

## Credits

- [Traversy Media](https://www.youtube.com/watch?v=6LyagkoRWYA)

## Learning Objectives

- [x] setup baseURL
- [x] add Authorization token
- [x] make a get request
- [x] make a post request
- [x] make a put request
- [x] make a patch request
- [x] make a delete request
- [x] add logger via http interceptor
- [x] handle errors globally

### 1️⃣ Installing Axios

```bash
pnpm add axios
```

---

### 2️⃣ Creating an Axios Instance

```js
import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    Authorization: "Bearer SOME_JWT_TOKEN",
  },
});
```

**Why use `axios.create()`?**

- Centralized configuration
- Easy token management
- Isolated interceptors

---

### 3️⃣ Interceptors (Logging & Global Errors)

#### Request Interceptor

```js
api.interceptors.request.use((config) => {
  console.log(
    `[${config.method.toUpperCase()}] ${config.url} | ${new Date().getTime()}`,
  );
  return config;
});
```

#### Response Interceptor

```js
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Request failed:", error.message);
    return Promise.reject(error);
  },
);
```

> Interceptors run **before requests** and **after responses**, making them ideal for logging, auth, and error handling.

---

### 4️⃣ Making API Requests

#### GET

```js
const res = await api.get("/todos", {
  params: { _limit: 5 },
});
```

#### POST

```js
await api.post("/todos", {
  title: "Learn Axios",
  completed: false,
});
```

#### PUT vs PATCH

- **PUT** → replace entire resource
- **PATCH** → update partial fields

```js
api.put("/todos/1", {...});
api.patch("/todos/1", {...});
```

---

### 5️⃣ Multiple Requests (Parallel)

```js
const [userRes, todoRes] = await Promise.all([
  api.get("/users/1"),
  api.get("/todos/1"),
]);
```

Explain:

> Axios exposes `axios.all`, but `Promise.all` is the modern, standard approach.

---

### ✅ Add a “Key Takeaways” section

Example:

> - Prefer `axios.create()` for scalable apps
> - Use interceptors for cross-cutting concerns
> - Use async/await for readable async flows

---
