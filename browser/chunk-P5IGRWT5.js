import{l as I,m as ct,n as lt,p as O,q as dt,r as mt,u as ht,x as ut}from"./chunk-PZVGKDTC.js";import{B as it,F as st,I as T,a as et,da as ot,fa as rt,s as nt,t as at}from"./chunk-FVZDA3P3.js";import{c as tt,d as R,f as k,g as D,h as E}from"./chunk-HU7WFQWJ.js";import{Ca as A,Fa as U,Gb as J,I as P,La as Z,N as j,O as F,P as y,Pa as v,Qa as p,R as o,Ra as W,U as L,V as z,Va as K,Xa as X,Ya as $,Z as _,Za as G,_a as x,a as d,aa as N,ca as V,cb as S,db as B,eb as C,g as c,ib as w,kb as M,ma as u,oa as H,wa as g,xa as q,xb as Y,ya as b,za as Q}from"./chunk-U3NN5SHJ.js";function vt(a,l){if(a&1){let t=K();v(0,"div",1)(1,"button",2),$("click",function(){L(t);let n=x();return z(n.action())}),w(2),p()()}if(a&2){let t=x();u(2),M(" ",t.data.action," ")}}var kt=["label"];function yt(a,l){}var gt=Math.pow(2,31)-1,f=class{_overlayRef;instance;containerInstance;_afterDismissed=new c;_afterOpened=new c;_onAction=new c;_durationTimeoutId;_dismissedByAction=!1;constructor(l,t){this._overlayRef=t,this.containerInstance=l,l._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(l){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(l,gt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}},pt=new y("MatSnackBarData"),m=class{politeness="assertive";announcementMessage="";viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition="center";verticalPosition="bottom"},At=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=b({type:a,selectors:[["","matSnackBarLabel",""]],hostAttrs:[1,"mat-mdc-snack-bar-label","mdc-snackbar__label"]})}return a})(),xt=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=b({type:a,selectors:[["","matSnackBarActions",""]],hostAttrs:[1,"mat-mdc-snack-bar-actions","mdc-snackbar__actions"]})}return a})(),St=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275dir=b({type:a,selectors:[["","matSnackBarAction",""]],hostAttrs:[1,"mat-mdc-snack-bar-action","mdc-snackbar__action"]})}return a})(),ft=(()=>{class a{snackBarRef=o(f);data=o(pt);constructor(){}action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["simple-snack-bar"]],hostAttrs:[1,"mat-mdc-simple-snack-bar"],exportAs:["matSnackBar"],decls:3,vars:2,consts:[["matSnackBarLabel",""],["matSnackBarActions",""],["mat-button","","matSnackBarAction","",3,"click"]],template:function(e,n){e&1&&(v(0,"div",0),w(1),p(),A(2,vt,3,1,"div",1)),e&2&&(u(),M(" ",n.data.message,`
`),u(),Z(n.hasAction?2:-1))},dependencies:[ot,At,xt,St],styles:[".mat-mdc-simple-snack-bar{display:flex}"],encapsulation:2,changeDetection:0})}return a})(),Bt={snackBarState:tt("state",[D("void, hidden",k({transform:"scale(0.8)",opacity:0})),D("visible",k({transform:"scale(1)",opacity:1})),E("* => visible",R("150ms cubic-bezier(0, 0, 0.2, 1)")),E("* => void, * => hidden",R("75ms cubic-bezier(0.4, 0.0, 1, 1)",k({opacity:0})))])},Ct=(()=>{class a extends lt{_ngZone=o(N);_elementRef=o(V);_changeDetectorRef=o(Y);_platform=o(et);snackBarConfig=o(m);_document=o(J);_trackedModals=new Set;_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new c;_onExit=new c;_onEnter=new c;_animationState="void";_live;_label;_role;_liveElementId=o(st).getId("mat-snack-bar-container-live-");constructor(){super();let t=this.snackBarConfig;t.politeness==="assertive"&&!t.announcementMessage?this._live="assertive":t.politeness==="off"?this._live="off":this._live="polite",this._platform.FIREFOX&&(this._live==="polite"&&(this._role="status"),this._live==="assertive"&&(this._role="alert"))}attachComponentPortal(t){this._assertNotAttached();let e=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),e}attachTemplatePortal(t){this._assertNotAttached();let e=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),e}attachDomPortal=t=>{this._assertNotAttached();let e=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),e};onAnimationEnd(t){let{fromState:e,toState:n}=t;if((n==="void"&&e!=="void"||n==="hidden")&&this._completeExit(),n==="visible"){let i=this._onEnter;this._ngZone.run(()=>{i.next(),i.complete()})}}enter(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce())}exit(){return this._ngZone.run(()=>{this._animationState="hidden",this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute("mat-exit",""),clearTimeout(this._announceTimeoutId)}),this._onExit}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(s=>t.classList.add(s)):t.classList.add(e)),this._exposeToModals();let n=this._label.nativeElement,i="mdc-snackbar__label";n.classList.toggle(i,!n.querySelector(`.${i}`))}_exposeToModals(){let t=this._liveElementId,e=this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');for(let n=0;n<e.length;n++){let i=e[n],s=i.getAttribute("aria-owns");this._trackedModals.add(i),s?s.indexOf(t)===-1&&i.setAttribute("aria-owns",s+" "+t):i.setAttribute("aria-owns",t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let e=t.getAttribute("aria-owns");if(e){let n=e.replace(this._liveElementId,"").trim();n.length>0?t.setAttribute("aria-owns",n):t.removeAttribute("aria-owns")}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{let t=this._elementRef.nativeElement.querySelector("[aria-hidden]"),e=this._elementRef.nativeElement.querySelector("[aria-live]");if(t&&e){let n=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&t.contains(document.activeElement)&&(n=document.activeElement),t.removeAttribute("aria-hidden"),e.appendChild(t),n?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static \u0275fac=function(e){return new(e||a)};static \u0275cmp=g({type:a,selectors:[["mat-snack-bar-container"]],viewQuery:function(e,n){if(e&1&&(S(O,7),S(kt,7)),e&2){let i;B(i=C())&&(n._portalOutlet=i.first),B(i=C())&&(n._label=i.first)}},hostAttrs:[1,"mdc-snackbar","mat-mdc-snack-bar-container"],hostVars:1,hostBindings:function(e,n){e&1&&G("@state.done",function(s){return n.onAnimationEnd(s)}),e&2&&X("@state",n._animationState)},features:[Q],decls:6,vars:3,consts:[["label",""],[1,"mdc-snackbar__surface","mat-mdc-snackbar-surface"],[1,"mat-mdc-snack-bar-label"],["aria-hidden","true"],["cdkPortalOutlet",""]],template:function(e,n){e&1&&(v(0,"div",1)(1,"div",2,0)(3,"div",3),A(4,yt,0,0,"ng-template",4),p(),W(5,"div"),p()()),e&2&&(u(5),U("aria-live",n._live)("role",n._role)("id",n._liveElementId))},dependencies:[O],styles:[".mat-mdc-snack-bar-container{display:flex;align-items:center;justify-content:center;box-sizing:border-box;-webkit-tap-highlight-color:rgba(0,0,0,0);margin:8px}.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container{width:100vw}.mat-mdc-snackbar-surface{box-shadow:0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);display:flex;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-left:0;padding-right:8px}[dir=rtl] .mat-mdc-snackbar-surface{padding-right:0;padding-left:8px}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{min-width:344px;max-width:672px}.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface{width:100%;min-width:0}@media(forced-colors: active){.mat-mdc-snackbar-surface{outline:solid 1px}}.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface{color:var(--mdc-snackbar-supporting-text-color, var(--mat-sys-inverse-on-surface));border-radius:var(--mdc-snackbar-container-shape, var(--mat-sys-corner-extra-small));background-color:var(--mdc-snackbar-container-color, var(--mat-sys-inverse-surface))}.mdc-snackbar__label{width:100%;flex-grow:1;box-sizing:border-box;margin:0;padding:14px 8px 14px 16px}[dir=rtl] .mdc-snackbar__label{padding-left:8px;padding-right:16px}.mat-mdc-snack-bar-container .mdc-snackbar__label{font-family:var(--mdc-snackbar-supporting-text-font, var(--mat-sys-body-medium-font));font-size:var(--mdc-snackbar-supporting-text-size, var(--mat-sys-body-medium-size));font-weight:var(--mdc-snackbar-supporting-text-weight, var(--mat-sys-body-medium-weight));line-height:var(--mdc-snackbar-supporting-text-line-height, var(--mat-sys-body-medium-line-height))}.mat-mdc-snack-bar-actions{display:flex;flex-shrink:0;align-items:center;box-sizing:border-box}.mat-mdc-snack-bar-handset,.mat-mdc-snack-bar-container,.mat-mdc-snack-bar-label{flex:1 1 auto}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed{color:var(--mat-snack-bar-button-color, var(--mat-sys-inverse-primary))}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled){--mat-text-button-state-layer-color:currentColor;--mat-text-button-ripple-color:currentColor}.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element{opacity:.1}"],encapsulation:2,data:{animation:[Bt.snackBarState]}})}return a})();function wt(){return new m}var Mt=new y("mat-snack-bar-default-options",{providedIn:"root",factory:wt}),Rt=(()=>{class a{_overlay=o(ht);_live=o(it);_injector=o(_);_breakpointObserver=o(nt);_parentSnackBar=o(a,{optional:!0,skipSelf:!0});_defaultConfig=o(Mt);_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ft;snackBarContainerComponent=Ct;handsetCssClass="mat-mdc-snack-bar-handset";get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}constructor(){}openFromComponent(t,e){return this._attach(t,e)}openFromTemplate(t,e){return this._attach(t,e)}open(t,e="",n){let i=d(d({},this._defaultConfig),n);return i.data={message:t,action:e},i.announcementMessage===t&&(i.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,i)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,e){let n=e&&e.viewContainerRef&&e.viewContainerRef.injector,i=_.create({parent:n||this._injector,providers:[{provide:m,useValue:e}]}),s=new I(this.snackBarContainerComponent,e.viewContainerRef,i),r=t.attach(s);return r.instance.snackBarConfig=e,r.instance}_attach(t,e){let n=d(d(d({},new m),this._defaultConfig),e),i=this._createOverlay(n),s=this._attachSnackBarContainer(i,n),r=new f(s,i);if(t instanceof H){let h=new ct(t,null,{$implicit:n.data,snackBarRef:r});r.instance=s.attachTemplatePortal(h)}else{let h=this._createInjector(n,r),_t=new I(t,void 0,h),bt=s.attachComponentPortal(_t);r.instance=bt.instance}return this._breakpointObserver.observe(at.HandsetPortrait).pipe(P(i.detachments())).subscribe(h=>{i.overlayElement.classList.toggle(this.handsetCssClass,h.matches)}),n.announcementMessage&&s._onAnnounce.subscribe(()=>{this._live.announce(n.announcementMessage,n.politeness)}),this._animateSnackBar(r,n),this._openedSnackBarRef=r,this._openedSnackBarRef}_animateSnackBar(t,e){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),e.announcementMessage&&this._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter(),e.duration&&e.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(e.duration))}_createOverlay(t){let e=new mt;e.direction=t.direction;let n=this._overlay.position().global(),i=t.direction==="rtl",s=t.horizontalPosition==="left"||t.horizontalPosition==="start"&&!i||t.horizontalPosition==="end"&&i,r=!s&&t.horizontalPosition!=="center";return s?n.left("0"):r?n.right("0"):n.centerHorizontally(),t.verticalPosition==="top"?n.top("0"):n.bottom("0"),e.positionStrategy=n,this._overlay.create(e)}_createInjector(t,e){let n=t&&t.viewContainerRef&&t.viewContainerRef.injector;return _.create({parent:n||this._injector,providers:[{provide:f,useValue:e},{provide:pt,useValue:t.data}]})}static \u0275fac=function(e){return new(e||a)};static \u0275prov=j({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var $t=(()=>{class a{static \u0275fac=function(e){return new(e||a)};static \u0275mod=q({type:a});static \u0275inj=F({providers:[Rt],imports:[ut,dt,rt,T,ft,T]})}return a})();export{Rt as a,$t as b};
