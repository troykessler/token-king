(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1073:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var s=n(5893),a=n(7757),i=n.n(a),r=n(5861),l=n(7294),c=n(387),o=n(7616),d=n(5755),m=JSON.parse('{"Mt":[{"inputs":[],"stateMutability":"payable","type":"constructor"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"kingAddress","type":"address"},{"internalType":"string","name":"kingAlias","type":"string"},{"internalType":"uint256","name":"claimPrice","type":"uint256"},{"internalType":"uint256","name":"claimTime","type":"uint256"}],"indexed":false,"internalType":"struct TokenKing.King","name":"_newKing","type":"tuple"}],"name":"ThroneClaimed","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"createGenesis","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"latestKing","outputs":[{"components":[{"internalType":"address","name":"kingAddress","type":"address"},{"internalType":"string","name":"kingAlias","type":"string"},{"internalType":"uint256","name":"claimPrice","type":"uint256"},{"internalType":"uint256","name":"claimTime","type":"uint256"}],"internalType":"struct TokenKing.King","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getKings","outputs":[{"components":[{"internalType":"address","name":"kingAddress","type":"address"},{"internalType":"string","name":"kingAlias","type":"string"},{"internalType":"uint256","name":"claimPrice","type":"uint256"},{"internalType":"uint256","name":"claimTime","type":"uint256"}],"internalType":"struct TokenKing.King[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentClaimPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_kingAlias","type":"string"}],"name":"claimThrone","outputs":[],"stateMutability":"payable","type":"function"}]}'),u=function(e){var t=e.kings;return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"mt-16 text-center text-3xl",children:"Hall of Kings"}),(0,s.jsx)("div",{className:"flex flex-col mt-4 mx-32",children:(0,s.jsx)("div",{className:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8",children:(0,s.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8",children:(0,s.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:(0,s.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[(0,s.jsx)("thead",{className:"bg-gray-50",children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Address"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Alias"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Throne Claimed"}),(0,s.jsx)("th",{scope:"col",className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Value"}),(0,s.jsx)("th",{scope:"col",className:"relative px-6 py-3",children:(0,s.jsx)("span",{className:"sr-only",children:"Edit"})})]})}),(0,s.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((function(e,t){return(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:e.kingAddress}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:e.kingAlias}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:e.claimTime}),(0,s.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:e.claimPrice})]},t)}))})]})})})})})]})};function x(){var e=(0,l.useState)(""),t=e[0],n=e[1],a=(0,l.useState)(""),x=a[0],p=a[1],h=(0,l.useState)("0"),g=h[0],f=h[1],y=(0,l.useState)([]),w=y[0],v=y[1],b=(0,l.useState)(""),j=b[0],N=b[1];function k(){return(k=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.ethereum){e.next=14;break}return e.prev=1,e.next=4,window.ethereum.request({method:"eth_requestAccounts"});case 4:t=e.sent,p(t[0]),n({message:"Connected to Metamask",color:"text-green-500"}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n({message:"Failed to connect to Metamask",color:"text-red-500"});case 12:e.next=15;break;case 14:n({message:"Please install Metamask in your browser",color:"text-red-500"});case 15:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}var T=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,s;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new d.Q(window.ethereum),n=new c.CH("0x4BF2eD9215AFB5630C1A0f4277bBba29CEb5c655",m.Mt,t),e.next=5,n.currentClaimPrice();case 5:s=e.sent,f(o.dF(s)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,s,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new d.Q(window.ethereum),n=new c.CH("0x4BF2eD9215AFB5630C1A0f4277bBba29CEb5c655",m.Mt,t),e.next=5,n.getKings();case 5:s=e.sent,a=s.map((function(e){return{kingAddress:e.kingAddress,kingAlias:e.kingAlias,claimPrice:o.dF(e.claimPrice),claimTime:new Date(1e3*e.claimTime.toNumber()).toISOString()}})).reverse(),v(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,r.Z)(i().mark((function e(){var t,n,s,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new d.Q(window.ethereum),n=t.getSigner(),s=new c.CH("0x4BF2eD9215AFB5630C1A0f4277bBba29CEb5c655",m.Mt,n),e.next=6,s.claimThrone(j,{value:o.fi(g)});case 6:return a=e.sent,e.next=9,a.wait();case 9:N(""),T(),C(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();function H(){return(H=(0,r.Z)(i().mark((function e(){var t,n,s,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new d.Q(window.ethereum),n=t.getSigner(),s=new c.CH("0x4BF2eD9215AFB5630C1A0f4277bBba29CEb5c655",m.Mt,n),e.next=5,s.createGenesis({value:o.fi("0.00001")});case 5:return a=e.sent,e.next=8,a.wait();case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return(0,l.useEffect)((function(){T(),C(),window.ethereum.selectedAddress&&(p(window.ethereum.selectedAddress),n({message:"Connected to Metamask",color:"text-green-500"})),window.ethereum.on("accountsChanged",(function(e){e.length?(p(e[0]),n({message:"Connected to Metamask",color:"text-green-500"})):(p(""),n(""))})),ethereum.on("chainChanged",(function(e){return window.location.reload()}))}),[]),(0,s.jsxs)("div",{className:"py-12 bg-white",children:[(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[(0,s.jsxs)("div",{className:"lg:text-center",children:[(0,s.jsx)("h2",{className:"text-base text-green-500 font-semibold tracking-wide uppercase",children:"Token King"}),(0,s.jsx)("p",{className:"mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:"Make yourself immortal"}),(0,s.jsx)("p",{className:"mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto",children:"Choose your name and immortalize it on the Ethereum Blockchain!"})]}),(0,s.jsxs)("div",{className:"font-bold",children:[!x&&(0,s.jsx)("div",{className:"mt-8 text-center",children:(0,s.jsx)("button",{onClick:function(){return k.apply(this,arguments)},type:"button",className:"text-lg inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Connect to Metamask"})}),t&&(0,s.jsx)("div",{className:"mt-8 text-center ".concat(t.color),children:t.message})]}),(0,s.jsx)("div",{className:"text-center",children:x}),x.toLowerCase()=="0x67EfE22426c0a5833dD09Ca2F52f274F780BA6A9".toLowerCase()&&(0,s.jsx)("div",{className:"font-bold",children:(0,s.jsx)("div",{className:"mt-8 text-center",children:(0,s.jsx)("button",{onClick:function(){return H.apply(this,arguments)},type:"button",className:"text-lg inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm font-medium text-white bg-green-500 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500",children:"Create Genesis King"})})}),x&&(0,s.jsx)("div",{className:"mt-4 max-w-xl mx-auto",children:(0,s.jsxs)("div",{className:"mt-1 relative rounded-md shadow-sm",children:[(0,s.jsx)("input",{value:j,onInput:function(e){return N(e.target.value)},type:"text",name:"price",id:"price",className:"focus:ring-green-500 focus:border-green-500 block w-full px-5 border-gray-300 rounded-md",placeholder:"Your Alias"}),(0,s.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:(0,s.jsxs)("button",{onClick:A,type:"button",className:"focus:ring-green-500 focus:border-green-500 h-full py-0 px-5 bg-green-500 text-lg font-bold hover:bg-green-700 text-white rounded-md",children:["Claim Throne (",g," ETH)"]})})]})}),(0,s.jsxs)("div",{className:"text-center mt-8 font-bold leading-8 text-gray-900",children:["Current King: ",(0,s.jsx)("span",{className:"text-gray-500 font-bold",children:w.length?"".concat(w[0].kingAlias," (").concat(w[0].kingAddress,")"):"-"})]}),(0,s.jsxs)("div",{className:"text-center mt-2 font-bold leading-8 text-gray-900",children:["Current claim price: ",(0,s.jsxs)("span",{className:"text-gray-500 font-bold",children:[g," ETH"]})]})]}),(0,s.jsx)("div",{className:"mt-16 text-center text-3xl",children:"How does TokenKing work?"}),(0,s.jsx)("div",{className:"mt-8 mx-32",children:(0,s.jsxs)("dl",{className:"space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)("div",{className:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white",children:(0,s.jsx)("svg",{className:"h-8 w-8",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fill:"currentColor",d:"M10,7V9H12V17H14V7H10Z"})})}),(0,s.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-gray-900",children:"Becoming King"})]}),(0,s.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:"Imagine the current claim price is 1.0 ETH. You want to become the new King, so you send 1.0 ETH to the contract. This will make you the new King and you are listed in the hall of Kings below."})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)("div",{className:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white",children:(0,s.jsx)("svg",{className:"h-8 w-8",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fill:"currentColor",d:"M9,7V9H13V11H11A2,2 0 0,0 9,13V17H11L15,17V15H11V13H13A2,2 0 0,0 15,11V9A2,2 0 0,0 13,7H9Z"})})}),(0,s.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-gray-900",children:"Compensating the previous King"})]}),(0,s.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:"The 1.0 ETH will directly go (minus a small commission) to the previous King as compensation. After that the claim price will double so it will be at 2.0 ETH"})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)("div",{className:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white",children:(0,s.jsx)("svg",{className:"h-8 w-8",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fill:"currentColor",d:"M15,15V13.5A1.5,1.5 0 0,0 13.5,12A1.5,1.5 0 0,0 15,10.5V9C15,7.89 14.1,7 13,7H9V9H13V11H11V13H13V15H9V17H13A2,2 0 0,0 15,15"})})}),(0,s.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-gray-900",children:"Making profit"})]}),(0,s.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:"If a new interested Prince comes along and is willing to pay the new claim price you are deposed of the throne. As compensation you will receive the newly paid 2.0 ETH (minus a small commission). So you have effectively doubled your input"})]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsxs)("dt",{children:[(0,s.jsx)("div",{className:"absolute flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white",children:(0,s.jsx)("svg",{className:"h-8 w-8",viewBox:"0 0 24 24",children:(0,s.jsx)("path",{fill:"currentColor",d:"M9,7V13H13V17H15V7H13V11H11V7H9Z"})})}),(0,s.jsx)("p",{className:"ml-16 text-lg leading-6 font-medium text-gray-900",children:"The curse"})]}),(0,s.jsx)("dd",{className:"mt-2 ml-16 text-base text-gray-500",children:"However, an ancient curse applies to the throne: every King dies once their reign reaches 7 days. No compensation is paid when this happens. After that the claim price is reset to 1 FINNEY (0.001 ETH)"})]})]})}),(0,s.jsx)(u,{kings:w})]})}},8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(1073)}])},6601:function(){}},function(e){e.O(0,[500,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);