import{s as Ee,c as ke,u as Ce,g as Se,a as Le,o as Ae,b as Pe}from"./scheduler.Ck6cZafl.js";import{S as De,i as He,s as P,e as m,o as I,h as Ie,d as _,c as D,a as p,p as v,q as O,g as Oe,b,f as u,r as d,u as w,t as qe,l as Ue,v as V,w as z}from"./index.C0dgLUhg.js";import{e as q}from"./each.D6YF6ztN.js";function ne(h,i,n){const e=h.slice();e[9]=i[n];const l=e[9].parentElement?e[9].parentElement.querySelectorAll("h3"):[];return e[10]=l,e}function se(h,i,n){const e=h.slice();e[13]=i[n];const l=e[13].parentElement?e[13].parentElement.querySelectorAll("h4"):[];return e[14]=l,e}function ae(h,i,n){const e=h.slice();e[17]=i[n];const l=e[17].parentElement?e[17].parentElement.querySelectorAll("h5"):[];return e[18]=l,e}function fe(h,i,n){const e=h.slice();e[21]=i[n];const l=e[21].parentElement?e[21].parentElement.querySelectorAll("h6"):[];return e[22]=l,e}function oe(h,i,n){const e=h.slice();return e[25]=i[n],e}function he(h){let i,n,e=new Date(h[2]).toLocaleDateString()+"",l;return{c(){i=m("p"),n=I("Published "),l=I(e)},l(s){i=p(s,"P",{});var t=v(i);n=O(t,"Published "),l=O(t,e),t.forEach(_)},m(s,t){u(s,i,t),d(i,n),d(i,l)},p(s,t){t&4&&e!==(e=new Date(s[2]).toLocaleDateString()+"")&&w(l,e)},d(s){s&&_(i)}}}function ce(h){let i,n,e=new Date(h[3]).toLocaleDateString()+"",l;return{c(){i=m("p"),n=I("Updated "),l=I(e)},l(s){i=p(s,"P",{});var t=v(i);n=O(t,"Updated "),l=O(t,e),t.forEach(_)},m(s,t){u(s,i,t),d(i,n),d(i,l)},p(s,t){t&8&&e!==(e=new Date(s[3]).toLocaleDateString()+"")&&w(l,e)},d(s){s&&_(i)}}}function re(h){let i,n,e=q(h[10]),l=[];for(let s=0;s<e.length;s+=1)l[s]=be(se(h,e,s));return{c(){i=m("ol");for(let s=0;s<l.length;s+=1)l[s].c();n=P(),this.h()},l(s){i=p(s,"OL",{class:!0});var t=v(i);for(let o=0;o<l.length;o+=1)l[o].l(t);n=D(t),t.forEach(_),this.h()},h(){b(i,"class","list-disc pl-6")},m(s,t){u(s,i,t);for(let o=0;o<l.length;o+=1)l[o]&&l[o].m(i,null);d(i,n)},p(s,t){if(t&32){e=q(s[10]);let o;for(o=0;o<e.length;o+=1){const a=se(s,e,o);l[o]?l[o].p(a,t):(l[o]=be(a),l[o].c(),l[o].m(i,n))}for(;o<l.length;o+=1)l[o].d(1);l.length=e.length}},d(s){s&&_(i),V(l,s)}}}function _e(h){let i,n=q(h[14]),e=[];for(let l=0;l<n.length;l+=1)e[l]=ge(ae(h,n,l));return{c(){i=m("ol");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){i=p(l,"OL",{class:!0});var s=v(i);for(let t=0;t<e.length;t+=1)e[t].l(s);s.forEach(_),this.h()},h(){b(i,"class","list-disc pl-6")},m(l,s){u(l,i,s);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(i,null)},p(l,s){if(s&32){n=q(l[14]);let t;for(t=0;t<n.length;t+=1){const o=ae(l,n,t);e[t]?e[t].p(o,s):(e[t]=ge(o),e[t].c(),e[t].m(i,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=n.length}},d(l){l&&_(i),V(e,l)}}}function ue(h){let i,n=q(h[18]),e=[];for(let l=0;l<n.length;l+=1)e[l]=pe(fe(h,n,l));return{c(){i=m("ol");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){i=p(l,"OL",{class:!0});var s=v(i);for(let t=0;t<e.length;t+=1)e[t].l(s);s.forEach(_),this.h()},h(){b(i,"class","list-disc pl-6")},m(l,s){u(l,i,s);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(i,null)},p(l,s){if(s&32){n=q(l[18]);let t;for(t=0;t<n.length;t+=1){const o=fe(l,n,t);e[t]?e[t].p(o,s):(e[t]=pe(o),e[t].c(),e[t].m(i,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=n.length}},d(l){l&&_(i),V(e,l)}}}function de(h){let i,n=q(h[22]),e=[];for(let l=0;l<n.length;l+=1)e[l]=me(oe(h,n,l));return{c(){i=m("ol");for(let l=0;l<e.length;l+=1)e[l].c();this.h()},l(l){i=p(l,"OL",{class:!0});var s=v(i);for(let t=0;t<e.length;t+=1)e[t].l(s);s.forEach(_),this.h()},h(){b(i,"class","list-disc pl-6")},m(l,s){u(l,i,s);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(i,null)},p(l,s){if(s&32){n=q(l[22]);let t;for(t=0;t<n.length;t+=1){const o=oe(l,n,t);e[t]?e[t].p(o,s):(e[t]=me(o),e[t].c(),e[t].m(i,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=n.length}},d(l){l&&_(i),V(e,l)}}}function me(h){let i,n,e=h[25].textContent+"",l,s;return{c(){i=m("li"),n=m("a"),l=I(e),this.h()},l(t){i=p(t,"LI",{});var o=v(i);n=p(o,"A",{href:!0});var a=v(n);l=O(a,e),a.forEach(_),o.forEach(_),this.h()},h(){b(n,"href",s="#"+h[25].id)},m(t,o){u(t,i,o),d(i,n),d(n,l)},p(t,o){o&32&&e!==(e=t[25].textContent+"")&&w(l,e),o&32&&s!==(s="#"+t[25].id)&&b(n,"href",s)},d(t){t&&_(i)}}}function pe(h){let i,n,e=h[21].textContent+"",l,s,t,o,a=h[22].length>0&&de(h);return{c(){i=m("li"),n=m("a"),l=I(e),t=P(),a&&a.c(),o=z(),this.h()},l(f){i=p(f,"LI",{});var c=v(i);n=p(c,"A",{href:!0});var k=v(n);l=O(k,e),k.forEach(_),c.forEach(_),t=D(f),a&&a.l(f),o=z(),this.h()},h(){b(n,"href",s="#"+h[21].id)},m(f,c){u(f,i,c),d(i,n),d(n,l),u(f,t,c),a&&a.m(f,c),u(f,o,c)},p(f,c){c&32&&e!==(e=f[21].textContent+"")&&w(l,e),c&32&&s!==(s="#"+f[21].id)&&b(n,"href",s),f[22].length>0?a?a.p(f,c):(a=de(f),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null)},d(f){f&&(_(i),_(t),_(o)),a&&a.d(f)}}}function ge(h){let i,n,e=h[17].textContent+"",l,s,t,o,a=h[18].length>0&&ue(h);return{c(){i=m("li"),n=m("a"),l=I(e),t=P(),a&&a.c(),o=z(),this.h()},l(f){i=p(f,"LI",{});var c=v(i);n=p(c,"A",{href:!0});var k=v(n);l=O(k,e),k.forEach(_),c.forEach(_),t=D(f),a&&a.l(f),o=z(),this.h()},h(){b(n,"href",s="#"+h[17].id)},m(f,c){u(f,i,c),d(i,n),d(n,l),u(f,t,c),a&&a.m(f,c),u(f,o,c)},p(f,c){c&32&&e!==(e=f[17].textContent+"")&&w(l,e),c&32&&s!==(s="#"+f[17].id)&&b(n,"href",s),f[18].length>0?a?a.p(f,c):(a=ue(f),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null)},d(f){f&&(_(i),_(t),_(o)),a&&a.d(f)}}}function be(h){let i,n,e=h[13].textContent+"",l,s,t,o,a=h[14].length>0&&_e(h);return{c(){i=m("li"),n=m("a"),l=I(e),t=P(),a&&a.c(),o=z(),this.h()},l(f){i=p(f,"LI",{});var c=v(i);n=p(c,"A",{href:!0});var k=v(n);l=O(k,e),k.forEach(_),c.forEach(_),t=D(f),a&&a.l(f),o=z(),this.h()},h(){b(n,"href",s="#"+h[13].id)},m(f,c){u(f,i,c),d(i,n),d(n,l),u(f,t,c),a&&a.m(f,c),u(f,o,c)},p(f,c){c&32&&e!==(e=f[13].textContent+"")&&w(l,e),c&32&&s!==(s="#"+f[13].id)&&b(n,"href",s),f[14].length>0?a?a.p(f,c):(a=_e(f),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null)},d(f){f&&(_(i),_(t),_(o)),a&&a.d(f)}}}function ve(h){let i,n,e=h[9].textContent+"",l,s,t,o,a=h[10].length>0&&re(h);return{c(){i=m("li"),n=m("a"),l=I(e),t=P(),a&&a.c(),o=z(),this.h()},l(f){i=p(f,"LI",{});var c=v(i);n=p(c,"A",{href:!0});var k=v(n);l=O(k,e),k.forEach(_),c.forEach(_),t=D(f),a&&a.l(f),o=z(),this.h()},h(){b(n,"href",s="#"+h[9].id)},m(f,c){u(f,i,c),d(i,n),d(n,l),u(f,t,c),a&&a.m(f,c),u(f,o,c)},p(f,c){c&32&&e!==(e=f[9].textContent+"")&&w(l,e),c&32&&s!==(s="#"+f[9].id)&&b(n,"href",s),f[10].length>0?a?a.p(f,c):(a=re(f),a.c(),a.m(o.parentNode,o)):a&&(a.d(1),a=null)},d(f){f&&(_(i),_(t),_(o)),a&&a.d(f)}}}function Ne(h){let i,n,e,l,s,t,o,a,f,c,k,C,F,J,U,R,x="Table of Contents",Z,B,j,K,Q,W,T,N;document.title=i=h[0];let L=h[2]&&he(h),A=h[3]&&ce(h),G=q(h[5]),S=[];for(let r=0;r<G.length;r+=1)S[r]=ve(ne(h,G,r));const y=h[7].default,H=ke(y,h,h[6],null);return{c(){n=P(),e=m("hgroup"),l=m("h1"),s=I(h[0]),t=P(),o=m("p"),a=I(h[1]),f=P(),c=m("section"),L&&L.c(),k=P(),A&&A.c(),C=P(),F=m("hr"),J=P(),U=m("section"),R=m("h2"),R.textContent=x,Z=P(),B=m("div"),j=m("ol");for(let r=0;r<S.length;r+=1)S[r].c();K=P(),Q=m("hr"),W=P(),T=m("article"),H&&H.c(),this.h()},l(r){Ie("svelte-j1k8nl",document.head).forEach(_),n=D(r),e=p(r,"HGROUP",{class:!0});var g=v(e);l=p(g,"H1",{class:!0});var M=v(l);s=O(M,h[0]),M.forEach(_),t=D(g),o=p(g,"P",{class:!0});var ee=v(o);a=O(ee,h[1]),ee.forEach(_),f=D(g),c=p(g,"SECTION",{class:!0});var X=v(c);L&&L.l(X),k=D(X),A&&A.l(X),X.forEach(_),g.forEach(_),C=D(r),F=p(r,"HR",{}),J=D(r),U=p(r,"SECTION",{class:!0});var Y=v(U);R=p(Y,"H2",{id:!0,class:!0,"data-svelte-h":!0}),Oe(R)!=="svelte-1sx1f3g"&&(R.textContent=x),Z=D(Y),B=p(Y,"DIV",{class:!0});var le=v(B);j=p(le,"OL",{class:!0});var te=v(j);for(let $=0;$<S.length;$+=1)S[$].l(te);te.forEach(_),le.forEach(_),Y.forEach(_),K=D(r),Q=p(r,"HR",{}),W=D(r),T=p(r,"ARTICLE",{class:!0});var ie=v(T);H&&H.l(ie),ie.forEach(_),this.h()},h(){b(l,"class","heading-size-1 leading-tight"),b(o,"class","italic"),b(c,"class","text-minor text-sm text-right"),b(e,"class","mb-10 space-y-2"),b(R,"id","table-of-contents"),b(R,"class","heading-size-2"),b(j,"class","list-disc pl-6"),b(B,"class","space-y-1"),b(U,"class","mb-10 space-y-4"),b(T,"class","space-y-10")},m(r,E){u(r,n,E),u(r,e,E),d(e,l),d(l,s),d(e,t),d(e,o),d(o,a),d(e,f),d(e,c),L&&L.m(c,null),d(c,k),A&&A.m(c,null),u(r,C,E),u(r,F,E),u(r,J,E),u(r,U,E),d(U,R),d(U,Z),d(U,B),d(B,j);for(let g=0;g<S.length;g+=1)S[g]&&S[g].m(j,null);u(r,K,E),u(r,Q,E),u(r,W,E),u(r,T,E),H&&H.m(T,null),h[8](T),N=!0},p(r,[E]){if((!N||E&1)&&i!==(i=r[0])&&(document.title=i),(!N||E&1)&&w(s,r[0]),(!N||E&2)&&w(a,r[1]),r[2]?L?L.p(r,E):(L=he(r),L.c(),L.m(c,k)):L&&(L.d(1),L=null),r[3]?A?A.p(r,E):(A=ce(r),A.c(),A.m(c,null)):A&&(A.d(1),A=null),E&32){G=q(r[5]);let g;for(g=0;g<G.length;g+=1){const M=ne(r,G,g);S[g]?S[g].p(M,E):(S[g]=ve(M),S[g].c(),S[g].m(j,null))}for(;g<S.length;g+=1)S[g].d(1);S.length=G.length}H&&H.p&&(!N||E&64)&&Ce(H,y,r,r[6],N?Le(y,r[6],E,null):Se(r[6]),null)},i(r){N||(qe(H,r),N=!0)},o(r){Ue(H,r),N=!1},d(r){r&&(_(n),_(e),_(C),_(F),_(J),_(U),_(K),_(Q),_(W),_(T)),L&&L.d(),A&&A.d(),V(S,r),H&&H.d(r),h[8](null)}}}function we(h,i,n){let{$$slots:e={},$$scope:l}=i,{titleHeading:s=""}=i,{titleSubheading:t=""}=i,{datePublished:o=""}=i,{dateUpdated:a=""}=i,f,c=[];Ae(()=>{n(5,c=Array.from(f.querySelectorAll("h2")))});function k(C){Pe[C?"unshift":"push"](()=>{f=C,n(4,f)})}return h.$$set=C=>{"titleHeading"in C&&n(0,s=C.titleHeading),"titleSubheading"in C&&n(1,t=C.titleSubheading),"datePublished"in C&&n(2,o=C.datePublished),"dateUpdated"in C&&n(3,a=C.dateUpdated),"$$scope"in C&&n(6,l=C.$$scope)},[s,t,o,a,f,c,l,e,k]}class je extends De{constructor(i){super(),He(this,i,we,Ne,Ee,{titleHeading:0,titleSubheading:1,datePublished:2,dateUpdated:3})}}export{je as A};