!function(){var t=document.querySelector("[data-start"),e=document.querySelector("[data-stop"),a=document.body;t.addEventListener("click",(function(t){e.disabled=!1,t.target.disabled=!0,d=setInterval((function(){a.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3)})),e.addEventListener("click",(function(e){t.disabled=!1,e.target.disabled=!0,clearInterval(d)})),e.disabled=!0;var d=null}();
//# sourceMappingURL=01-color-switcher.ea503e68.js.map
