(this["webpackJsonphegic-yieldfarming-txbundler"]=this["webpackJsonphegic-yieldfarming-txbundler"]||[]).push([[0],{102:function(e,t){},117:function(e,t,n){},118:function(e,t,n){"use strict";n.r(t);var a=n(8),o=n.n(a),c=n(83),r=n.n(c),i=n(44),l=n(41),s=n(121),u=n(122),d=n(123);n(25);var f=function(){Object(l.b)().account;var e=Object(a.useState)("1"),t=Object(i.a)(e,2);return t[0],t[1],o.a.createElement(s.a,null,o.a.createElement(u.a,{style:{marginTop:"10vh",minHeight:"50vh",zIndex:"-1",textAlign:"center"}},o.a.createElement(d.a,{sm:"12",md:{size:6,offset:3}},o.a.createElement("div",{style:{color:"#defefe",fontFamily:"Exo 2",fontWeight:"500",lineHeight:"150%"}},o.a.createElement("h1",null,"Coming Soon!")))),o.a.createElement("div",{style:{position:"absolute",bottom:"1%",left:"48.25%"}},o.a.createElement("a",{href:"https://chuddster.medium.com/claim-hegic-rewards-and-start-yield-farming-in-a-single-transaction-7664b6cfafe8"}," ",o.a.createElement("img",{src:n(73),width:"50",height:"25"})," ")))},m=n(127),g=n(130),h=n(128),v=n(40),b=(v.a.utils.parseEther("888000"),Object(a.createContext)({context:{},balances:{},allowances:{},poolConditions:{},profits:{},connect:function(){},disconnect:function(){}}));var E=function(e){var t=Object(a.useContext)(b),n=t.context,c=n.account,r=n.library,i=n.chainId,l=n.active;Object(a.useEffect)((function(){c&&r&&r.getBalance(c).then((function(e){t.balances.ETHBalance.setValue(e)}))}),[c,r,i]);var s=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(d.a,{sm:"0",md:{size:2,offset:5},style:{display:"flex",justifyContent:"center"}},o.a.createElement("h3",{style:{color:"#45fff4",zIndex:"99",fontFamily:"Jura",fontWeight:"bold"}},"HEGIC")),o.a.createElement(d.a,{sm:"12",md:{size:5,offset:0},style:{display:"flex",justifyContent:"flex-end"}},l?o.a.createElement("div",null,o.a.createElement(m.a,{color:"secondary",style:{margin:"2.5px"}},function(e,t){if(e.includes(".")){var n=e.split(".");return n[0]+"."+n[1].slice(0,t)}return e}((e=t.balances.ETHBalance.value,v.a.utils.commify(v.a.utils.formatEther(e.toString()))),4)," ETH "),o.a.createElement("span",{style:{color:"#defefe",fontSize:"12px"}},function(e){var t=e.length;return e.substring(0,8)+"..."+e.substring(t-7,t-1)}(c)),o.a.createElement(g.a,{color:"link",onClick:t.disconnect},"Disconnect")):o.a.createElement(g.a,{color:"link",onClick:t.connect},"Connect")));var e};return o.a.createElement(h.a,{style:{display:"flex",backgroundColor:"#19274d",borderBottom:"1px solid #45fff4"}},o.a.createElement(s,null))};var p=function(e){var t=Object(a.useContext)(b).connect;return o.a.createElement(s.a,null,o.a.createElement(u.a,{style:{marginTop:"10vh",minHeight:"50vh",zIndex:"-1",textAlign:"center"}},o.a.createElement(d.a,{sm:"12",md:{size:6,offset:3}},o.a.createElement("h1",{style:{color:"#45fff4",fontFamily:"Jura",fontWeight:"bold",lineHeight:"125%",fontSize:"46px",textTransform:"uppercase"}},"Use Hegic Rewards to Yield Farm"),o.a.createElement("div",{style:{color:"#defefe",fontFamily:"Exo 2",fontWeight:"500",lineHeight:"150%"}},"Service for converting swapped Hegic (from rHegicv1) directly into writeETH, writeBTC, and/or yvHEGIC. All in a single tx."),o.a.createElement("div",{style:{marginTop:"25px",display:"flex",justifyContent:"center"}},o.a.createElement(g.a,{style:{color:"#15203d",fontWeight:"bold",fontFamily:"Jura",letterSpacing:".1em",background:"transparent",borderImageSource:"url(https://www.hegic.co/assets/img/button-primary.svg)",borderImageSlice:"20",borderStyle:"solid",boxSizing:"border-box",borderRadius:"2px",borderImageWidth:"50px"},onClick:t},"CONNECT WALLET")))),o.a.createElement("div",{style:{position:"absolute",bottom:"1%",left:"48.25%"}},o.a.createElement("a",{href:"https://chuddster.medium.com/claim-hegic-rewards-and-start-yield-farming-in-a-single-transaction-7664b6cfafe8"}," ",o.a.createElement("img",{src:n(73),width:"50",height:"25"})," ")))},y=new(n(89).a)({supportedChainIds:[1,3,4,5,42]});function w(e,t){return new v.a.providers.Web3Provider(e)}function x(){var e=Object(a.useState)(0),t=Object(i.a)(e,2),n={ETHBalance:{value:t[0],setValue:t[1]}},c=Object(l.b)(),r=c.connector,s=c.active,u=c.activate,d=c.deactivate,m=(c.account,c.library,c.chainId,Object(a.useState)()),g=Object(i.a)(m,2),h=g[0],v=g[1];return Object(a.useEffect)((function(){h&&h===r&&v(void 0)}),[h,r]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(l.b)(),n=t.active,o=t.error,c=t.activate;Object(a.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!o&&!e){var a=function(){console.log("Handling 'connect' event"),c(y)},r=function(e){console.log("Handling 'chainChanged' event with payload",e),c(y)},i=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&c(y)},l=function(e){console.log("Handling 'networkChanged' event with payload",e),c(y)};return t.on("connect",a),t.on("chainChanged",r),t.on("accountsChanged",i),t.on("networkChanged",l),function(){t.removeListener&&(t.removeListener("connect",a),t.removeListener("chainChanged",r),t.removeListener("accountsChanged",i),t.removeListener("networkChanged",l))}}}),[n,o,e,c])}(!function(){var e=Object(l.b)(),t=e.activate,n=e.active,o=Object(a.useState)(!1),c=Object(i.a)(o,2),r=c[0],s=c[1];return Object(a.useEffect)((function(){y.isAuthorized().then((function(e){e?t(y,void 0,!0).catch((function(){s(!0)})):s(!0)}))}),[t]),Object(a.useEffect)((function(){!r&&n&&s(!0)}),[r,n]),r}()||!!h),o.a.createElement(b.Provider,{value:{context:c,connect:function(){v(y),u(y)},disconnect:function(){d(y)},balances:n,allowances:{},poolConditions:{},profits:{}}},o.a.createElement("div",{style:{background:"radial-gradient(68.28% 53.52% at 50% 50%, #1c2a4f 0%, #111b35 100%)"}},o.a.createElement("div",{style:{backgroundImage:"url(https://www.hegic.co/assets/img/background-image.svg)",height:"100vh"}},o.a.createElement(E,null),s?o.a.createElement(f,null):o.a.createElement(p,null))))}var C=function(){return o.a.createElement(l.a,{getLibrary:w},o.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(117);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},73:function(e,t,n){e.exports=n.p+"static/media/medium-brands.562753a3.svg"},93:function(e,t,n){e.exports=n(118)}},[[93,1,2]]]);
//# sourceMappingURL=main.4b3a7030.chunk.js.map