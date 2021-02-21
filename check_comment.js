if (location.pathname === '/platform/comment/article') {
  NG_WORD_LIST = [
    '取关',
    'BV',
    '拉黑',
    '控评',
    '呸'
    ]
  var set_interval_id = setInterval(deleteNgComment, 1000);
}

function deleteNgComment() {
  if (section_list().length > 0) {
    clearInterval(set_interval_id);
    checkNgWord(commentList(), section_list())
    setTimeout(clickDeleteButton(delete_flg),2000); 
  }
}

function checkNgWord(comment_list, section_list) {
  comment_list.forEach(function(comment,index){
    section_list.forEach(function(section){
      if (NG_WORD_LIST.includes(comment.innerText)) {
        section.getElementsByClassName('check-box')[index].click()
      }
    });
  });
}

function section_list() {
 return document.getElementsByClassName('section-list_wrap')
}

function commentList() {
 return document.getElementsByClassName('ci-content')
}