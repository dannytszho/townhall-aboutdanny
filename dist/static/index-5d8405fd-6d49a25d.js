import{s as U,B as D,r as o,aC as he,j as r,aD as Fe,ct as Ne,f as pe,b3 as je,aE as ke,aK as Be,cu as $e,e as fe,a3 as te,a5 as Qe,a8 as Ye,cv as qe,aP as We,h as B,Y as ze,cw as Ue,af as He,cx as Ve,cy as Ke,cz as Ge,aT as Xe,a9 as Je,N as Ze,F as q,q as et,l as W,ax as G,S as ye,bP as tt,az as nt,cg as st,Z as rt,u as at,cA as ot,cB as it,b9 as ge,bK as ct,be as se,bL as lt,cC as ut,a0 as dt,c3 as re,cD as mt,T as ht,cj as pt,cE as ft,cF as yt,cG as gt,cH as X,cI as J,bd as z,cJ as St,cK as It,bR as Se,cL as bt,cM as Ie,cN as vt,br as Lt,cO as Tt,cP as Rt,cQ as Et,cR as _t}from"./sanity-cc08df58.js";import{useDeskTool as Pt,useDeskToolSetting as ae,Delay as wt}from"./index-1873ab3b-173217c7.js";import{P as Ct}from"./PaneItem-9b239a45-b8128de9.js";import"./json-inspector-200d0a5f.js";var oe,ie,ce,le,ue;function $(s,e){return e||(e=s.slice(0)),Object.freeze(Object.defineProperties(s,{raw:{value:Object.freeze(e)}}))}const de=100,Z=2e3,be={by:[{field:"_updatedAt",direction:"desc"}]},xt={};function At(s){return ft(s).map(e=>({...e.draft||e.published,hasPublished:!!e.published,hasDraft:!!e.draft}))}const Ot=/\b_type\s*==\s*(['"].*?['"]|\$.*?(?:\s|$))|\B(['"].*?['"]|\$.*?(?:\s|$))\s*==\s*_type\b/;function ve(s){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const n=s.match(Ot);if(!n)return null;const t=(n[1]||n[2]).trim().replace(/^["']|["']$/g,"");if(t[0]==="$"){const a=t.slice(1),u=e[a];return typeof u=="string"?u:null}return t}function Mt(s){return/^_type\s*==\s*['"$]\w+['"]?\s*$/.test(s.trim())}function Dt(s,e){const n=s.by.map(t=>{if(t.mapWith)return t;const a=Ft(e,t.field);return a?jt(a,"datetime")?{...t,mapWith:"dateTime"}:a.jsonType==="string"?{...t,mapWith:"lower"}:t:t});return n.every((t,a)=>t===s.by[a])?s:{...s,by:n}}function Ft(s,e){const n=He(e);let t=s;for(const a of n){if(!t)return;if(typeof a=="string"){t=Nt(t,a);continue}if(!(Ve(a)||Ke(a))||t.jsonType!=="array")return;const[i,l]=t.of||[];if(l||!i)return;if(!Ge(i)){t=i;continue}const[c,p]=i.to||[];if(p||!c)return;t=c}return t}function Nt(s,e){if(!("fields"in s))return;const n=s.fields.find(t=>t.name===e);return n?n.type:void 0}function jt(s,e){let n=s.type;for(;n;){if(n.name===e||!n.type&&n.jsonType===e)return!0;n=n.type}return!1}const kt=U(D)(oe||(oe=$([`
  position: relative;
`]))),Bt=U(D)(ie||(ie=$([`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`]))),$t=[...Array(30).keys()];function Qt(s){const{layout:e}=s;return r(ye,{padding:2,space:1,children:$t.map(n=>r(fe,{padding:2,children:r(yt,{isPlaceholder:!0,layout:e})},n))})}function Yt(s){const{childItemId:e,error:n,filterIsSimpleTypeConstraint:t,hasMaxItems:a,hasSearchQuery:u,isActive:i,isLazyLoading:l,isLoading:c,items:p,layout:S,loadingVariant:f,onListChange:I,onRetry:R,searchInputElement:m,showIcons:y}=s,E=te(),{collapsed:C}=Xe(),{collapsed:h,index:T}=he(),[b,_]=o.useState(!1),P=o.useCallback(()=>{c||l||!b||I()},[l,c,I,b]);o.useEffect(()=>{if(h)return;const g=setTimeout(()=>{_(!0)},0);return()=>{clearTimeout(g)}},[h,p]);const F=o.useCallback((g,d)=>{let{activeIndex:A}=d;const w=Je(g._id),O=e===w,L=!i&&O,v=i&&O,Q=A===p.length-1,M=Q&&l,H=Q&&a;return B(Ze,{children:[r(Ct,{icon:y===!1?!1:void 0,id:w,layout:S,marginBottom:1,pressed:L,schemaType:E.get(g._type),selected:v,value:g}),M&&r(q,{align:"center",justify:"center",padding:4,children:r(et,{muted:!0})}),H&&r(D,{marginY:1,paddingX:3,paddingY:4,children:B(W,{align:"center",muted:!0,size:1,children:["Displaying a maximum of ",Z," documents"]})})]})},[e,i,p.length,S,E,y,a,l]),x=o.useMemo(()=>u?r(q,{align:"center",direction:"column",height:"fill",justify:"center",children:r(G,{width:1,children:r(D,{paddingX:4,paddingY:5,children:r(W,{align:"center",muted:!0,children:"No results found"})})})}):r(q,{align:"center",direction:"column",height:"fill",justify:"center",children:r(G,{width:1,children:r(D,{paddingX:4,paddingY:5,children:r(W,{align:"center",muted:!0,children:t?"No documents of this type":"No matching documents"})})})}),[t,u]),N=o.useMemo(()=>{if(!b)return null;if(n)return r(q,{align:"center",direction:"column",height:"fill",justify:"center",children:r(G,{width:1,children:B(ye,{paddingX:4,paddingY:5,space:4,children:[r(tt,{as:"h3",children:"Could not fetch list items"}),B(W,{as:"p",children:["Error: ",r("code",{children:n.message})]}),R&&r(D,{children:r(pe,{icon:nt,onClick:R,text:"Retry",tone:"primary"})})]})})});if(!c&&p.length===0)return x;if(f==="initial"&&c)return r(wt,{ms:300,children:r(Qt,{layout:S})});if(f==="spinner"&&c)return null;const g="".concat(T,"-").concat(h);return r(kt,{overflow:"hidden",height:"fill",children:r(Bt,{children:r(st,{activeItemDataAttr:"data-hovered",ariaLabel:"Document list",canReceiveFocus:!0,focusRingOffset:-3,inputElement:m,itemHeight:51,items:p,onEndReached:P,onlyShowSelectionWhenActive:!0,overscan:10,padding:2,paddingBottom:1,renderItem:F,wrapAround:!1},g)})})},[h,n,P,T,c,p,S,f,R,F,m,b]);return r(rt,{overflow:C||f==="initial"?"hidden":"auto",children:N})}const Le=o.memo(s=>{let{contentAfter:e,index:n,initialValueTemplates:t=[],menuItemGroups:a=[],menuItems:u=[],setLayout:i,setSortOrder:l,title:c}=s;const{features:p}=Pt(),{collapsed:S,isLast:f}=he(),I=f&&!S?-1:0,R=o.useMemo(()=>({setLayout:m=>{let{layout:y}=m;i(y)},setSortOrder:m=>{l(m)}}),[i,l]);return r(Fe,{actions:r(Ne,{initialValueTemplateItems:t,actionHandlers:R,menuItemGroups:a,menuItems:u}),backButton:p.backButton&&n>0&&r(pe,{as:je,"data-as":"a",icon:ke,mode:"bleed"}),contentAfter:e,tabIndex:I,title:c})});Le.displayName="DocumentListPaneHeader";function qt(s){const{client:e,schema:n,sort:t,limit:a,params:u,filter:i,searchQuery:l,staticTypeNames:c}=s,p=t.by,S=t==null?void 0:t.extendedProjection,f=gt(()=>e.listen("*[".concat(i,"]"),u,{events:["welcome","mutation","reconnect"],includeResult:!1,visibility:"query"})).pipe(X((m,y)=>y===0&&m.type!=="welcome"?J(()=>new Error(m.type==="reconnect"?"Could not establish EventSource connection":'Received unexpected type of first event "'.concat(m.type,'"'))):z(m)),St()),[I,R]=It(f,m=>m.type==="welcome");return Se(I.pipe(Ie(1)),R.pipe(bt(1e3,Et,{leading:!0,trailing:!0}))).pipe(vt(()=>(c?z(c):e.observable.fetch("array::unique(*[".concat(i,"][]._type)"),u)).pipe(X(y=>{const E=y.flatMap(_=>n.get(_)||[]),C={filter:i,query:l||"",types:E},h={__unstable_extendedProjection:S,comments:["findability-source: ".concat(l?"list-query":"list")],limit:a,params:u,sort:p},{query:T,params:b}=_t(C,h);return e.observable.fetch(T,b)}))))}const Wt=[],me={error:null,onRetry:void 0,result:null},zt={result:null,error:null};function Ut(s){const{filter:e,params:n,sortOrder:t,searchQuery:a}=s,u=at(ot),i=te(),[l,c]=o.useState(me),{onRetry:p,error:S,result:f}=l,I=f==null?void 0:f.documents,R=o.useMemo(()=>I?At(I):Wt,[I]),[m,y]=o.useState(!1),[E,C]=o.useState(!1),[h,T]=o.useState(!1),b=o.useMemo(()=>ve(e,n),[e,n]),_=f===null&&!S,P=(I==null?void 0:I.length)===Z,F=o.useCallback(()=>{_||E||h||T(!0)},[_,E,h]),x=o.useCallback(d=>{var A,w;if(d.error){c(d);return}const O=((w=(A=d.result)==null?void 0:A.documents)==null?void 0:w.length)||0;if(!d.error&&(d==null?void 0:d.result)===null&&h){y(!0);return}if(O<de&&O!==0&&!h&&C(!0),(d==null?void 0:d.result)===null){c(v=>({...v.error?d:v}));return}y(!1),c(d)},[h]),N=o.useMemo(()=>{const d=new it,A=()=>d.next();return qt({client:u,filter:e,limit:h?Z:de,params:n,schema:i,searchQuery:a||"",sort:t||be,staticTypeNames:b?[b]:void 0}).pipe(ge(L=>({result:{documents:L},error:null})),ct(zt),se(L=>L instanceof ProgressEvent?J(()=>new Error("Request error")):J(()=>L)),se((L,v)=>Lt(z({result:null,error:L}),Se(Tt(window,"online"),d).pipe(Ie(1),X(()=>v)))),lt((L,v)=>({...L,...v,onRetry:A})))},[u,e,n,i,a,h,t,b]);o.useEffect(()=>{const d=N.subscribe(x);return()=>{d.unsubscribe()}},[x,N]);const g=o.useCallback(()=>{C(!1),y(!1),c(me),T(!1)},[]);return o.useEffect(()=>{g()},[g,e,n,t,a]),{error:S,hasMaxItems:P,isLazyLoading:m,isLoading:_,isSearchReady:!S,items:R,onListChange:F,onRetry:p}}const ee=[],Ht=Be(ce||(ce=$([`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`]))),Vt=U($e)(le||(le=$([`
  animation: `,` 500ms linear infinite;
`])),Ht),Kt=U(fe)(ue||(ue=$([`
  [data-ui='TextInput'] {
    border-radius: inherit;
  }
`])));function Gt(s){const e=o.useRef(s);return ut(e.current,s)||(e.current=s),e.current}const Xt=s=>{const{menuItems:e,sortOrderRaw:n,layout:t}=s;return e==null?void 0:e.map(a=>{var u,i,l,c;return(u=a.params)!=null&&u.layout?{...a,selected:t===((i=a.params)==null?void 0:i.layout)}:(l=a==null?void 0:a.params)!=null&&l.by?{...a,selected:dt(n==null?void 0:n.by,((c=a==null?void 0:a.params)==null?void 0:c.by)||ee)}:{...a,selected:!1}})},sn=o.memo(function(e){const{childItemId:n,index:t,isActive:a,isSelected:u,pane:i,paneKey:l}=e,c=te(),{name:p}=Qe(),{defaultLayout:S="default",displayOptions:f,initialValueTemplates:I=ee,menuItemGroups:R,menuItems:m,options:y,title:E}=i,{apiVersion:C,defaultOrdering:h=ee,filter:T}=y,b=Gt(y.params||xt),_=i.source,P=o.useMemo(()=>ve(T,b),[T,b]),F=(f==null?void 0:f.showIcons)!==!1,[x,N]=ae(P,"layout",S),[g,d]=o.useState(""),[A,w]=o.useState(""),[O,L]=o.useState(null),v=o.useRef(!1),Q=o.useMemo(()=>(h==null?void 0:h.length)>0?{by:h}:be,[h]),[M,H]=ae(P,"sortOrder",Q),Te=P&&M?Dt(M,c.get(P)):M,Re=Ye(Te),Ee=Mt(T),{error:_e,hasMaxItems:Pe,isLazyLoading:we,isLoading:j,isSearchReady:Ce,items:V,onListChange:xe,onRetry:Ae}=Ut({apiVersion:C,filter:T,params:b,searchQuery:g==null?void 0:g.trim(),sortOrder:Re}),Oe=o.useMemo(()=>Xt({menuItems:m,sortOrderRaw:M,layout:x}),[x,m,M]),Me=qe(Y=>Y.pipe(ge(K=>K.target.value),re(w),mt(K=>K===""?z(""):Rt(300)),re(d)),[]),k=o.useCallback(()=>{d(""),w("")},[]),De=o.useCallback(Y=>{Y.key==="Escape"&&k()},[k]);o.useEffect(()=>(v.current===!1&&!j&&(v.current=!0),()=>{v.current=!1}),[j]),o.useEffect(()=>{k(),v.current=!1},[l,k]);const ne=o.useMemo(()=>j&&V.length===0&&v.current?"spinner":"initial",[j,V.length]);return r(We,{name:_||p,children:B(ze,{currentMaxWidth:350,"data-ui":"DocumentListPane",id:l,maxWidth:640,minWidth:320,selected:u,children:[Ue,r(Le,{contentAfter:r(D,{paddingX:2,paddingBottom:2,children:r(Kt,{radius:4,tone:"transparent",children:r(ht,{"aria-label":"Search list",autoComplete:"off",border:!1,clearButton:!!g,disabled:!Ce,fontSize:[2,2,1],icon:ne==="spinner"?Vt:pt,onChange:Me,onClear:k,onKeyDown:De,placeholder:"Search list",radius:2,ref:L,spellCheck:!1,value:A})})}),index:t,initialValueTemplates:I,menuItemGroups:R,menuItems:Oe,setLayout:N,setSortOrder:H,title:E}),r(Yt,{childItemId:n,error:_e,filterIsSimpleTypeConstraint:Ee,hasMaxItems:Pe,hasSearchQuery:!!g,isActive:a,isLazyLoading:we,isLoading:j,items:V,layout:x,loadingVariant:ne,onListChange:xe,onRetry:Ae,searchInputElement:O,showIcons:F},l)]})})});export{sn as default};