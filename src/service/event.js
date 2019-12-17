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

// 
export function pagenations(page, index) {
  jQuery("#navList a").removeClass("navActive");
  jQuery("#navList > li:nth-child("+index+") > a").addClass("navActive");
}