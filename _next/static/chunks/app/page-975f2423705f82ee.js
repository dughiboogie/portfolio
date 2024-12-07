(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6397:function(e,t,i){Promise.resolve().then(i.bind(i,2264))},7198:function(e,t,i){"use strict";var s=i(7437);i(2265);var a=i(8760),r=i(7648);function l(e){let{buttonLink:t,buttonName:i}=e;return(0,s.jsx)(r.default,{className:"z-20 flex md:text-base text-sm md:max-w-fit text-white",href:t,children:(0,s.jsx)(a.E.div,{className:"z-10 bg-neutral-900 md:px-5 px-2 py-2 rounded-xl border border-gray-400 font-semibold",whileTap:{scale:.9},initial:{backgroundColor:"#000000",borderColor:"#000000"},whileHover:{backgroundColor:"#262626",borderColor:"#9ca3af"},animate:{backgroundColor:"#000000",borderColor:"#000000"},transition:{type:"tween",ease:"easeOut"},children:i})})}t.Z=()=>(0,s.jsx)(a.E.div,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:1.5,ease:"easeInOut"},className:" z-50 fixed w-full h-fit md:top-6 bottom-20 flex justify-center",children:(0,s.jsxs)("div",{className:"z-0 p-2 fixed bg-black bg-opacity-90 rounded-2xl flex md:gap-x-2 gap-x-0 border border-gray-400 ",children:[(0,s.jsx)(l,{buttonLink:"/",buttonName:"Home"}),(0,s.jsx)(l,{buttonLink:"/aboutMe",buttonName:"About me"}),(0,s.jsx)(l,{buttonLink:"/work",buttonName:"Work"}),(0,s.jsx)(l,{buttonLink:"/projects",buttonName:"Projects"}),(0,s.jsx)(l,{buttonLink:"/gallery",buttonName:"Gallery"}),(0,s.jsx)(l,{buttonLink:"/contact",buttonName:"Contact"})]})})},2264:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return j}});var s=i(7437),a=i(8760),r=i(7648),l=i(7198),n=i(2265),o=i(4231),u=i(7283),c=i(2079),d=i(7610);let m=()=>{let e=(0,d.hA)(),t=(0,n.useMemo)(()=>{let t=new c._12(30,30,32,32),i=t.attributes.position;for(let t=0;t<i.count;t++){let s=1.5*e(.2*i.getX(t),.2*i.getY(t));i.setZ(t,s)}return i.needsUpdate=!0,t.computeVertexNormals(),t},[e]),i=(0,n.useMemo)(()=>new c.Uk6(t),[t]);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("mesh",{geometry:t,"rotation-x":-Math.PI/2,position:[0,-2,0],frustumCulled:!0,children:(0,s.jsx)("meshToonMaterial",{color:"#800080",polygonOffset:!0,polygonOffsetFactor:0,polygonOffsetUnits:1})}),(0,s.jsx)("lineSegments",{geometry:i,"rotation-x":-Math.PI/2,position:[0,-2,0],frustumCulled:!0,children:(0,s.jsx)("lineBasicMaterial",{color:"#00ffcc",polygonOffset:!0,polygonOffsetFactor:10,polygonOffsetUnits:10})})]})},p=()=>{let e=(0,n.useMemo)(()=>{let e=[];for(let t=0;t<1e3;t++)e.push((Math.random()-.5)*100,(Math.random()-.5)*100,(Math.random()-.5)*100);return new Float32Array(e)},[]),t=new c.u9r;return t.setAttribute("position",new c.TlE(e,3)),(0,s.jsxs)("points",{children:[(0,s.jsx)("primitive",{object:t}),(0,s.jsx)("pointsMaterial",{size:.18000000000000002*Math.random()+.02,color:"#ffffff",transparent:!0,opacity:.20000000000000007*Math.random()+.7})]})},x=()=>{let e=(0,n.useMemo)(()=>{let e=document.createElement("canvas");e.width=512,e.height=512;let t=e.getContext("2d");if(null==t)return;let i=t.createRadialGradient(.5,.5,.3,.5,.5,1);return i.addColorStop(0,"#000000"),i.addColorStop(.6,"#050505"),i.addColorStop(1,"#202020"),t.fillStyle=i,t.fillRect(0,0,e.width,e.height),new c.ROQ(e)},[]);return(0,s.jsxs)("mesh",{children:[(0,s.jsx)("sphereGeometry",{args:[100,32,32]}),(0,s.jsx)("meshBasicMaterial",{map:e,side:c._Li,transparent:!0,opacity:.6})]})},f=()=>(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("ambientLight",{intensity:.2,color:"#ffffff"}),(0,s.jsx)("directionalLight",{position:[120,100,0],intensity:.8,color:"#ffffff"})]}),h=()=>{let e=(0,n.useRef)(null);return(0,o.F)(t=>{let{camera:i,clock:s}=t;if(e.current){let e=s.getElapsedTime();i.position.x=5*Math.cos(.02*e),i.position.y=-.5,i.position.z=5*Math.sin(.02*e),i.lookAt(0,0,0)}}),(0,s.jsx)("perspectiveCamera",{ref:e})},b=()=>(0,s.jsxs)(u.Xz,{gl:{antialias:!0,powerPreference:"high-performance"},children:[(0,s.jsx)(f,{}),(0,s.jsx)(m,{}),(0,s.jsx)(p,{}),(0,s.jsx)(x,{}),(0,s.jsx)(h,{})]});var g=()=>(0,s.jsxs)("div",{className:"absolute w-screen h-screen bg-black",children:[(0,s.jsx)("div",{className:"absolute inset-0",children:(0,s.jsx)(b,{})}),(0,s.jsx)("div",{className:"absolute inset-0 backdrop-blur-sm z-10"})]});function j(){return(0,s.jsxs)("div",{className:"w-screen h-screen overflow-y-auto bg-black",children:[(0,s.jsx)(g,{}),(0,s.jsxs)("div",{className:"md:mt-28 mt-8 relative z-20",children:[(0,s.jsx)(l.Z,{}),(0,s.jsx)("div",{className:"flex flex-col items-center text-center px-4 md:px-10",children:(0,s.jsxs)(a.E.div,{initial:{opacity:0,clipPath:"inset(0 100% 100% 0 round 1rem)",filter:"blur(10px)"},animate:{opacity:1,clipPath:"inset(0 0 0 0 round 1rem)",filter:"blur(0px)"},transition:{clipPath:{duration:2,ease:"easeInOut"},filter:{duration:2.5,ease:"easeInOut"}},className:"text-tea-green",children:[(0,s.jsx)("p",{className:"font-roboto font-extrabold text-4xl md:text-6xl",children:"Welcome to My Portfolio"}),(0,s.jsx)("p",{className:"max-w-3xl font-roboto text-base md:text-2xl",children:"Hi there! I am Marco Dugatto (Dughi for short), a 29 years old guy with a constant curiosity for what life has to offer. I am also italian, so if my English is bad I humbly beg your pardon in spaghetti. I have way too many passions and way too little time to follow them all, but isn't that the story of everyone's life? Fortunately for me I have learned to focus on just a bunch of them, so since January 2021 I've been learning to make video games."})]})}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(a.E.div,{initial:{opacity:0,clipPath:"inset(0 100% 0 0 round 1rem)",filter:"blur(10px)"},animate:{opacity:1,clipPath:"inset(0 0 0 0 round 1rem)",filter:"blur(0px)"},transition:{clipPath:{duration:1.5,delay:1,ease:"easeInOut"},filter:{duration:1,delay:1,ease:"easeInOut"}},className:"text-tea-green mt-4",children:(0,s.jsxs)("div",{id:"Spotlight",className:"bg-space-cadet/30 p-6 rounded-2xl border-gray-400 border-2 max-w-sm md:max-w-4xl mx-8",children:[(0,s.jsx)("p",{children:"Explore my work and projects."}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra nisi diam, in pharetra felis pretium quis. Cras mi mi, lobortis eu erat vel, dignissim mollis purus. Donec tincidunt feugiat risus. Cras in leo sit amet orci dictum pellentesque. Vestibulum dapibus facilisis diam, vel pellentesque sem viverra at. Nam accumsan rhoncus lacus, sit amet interdum arcu varius sed. Phasellus at orci ut lectus rhoncus luctus. Nullam ut eros mollis, rutrum nunc vitae, imperdiet nisl."}),(0,s.jsx)("p",{children:"Nunc ullamcorper finibus dui eget imperdiet. Donec lobortis tincidunt elit. Nullam mattis quam sit amet feugiat semper. Sed volutpat, velit congue blandit faucibus, tellus nisl porta augue, eget blandit augue dui vel mauris. Vestibulum venenatis iaculis ante consequat pretium. Proin nec lectus sem. Maecenas id augue at justo maximus lobortis. Nullam sagittis nunc eu tellus dictum, sed gravida mi volutpat."}),(0,s.jsx)("div",{className:" self-center",children:(0,s.jsx)(r.default,{href:"/projects",children:(0,s.jsx)("button",{className:"mt-4 px-2 py-2 bg-rose-quartz text-black font-bold rounded-lg shadow-2xl",children:"See My Projects"})})})]})})}),(0,s.jsx)("div",{className:"flex justify-center",children:(0,s.jsx)(a.E.div,{initial:{opacity:0,clipPath:"inset(0 100% 0 0 round 1rem)",filter:"blur(10px)"},animate:{opacity:1,clipPath:"inset(0 0 0 0 round 1rem)",filter:"blur(0px)"},transition:{clipPath:{duration:1.5,delay:1,ease:"easeInOut"},filter:{duration:1,delay:1,ease:"easeInOut"}},className:"text-tea-green mt-4",children:(0,s.jsxs)("div",{id:"Spotlight",className:"bg-space-cadet/30 p-6 rounded-2xl border-gray-400 border-2 max-w-sm md:max-w-4xl mx-8",children:[(0,s.jsx)("p",{children:"Explore my work and projects."}),(0,s.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque viverra nisi diam, in pharetra felis pretium quis. Cras mi mi, lobortis eu erat vel, dignissim mollis purus. Donec tincidunt feugiat risus. Cras in leo sit amet orci dictum pellentesque. Vestibulum dapibus facilisis diam, vel pellentesque sem viverra at. Nam accumsan rhoncus lacus, sit amet interdum arcu varius sed. Phasellus at orci ut lectus rhoncus luctus. Nullam ut eros mollis, rutrum nunc vitae, imperdiet nisl."}),(0,s.jsx)("p",{children:"Nunc ullamcorper finibus dui eget imperdiet. Donec lobortis tincidunt elit. Nullam mattis quam sit amet feugiat semper. Sed volutpat, velit congue blandit faucibus, tellus nisl porta augue, eget blandit augue dui vel mauris. Vestibulum venenatis iaculis ante consequat pretium. Proin nec lectus sem. Maecenas id augue at justo maximus lobortis. Nullam sagittis nunc eu tellus dictum, sed gravida mi volutpat."}),(0,s.jsx)(r.default,{href:"/projects",children:(0,s.jsx)("button",{className:"mt-4 px-2 py-2 bg-rose-quartz text-black font-bold rounded-lg shadow-2xl",children:"See My Projects"})})]})})})]}),(0,s.jsx)("div",{className:"py-12 md:py-4"})]})}}},function(e){e.O(0,[689,870,760,648,399,971,117,744],function(){return e(e.s=6397)}),_N_E=e.O()}]);