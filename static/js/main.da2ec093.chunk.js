(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(3),i=a.n(c),o=(a(14),a(15),a(16),a(1)),s=a.n(o),l=a(4),u=a(5),m=a(6),h=a(8),p=a(7),d=function(){return n.a.createElement("div",null,n.a.createElement("h1",{className:"title-container__title"},"Weather App"),n.a.createElement("p",{className:"title-container__subtitle"},"Find out weather conditions outside."))},y=function(e){return n.a.createElement("form",{onSubmit:e.getWeather},n.a.createElement("input",{type:"text",name:"city",placeholder:"City..."}),n.a.createElement("input",{type:"text",name:"country",placeholder:"Country..."}),n.a.createElement("button",null," Get Weather "))},v=function(e){return n.a.createElement("div",{className:"weather__info"},e.city&&e.country&&n.a.createElement("p",{className:"weather__key"},"Location:",n.a.createElement("span",{className:"weather__value"}," ",e.city,",",e.country)),e.temperature&&n.a.createElement("p",{className:"weather__key"},"temperature:",n.a.createElement("span",{className:"weather__value"}," ",Math.round(e.temperature),"\xb0C")),e.humidity&&n.a.createElement("p",{className:"weather__key"},"Humidity:",n.a.createElement("span",{className:"weather__value"}," ",e.humidity,"%")),e.description&&n.a.createElement("p",{className:"weather__key"},"Conditions:",n.a.createElement("span",{className:"weather__value"}," ",e.description))," ",e.error&&n.a.createElement("p",{className:"weather__error"},e.error))},w="a2b6fcd38dafb5cebe5e38cc8b1bf4a0",E=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},e.getWeather=function(){var t=Object(l.a)(s.a.mark((function t(a){var r,n,c,i;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),r=a.target.elements.city.value,n=a.target.elements.country.value,t.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(n,"&appid=").concat(w,"&units=metric"));case 5:return c=t.sent,t.next=8,c.json();case 8:i=t.sent,console.log(i),i.name&&i.sys.country?e.setState({temperature:i.main.temp,city:i.name,country:i.sys.country,humidity:i.main.humidity,description:i.weather[0].description,error:""}):e.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please enter a city and country."});case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"main"},n.a.createElement("div",{className:"col-xs-5 title-container"},n.a.createElement(d,null)),n.a.createElement("div",{className:"col-xs-7 form-container"},n.a.createElement(y,{getWeather:this.getWeather}),n.a.createElement(v,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error})))))}}]),a}(n.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports=a(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.da2ec093.chunk.js.map