const t={startBtn:document.querySelector("button[data-start]"),stopBtn:document.querySelector("button[data-stop]"),body:document.querySelector("body")};t.stopBtn.disabled=!0;let e=null;t.startBtn.addEventListener("click",(()=>{e=setInterval((()=>{t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),t.startBtn.disabled=!0,t.stopBtn.disabled=!1})),t.stopBtn.addEventListener("click",(()=>{clearInterval(e),t.stopBtn.disabled=!0,t.startBtn.disabled=!1}));
//# sourceMappingURL=01-color-switcher.5b2d9b97.js.map
