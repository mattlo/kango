kango.TabProxyTab=function(a){this._tab=a};kango.TabProxyTab.prototype={_tab:null,isPrivate:function(){return this._tab.isPrivate()}};kango.TabProxy=function(a){this.tab=new kango.TabProxyTab(a);this._tab=a;this._listeners=[];this._invokeAsyncModule=new kango.InvokeAsyncModule(this);this._messageTargetModule=new kango.MessageTargetModule(this)};
kango.TabProxy.prototype={_tab:null,_listeners:null,_invokeAsyncModule:null,_messageTargetModule:null,xhr:{send:function(){return null!=kango?kango.xhr.send.apply(kango.xhr,arguments):null}},console:{log:function(){return null!=kango?kango.console.log.apply(kango.console,arguments):null}},browser:{getName:function(){return null!=kango?kango.browser.getName():null}},io:{getResourceUrl:function(a){return null!=kango?kango.io.getResourceUrl(a):null}},event:{MESSAGE:"message"},dispatchMessage:function(a,
c){if(null!=kango){var b={name:a,data:c,origin:"tab",source:this._tab,target:this._tab};kango.timer.setTimeout(function(){kango.fireEvent(kango.event.MESSAGE,b)},1);return!0}return!1},addEventListener:function(a,c){if("message"==a){for(var b=0;b<this._listeners.length;b++)if(this._listeners[b]==c)return;this._listeners.push(c)}},fireEvent:function(a,c){if("message"==a){c.source=c.target=this;for(var b=0;b<this._listeners.length;b++)this._listeners[b](c)}}};
