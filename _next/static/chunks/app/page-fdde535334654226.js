(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6397:function(e,t,s){Promise.resolve().then(s.bind(s,3871))},3871:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return j}});var a=s(7437),r=s(8760),l=s(7648),i=s(2265),o=s(4231),n=s(7283),d=s(2079),c=s(7610);let m=()=>{let e=(0,c.hA)(),t=(0,i.useMemo)(()=>{let t=new d._12(30,30,32,32),s=t.attributes.position;for(let t=0;t<s.count;t++){let a=1.5*e(.2*s.getX(t),.2*s.getY(t));s.setZ(t,a)}return s.needsUpdate=!0,t.computeVertexNormals(),t},[e]),s=(0,i.useMemo)(()=>new d.Uk6(t),[t]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("mesh",{geometry:t,"rotation-x":-Math.PI/2,position:[0,-2,0],frustumCulled:!0,children:(0,a.jsx)("meshToonMaterial",{color:"#800080",polygonOffset:!0,polygonOffsetFactor:0,polygonOffsetUnits:1})}),(0,a.jsx)("lineSegments",{geometry:s,"rotation-x":-Math.PI/2,position:[0,-2,0],frustumCulled:!0,children:(0,a.jsx)("lineBasicMaterial",{color:"#00ffcc",polygonOffset:!0,polygonOffsetFactor:10,polygonOffsetUnits:10})})]})},x=()=>{let e=(0,i.useMemo)(()=>{let e=[];for(let t=0;t<1e3;t++)e.push((Math.random()-.5)*100,(Math.random()-.5)*100,(Math.random()-.5)*100);return new Float32Array(e)},[]),t=new d.u9r;return t.setAttribute("position",new d.TlE(e,3)),(0,a.jsxs)("points",{children:[(0,a.jsx)("primitive",{object:t}),(0,a.jsx)("pointsMaterial",{size:.18000000000000002*Math.random()+.02,color:"#ffffff",transparent:!0,opacity:.20000000000000007*Math.random()+.7})]})},h=()=>{let e=(0,i.useMemo)(()=>{let e=document.createElement("canvas");e.width=512,e.height=512;let t=e.getContext("2d");if(null==t)return;let s=t.createRadialGradient(.5,.5,.3,.5,.5,1);return s.addColorStop(0,"#000000"),s.addColorStop(.6,"#050505"),s.addColorStop(1,"#202020"),t.fillStyle=s,t.fillRect(0,0,e.width,e.height),new d.ROQ(e)},[]);return(0,a.jsxs)("mesh",{children:[(0,a.jsx)("sphereGeometry",{args:[100,32,32]}),(0,a.jsx)("meshBasicMaterial",{map:e,side:d._Li,transparent:!0,opacity:.6})]})},p=()=>(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("ambientLight",{intensity:.2,color:"#ffffff"}),(0,a.jsx)("directionalLight",{position:[120,100,0],intensity:.8,color:"#ffffff"})]}),u=()=>{let e=(0,i.useRef)(null);return(0,o.F)(t=>{let{camera:s,clock:a}=t;if(e.current){let e=a.getElapsedTime();s.position.x=5*Math.cos(.02*e),s.position.y=-.5,s.position.z=5*Math.sin(.02*e),s.lookAt(0,0,0)}}),(0,a.jsx)("perspectiveCamera",{ref:e})},f=()=>(0,a.jsxs)(n.Xz,{gl:{antialias:!0,powerPreference:"high-performance"},children:[(0,a.jsx)(p,{}),(0,a.jsx)(m,{}),(0,a.jsx)(x,{}),(0,a.jsx)(h,{}),(0,a.jsx)(u,{})]});var g=()=>(0,a.jsxs)("div",{className:"absolute w-screen h-screen bg-black",children:[(0,a.jsx)("div",{className:"absolute inset-0",children:(0,a.jsx)(f,{})}),(0,a.jsx)("div",{className:"absolute inset-0 backdrop-blur-sm z-10"})]}),b=function(e){let{spotlightHeader:t,spotlightTitle:s,spotlightContent:r}=e;return(0,a.jsxs)("div",{className:"font-roboto bg-space-cadet/30 p-6 rounded-2xl border-gray-400 border-2 max-w-sm md:max-w-4xl mx-8 mb-8",children:[t&&(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsx)("p",{className:"font-bold text-3xl md:text-4xl text-center",children:t}),(0,a.jsx)("hr",{className:"-mt-2 w-2/3 border-t-2 border-gray-400 mx-auto"})]}),(0,a.jsx)("p",{className:"font-medium text-2xl md:text-3xl -mt-4 text-center",children:s}),(0,a.jsx)("div",{children:r})]})};function j(){return(0,a.jsxs)("div",{className:"w-screen h-screen overflow-y-auto bg-black",children:[(0,a.jsx)(g,{}),(0,a.jsxs)("div",{className:"md:mt-28 mt-8 relative z-20",children:[(0,a.jsx)("div",{className:"flex flex-col items-center text-center px-4 md:px-10 mt-4 md:mt-8 md:mb-8",children:(0,a.jsxs)(r.E.div,{initial:{opacity:0,clipPath:"inset(0 100% 100% 0 round 1rem)",filter:"blur(10px)"},animate:{opacity:1,clipPath:"inset(0 0 0 0 round 1rem)",filter:"blur(0px)"},transition:{clipPath:{duration:2,ease:"easeInOut"},filter:{duration:2.5,ease:"easeInOut"}},className:"text-tea-green",children:[(0,a.jsx)("p",{className:"font-roboto font-extrabold text-4xl md:text-7xl",children:"Marco Dugatto | DughiBoogie"}),(0,a.jsxs)("p",{className:"max-w-md md:max-w-3xl font-roboto text-xl text-center md:text-left md:text-2xl inline-block",children:["It's a me, Marco!",(0,a.jsx)("br",{}),"I’m a game developer with a passion for engaging worlds and meaningful experiences.",(0,a.jsx)("br",{})," I dream of crafting games that I would love to play, and that make the players feel the same passion.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"In this page are collected (almost) all the games I worked on so far.",(0,a.jsx)("br",{}),"More to come!"]})]})}),(0,a.jsx)("div",{className:"mt-4 flex justify-center",children:(0,a.jsxs)(r.E.div,{initial:{opacity:0,clipPath:"inset(0 100% 0 0 round 1rem)",filter:"blur(10px)"},animate:{opacity:1,clipPath:"inset(0 0 0 0 round 1rem)",filter:"blur(0px)"},transition:{clipPath:{duration:1.5,delay:1,ease:"easeInOut"},filter:{duration:1,delay:1,ease:"easeInOut"}},className:"text-tea-green mt-4",children:[(0,a.jsx)(b,{spotlightHeader:"Things Better Left Unknown",spotlightTitle:"",spotlightContent:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-bold text-2xl md:text-3xl text-center"}),(0,a.jsx)("p",{className:"font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 items-center -mt-4",children:[(0,a.jsx)("div",{className:"relative w-full pb-[56.25%] flex",children:(0,a.jsx)("iframe",{className:"absolute w-full h-full rounded-lg",src:"https://www.youtube.com/embed/p160z1ScYEk?si=eSDh3ExWkMcMmuF5",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"font-medium self-center italic text-md mb-0 mt-2",children:"Delve into the dark secrets of alchemy. Explore a mysterious cabin in the woods. Decipher glyphs, codes, and poems. Combine unusual ingredients through alchemical processes, and uncover things that would be better left unknown."})})]}),(0,a.jsx)("div",{className:"mt-4",children:(0,a.jsxs)("p",{children:["I made this game with some friends for the Pirate Software Game Jam 15.",(0,a.jsx)("br",{})," There were 5 people working on the game so the project management side has been a bit hectic, but I learned a lot about pivoting according to the deadlines to meet everyone's needs and complete the project in time.",(0,a.jsx)("br",{}),"This being said, it was a ton of fun working on this.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"The game is made in Godot, and it's fully playable online.",(0,a.jsx)("br",{}),"Check it out on itch.io!"]})}),(0,a.jsx)("div",{className:"mt-4 mb-1 flex justify-center md:gap-8 gap-4 max-w-full",children:(0,a.jsx)(l.default,{className:"flex text-base",href:"https://deeprestgames.itch.io/things-better-left-unknown",rel:"noopener noreferrer",target:"_blank",children:(0,a.jsx)(r.E.div,{className:"md:px-4 px-4 md:py-4 py-2 rounded-xl border border-gray-400 flex items-center gap-2",whileTap:{scale:.9},initial:{backgroundColor:"#0000008D"},whileHover:{backgroundColor:"#22222299"},animate:{backgroundColor:"#0000008D"},transition:{type:"tween",ease:"easeOut"},children:(0,a.jsx)("div",{className:"font-semibold flex text-white",children:"Go to game page"})})})})]})}),(0,a.jsx)(b,{spotlightHeader:"Pizza Time",spotlightTitle:"",spotlightContent:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-bold text-2xl md:text-3xl text-center"}),(0,a.jsx)("p",{className:"font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 items-center -mt-4",children:[(0,a.jsx)("div",{className:"relative w-full pb-[56.25%] flex",children:(0,a.jsx)("iframe",{className:"absolute w-full h-full rounded-lg",src:"https://www.youtube.com/embed/DrjSL8mQMjk?si=xPvPJ-kbiS9dH_JM",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),(0,a.jsx)("div",{children:(0,a.jsxs)("p",{className:"font-medium self-center italic text-md mb-0 mt-2",children:["Pizza Time is a short 3D Puzzle-Platformer adventure in which you explore an architectural dreamscape, meet eccentric characters and throw pizzas to solve puzzles.",(0,a.jsx)("br",{}),"Climb your way to the top and dig deeper in yourself."]})})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsxs)("p",{children:["I worked on this game for three months with a friend, and it's been a wild ride.",(0,a.jsx)("br",{}),"It started as a fun project that we decided to do right after our first game jam together, and it became a massive puzzle game with some wacky mechanics and a somewhat deep narrative.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"During this project I learned the real meaning of"," ",(0,a.jsx)("b",{children:"scope creep"}),'. New ideas were continuously bouncing around and discussions were always stimulating. We had to put real effort in saying "let\'s stop here and publish this".']}),(0,a.jsx)("div",{className:"mt-4 mb-1 flex justify-center md:gap-8 gap-4 max-w-full",children:(0,a.jsx)(l.default,{className:"flex text-base",href:"https://deeprestgames.itch.io/pizza-time",rel:"noopener noreferrer",target:"_blank",children:(0,a.jsx)(r.E.div,{className:"md:px-4 px-4 md:py-4 py-2 rounded-xl border border-gray-400 flex items-center gap-2",whileTap:{scale:.9},initial:{backgroundColor:"#0000008D"},whileHover:{backgroundColor:"#22222299"},animate:{backgroundColor:"#0000008D"},transition:{type:"tween",ease:"easeOut"},children:(0,a.jsx)("div",{className:"font-semibold flex text-white",children:"Go to game page"})})})})]})]})}),(0,a.jsx)(b,{spotlightHeader:"Hell o' Borus",spotlightTitle:"",spotlightContent:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-bold text-2xl md:text-3xl text-center"}),(0,a.jsx)("p",{className:"font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left<"}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 items-center -mt-4",children:[(0,a.jsx)("img",{className:"relative md:w-4/6 w-full flex",src:"/portfolio/pictures/HelloBorusCover.png",alt:"Hell o' Borus thumbnail"}),(0,a.jsx)("div",{children:(0,a.jsxs)("p",{className:"font-medium self-center italic text-md mb-0 mt-2",children:["Winter is almost over. An unknown warmth is starting to spread. Coming change is inevitable. Spring is here!",(0,a.jsx)("br",{})," Hell o' Borus is a 2D endless runner game where the player controls Borus, a tiny helleborus seed that awakens after being lethargic during the winter."]})})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsxs)("p",{children:["I made this game with some friends in the span of two weeks. It was the first time we worked together, and it was the first time for any of us using Godot.",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),"Although it's a simple game it was a very nice experience, that made me do a deep dive into a new framework while managing a project with a strict deadline."]}),(0,a.jsx)("div",{className:"mt-4 mb-1 flex justify-center md:gap-8 gap-4 max-w-full",children:(0,a.jsx)(l.default,{className:"flex text-base",href:"https://dughiboogie.itch.io/hell-o-borus",rel:"noopener noreferrer",target:"_blank",children:(0,a.jsx)(r.E.div,{className:"md:px-4 px-4 md:py-4 py-2 rounded-xl border border-gray-400 flex items-center gap-2",whileTap:{scale:.9},initial:{backgroundColor:"#0000008D"},whileHover:{backgroundColor:"#22222299"},animate:{backgroundColor:"#0000008D"},transition:{type:"tween",ease:"easeOut"},children:(0,a.jsx)("div",{className:"font-semibold flex text-white",children:"Go to game page"})})})})]})]})}),(0,a.jsx)(b,{spotlightHeader:"WHERE TO FIND ME",spotlightTitle:"",spotlightContent:(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{className:"font-bold text-2xl md:text-3xl text-center"}),(0,a.jsx)("p",{className:"font-medium text-2xl md:text-3xl -mt-4 text-center md:text-left"}),(0,a.jsx)("div",{className:"flex flex-col gap-4 items-center -mt-4",children:(0,a.jsx)("div",{children:(0,a.jsx)("p",{className:"font-medium italic self-center text-md mb-0 mt-2",children:"Here are a couple places where you can find me on the web:"})})}),(0,a.jsxs)("div",{className:"mt-8 mb-1 justify-center md:gap-8 gap-4 max-w-[26rem] mx-auto grid md:grid-cols-2",children:[(0,a.jsx)(l.default,{className:"flex md:col-span-1",href:"https://github.com/dughiboogie",rel:"noopener noreferrer",target:"_blank",children:(0,a.jsx)(r.E.div,{className:"w-40 md:w-52 min-h-20 p-2 rounded-xl border border-gray-400 flex items-center gap-2",whileTap:{scale:.9},initial:{backgroundColor:"#0000008D"},whileHover:{backgroundColor:"#22222299"},animate:{backgroundColor:"#0000008D"},transition:{type:"tween",ease:"easeOut"},children:(0,a.jsx)("img",{src:"/portfolio/logos/GitHub_Logo_White.png",alt:"GitHub Logo",className:"w-full"})})}),(0,a.jsx)(l.default,{className:"flex md:col-span-1",href:"https://linkedin.com/in/marco-dugatto",rel:"noopener noreferrer",target:"_blank",children:(0,a.jsx)(r.E.div,{className:"w-40 md:w-52 min-h-20 p-4 rounded-xl border border-gray-400 flex items-center gap-2",whileTap:{scale:.9},initial:{backgroundColor:"#0000008D"},whileHover:{backgroundColor:"#22222299"},animate:{backgroundColor:"#0000008D"},transition:{type:"tween",ease:"easeOut"},children:(0,a.jsx)("img",{src:"/portfolio/logos/LinkedIn_2021.png",alt:"LinkedIn Logo",className:"w-full"})})}),(0,a.jsx)(l.default,{className:"flex md:col-span-2",href:"https://dughiboogie.itch.io/",rel:"noopener noreferrer",target:"_blank",children:(0,a.jsx)(r.E.div,{className:"w-40 md:w-52 min-h-20 p-4 rounded-xl border border-gray-400 flex items-center gap-2 col-span-2 mx-auto",whileTap:{scale:.9},initial:{backgroundColor:"#0000008D"},whileHover:{backgroundColor:"#22222299"},animate:{backgroundColor:"#0000008D"},transition:{type:"tween",ease:"easeOut"},children:(0,a.jsx)("img",{src:"/portfolio/logos/Itch_io_logo.svg",alt:"itch.io Logo",className:"w-full"})})})]})]})})]})})]}),(0,a.jsx)("div",{className:"py-12 md:py-4"})]})}}},function(e){e.O(0,[689,870,760,989,971,117,744],function(){return e(e.s=6397)}),_N_E=e.O()}]);