(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{7974:function(t,e,n){Promise.resolve().then(n.bind(n,6592))},6592:function(t,e,n){"use strict";n.r(e),n.d(e,{DarkMode:function(){return l}});var r=n(7437),i=n(2265),o=n(6777);let u=()=>{let[t,e]=(0,i.useState)("light");return(0,i.useEffect)(()=>{let t=window.localStorage.getItem("theme");t?(e(t),document.body.setAttribute("data-theme",t)):(e("light"),document.body.setAttribute("data-theme","light"))},[]),[t,()=>{let n="light"===t?"dark":"light";e(n),window.localStorage.setItem("theme",n),document.body.setAttribute("data-theme",n)}]},l=()=>{let[t,e]=u();return(0,r.jsx)(o.ZP,{onClick:e,children:"light / dark"})}}},function(t){t.O(0,[777,971,23,744],function(){return t(t.s=7974)}),_N_E=t.O()}]);