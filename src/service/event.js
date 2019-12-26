import jQuery from 'jquery';
import axios from 'axios';
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
  jQuery(".navLists a").removeClass("navActive");
  jQuery(".navLists > li:nth-child("+index+") > a").addClass("navActive");
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
export function fileDownloads(files) {
  return axios.get("/api/",{
    params : {
      "status" :  "download",
      "filename" : files
    }
  })
  .then(response => {
    const result = response.data;
    if (result !== false) {
      window.location.href = "/api/?status=download&filename="+files
    } else {
      alert("죄송합니다. 파일 다운로드에 오류가 있습니다.")
    }
  })
}