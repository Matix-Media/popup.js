//COPYRIGHT 2020 [c] Matix Media, Inc.
// https://www.matix-media.net
// https://www.github.com/Matix-Media
var wrapping_div=$("<div class='popup-fade-out-area'></div>");var top=$(window).scrollTop();var left=$(window).scrollLeft();function lock_scroll_pos(){top=$(window).scrollTop();left=$(window).scrollLeft();$("body").css("overflow","hidden");$(window).scroll(function(){$(this).scrollTop(top).scrollLeft(left)})}
function unlock_scroll_pos(){$("body").css("overflow","auto");$(window).unbind("scroll")}
function show_popup(popup,speed=300){if(!$(".popup-active")[0]){if(!popup.is(":visible")){popup.addClass("popup-active");popup_html=popup;popup.remove();$("body").wrapInner(wrapping_div);$("body").append(popup_html);popup_html.css("opacity",0).slideDown(speed).animate({opacity:1},{queue:!1,duration:speed});lock_scroll_pos();init_popup_funcs()}}}
function hide_popup(popup,speed=500){if($(".popup-active")[0]){if(popup.is(":visible")){popup.fadeOut(speed);popup.removeClass("popup-active");if($("body").children().hasClass("popup-fade-out-area")){var inner=$(".popup-fade-out-area").html();$("body").html(inner);$("body").append(popup)}
unlock_scroll_pos();init_popup_funcs()}}}
function init_popup_funcs(){$(".open-popup").each(function(){if($($(this).data("popup")).hasClass("popup-window")){$(this).click(function(){target=$($(this).data("popup"));show_popup(target);return!1})}else{console.error("Popup link without popup target found.",[this])}});$(".close-popup").each(function(){if($($(this).data("popup")).hasClass("popup-window")){$(this).click(function(){target=$($(this).data("popup"));hide_popup(target);return!1})}else{console.error("Popup close link without popup target found.",[this])}})}
$(window).on("load",init_popup_funcs)