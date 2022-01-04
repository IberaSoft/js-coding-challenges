import "./styles.css";

const appElement = document.getElementById("app");

if (!appElement) throw new Error("Cannot find app");

appElement.innerHTML = `<h1>Hello Vanilla!</h1>`;
