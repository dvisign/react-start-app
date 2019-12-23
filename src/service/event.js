import jQuery from 'jquery';
// 부모돔, 자식 컨트롤 돔, 자식돔 index 
export function overEvent(controllDom, domChild, i) {
  const listEl = jQuery(controllDom + ">" + domChild);
  const targetEl = jQuery(controllDom + ">" + domChild + ":nth-child("+i+")");
  const elseEl = listEl.not(controllDom + ">" + domChild + ":nth-child("+i+")");
  const status = listEl.hasClass("active");
  if (!status) {
    listEl.removeClass("active");
    targetEl.addClass("active");
    elseEl.addClass("native");
  }
}
export function leaveEvent(controllDom, domChild) {
  const listEl = jQuery(controllDom + ">" + domChild);
  listEl.removeClass("active native");
}
export function pagenations(page, index) {
  jQuery("#navList a").removeClass("navActive");
  jQuery("#navList > li:nth-child("+index+") > a").addClass("navActive");
}
export function pageIn(target) {
  jQuery(target).stop().animate({
    "opacity":"1"
  },500);
}
export function pageOut(target) {
  jQuery(target).stop().animate({
    "opacity":"0"
  },500);
}
export function tabNavs(target) {
  var animateStart = false;
  var scrollPos = jQuery(window).scrollTop();
  var targetPos = jQuery(".boardListConts").offset().top;
  var navHeight = jQuery("#mainNavs").height();
  if (scrollPos > targetPos) {
    if (animateStart === false) {
      animateStart = true;
      jQuery(target).css({
        "position":"fixed",
        "top":navHeight+"px"
      })
      animateStart = false;
    }
  }else {
    if (animateStart === false) {
      animateStart = true;
      jQuery(target).css({
        "position":"static",
        "top":"0"
      })
      animateStart = false;
    }
  }
}