import{s as q,n as j}from"../chunks/scheduler.Ce_0Mfso.js";import{S as I,i as L,s as b,e as v,h as M,d as _,c as y,a as C,b as E,g as k,j as m,k as S,m as d,o as $,t as z,l as A,n as H}from"../chunks/index.DheiYkt2.js";import{e as w}from"../chunks/each.D6YF6ztN.js";async function N({fetch:r}){return{characters:await(await r("api/characters")).json()}}const J=Object.freeze(Object.defineProperty({__proto__:null,load:N},Symbol.toStringTag,{value:"Module"}));function T(r,a,e){const s=r.slice();return s[1]=a[e],s}function P(r){let a,e,s=r[1].name+"",i,f,h;return{c(){a=v("li"),e=v("a"),i=z(s),h=b(),this.h()},l(o){a=C(o,"LI",{class:!0});var c=E(a);e=C(c,"A",{href:!0,class:!0});var u=E(e);i=A(u,s),u.forEach(_),h=y(c),c.forEach(_),this.h()},h(){m(e,"href",f=`characters/${r[1].slug}`),m(e,"class","title"),m(a,"class","post")},m(o,c){S(o,a,c),d(a,e),d(e,i),d(a,h)},p(o,c){c&1&&s!==(s=o[1].name+"")&&H(i,s),c&1&&f!==(f=`characters/${o[1].slug}`)&&m(e,"href",f)},d(o){o&&_(a)}}}function U(r){let a,e,s,i="Original Characters",f,h,o="My Original Characters! The most important ones.",c,u,p=w(r[0].characters),n=[];for(let l=0;l<p.length;l+=1)n[l]=P(T(r,p,l));return{c(){a=b(),e=v("section"),s=v("h1"),s.textContent=i,f=b(),h=v("p"),h.textContent=o,c=b(),u=v("ul");for(let l=0;l<n.length;l+=1)n[l].c();this.h()},l(l){M("svelte-5cpiew",document.head).forEach(_),a=y(l),e=C(l,"SECTION",{});var t=E(e);s=C(t,"H1",{id:!0,class:!0,"data-svelte-h":!0}),k(s)!=="svelte-1wqb1yc"&&(s.textContent=i),f=y(t),h=C(t,"P",{"data-svelte-h":!0}),k(h)!=="svelte-172pfud"&&(h.textContent=o),c=y(t),u=C(t,"UL",{class:!0});var x=E(u);for(let O=0;O<n.length;O+=1)n[O].l(x);x.forEach(_),t.forEach(_),this.h()},h(){document.title="Original Characters",m(s,"id","Title"),m(s,"class","title"),m(u,"class","posts")},m(l,g){S(l,a,g),S(l,e,g),d(e,s),d(e,f),d(e,h),d(e,c),d(e,u);for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(u,null)},p(l,[g]){if(g&1){p=w(l[0].characters);let t;for(t=0;t<p.length;t+=1){const x=T(l,p,t);n[t]?n[t].p(x,g):(n[t]=P(x),n[t].c(),n[t].m(u,null))}for(;t<n.length;t+=1)n[t].d(1);n.length=p.length}},i:j,o:j,d(l){l&&(_(a),_(e)),$(n,l)}}}function B(r,a,e){let{data:s}=a;return r.$$set=i=>{"data"in i&&e(0,s=i.data)},[s]}class K extends I{constructor(a){super(),L(this,a,B,U,q,{data:0})}}export{K as component,J as universal};
