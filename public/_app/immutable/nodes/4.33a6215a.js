import{s as be,n as ve,r as me}from"../chunks/scheduler.63274e7e.js";import{S as ge,i as Ee,g as a,s as v,m as J,h as s,x as B,c as x,j as i,f as r,n as K,k as l,a as ce,y as e,A as O,B as xe,o as _e}from"../chunks/index.f1160c17.js";function ze(o){let c,h='<ul><li class="text-2xl"><a href="/">Home</a></li> <li class="text-2xl">Day 2 - Cube Conundrum</li></ul>',n,t,u,f,j="Puzzle 1",S,_,T,ie='<span class="label-text text-md">Input games:</span>',Q,m,U,E,M,W,A,Y,D,R,Z,N,$,z,I,ue="Puzzle 2",ee,b,C,de='<span class="label-text text-md">Input games:</span>',te,g,le,L,y,ae,w,se,H,X,re,pe;return{c(){c=a("div"),c.innerHTML=h,n=v(),t=a("div"),u=a("div"),f=a("h1"),f.textContent=j,S=v(),_=a("label"),T=a("div"),T.innerHTML=ie,Q=v(),m=a("textarea"),U=v(),E=a("div"),M=a("span"),W=v(),A=a("span"),Y=J("Total: "),D=a("span"),R=J(o[2]),Z=v(),N=a("div"),$=v(),z=a("div"),I=a("h1"),I.textContent=ue,ee=v(),b=a("label"),C=a("div"),C.innerHTML=de,te=v(),g=a("textarea"),le=v(),L=a("div"),y=a("span"),ae=v(),w=a("span"),se=J("Total: "),H=a("span"),X=J(o[3]),this.h()},l(p){c=s(p,"DIV",{class:!0,"data-svelte-h":!0}),B(c)!=="svelte-d8x708"&&(c.innerHTML=h),n=x(p),t=s(p,"DIV",{class:!0});var d=i(t);u=s(d,"DIV",{class:!0});var k=i(u);f=s(k,"H1",{class:!0,"data-svelte-h":!0}),B(f)!=="svelte-reli6n"&&(f.textContent=j),S=x(k),_=s(k,"LABEL",{class:!0});var P=i(_);T=s(P,"DIV",{class:!0,"data-svelte-h":!0}),B(T)!=="svelte-1g3xd65"&&(T.innerHTML=ie),Q=x(P),m=s(P,"TEXTAREA",{class:!0,placeholder:!0}),i(m).forEach(r),U=x(P),E=s(P,"DIV",{class:!0});var q=i(E);M=s(q,"SPAN",{class:!0}),i(M).forEach(r),W=x(q),A=s(q,"SPAN",{class:!0});var ne=i(A);Y=K(ne,"Total: "),D=s(ne,"SPAN",{class:!0});var fe=i(D);R=K(fe,o[2]),fe.forEach(r),ne.forEach(r),q.forEach(r),P.forEach(r),k.forEach(r),Z=x(d),N=s(d,"DIV",{class:!0}),i(N).forEach(r),$=x(d),z=s(d,"DIV",{class:!0});var F=i(z);I=s(F,"H1",{class:!0,"data-svelte-h":!0}),B(I)!=="svelte-djf72y"&&(I.textContent=ue),ee=x(F),b=s(F,"LABEL",{class:!0});var V=i(b);C=s(V,"DIV",{class:!0,"data-svelte-h":!0}),B(C)!=="svelte-1g3xd65"&&(C.innerHTML=de),te=x(V),g=s(V,"TEXTAREA",{class:!0,placeholder:!0}),i(g).forEach(r),le=x(V),L=s(V,"DIV",{class:!0});var G=i(L);y=s(G,"SPAN",{class:!0}),i(y).forEach(r),ae=x(G),w=s(G,"SPAN",{class:!0});var oe=i(w);se=K(oe,"Total: "),H=s(oe,"SPAN",{class:!0});var he=i(H);X=K(he,o[3]),he.forEach(r),oe.forEach(r),G.forEach(r),V.forEach(r),F.forEach(r),d.forEach(r),this.h()},h(){l(c,"class","text-sm breadcrumbs p-5"),l(f,"class","text-xl w-full pl-5"),l(T,"class","label"),l(m,"class","textarea textarea-bordered h-32"),l(m,"placeholder","List"),l(M,"class","label-text-alt"),l(D,"class","text-blue-500"),l(A,"class","label-text-alt text-xl"),l(E,"class","label"),l(_,"class","form-control p-5 w-full"),l(u,"class","grid flex-grow card bg-base-200 rounded-box place-items-center pt-5 shadow-lg"),l(N,"class","divider lg:divider-horizontal"),l(I,"class","text-xl w-full pl-5"),l(C,"class","label"),l(g,"class","textarea textarea-bordered h-32"),l(g,"placeholder","List"),l(y,"class","label-text-alt"),l(H,"class","text-blue-500"),l(w,"class","label-text-alt text-xl"),l(L,"class","label"),l(b,"class","form-control p-5 w-full"),l(z,"class","grid flex-grow card bg-base-200 rounded-box place-items-center pt-5 shadow-lg"),l(t,"class","flex flex-col w-full lg:flex-row px-3")},m(p,d){ce(p,c,d),ce(p,n,d),ce(p,t,d),e(t,u),e(u,f),e(u,S),e(u,_),e(_,T),e(_,Q),e(_,m),O(m,o[1]),e(_,U),e(_,E),e(E,M),e(E,W),e(E,A),e(A,Y),e(A,D),e(D,R),e(t,Z),e(t,N),e(t,$),e(t,z),e(z,I),e(z,ee),e(z,b),e(b,C),e(b,te),e(b,g),O(g,o[0]),e(b,le),e(b,L),e(L,y),e(L,ae),e(L,w),e(w,se),e(w,H),e(H,X),re||(pe=[xe(m,"input",o[4]),xe(g,"input",o[5])],re=!0)},p(p,[d]){d&2&&O(m,p[1]),d&4&&_e(R,p[2]),d&1&&O(g,p[0]),d&8&&_e(X,p[3])},i:ve,o:ve,d(p){p&&(r(c),r(n),r(t)),re=!1,me(pe)}}}function Le(o){let c=0,h=o.split(/\r\n|\r|\n/);for(let n of h)n=n.replace(/[^0-9]/g,""),n!==""&&(c+=parseInt(n[0]+n[n.length-1]));return c}function Te(o){let c=0,h=o.split(/\r\n|\r|\n/);for(let n of h){let t=n.substring(0,2);for(let u of n)t+=u,t=t.replace("one","o1e").replace("two","t2o").replace("three","t3e").replace("four","f4r").replace("five","f5e").replace("six","s6x").replace("seven","s7n").replace("eight","e8t").replace("nine","n9e");t=t.replace(/[^0-9]/g,""),n!==""&&(c+=parseInt(t[0]+t[t.length-1]))}return c}function Ae(o,c,h){let n,t,u="",f="";function j(){f=this.value,h(1,f)}function S(){u=this.value,h(0,u)}return o.$$.update=()=>{o.$$.dirty&1&&h(3,n=Te(u)),o.$$.dirty&2&&h(2,t=Le(f))},[u,f,t,n,j,S]}class we extends ge{constructor(c){super(),Ee(this,c,Ae,ze,be,{})}}export{we as component};