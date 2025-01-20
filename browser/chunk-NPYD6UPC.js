import{a as I}from"./chunk-WB3XM774.js";import"./chunk-PADSZVWK.js";import{Ca as h,Ga as d,Ib as b,Kb as S,Ob as D,Pa as a,Qa as t,U as m,V as g,Va as f,Ya as C,Zb as y,_a as l,hb as v,ib as r,jb as p,kb as x,ma as o,na as u,wa as _,wb as E}from"./chunk-U3NN5SHJ.js";function P(s,n){if(s&1){let e=f();a(0,"div")(1,"p",4),r(2),t(),a(3,"button",5),C("click",function(){m(e);let c=l();return g(c.goBack())}),r(4,"Back"),t()()}if(s&2){let e=l();o(2),p(e.errorMessage)}}function O(s,n){if(s&1){let e=f();a(0,"p")(1,"strong"),r(2,"Type:"),t(),a(3,"span",6),r(4),t()(),a(5,"p")(6,"strong"),r(7,"Status:"),t(),a(8,"span",6),r(9),t()(),a(10,"p")(11,"strong"),r(12,"Start Date:"),t(),r(13),t(),a(14,"p")(15,"strong"),r(16,"Expiration Date:"),t(),r(17),t(),a(18,"button",5),C("click",function(){m(e);let c=l();return g(c.goBack())}),r(19,"Back"),t()}if(s&2){let e=l();o(3),d("ngClass",e.getCarnetTypeClass(e.carnetType)),o(),p(e.carnetType),o(4),d("ngClass",e.getCarnetStatusClass(e.carnetStatus)),o(),p(e.carnetStatus),o(4),x(" ",e.startDate,""),o(4),x(" ",e.expirationDate,"")}}var M=class s{constructor(n,e){this.authService=n;this.router=e}carnetType="Loading...";carnetStatus="Loading...";startDate="";expirationDate="";errorMessage=null;ngOnInit(){let n=this.authService.getUserInfo();console.log("User Info:",n);let e=parseInt(n.clientCode||"0",10);if(isNaN(e)||e<=0){this.handleError("Invalid client code.");return}this.authService.getCarnetStatus(e).subscribe({next:i=>{console.log("API Response:",i),this.carnetType=i.type||"N/A",this.carnetStatus=i.status||"N/A",this.startDate=i.startDate||"N/A",this.expirationDate=i.expirationDate||"N/A"},error:i=>{console.error("Error fetching carnet details:",i),this.handleError("Failed to load carnet details.")}})}getCarnetTypeClass(n){switch(n.toUpperCase()){case"PREMIUM":return"type-premium";case"DEFAULT":return"type-default";case"NONE":return"type-none";default:return"type-unknown"}}getCarnetStatusClass(n){switch(n.toUpperCase()){case"ACTIVE":return"status-active";case"SUSPENDED":return"status-suspended";case"EXPIRED":return"status-expired";default:return"status-unknown"}}handleError(n){this.errorMessage=n,this.carnetType="Error",this.carnetStatus="Error",this.startDate="",this.expirationDate=""}goBack(){this.router.navigate(["/client-dashboard"])}static \u0275fac=function(e){return new(e||s)(u(I),u(y))};static \u0275cmp=_({type:s,selectors:[["app-carnet-details"]],decls:7,vars:2,consts:[["details",""],[1,"carnet-details"],[1,"carnet-card"],[4,"ngIf","ngIfElse"],[1,"error"],[3,"click"],[3,"ngClass"]],template:function(e,i){if(e&1&&(a(0,"div",1)(1,"div",2)(2,"h1"),r(3,"Carnet Details"),t(),h(4,P,5,1,"div",3)(5,O,20,6,"ng-template",null,0,E),t()()),e&2){let c=v(6);o(4),d("ngIf",i.errorMessage)("ngIfElse",c)}},dependencies:[D,b,S],styles:[".carnet-details[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1rem;height:100vh;background:linear-gradient(135deg,#1a1b23,#232838);color:#fff;padding:2rem;box-sizing:border-box}.carnet-card[_ngcontent-%COMP%]{background:linear-gradient(135deg,#2e3a59,#2a2e45);color:#fff;border-radius:1rem;padding:2rem;width:100%;max-width:500px;box-shadow:0 4px 12px #0003;text-align:center;margin-top:2rem}.carnet-card[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.8rem;color:#f1c40f;margin-bottom:1rem}.carnet-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1.2rem;margin:.5rem 0}.carnet-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:linear-gradient(135deg,#6a11cb,#5b34ea);color:#fff;padding:.8rem 1.5rem;border:none;border-radius:.5rem;font-size:1rem;cursor:pointer;transition:background-color .3s ease;margin-top:1rem}.carnet-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background:linear-gradient(135deg,#553c9a,#3c4fe0)}.type-premium[_ngcontent-%COMP%]{color:#f1c40f}.type-default[_ngcontent-%COMP%]{color:#3498db}.type-none[_ngcontent-%COMP%]{color:#e74c3c}.status-active[_ngcontent-%COMP%]{color:#2ecc71}.status-suspended[_ngcontent-%COMP%]{color:#e67e22}.status-expired[_ngcontent-%COMP%]{color:#e74c3c}"]})};export{M as CarnetDetailsComponent};
