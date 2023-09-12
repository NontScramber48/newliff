(function(){"use strict";var e={266:function(e,t,n){var l=n(963),r=n(252);function i(e,t,n,l,i,s){const a=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(a,{msg:"Welcome to Your Vue.js App"})}var s=n(577),a=n(262),o=n(795);const u={class:"relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8 ml-4 mr-4"},c=(0,r._)("div",{class:"absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20"},null,-1),f=(0,r._)("div",{class:"absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"},null,-1),v={class:"mx-auto max-w-2xl lg:max-w-4xl"},g=["src"],p={class:"mt-10"},d={class:"text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9"},m={class:"mt-10 mx-2 my-2"},x=(0,r._)("div",{class:"font-semibold text-gray-900"},[(0,r._)("p",null,"User ID:")],-1),w={class:"text-gray-600"},_={class:"mt-4 flex items-center justify-center space-x-3 text-base"},b={class:"mt-4 flex items-center justify-center space-x-3 text-base"},y={class:"mt-4 flex items-center justify-center space-x-3 text-base"},h={class:"mt-4 flex items-center justify-center space-x-3 text-base"},H={class:"mt-4 flex items-center justify-center space-x-3 text-base"},j={class:"mt-4 flex items-center justify-center space-x-3 text-base"},O=(0,r._)("div",null,null,-1),k=(0,r._)("div",null,null,-1);var z={__name:"HelloWorld",setup(e){const t=(0,a.iH)(""),n=(0,a.iH)(""),l=(0,a.iH)(""),i=(0,a.iH)(""),z=(0,a.iH)(!1),Z=(0,a.iH)(""),I=(0,a.iH)(""),A=(0,a.iH)(""),C=(0,a.iH)(""),D=(0,a.iH)("");async function T(){try{Z.value=await o.Z.getProfile(),console.log(Z.value),Z.value&&(I.value=Z.value.pictureUrl,A.value=Z.value.userId,C.value=Z.value.statusMessage,D.value=Z.value.displayName)}catch(e){console.error("Error getting user profile:",e)}}function W(){t.value=o.Z.getOS(),n.value=o.Z.getLanguage(),l.value=o.Z.getVersion(),i.value=o.Z.getAccessToken(),z.value=o.Z.isInClient()}return(0,r.bv)((async()=>{try{await o.Z.init({liffId:"2000714922-XOb4DG4e"}),T(),W()}catch(e){console.error("Error initializing LIFF:",e)}})),(e,a)=>((0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("section",u,[c,f,(0,r._)("div",v,[I.value?((0,r.wg)(),(0,r.iD)("img",{key:0,class:"mx-auto h-64 w-64 rounded-full",src:I.value,alt:"User's picture"},null,8,g)):(0,r.kq)("",!0),(0,r._)("figure",p,[(0,r._)("blockquote",d,[(0,r._)("p",null,"“Hi "+(0,s.zw)(D.value)+"”",1)]),(0,r._)("figcaption",m,[x,(0,r._)("div",w,(0,s.zw)(A.value),1),(0,r._)("div",_,[(0,r._)("p",null,"Status Message: "+(0,s.zw)(C.value),1)]),(0,r._)("div",b,[(0,r._)("p",null,"OS: "+(0,s.zw)(t.value),1)]),(0,r._)("div",y,[(0,r._)("p",null,"Language: "+(0,s.zw)(n.value),1)]),(0,r._)("div",h,[(0,r._)("p",null,"Version: "+(0,s.zw)(l.value),1)]),(0,r._)("div",H,[(0,r._)("p",null,"Access Token: "+(0,s.zw)(i.value),1)]),(0,r._)("div",j,[(0,r._)("p",null,"Is In Client: "+(0,s.zw)(z.value),1)])])])])]),O,k],64))}};const Z=z;var I=Z,A={name:"App",components:{HelloWorld:I}},C=n(744);const D=(0,C.Z)(A,[["render",i]]);var T=D,W=n(638);const E=(0,l.ri)(T);E.use(W.Z),E.mount("#app")}},t={};function n(l){var r=t[l];if(void 0!==r)return r.exports;var i=t[l]={exports:{}};return e[l].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,l,r,i){if(!l){var s=1/0;for(c=0;c<e.length;c++){l=e[c][0],r=e[c][1],i=e[c][2];for(var a=!0,o=0;o<l.length;o++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](l[o])}))?l.splice(o--,1):(a=!1,i<s&&(s=i));if(a){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[l,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var r,i,s=l[0],a=l[1],o=l[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in a)n.o(a,r)&&(n.m[r]=a[r]);if(o)var c=o(n)}for(t&&t(l);u<s.length;u++)i=s[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},l=self["webpackChunknewliff"]=self["webpackChunknewliff"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(266)}));l=n.O(l)})();