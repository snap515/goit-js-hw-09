!function(){function t(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}var e=document.querySelector("[data-start]"),n=document.querySelector("[data-stop]"),o=null;function a(t,e){t.setAttribute("disabled",""),e.removeAttribute("disabled")}e.addEventListener("click",(function(){a(e,n),t(),o=setInterval(t,1e3)})),n.addEventListener("click",(function(){a(n,e),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.050febf7.js.map