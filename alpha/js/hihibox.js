(function($,window,document,undefined) {
	var htmlEncode = function(value){
		return (value) ? $('<div />').text(value).html() : '';
	}
	var htmlDecode = function(value) {
		return (value) ? $('<div />').html(value).text() : '';
	}
	var HihiBox = function(settings) {
		var _defaultSettings = {
			debug: true,
			id: {
				holder: 'hhb-holder',
				header: 'hhb-header',
				button: 'hhb-button',
				genreContainer: 'hhb-genrelist',
				iconset: 'hhb-iconset',
				iconMsgBox: 'hhb-msgbox',
				darkModeBtn: 'hhb-darkmode'
			},
			'class': {
				inited: 'hhb-inited',
				active: 'hhb-active',
				checkedMsg: 'hhb-msg',
				genre: 'hhb-genre',
				icon: 'hhb-icon',
				iconHide: 'hhb-hide',
				msgIcon: 'hhb-msgicon',
				resized: 'hhb-resized',
				orgSize: 'hhb-org-size',
				darkMode: 'hhb-darkmode',
				filterMatch: 'hhb-filter-match',
				filterNotMatch: 'hhb-filter-not-match',
				filterSelected: 'hhb-filter-selected'
			},
			selector: {
				holder: '#hhb-holder',
				header: '#hhb-header',
				button: '#hhb-button',
				genreContainer: '#hhb-genrelist',
				genreContainerGenre: '#hhb-genrelist .hhb-genre',
				genre: '.hhb-genre',
				iconset: '#hhb-iconset',
				iconsetIcon: '#hhb-iconset .hhb-icon',
				icon: '.hhb-icon',
				iconMsgBox: '#hhb-iconset #hhb-msgbox',
				filterMatchIcon: '.hhb-icon.hhb-filter-match',
				filterSelectedIcon: '#hhb-iconset .hhb-icon.hhb-filter-selected',
				msgIcon: '.hhb-msgicon',
				msgIconResized: '.hhb-msgicon.hhb-resized',
				darkModeBtn: '#hhb-darkmode'
			},
			delay: {
				analyzePlatformIcon: 200,
				analyzeBuiltinIcon: 200,
				activateRebindUIBtn: 1000,
				bindHolderUI: 1000,
				bindButtonUI: 1000,
				detectUI: 60000,
				parseMsg: 50,
				filter: 300
			},
			filter: {
				finder: /(^|)[^ ]+(?!\s)$/,
				minLength: 1,
				pageSize: 10
			},
			limit: {
				msgIconHeight: 60
			},
			supportedPlatform: ['hitbox','twitch','justin'],
			listGenre: [],
			listIcon: [],
			info: {
				name: 'HihiBox',
				credit: 'Designed by VannZic, Lemon\nResearched by 希治閣, 小維',
				version: 'v1.6.0',
				lastUpdate: 'Last Updated on 2014-03-14'
			}
		};
		var _settings = $.extend(_defaultSettings, settings);
		
		var _this = this;
		_this.debug = _settings.debug;
		_this.id = _settings.id;
		_this.class = _settings.class;
		_this.selector = _settings.selector;
		_this.delay = _settings.delay;
		_this.filter = _settings.filter;
		_this.limit = _settings.limit;
		_this.supportedPlatform = _settings.supportedPlatform;
		_this.listGenre = _settings.listGenre;
		_this.listIcon = _settings.listIcon;
		_this.info = _settings.info;
		_this.defaultGenre = _settings.defaultGenre;
		_this.env = {
			hasjQuery: false,
			platform: '',
			builtinIconLoaded: false,
			platformIconLoaded: false
		};
		_this.retryCount = {
			analyzePlatformIcon: 0,
			analyzeBuiltinIcon: 0,
			activateRebindUIBtn: 0,
			bindHolderUI: 0,
			bindButtonUI: 0,
			detectUI: 0
		};
		_this.platformObj = null;
		_this.listParse = [];
		_this.listLookup = {};
		_this.isFiltering = false;
		_this.timerFilter = null;
		
		_this._platformObj = {
			hitbox: function() {
				var _this = this;
				_this.id = 'hitbox';
				_this.class = {
					darkMode: 'hhb-darkmode'
				};
				_this.selector = {
					darkModeAcceptor: 'body',
					showChatBtn: '.showChat',
					holderContainer: '.chatContent',
					buttonContainer: '.chatInput',
					msgBox: '#chatInput',
					newMsg: '.message.ng-binding:not(.hhb-msg)',
					timestampsBox: '#timestampsBox'
				};
				_this.initialize = function() {	$('body').addClass('hhb-pf-hitbox'); };
				_this.getHolderContainer = function() {	return $(_this.selector.holderContainer);	};
				_this.getButtonContainer = function() {	return $(_this.selector.buttonContainer);	};
				_this.genHolder = function(idObj,infoObj) {
					return $('<div id="'+idObj.holder+'">'+
							'<div id="'+idObj.header+'">'+
							'<a href="http://bit.ly/hihiboxhbtv" target="_new"><div class="icon hhb" title="Website"></div></a>'+
							'<a href="https://www.facebook.com/hihiboxhbtv" target="_new"><div class="icon fb" title="Facebook Page"></div></a>'+
							'<div id="'+idObj.darkModeBtn+'">Dark Mode</div>'+
							'<span class="name" title="'+infoObj.credit+'">'+infoObj.name+'</span>'+
							'<span class="version" title="'+infoObj.lastUpdate+'">'+infoObj.version+'</span></div>'+
							'<div id="'+idObj.genreContainer+'"></div>'+
							'<div id="'+idObj.iconset+'"></div>'+
							'</div>')
				};
				_this.genToggleButton = function(id) {
					return $('<div id="'+id+'" class="icon-cog hoverG2" title="HihiBox"></div>');
				};
				_this.displaytoggleButton = function() {};
				_this.getShowChatBtn = function() {	return $(_this.selector.showChatBtn);	};
				_this.toggleDarkMode = function(act) {
					if (act == 'dark') {
						if (!$(_this.selector.darkModeAcceptor).hasClass(_this.class.darkMode)) {
							$(_this.selector.darkModeAcceptor).addClass(_this.class.darkMode);
						}
						$(_this.selector.darkModeBtn).text('Light Mode');
					} else if (act == 'light') {
						if ($(_this.selector.darkModeAcceptor).hasClass(_this.class.darkMode)) {
							$(_this.selector.darkModeAcceptor).removeClass(_this.class.darkMode);
						}
						$(_this.selector.darkModeBtn).text('Dark Mode');
					} else {
						if ($(_this.selector.darkModeAcceptor).hasClass(_this.class.darkMode)) {
							_this.toggleDarkMode('light');
						} else {
							_this.toggleDarkMode('dark');
						}
					}
				};
				_this.toggleTimestamps = function(act) {
					var scope = angular.element($(_this.selector.timestampsBox)).scope();
					if (act == 'toggle') {
						scope.$apply(function(){	scope.timestamps = !scope.timestamps;	});
					} else if (act == 'show') {
						scope.$apply(function(){	scope.timestamps = true;	});
					} else {
						scope.$apply(function(){	scope.timestamps = false;	});
					}
				};
				_this.getPlatformIcon = function() {
					var list = [], tgenre = [].concat('HBTV');
					if (emotify) {
						var emoticons = emotify.emoticons();
						for (var key in emoticons) {
							var emo = emoticons[key].concat();
							var ticon = emo.shift();
							var ttitle = emo.shift();
							var tcode = [];
							tcode = tcode.concat(htmlDecode(key));							
							while (acode = emo.shift()) {
								tcode = tcode.concat(($.inArray(acode,tcode) < 0) ? [] : htmlDecode(acode));
							}
							list.push({
								code: tcode,
								icon: ticon,
								genre: tgenre
							});
						}
					}
					return list;
				};
				_this.injectIcon = function(iconlist,_hhb) {
					var iconlist = [].concat(iconlist);
					var list = [];
					var count = 0;
					while (icon = iconlist.shift()) {
						var code = [].concat(icon.code);
						var key = htmlEncode(code[0]);
						if ($.inArray(key,list) < 0) {
							var item = [].concat(icon.icon,code.join(", ").replace(/(<([^>]+)>)/ig,'').replace(/, $/,''));
							item.width = (icon.width > 0) ? icon.width : 0;
							item.height = (icon.height > 0) ? icon.height : 0;
							while (tcode = code.shift()) {
								item.push(tcode);
							}
							list[key] = item;
							count++;
						}
					}
					if (count > 0) {
						var classMsgIcon = _hhb.class.msgIcon,
							classResized = _hhb.class.resized
							limitHeight = _hhb.limit.msgIconHeight;
						// Re-define window.emotify
						window.emotify=function(e){var t,n,r={},i=[];t=function(t,s){s=s||function(e,t,n,r,i,s){t=t.replace(/"/g,"&quot;").replace(/</g,"&lt;");return'<img src="'+e+'" title="'+t+'" class="'+classMsgIcon+(r>limitHeight?" "+classResized:"")+'"/>'};setTimeout(function(){e.bindResizer()},50);return t.replace(n,function(e,t,n){var o=0,u=n,a=r[n];if(!a){while(o<i.length&&!i[o].regexp.test(n)){o++}u=i[o].name;a=r[u]}return a?t+s(a[0],a[1],a.width,a.height,u,n):e})};t.emoticons=function(){var e=Array.prototype.slice.call(arguments),t=typeof e[0]==="string"?e.shift():"",s=typeof e[0]==="boolean"?e.shift():false,o=e[0],u,a=[],f,l,c;if(o){if(s){r={};i=[]}for(u in o){r[u]=o[u];r[u][0]=t+r[u][0]}for(u in r){if(r[u].length>2){f=r[u].slice(2).concat(u);l=f.length;while(l--){f[l]=f[l].replace(/(\W)/g,"\\$1")}c=f.join("|");i.push({name:u,width:r[u].width,height:r[u].height,regexp:new RegExp("^"+c+"$")})}else{c=u.replace(/(\W)/g,"\\$1")}a.push(c)}n=new RegExp("(^|\\s)("+a.join("|")+")(?=(?:$|\\s))","g")}return r};return t}(_hhb);
						emotify.emoticons(true,list);
					}
					return count;
				},
				_this.getNewMsg = function() {	return $(_this.selector.newMsg);	};
				_this.getMsgInput = function() {	return $(_this.selector.msgBox).val();	};
				_this.insertText = function(text) {	_this.replaceText(text);	};
				_this.replaceText = function(text,reReplace) {
					text = text+' ';
					var $msgBox = $(_this.selector.msgBox);
					if ($msgBox.length > 0) {
						var txtarea = $msgBox[0];
						var scrollPos = txtarea.scrollTop;
						var strPos = 0;
						var strPosE = 0;
						if (reReplace instanceof RegExp) {
							txtarea.value = txtarea.value.replace(reReplace,'');
						}
						var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
							"ff" : (document.selection ? "ie" : false ) );
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							var tlength = range.text.length;
							range.moveStart ('character', -txtarea.value.length);
							strPos = range.text.length-tlength;
							strPosE = range.text.length;
						} else if (br == "ff") {
							strPos = txtarea.selectionStart;
							strPosE = txtarea.selectionEnd;
						}

						var front = (txtarea.value).substring(0,strPos);  
						var back = (txtarea.value).substring(strPosE,txtarea.value.length); 
						txtarea.value=front+text+back;
						strPos = strPos + text.length;
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							range.moveStart ('character', strPos);
							range.moveEnd ('character', 0);
							range.select();
						} else if (br == "ff") {
							txtarea.selectionStart = strPos;
							txtarea.selectionEnd = strPos;
							txtarea.focus();
						}
						txtarea.scrollTop = scrollPos;
						
						// update angular
						var scope = angular.element($msgBox).scope();
						scope.$apply(function(){
							scope.$parent.msgTxt = txtarea.value;
						});
					}
				}
			},
			twitch: function() {
				var _this = this;
				_this.id = 'twitch';
				_this.class = {
					darkMode: 'hhb-darkmode'
				};
				_this.selector = {
					darkModeAcceptor: 'body',
					showChatBtn: 'a.button-simple.primary',
					holderContainer: '.chat-messages',
					buttonContainer: '.chat-option-buttons',
					msgBox: 'textarea[placeholder="Chat about this channel"]',
					newMsg: '.message:not(.hhb-msg)',
					timestampsBox: '.chat-menu-content .ember-checkbox'
				};
				_this.initialize = function() {	$('body').addClass('hhb-pf-twitch'); };
				_this.getHolderContainer = function() {	return $(_this.selector.holderContainer);	};
				_this.getButtonContainer = function() {	return $(_this.selector.buttonContainer);	};
				_this.genHolder = function(idObj,infoObj) {
					return $('<div id="'+idObj.holder+'">'+
							'<div id="hhb-header">'+
							'<a href="http://bit.ly/hihiboxhbtv" target="_new"><div class="icon hhb" title="Website"></div></a>'+
							'<a href="https://www.facebook.com/hihiboxhbtv" target="_new"><div class="icon fb" title="Facebook Page"></div></a>'+
							'<div id="'+idObj.darkModeBtn+'">Dark Mode</div>'+
							'<span class="name" title="'+infoObj.credit+'">'+infoObj.name+'</span>'+
							'<span class="version" title="'+infoObj.lastUpdate+'">'+infoObj.version+'</span></div>'+
							'<div id="'+idObj.genreContainer+'"></div>'+
							'<div id="'+idObj.iconset+'"></div>'+
							'</div>')
				};
				_this.genToggleButton = function(id) {
					return $('<button id="'+id+'" class="button-simple light tooltip" original-title="HihiBox"></div>');
				};
				_this.displaytoggleButton = function() {
					var btnc = $('.chat-option-buttons button').length;
					var btnw = 30;
					
					$(".send-chat-button").css("left", (btnw*btnc)+"px");
				};
				_this.getShowChatBtn = function() {	return $(_this.selector.showChatBtn);	};
				_this.toggleDarkMode = function(act) {
					if (act == 'dark') {
						if (!$(_this.selector.darkModeAcceptor).hasClass(_this.class.darkMode)) {
							$(_this.selector.darkModeAcceptor).addClass(_this.class.darkMode);
						}
						$(_this.selector.darkModeBtn).text('Light Mode');
					} else if (act == 'light') {
						if ($(_this.selector.darkModeAcceptor).hasClass(_this.class.darkMode)) {
							$(_this.selector.darkModeAcceptor).removeClass(_this.class.darkMode);
						}
						$(_this.selector.darkModeBtn).text('Dark Mode');
					} else {
						if ($(_this.selector.darkModeAcceptor).hasClass(_this.class.darkMode)) {
							_this.toggleDarkMode('light');
						} else {
							_this.toggleDarkMode('dark');
						}
					}
				};
				_this.toggleTimestamps = function(act) {
					/*
					var scope = angular.element($(_this.selector.timestampsBox)).scope();
					if (act == 'toggle') {
						scope.$apply(function(){	scope.timestamps = !scope.timestamps;	});
					} else if (act == 'show') {
						scope.$apply(function(){	scope.timestamps = true;	});
					} else {
						scope.$apply(function(){	scope.timestamps = false;	});
					}
					*/
				};
				_this.getNewMsg = function() {	return $(_this.selector.newMsg);	};
				_this.getMsgInput = function() {	return $(_this.selector.msgBox).val();	};
				_this.insertText = function(text) {	_this.replaceText(text);	};
				_this.replaceText = function(text,reReplace) {
					text = text+' ';
					var $msgBox = $(_this.selector.msgBox);
					if ($msgBox.length > 0) {
						var txtarea = $msgBox[0];
						var scrollPos = txtarea.scrollTop;
						var strPos = 0;
						if (reReplace instanceof RegExp) {
							txtarea.value = txtarea.value.replace(reReplace,'');
						}
						var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ? 
							"ff" : (document.selection ? "ie" : false ) );
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							strPos = range.text.length;
						}
						else if (br == "ff") strPos = txtarea.selectionStart;

						var front = (txtarea.value).substring(0,strPos);  
						var back = (txtarea.value).substring(strPos,txtarea.value.length); 
						txtarea.value=front+text+back;
						strPos = strPos + text.length;
						if (br == "ie") { 
							txtarea.focus();
							var range = document.selection.createRange();
							range.moveStart ('character', -txtarea.value.length);
							range.moveStart ('character', strPos);
							range.moveEnd ('character', 0);
							range.select();
						}
						else if (br == "ff") {
							txtarea.selectionStart = strPos;
							txtarea.selectionEnd = strPos;
							txtarea.focus();
						}
						txtarea.scrollTop = scrollPos;
						/*
						// update angular
						var scope = angular.element($msgBox).scope();
						scope.$apply(function(){
							scope.$parent.msgTxt = txtarea.value;
						});*/
					}
				}
			},
		};
		_this.debugMsg = function() {
			var _this = this;
			if (!_this.debug) return;
			if (!window.console) return;
			var args = Array.prototype.slice.apply(arguments);
			args.unshift("[HihiBox]");
			console.log.apply(console,args);
		};
		_this.envCheck = function() {
			var _this = this;
			_this.debugMsg('Detecting Platform...');
			_this.env.hasjQuery = (!(typeof $ == 'undefined'));
			var url = document.URL.toLowerCase();
			_this.env.platform = (url.match("^http:\/\/[^\/]*hitbox\.tv\/") ? 'hitbox' :
									(url.match("^http:\/\/[^\/]*twitch\.tv\/") ? 'twitch' : 
										(url.match("^http:\/\/[^\/]*justin\.tv\/") ? 'justin':	'')
									)
								).toLowerCase();
			_this.env.platform = (($.inArray(_this.env.platform,_this.supportedPlatform) >= 0) ? _this.env.platform : '');
			_this.env.platform = ((_this._platformObj[_this.env.platform]) ? _this.env.platform : '');
			if (_this.env.platform!='') {
				_this.platformObj = new _this._platformObj[_this.env.platform];
				_this.debugMsg('Detected [',_this.env,']');
				_this.initialize();
			} else {
				_this.debugMsg('Platform not detected! Initialization aborted!');
			}
		};
		_this.initialize = function() {
			var _this = this;
			_this.debugMsg('Initalizing...');
			_this.analyzeBuiltinIcon();
			_this.platformObj.initialize();
			_this.detectUI();
			_this.initializeHotkey();
			_this.debugMsg('Initalized');
		};
		_this.injectIcon = function() {
			var _this = this;
			if (_this.env.builtinIconLoaded && _this.env.platformIconLoaded) {
				_this.debugMsg('Injecting Icon...');
				var count = _this.platformObj.injectIcon(_this.listParse,_this);
				if (count > 0) {
					_this.debugMsg('Injected Icon [I:',count,']');
				} else {
					_this.debugMsg('Injected Icon Failed!');
				}
			}
		};
		_this.analyzeBuiltinIcon = function() {
			var _this = this;
			if (_this.retryCount.analyzeBuiltinIcon > 0) {
				_this.debugMsg('Analyzing Built-in Icon Retry...[ R:',_this.retryCount.analyzeBuiltinIcon,']');
			} else {
				_this.debugMsg('Analyzing Built-in Icon...');
			}
			var iconlist = _this.listIcon;
			if (!_this.analyzeIcon(iconlist)) {
				if (_this.retryCount.analyzeBuiltinIcon < 30) {
					setTimeout(function() { _this.analyzeBuiltinIcon(); },_this.delay.analyzeBuiltinIcon);
					_this.retryCount.analyzeBuiltinIcon++;
				} else {
					_this.debugMsg('Analyzing Built-in Icon Failed!');
				}
				return;
			}
			_this.env.builtinIconLoaded = true;
			_this.analyzePlatformIcon();
			_this.injectIcon();
		};
		_this.analyzePlatformIcon = function() {
			var _this = this;
			if (_this.retryCount.analyzePlatformIcon > 0) {
				_this.debugMsg('Analyzing Platform Icon Retry...[ R:',_this.retryCount.analyzePlatformIcon,']');
			} else {
				_this.debugMsg('Analyzing Platform Icon...');
			}
			var iconlist = _this.platformObj.getPlatformIcon();
			var analyzediconlist = _this.analyzeIcon(iconlist);
			if (!analyzediconlist) {
				if (_this.retryCount.analyzePlatformIcon < 30) {
					setTimeout(function() { _this.analyzePlatformIcon(); },_this.delay.analyzePlatformIcon);
					_this.retryCount.analyzePlatformIcon++;
				} else {
					_this.debugMsg('Analyzing Platform Icon Failed!');
				}
				return;
			}
			_this.listIcon = _this.listIcon.concat(analyzediconlist);
			_this.env.platformIconLoaded = true;
			_this.bindIconList();	// list all HihiBox icon
			_this.injectIcon();
		};
		_this.analyzeIcon = function(iconlist) {
			var _this = this;
			var genreOther = 'Other';
			if (!(iconlist && iconlist.length > 0)) return false;
			var analyzediconlist = [];
			// Check if code is duplicated
			var codeIsDuplicated = function(code) {
				var ncode = [].concat(code);
				for (idx in ncode) if (_this.listLookup[ncode[idx]]) return true;
				return false;
			};
			
			$.each(iconlist,function(idx,obj) {
				// analyze Icon
				var code = [].concat(obj.code);
				if (codeIsDuplicated(code)) return;
				for (idx in code) _this.listLookup[code[idx]] = obj;
				
				var icon = obj.icon;
				var genre = [].concat((obj.genre) ? obj.genre : genreOther);
				var title = code.join(", ").replace(/(<([^>]+)>)/ig,'').replace(/, $/,'');
				var img = '<img src="'+icon+'" title="'+title+'" class="'+_this.class.msgIcon+((obj.height > _this.limit.msgIconHeight) ? ' '+_this.class.resized : '')+'"/>';
				var re = "";
				$.each(code,function(idx2,code2) {
					var isTag = code2.match(/^<[^>]+>$/g);
					re += (re!="" ? '|' : '')+code2.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")+(isTag ? '' : '(?![^<]*>|[^<>]*<\/)');
				});
				var regex = new RegExp(re,'g');
				obj.genre = genre;
				obj.title = title;
				obj.regex = regex;
				obj.img = img;
				
				if (_this.listGenre[_this.listGenre.length-1] == genreOther) {
					_this.listGenre.pop();
				}
				// add to genre list
				$.each(genre,function(idx3,iconGenre) {
					var cg = 0;
					if (iconGenre != genreOther) {
						if (defaultGenre=='') defaultGenre = iconGenre;
						$.each(_this.listGenre,function(idx4,genrei) {
							if (genrei == iconGenre) cg++;
						});
						if (cg == 0) _this.listGenre.push(iconGenre);
					}
				});
				
				// add to parse list
				_this.listParse.push(obj);
				// add to new icon list
				analyzediconlist.push(obj);
			});
			
			if ($.inArray(genreOther,_this.listGenre) < 0) {
				_this.listGenre.push(genreOther);
			}
			_this.listParse.sort(function(a,b) { return b.code[0].length-a.code[0].length; });
			
			_this.retryCount.analyzeIcon = 0;
			
			_this.bindGenreList();	// list all HihiBox Genre
			_this.bindIconList();	// list all HihiBox icon
			
			_this.debugMsg('Analyzed [ T:',iconlist.length,', G:',_this.listGenre.length,', P:',_this.listParse.length,']');
			return analyzediconlist;
		};
		_this.detectUI = function() {
			var _this = this;
			if (_this.listParse.length > 0) {
				_this.debugMsg('Detecting UI...');
				var $holder = $(_this.selector.holder);
				var $button = $(_this.selector.button);
				
				if ($holder.length > 0 && $button.length > 0) {
					_this.retryCount.detectUI = 0;
				} else if (	_this.retryCount.bindHolderUI == 0 &&
							_this.retryCount.bindButtonUI == 0) {
					_this.debugMsg('UI Not Detected...');
					_this.bindUI();
				}
			}
			_this.retryCount.detectUI++;
			setTimeout(function() { _this.detectUI(); },_this.delay.detectUI);
		};
		_this.bindUI = function() {
			var _this = this;
			_this.debugMsg('Binding UI...');
			_this.activateRebindUIBtn();
			_this.bindHolderUI();
			_this.bindButtonUI();
		};
		_this.activateRebindUIBtn = function() {
			var _this = this;
			var $showChatBtn = _this.platformObj.getShowChatBtn();
			if ($showChatBtn.length > 0) {
				if (!$showChatBtn.hasClass(_this.class.inited)) {
					$showChatBtn.click(function() {
						_this.bindUI();
					}).addClass(_this.class.inited);
					_this.debugMsg('Activated Rebind UI Button');
				}
			} else {
				setTimeout(function() { _this.activateRebindUIBtn(); },_this.delay.activateRebindUIBtn);
				_this.retryCount.activateRebindUIBtn++;
				_this.debugMsg('Activating Rebind UI Button Retry...[ R:',_this.retryCount.activateRebindUIBtn,']');
			}
		};
		_this.bindGenreList = function() {
			var _this = this;
			var palGenre = $(_this.selector.genreContainer).empty();
			if (!palGenre.length > 0) return;
			$.each(_this.listGenre,function(idx,obj) {
				palGenre.append(
					$('<div class="'+_this.class.genre+'" hhb-genre="'+obj+'">'+obj+'</div>')
						.data('hhb-genre',obj)
						.click(function() {
							var genre = $(this).data('hhb-genre');
							_this.selectGenre(genre);
						})
				);
			});
			_this.debugMsg('Binded Genre List [G:',_this.listGenre.length,']');
		};
		_this.bindIconList = function() {
			var _this = this;
			var palIconset = $(_this.selector.iconset).empty();
			if (!palIconset.length > 0) return;
			palIconset.append($('<div id="'+_this.id.iconMsgBox+'">-</div>'));
			$.each(_this.listIcon,function(idx,obj) {
				palIconset.append(
					$('<div class="'+_this.class.icon+'" hhb-code="'+obj.code[0]+'" hhb-genre="'+obj.genre.join(' ')+'">'+obj.img+'</div>')
						.data('hhb-code',obj.code.join(' '))
						.click(function() {	_this.insertIcon($(this)); })
						.error(function() {	$(this).hide(0); _this.showIconMsg(); })
				);
			});
			_this.debugMsg('Binded Icon List [I:',_this.listIcon.length,']');
			_this.selectGenre(_this.defaultGenre);	// select default genre
		};
		_this.showIconMsg = function() {
			var _this = this;
			var $icon = $(_this.selector.iconsetIcon);
			var $sicon = $icon.filter(':visible');
			var i=$icon.length, si=$sicon.length;
			var $iconMsgBox = $(_this.selector.iconMsgBox);
			if (si > 0) 
				if (_this.isFiltering) $iconMsgBox.text(['Filtering...( ',si,'/',i,' )'].join('')).show()
				else $iconMsgBox.hide()
			else $iconMsgBox.text('Icon not found').show();
		};
		_this.bindHolderUI = function() {
			var _this = this;
			var $holderCon = _this.platformObj.getHolderContainer();
			if ($holderCon.length) {
				var $holder = $(_this.selector.holder);
				if (!$holder.length > 0) {
					var palHolder = _this.platformObj.genHolder(_this.id,_this.info).hide();
					$holderCon.append(palHolder);
					
					_this.bindGenreList();	// list all HihiBox Genre
					_this.bindIconList();	// list all HihiBox icon
					
					// Activate dark mode button
					$(_this.selector.darkModeBtn).click(function() {
						_this.toggleDarkMode('toggle');
					});
					_this.toggleDarkMode('light');
					_this.debugMsg('Activated Dark/Light Mode');
					
					// Show timestamps
					_this.toggleTimestamps('show');
					
					_this.retryCount.bindHolderUI = 0;
					_this.debugMsg('Binded Holder UI [G:',_this.listGenre.length,', I:',_this.listIcon.length,']');
				}
			} else {
				setTimeout(function() { _this.bindHolderUI(); },_this.delay.bindHolderUI);
				_this.retryCount.bindHolderUI++;
				_this.debugMsg('Binding Holder UI Retry...[ R:',_this.retryCount.bindHolderUI,']');
			}
		};
		_this.bindButtonUI = function() {
			var _this = this;
			var $button = $(_this.selector.button);
			
			var $buttonCon = _this.platformObj.getButtonContainer();
			if ($buttonCon.length > 0) {
				var palButton = _this.platformObj.genToggleButton(_this.id.button)
					.click(function() {
						_this.toggleHolder('toggle');
					});
				$buttonCon.append(palButton);
				_this.platformObj.displaytoggleButton();
				_this.retryCount.bindButtonUI = 0;
				_this.debugMsg('Binded Toggle Button UI');
			} else {
				setTimeout(function() { _this.bindButtonUI(); },_this.delay.bindButtonUI);
				_this.retryCount.bindButtonUI++;
				_this.debugMsg('Binding Toggle Button UI Retry...[ R:',_this.retryCount.bindButtonUI,']');
			}
		};
		_this.toggleHolder = function(act,keepFilter) {
			var _this = this;
			var $holder = $(_this.selector.holder);
			var $iconset = $(_this.selector.iconset).scrollTop(0);
			if (!keepFilter) {
				$iconset.find(_this.selector.icon).removeClass([_this.class.filterMatch,_this.class.filterNotMatch,_this.class.filterSelected].join(' '));
			}
			if (act == 'toggle') {
				$holder.toggle(0);
			} else if (act == 'show') {
				$holder.show(0);
			} else {
				$holder.hide(0);
			}
			var $holder = $(_this.selector.holder),
				$iconMsgBox = $(_this.selector.iconMsgBox)
			var iconsetHeight = 
				$holder.innerHeight()
				-$(_this.selector.header).outerHeight()
				-$(_this.selector.genreContainer).outerHeight();
			$(_this.selector.iconset).outerHeight(iconsetHeight);
			_this.showIconMsg();
		};
		_this.toggleDarkMode = function(act) {
			var _this = this;
			_this.platformObj.toggleDarkMode(act);
		};
		_this.selectGenre = function(genre) {
			var _this = this;
			var $icon = $(_this.selector.iconsetIcon).removeClass(_this.class.iconHide);
			var $hicon = $icon.not(_this.selector.icon+'[hhb-genre~="'+genre+'"]').addClass(_this.class.iconHide);
			$(_this.selector.genreContainerGenre).removeClass(_this.class.active)
				.filter(_this.selector.genre+'[hhb-genre="'+genre+'"]').addClass(_this.class.active);
			var csicon = $icon.length-$hicon.length;
			_this.showIconMsg();
			_this.debugMsg('Selected Genre [G:',genre,',I:',csicon,']');
		};
		_this.insertIcon = function(obj) {
			var _this = this;
			var msg = _this.platformObj.getMsgInput();
			var cidx = 0;
			if (msg) {
				if (msg.length >= _this.filter.minLength) {
					var matches = msg.match(_this.filter.finder);
					var codehead = (matches) ? matches[0].toLowerCase().trim() : '';
					var recodehead = codehead.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
					var clist = obj.data('hhb-code').toLowerCase().split(' ');
					for (idx in clist) if (clist[idx].match(new RegExp('^'+recodehead))) cidx=idx;
				}
			}
			var code = obj.data('hhb-code').split(' ')[cidx];
			_this.insertText(code);
			var tgenre = obj.attr('hhb-genre').replace(' Recent','');
			obj.attr('hhb-genre',tgenre+' Recent');
			
			// Large icon can only be inserted once in a time
			if (obj.find(_this.selector.msgIcon).hasClass(_this.class.resized)) {
				_this.toggleHolder('hide');
			}
			_this.debugMsg('Inserted Icon Code [',code,']');
		};
		_this.toggleTimestamps = function(act) {
			var _this = this;
			_this.platformObj.toggleTimestamps(act);
		};
		_this.insertText = function(text) {
			var _this = this;
			if (_this.isFiltering) {
				_this.platformObj.replaceText(text,_this.filter.finder);
				_this.isFiltering = false;
			} else {
				_this.platformObj.insertText(text);
			}
		};
		_this.selectIcon = function(obj) {
			var _this = this;
			var selected = $(_this.selector.filterSelectedIcon);
			selected.removeClass(_this.class.filterSelected);
			obj.addClass(_this.class.filterSelected);
			var iconset = $(_this.selector.iconset);
			iconset.scrollTop(obj.offset().top-iconset.offset().top+iconset.scrollTop()-5-$(_this.selector.iconMsgBox).outerHeight());
		};
		_this.moveIconSelection = function(direction,step) {
			var _this = this;
			var org = $(_this.selector.filterSelectedIcon);
			var nicon = (direction>0) ? org.nextAll(_this.selector.filterMatchIcon) : org.prevAll(_this.selector.filterMatchIcon);
			nicon = (nicon.length > step) ? nicon.slice(step-1,step) : nicon.last();
			if (nicon.length > 0) {
				_this.selectIcon(nicon);
			}
		};
		_this.selectIconNext = function() {
			var _this = this;
			_this.moveIconSelection(1,1);
		};
		_this.selectIconNextPage = function() {
			var _this = this;
			_this.moveIconSelection(1,_this.filter.pageSize);
		};
		_this.selectIconLast = function() {
			var _this = this;
			_this.moveIconSelection(1,Number.MAX_VALUE);
		};
		_this.selectIconPrev = function() {
			var _this = this;
			_this.moveIconSelection(-1,1);
		};
		_this.selectIconPrevPage = function() {
			var _this = this;
			_this.moveIconSelection(-1,_this.filter.pageSize);
		};
		_this.selectIconFirst = function() {
			var _this = this;
			_this.moveIconSelection(-1,Number.MAX_VALUE);
		};
		_this.insertSelectedIcon = function(dismiss) {
			var _this = this;
			var selected = $(_this.selector.filterSelectedIcon);
			if (selected.length > 0) {
				var objIcon = selected.first();
				_this.insertIcon(objIcon);
			}
			if (dismiss) {
				_this.toggleHolder('hide');
			}
		};
		_this.filterIcon = function() {
			var _this = this;
			_this.isFiltering = false;
			var msg = _this.platformObj.getMsgInput();
			if (msg) {
				if (msg.length >= _this.filter.minLength) {
					var matches = msg.match(_this.filter.finder);
					var codehead = (matches) ? matches[0].toLowerCase().trim() : '';
					var recodehead = codehead.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
					
					if (recodehead.length >= _this.filter.minLength) {
						var selector = function() { 
							var ism = false, clist = $(this).data('hhb-code').toLowerCase().split(' ');
							for (idx in clist) if (clist[idx].match(new RegExp('^'+recodehead))) return true;
							return false;
						};
						var $icons = $(_this.selector.iconsetIcon);
						$icons.not(selector).removeClass([_this.class.filterMatch,_this.class.filterSelected].join(' ')).addClass(_this.class.filterNotMatch);
						var filter = $icons.filter(selector)
							.removeClass([_this.class.filterNotMatch,_this.class.filterSelected].join(' ')).addClass(_this.class.filterMatch)
						var first = filter.first();
						if (filter.length > 0) {
							_this.selectIcon(first);
							_this.isFiltering = true;
							_this.toggleHolder('show',true);
						} else {
							_this.toggleHolder('hide',true);
						}
						_this.showIconMsg();
						_this.debugMsg('Filtered [C:',codehead,',F:',filter.length,']');
					}
				}
				if (!_this.isFiltering) {
					_this.toggleHolder('hide');
				}
			} else {
				_this.toggleHolder('hide');
			}
		};
		_this.initializeHotkey = function() {
			var _this = this;
			$(document).keydown(function(e) {
				if ($(_this.selector.holder).is(':visible')) {
					if (e.which == 9 || e.which == 13) {	/* Press [Tab], [Enter] */
						_this.insertSelectedIcon(true);
						return false;
					} else if (e.which == 45) {	/* Press [Insert] */
						_this.insertSelectedIcon();
						return false;
					} else if (e.which == 27) {	/* Press [Escape] */
						_this.toggleHolder('hide');
						return false;
					} else if (e.which == 33) {	/* Press [PageUp] */
						_this.selectIconPrevPage();
						return false;
					} else if (e.which == 34) {	/* Press [PageDown] */
						_this.selectIconNextPage();
						return false;
					} else if (e.which == 36) {	/* Press [Home] */
						_this.selectIconFirst();
						return false;
					} else if (e.which == 35) {	/* Press [End] */
						_this.selectIconLast();
						return false;
					} else if (e.which == 37) {	/* Press [Left] */
						_this.selectIconPrev();
						return false;
					} else if (e.which == 39) {	/* Press [Right] */
						_this.selectIconNext();
						return false;
					}
				}
			}).keyup(function(e) {
				if ((e.which == 8 || e.which == 32 || e.which == 46) ||	/* backspace, space, delete */
					(e.which >= 48 && e.which <= 90) ||	/* 0-9, a-z */
					(e.which >= 96 && e.which <= 111) || /* numpad */
					(e.which >= 186 && e.which <= 222) /* symbol */
				) {
					if (_this.timerFilter) clearTimeout(_this.timerFilter);
					_this.timerFilter = setTimeout(function() {
						_this.filterIcon();
					},_this.delay.filter);
				}
			});
		};
		_this.parseMsg = function(){
			var _this = this;
			var msgs = _this.platformObj.getNewMsg();
			
			if (msgs.length > 0) {
				var count = 0;
				msgs.each(function() {
					spanContent = $(this).html();
					
					/* Icon Replace */
					$.each(_this.listParse,function(idx,obj) {
						var cm = spanContent.match(obj.regex);
						count += (cm) ? cm.length : 0;
						spanContent = spanContent.replace(obj.regex, obj.img);
					});
					
					$(this).empty()
						.html(spanContent)
						.addClass(_this.class.checkedMsg)
						.children(_this.selector.msgIconResized)
							.click(function() {
								if ($(this).hasClass(_this.class.orgSize)) {
									$(this).removeClass(_this.class.orgSize);
								} else {
									$(this).addClass(_this.class.orgSize);
								}
							});
				});
				_this.debugMsg('Messages Parsed [M:',msgs.length,',R:',count,']');
			}
			setTimeout(function() { _this.parseMsg(); },_this.delay.parseMsg);
		};
		_this.bindResizer = function() {
			var _this = this;
			var msgs = _this.platformObj.getNewMsg();
			if (msgs.length > 0) {
				var count = 0;
				var bicount = 0;
				msgs.each(function() {
					bicount = $(this)
						.addClass(_this.class.checkedMsg)
						.children(_this.selector.msgIconResized)
							.click(function() {
								$(this).toggleClass(_this.class.orgSize);
							}).length;
				});
				_this.debugMsg('Messages Parsed [M:',msgs.length,',R:',bicount,']');
			}
		}
		
		_this.envCheck();
		
		return this;
	};
	
	$(document).ready(function() {
		var timer = setInterval(function() {
			console.log(typeof window.iconListLoaded);
			if (window.iconListLoaded) {
				var hhb = 	new HihiBox({
									info: window.info,
									listGenre: window.listGenre,
									listIcon: window.listIcon,
									defaultGenre: window.defaultGenre,
									supportedPlatform: ['hitbox']
								});
				console.log('[HihiBox]','Created',hhb);
				clearInterval(timer);
			} else {
				console.log('[HihiBox] Retry Create HihiBox');
			}
		},1000);
		
		// Google Analytics
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-48929186-1', 'hihiboxhbtv.github.io');
		ga('send', 'pageview');

	});
}(jQuery,window,document));