var classCheckedMsg = 'hhb_msg';
var selectorMsg = ".message.ng-binding";
var refreshIcon = 100;
var refreshInit = 500;
var refreshParse = 200;
var delayFilter = 300;

var isFiltering = false;
var filterSeperator = /([\:\#\[]*?)[^ \;\#\[]*?(?! )$/;
var filterLengthMin = 1;
var filterPageSize = 10;

var timerFilter;

$(document).ready(function() {
	var timerIcon = setInterval(function() {
		if (listIcon) {
			var total = listIcon.length;
			if (total > 0) {
				var loaded = 0;
				$.each(listIcon,function(idx,obj) {
					// parse Icon
					var code = [].concat(obj.code);
					var icon = obj.icon;
					var genre = [].concat((obj.genre) ? obj.genre : 'Others');
					var title = code.join(", ").replace(/(<([^>]+)>)/ig,'').replace(/, $/,'');
					var img = '<img src="'+icon+'" title="'+title+'" class="hhb_msgicon'+(obj.width ? ' resized' : '')+'"'+(obj.width ? ' style="width:'+obj.width+'px;"' : '') +'/>';
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
					
					// add to genre list
					$.each(genre,function(idx3,iconGenre) {
						var cg = 0;
						if (iconGenre != 'Others') {
							if (defaultGenre=='') defaultGenre = iconGenre;
							$.each(listGenre,function(idx4,genrei) {
								if (genrei == iconGenre) cg++;
							});
							if (cg == 0) listGenre.push(iconGenre);
						}
					});
					
					// add to parse list
					listParse.push(obj);
				});
				
				listGenre.push('Others');
				listParse.sort(function(a,b) { return b.code[0].length-a.code[0].length; });
				
				clearInterval(timerIcon);
				console.log('[HihiBox] Icon list loaded. (T: ',total,', G: ',listGenre.length,', P: ',listParse.length,')');
			}
		}
	}, refreshIcon);
	
	var timerInit = setInterval(function() {
		var palChat = $('.chatContent');
		var palInput = $('.chatInput');
		// check object existance
		if (palChat.length > 0 && palInput.length > 0) {
			// create HihiBox object
			var palHolder = $('<div id="hhb_holder">'+
								'<h3 id="hhb_header" title="Designed by VannZic, Lemon">HihiBox</h3>'+
								'<div id="hhb_genre"></div>'+
								'<div id="hhb_iconset"></div>'+
								'</div>').hide();
			var palButton = $('<div id="hhb_button" class="icon-cog hoverG2" title="HihiBox"></div>')
								.click(function() {
									$('#hhb_iconset').scrollTop(0);
									$('#hhb_holder').toggle(0);
								});
			
			// embed HihiBox object
			palChat.append(palHolder);
			palInput.append(palButton);
			
			// list all HihiBox Genre
			var palGenre = $('#hhb_genre');
			$.each(listGenre,function(idx,obj) {
				palGenre.append(
					$('<div class="genre" hhb-genre="'+obj+'">'+obj+'</div>')
						.data('hhb-genre',obj)
						.click(function() {
							var genre = $(this).data('hhb-genre');
							$('#hhb_genre .genre').removeClass('active');
							$(this).addClass('active');
							$('#hhb_iconset .icon').hide(0)
								.filter('.icon[hhb-genre~="'+genre+'"]').show(0);
							console.log('[HihiBox] Genre : ',genre);
						})
				);
			});
			
			// list all HihiBox icon
			var palIconset = $('#hhb_iconset');
			$.each(listIcon,function(idx,obj) {
				palIconset.append(
					$('<div class="icon" hhb-code="'+obj.code[0]+'" hhb-genre="'+obj.genre.join(' ')+'">'+obj.img+'</div>')
						.data('hhb-code',obj.code[0])
						.click(function() {
							console.log('[HihiBox] Icon : ',$(this).data('hhb-code'));
							
							var tmp = $('#chatInput').val();
							if (isFiltering) {
								tmp = tmp.replace(filterSeperator,'');
								isFiltering = false;
							}
							var newMsg = tmp+$(this).data('hhb-code');
							$('#chatInput')
								.focus()
								.val(newMsg);
							var scope = angular.element($("#chatInput")).scope();
							scope.$apply(function(){
								scope.$parent.msgTxt = newMsg;
							});
							var tgenre = $(this).attr('hhb-genre');
							$(this).attr('hhb-genre',tgenre+' Recent');
						})
				);
			});
			
			// select default genre
			$('#hhb_genre .genre[hhb-genre="'+defaultGenre+'"]').trigger("click");
			
			clearInterval(timerInit);
			console.log('[HihiBox] Initialized. (',refreshInit,')');
		}
	}, refreshInit);
	
	// Parse Icon Code
	var timerParser = setInterval(function(){
		var hhb = $(selectorMsg).not('.'.concat(classCheckedMsg));
		
		if (hhb.length > 0) {
			hhb.each(function() {
				spanContent = $(this).html();
				
				/* Icon Replace */
				$.each(listParse,function(idx,obj) {
					spanContent = spanContent.replace(obj.regex, obj.img);
				});
				
				$(this).empty()
					.html(spanContent)
					.addClass(classCheckedMsg)
					.children('.hhb_msgicon.resized')
						.click(function() {
							if ($(this).hasClass('orgSize')) {
								$(this).removeClass('orgSize');
							} else {
								$(this).addClass('orgSize');
							}
						});
			});
			console.log('[HihiBox] Messages Parsed. (',hhb.length,')');
		}
	}, refreshParse);
	
	$(document).keydown(function(e) {
		if (e.which == 13) {	/* Press [Enter] */
			if ($('#hhb_holder').is(':visible')) {
				$('#hhb_iconset .icon').removeClass('hhb-filter-not-match hhb-filter-match hhb-filter-selected');
				$('#hhb_holder').hide(0);
			}
		} else if (e.which == 9) {	/* Press [Tab] */
			if ($('#hhb_holder').is(':visible')) {
				var selected = $('#hhb_iconset .icon.hhb-filter-selected');
				if (selected.length > 0) {
					var msg = $('#chatInput').val();
					var matches = msg.match(filterSeperator);
					var iconhead = (matches) ? matches[0] : '';
					var objIcon = selected.first();
					var tmp = $('#chatInput').val();
					var newMsg = tmp.replace(filterSeperator,'')+objIcon.data('hhb-code')+' ';
					$('#chatInput')
						.focus()
						.val(newMsg);
					var scope = angular.element($("#chatInput")).scope();
					scope.$apply(function(){
						scope.$parent.msgTxt = newMsg;
					});
					var tgenre = objIcon.attr('hhb-genre');
					objIcon.attr('hhb-genre',tgenre+' Recent');
					$('#hhb_iconset .icon').removeClass('hhb-filter-not-match hhb-filter-match hhb-filter-selected');
					$('#hhb_holder').hide(0);
				}
				return false;
			}
		} else if (e.which == 27) {	/* Press [Escape] */
			if ($('#hhb_holder').is(':visible')) {
				$('#hhb_iconset .icon').removeClass('hhb-filter-not-match hhb-filter-match hhb-filter-selected');
				$('#hhb_holder').hide(0);
				return false;
			}
		} else if (e.which == 33) {	/* Press [PageUp] */
			if ($('#hhb_holder').is(':visible')) {
				var org = $('#hhb_iconset .icon.hhb-filter-selected');
				var nicon = org.prevAll('.hhb-filter-match');
				if (nicon.length > 0) {
					nicon = (nicon.length > filterPageSize) ? nicon.slice(filterPageSize-1,filterPageSize) : nicon.last();
					org.removeClass('hhb-filter-selected');
					nicon.addClass('hhb-filter-selected');
				}
				return false;
			}
		} else if (e.which == 34) {	/* Press [PageDown] */
			if ($('#hhb_holder').is(':visible')) {
				var org = $('#hhb_iconset .icon.hhb-filter-selected');
				var nicon = org.nextAll('.hhb-filter-match');
				if (nicon.length > 0) {
					nicon = (nicon.length > filterPageSize) ? nicon.slice(filterPageSize-1,filterPageSize) : nicon.last();
					org.removeClass('hhb-filter-selected');
					nicon.addClass('hhb-filter-selected');
				}
				return false;
			}
		} else if (e.which == 36) {	/* Press [Home] */
			if ($('#hhb_holder').is(':visible')) {
				var org = $('#hhb_iconset .icon.hhb-filter-selected');
				var nicon = org.prevAll('.hhb-filter-match').last();
				if (nicon.length > 0) {
					org.removeClass('hhb-filter-selected');
					nicon.addClass('hhb-filter-selected');
				}
				return false;
			}
		} else if (e.which == 35) {	/* Press [End] */
			if ($('#hhb_holder').is(':visible')) {
				var org = $('#hhb_iconset .icon.hhb-filter-selected');
				var nicon = org.nextAll('.hhb-filter-match').last();
				if (nicon.length > 0) {
					org.removeClass('hhb-filter-selected');
					nicon.addClass('hhb-filter-selected');
				}
				return false;
			}
		} else if (e.which == 37) {	/* Press [Left] */
			if ($('#hhb_holder').is(':visible')) {
				var org = $('#hhb_iconset .icon.hhb-filter-selected');
				var nicon = org.prevAll('.hhb-filter-match').first();
				if (nicon.length > 0) {
					org.removeClass('hhb-filter-selected');
					nicon.addClass('hhb-filter-selected');
				}
				return false;
			}
		} else if (e.which == 39) {	/* Press [Right] */
			if ($('#hhb_holder').is(':visible')) {
				var org = $('#hhb_iconset .icon.hhb-filter-selected');
				var nicon = org.nextAll('.hhb-filter-match').first();
				if (nicon.length > 0) {
					org.removeClass('hhb-filter-selected');
					nicon.addClass('hhb-filter-selected');
				}
				return false;
			}
		}
	}).keyup(function(e) {
		if ((e.which == 8 || e.which == 46) ||	/* backspace , delete */
			(e.which >= 48 && e.which <= 90) ||	/* 0-9, a-z */
			(e.which >= 96 && e.which <= 111) || /* numpad */
			(e.which >= 186 && e.which <= 222) /* symbol */
		) {
			if (timerFilter) clearTimeout(timerFilter);
			timerFilter = setTimeout(function() {
				isFiltering = false;
				var msg = $('#chatInput').val();
				if (msg) {
					if (msg.length >= filterLengthMin) {
						var matches = msg.match(filterSeperator);
						var iconhead = (matches) ? matches[0].toLowerCase().replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&") : '';
						
						if (iconhead.length >= filterLengthMin) {
							var selector = function() { return $(this).data('hhb-code').toLowerCase().match(new RegExp('^'+iconhead)); };
							$('#hhb_iconset .icon').not(selector)
								.removeClass('hhb-filter-match hhb-filter-selected').addClass('hhb-filter-not-match');
							var filter = $('#hhb_iconset .icon').filter(selector)
								.removeClass('hhb-filter-not-match hhb-filter-selected').addClass('hhb-filter-match')
								.first().addClass('hhb-filter-selected');
							if (filter.length > 0) {
								isFiltering = true;
								$('#hhb_holder').show(0);
							} else {
								$('#hhb_holder').hide(0);
							}
							console.log('[HihiBox] Filtered (',filter.length,')');
						}
					}
					if (!isFiltering) {
						$('#hhb_iconset .icon').removeClass('hhb-filter-not-match hhb-filter-match hhb-filter-selected');
						$('#hhb_holder').hide(0);
					}
				} else {
					$('#hhb_iconset .icon').removeClass('hhb-filter-not-match hhb-filter-match hhb-filter-selected');
					$('#hhb_holder').hide(0);
				}
			},delayFilter);
		}
	});
});