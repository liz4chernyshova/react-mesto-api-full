(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{29:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(18),o=n.n(c),i=(n(29),n(22)),r=n(2),l=n(3),u=n(8),p=n(0);function d(e){var t=Object(l.h)();return Object(p.jsxs)("header",{className:"header",children:[Object(p.jsx)("div",{className:"header__logo"}),"/"===t.pathname&&Object(p.jsxs)("div",{className:"header__logged",children:[Object(p.jsx)("p",{className:"header__email",children:e.email}),Object(p.jsx)("a",{className:"header__link",onClick:e.onSignout,children:"\u0412\u044b\u0439\u0442\u0438"})]}),"/sign-up"===t.pathname&&Object(p.jsx)(u.b,{to:"/sign-in",className:"header__link",children:"\u0412\u043e\u0439\u0442\u0438"}),"/sign-in"===t.pathname&&Object(p.jsx)(u.b,{to:"/sign-up",className:"header__link",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})}var j=s.a.createContext();function h(e){var t=s.a.useContext(j),n=e.card.owner._id===t._id,a="photo-element__delete-btn ".concat(n?"photo-element__delete-btn_active":"photo-element__delete-btn"),c=e.card.likes.some((function(e){return e._id===t._id})),o="photo-element__like ".concat(c?"photo-element__like_active":"photo-element__like");return Object(p.jsxs)("div",{className:"photo-element",children:[Object(p.jsx)("img",{className:"photo-element__picture",src:e.card.link,alt:e.card.name,onClick:function(){e.onCardClick(e.card)}}),Object(p.jsxs)("div",{className:"photo-element__content",children:[Object(p.jsx)("h2",{className:"photo-element__title",children:e.card.name}),Object(p.jsxs)("div",{className:"photo-element__likes-container",children:[Object(p.jsx)("button",{type:"button",className:o,onClick:function(){e.onCardLike(e.card)}}),Object(p.jsx)("p",{className:"photo-element__quantity",children:e.card.likes.length})]})]}),Object(p.jsx)("button",{type:"button",className:a,onClick:function(){e.onCardDelete(e.card)}})]})}function m(e){var t=s.a.useContext(j);return Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile",children:[Object(p.jsx)("div",{className:"profile__avatar-container",onClick:e.onEditAvatar,children:Object(p.jsx)("img",{className:"profile__avatar",alt:"\u0410\u0432\u0430\u0442\u0430\u0440\u043a\u0430.",src:t.avatar})}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsxs)("div",{className:"profile__redactor",children:[Object(p.jsx)("h1",{className:"profile__info-name",children:t.name}),Object(p.jsx)("button",{type:"button",className:"profile__redactor-btn",value:"",onClick:e.onEditProfile})]}),Object(p.jsx)("p",{className:"profile__info-description",children:t.about})]}),Object(p.jsx)("button",{type:"button",className:"profile__submit-btn",value:"",onClick:e.onAddPlace})]}),Object(p.jsx)("section",{className:"photo-elements",children:e.cards.map((function(t){return Object(p.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})}function b(){return Object(p.jsx)("footer",{className:"footer",children:Object(p.jsx)("p",{className:"footer__copyright",children:" 2021 Mesto Russia"})})}var f=n.p+"static/media/close.44bb1e48.svg";function O(e){return Object(p.jsx)("section",{className:"popup popup-".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-btn",children:Object(p.jsx)("img",{className:"popup__icon",alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a.",src:f,onClick:e.onClose})}),Object(p.jsxs)("form",{name:e.name,onSubmit:e.onSubmit,className:"form",children:[Object(p.jsx)("h2",{className:"form__title",children:e.title}),e.children,Object(p.jsx)("button",{type:"submit",className:"form__save-btn",children:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})]})})}function g(e){var t=s.a.useRef("");return Object(p.jsxs)(O,{title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",name:"popupAvatar",onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},isOpen:e.isOpen,onClose:e.onClose,children:[Object(p.jsx)("input",{id:"avatar-input",type:"url",ref:t,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",name:"link",className:"form__input",required:!0}),Object(p.jsx)("span",{className:"link-input-error form__input-error"})]})}function x(e){var t=s.a.useContext(j),n=s.a.useState(""),a=Object(r.a)(n,2),c=a[0],o=a[1],i=s.a.useState(""),l=Object(r.a)(i,2),u=l[0],d=l[1];return s.a.useEffect((function(){o(t.name),d(t.about)}),[t,e.isOpen]),Object(p.jsxs)(O,{title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",name:"popup",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c,about:u})},isOpen:e.isOpen,onClose:e.onClose,children:[Object(p.jsx)("input",{id:"heading-input",type:"text",name:"name",value:c||"",placeholder:"\u0418\u043c\u044f",className:"form__input",onChange:function(e){o(e.target.value)},minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{className:"heading-input-error form__input-error"}),Object(p.jsx)("input",{id:"subheading-input",type:"text",name:"about",value:u||"",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",className:"form__input",onChange:function(e){d(e.target.value)},minLength:"2",maxLength:"200",required:!0}),Object(p.jsx)("span",{className:"subheading-input-error form__input-error"})]})}function _(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1];return Object(p.jsxs)(O,{title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"popupAdd",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:l}),c(""),u("")},children:[Object(p.jsx)("input",{id:"name-input",type:"text",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",name:"name",value:a,onChange:function(e){c(e.target.value)},className:"form__input",minLength:"2",maxLength:"30",required:!0}),Object(p.jsx)("span",{className:"name-input-error form__input-error"}),Object(p.jsx)("input",{id:"link-input",type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",value:l,onChange:function(e){u(e.target.value)},className:"form__input",required:!0}),Object(p.jsx)("span",{className:"link-input-error form__input-error"})]})}function v(e){return Object(p.jsx)("section",{className:"popup popup-photo ".concat(e.card?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup-photo__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-btn",value:"",children:Object(p.jsx)("img",{className:"popup__icon",alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a.",src:f,onClick:e.onClose})}),Object(p.jsx)("img",{alt:e.card.name,src:e.card.link,className:"popup-photo__image"}),Object(p.jsx)("h3",{className:"popup-photo__title",children:e.card.name})]})})}function N(e){return Object(p.jsx)(O,{title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",name:"popupDelete",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onCardDeleteConfirm(e.cardId)},buttonText:"\u0414\u0430"})}var C=n.p+"static/media/Union.1b6082f8.svg";function k(e){return Object(p.jsx)("section",{className:"popup popup-".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(p.jsxs)("div",{className:"popup__container",children:[Object(p.jsx)("button",{type:"button",className:"popup__close-btn",children:Object(p.jsx)("img",{className:"popup__icon",alt:"\u041a\u0440\u0435\u0441\u0442\u0438\u043a.",src:f,onClick:e.onClose})}),Object(p.jsxs)("div",{className:"popup__tooltip",children:[Object(p.jsx)("img",{className:"popup__tooltip-picture",src:e.success?C:"data:image/png;base64,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",alt:"\u0421\u0442\u0430\u0442\u0443\u0441 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438."}),Object(p.jsx)("p",{className:"popup__tooltip-text",children:e.success?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})]})})}var y=n(20),S=n(21),A=new(function(){function e(t){var n=t.address,a=t.headers;Object(y.a)(this,e),this._address=n,this._headers=a}return Object(S.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._address,"/users/me"),{headers:this._headers}).then(this._checkResponse)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._address,"/cards"),{headers:this._headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this._address,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._address,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkResponse)}},{key:"likeCard",value:function(e,t){return fetch("".concat(this._address,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this._address,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._address,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkResponse)}},{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}}]),e}())({address:"http://api.chernyshova.backend.nomoredomains.rocks",headers:{authorization:"fad10afc-9b25-4889-84c7-ba30776ae655","Content-Type":"application/json"}}),w=n(23),L=n(24),I=["component"],E=function(e){var t=e.component,n=Object(L.a)(e,I);return Object(p.jsx)(l.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(w.a)({},n)):Object(p.jsx)(l.a,{to:"/login"})}})};function U(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),l=i[0],u=i[1];function d(e){e.preventDefault(),"email"===e.target.name?c(e.target.value):"password"===e.target.name&&u(e.target.value)}return Object(p.jsx)("main",{className:"content",children:Object(p.jsx)("section",{className:"login",children:Object(p.jsxs)("div",{className:"login__container",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{name:"login__form",onSubmit:function(t){t.preventDefault(),a&&l&&e.onLogin(a,l)},className:"login__form",children:[Object(p.jsx)("input",{id:"email",type:"email",placeholder:"Email",value:a,onChange:d,name:"email",className:"login__input",required:!0}),Object(p.jsx)("span",{className:"email-input-error login__input-error"}),Object(p.jsx)("input",{id:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:l,onChange:d,name:"password",className:"login__input",required:!0}),Object(p.jsx)("span",{className:"password-input-error login__input-error"}),Object(p.jsx)("button",{type:"submit",className:"login__save-btn",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})}function Z(e){var t=s.a.useState(""),n=Object(r.a)(t,2),a=n[0],c=n[1],o=s.a.useState(""),i=Object(r.a)(o,2),l=i[0],d=i[1];function j(e){e.preventDefault(),"email"===e.target.name?c(e.target.value):"password"===e.target.name&&d(e.target.value)}return Object(p.jsx)("main",{className:"content",children:Object(p.jsx)("section",{className:"login",children:Object(p.jsxs)("div",{className:"login__container",children:[Object(p.jsx)("h2",{className:"login__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0438\u0446\u0438\u044f"}),Object(p.jsxs)("form",{name:"login__form",onSubmit:function(t){t.preventDefault(),e.onRegister(a,l)},className:"login__form",children:[Object(p.jsx)("input",{id:"email",type:"email",placeholder:"Email",value:a,onChange:j,name:"email",className:"login__input",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{className:"email-input-error login__input-error"}),Object(p.jsx)("input",{id:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:l,onChange:j,name:"password",className:"login__input",minLength:"2",maxLength:"40",required:!0}),Object(p.jsx)("span",{className:"password-input-error login__input-error"}),Object(p.jsx)("button",{type:"submit",className:"login__save-btn",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsxs)("div",{className:"login__signup",children:[Object(p.jsx)("p",{children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(p.jsx)(u.b,{to:"/sign-in",className:"login__link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})})}var P="http://api.chernyshova.backend.nomoredomains.rocks",q=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))};var R=function(){var e=s.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=s.a.useState(!1),o=Object(r.a)(c,2),u=o[0],h=o[1],f=s.a.useState(!1),O=Object(r.a)(f,2),C=O[0],y=O[1],S=s.a.useState(!1),w=Object(r.a)(S,2),L=w[0],I=w[1],R=s.a.useState(null),K=Object(r.a)(R,2),D=K[0],J=K[1],M=s.a.useState({}),V=Object(r.a)(M,2),T=V[0],B=V[1],H=s.a.useState([]),Y=Object(r.a)(H,2),X=Y[0],Q=Y[1],G=s.a.useState(null),F=Object(r.a)(G,2),z=F[0],W=F[1],$=s.a.useState(!1),ee=Object(r.a)($,2),te=ee[0],ne=ee[1],ae=s.a.useState(""),se=Object(r.a)(ae,2),ce=se[0],oe=se[1],ie=s.a.useState(!1),re=Object(r.a)(ie,2),le=re[0],ue=re[1],pe=s.a.useState(!1),de=Object(r.a)(pe,2),je=de[0],he=de[1],me=Object(l.g)(),be=s.a.useState(!1),fe=Object(r.a)(be,2),Oe=fe[0],ge=fe[1];function xe(){a(!1),h(!1),y(!1),J(null),he(!1)}return s.a.useEffect((function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");(t=e,fetch("".concat(P,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(q)).then((function(e){e&&oe(e.data.email),ne(!0),me.push("/")})).catch((function(e){console.error(e)}))}var t}),[]),s.a.useEffect((function(){Promise.all([A.getUserInfo(),A.getInitialCards()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];B(n),Q(a)})).catch((function(e){console.log(e)}))}),[]),Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)(j.Provider,{value:T,children:[Object(p.jsx)(d,{loggedIn:te,email:ce,onSignout:function(){localStorage.removeItem("jwt"),oe(""),ne(!1),me.push("/sign-in")}}),Object(p.jsxs)(l.d,{children:[Object(p.jsx)(E,{exact:!0,path:"/",component:m,onEditAvatar:function(){a(!0)},onEditProfile:function(){h(!0)},onAddPlace:function(){y(!0)},onCardClick:function(e){J(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===T._id}));A.likeCard(e._id,!t).then((function(t){Q((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log(e)}))},onCardDelete:function(e){A.deleteCard(e._id).then((function(){Q((function(t){return t.filter((function(t){return t._id!==e._id}))})),I(!0),W(e)})).catch((function(e){console.log(e)}))},cards:X,loggedIn:te}),Object(p.jsx)(l.b,{path:"/sign-in",children:Object(p.jsx)(U,{onLogin:function(e,t){return function(e,t){return fetch("".concat(P,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(q)}(e,t).then((function(t){localStorage.setItem("jwt",t.token),oe(e),ne(!0),me.push("/")})).catch((function(e){console.error(e),ue(!1),he(!0)}))}})}),Object(p.jsx)(l.b,{path:"/sign-up",children:Object(p.jsx)(Z,{onRegister:function(e,t){(function(e,t){return fetch("".concat(P,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(q)})(e,t).then((function(){me.push("/sign-in"),ue(!0),he(!0)})).catch((function(e){console.error(e),ue(!1),he(!0)}))}})}),Object(p.jsxs)(l.b,{children:[" ",te?Object(p.jsx)(l.a,{to:"/"}):Object(p.jsx)(l.a,{to:"/sign-in"})]})]}),Object(p.jsx)(b,{}),Object(p.jsx)(k,{isOpen:je,onClose:xe,success:le}),Object(p.jsx)(g,{isOpen:n,onClose:xe,onUpdateAvatar:function(e){A.setUserAvatar(e).then((function(e){B(e),ge(!0),xe()})).catch((function(e){console.log(e)})).finally((function(){return ge(!1)}))},isLoading:Oe}),Object(p.jsx)(x,{onUpdateUser:function(e){A.setUserInfo(e).then((function(e){B(e),ge(!0),xe()})).catch((function(e){console.log(e)})).finally((function(){return ge(!0)}))},isOpen:u,onClose:xe,isLoading:Oe}),Object(p.jsx)(_,{isOpen:C,onClose:xe,onAddPlace:function(e){A.addCard(e).then((function(e){Q([e].concat(Object(i.a)(X))),ge(!0),xe()})).catch((function(e){console.log(e)})).finally((function(){return ge(!1)}))},isLoading:Oe}),Object(p.jsx)(v,{card:null!==D&&D,onClose:xe}),Object(p.jsx)(N,{isOpen:L,onClose:xe,onCardDeleteConfirm:function(e){A.deleteCard(e._id).then((function(){Q((function(t){return t.filter((function(t){return t._id!==e._id}))})),xe()})).catch((function(e){console.log(e)}))},cardId:z,isLoading:Oe})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(u.a,{children:Object(p.jsx)(R,{})})}),document.getElementById("root")),K()}},[[36,1,2]]]);
//# sourceMappingURL=main.6e6c3bb7.chunk.js.map