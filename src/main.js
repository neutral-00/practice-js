import { setupCounter } from "./counter.js";
import { setupTodoApp } from "./axios-demo.js";
import javascriptLogo from "./javascript.svg";
import "./style.css";
import lousingLogo from "/lousing-logo.svg";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen flex flex-col">

    <!-- Header -->
    <header class="sticky top-0 z-10 flex items-center px-6 py-4 border-b bg-[#242424]">
      <!-- Left logo -->
      <a href="https://github.com/neutral-00" target="_blank" class="logo flex items-center">
        <img src="${lousingLogo}" class="h-8 w-auto" alt="Lousing logo" />
      </a>

      <!-- Right group -->
      <div class="ml-auto flex items-center gap-4">
        <span class="text-lg font-semibold text-cyan-600 tracking-wide">
          Practice
        </span>

        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          class="flex items-center"
        >
          <img src="${javascriptLogo}" class="vanilla-js-logo h-8 w-auto" alt="JavaScript logo" />
        </a>
      </div>
    </header>

    <!-- Main content -->
    <main class="flex-1 p-6">
      <div id="outlet" class="max-w-3xl mx-auto"></div>
    </main>

  </div>
`;

// setupCounter();
setupTodoApp();
