# コメント追加方法
# 'ここに好きな文字をいれる',
NG_WORD_LIST = [
  '取关',
  'BV',
  '拉黑',
  '控评',
  '呸'
]
var delete = false
if (location.pathname === '/platform/comment/article') {
  var section = document.getElementsByClassName('section-list_wrap')[0]
  var comment_list = section.getElementsByClassName('ci-content')
  comment_list.forEach(function(comment,index){
    if (NG_WORD_LIST.includes(comment.innerText)) {
      section.getElementsByClassName('check-box')[index].click()
      delete = true
    }
  });
  ### 削除
  if (delete) {
    document.getElementsByClassName('bcc-button del bcc-button--default large')[0].click()
    document.getElementsByClassName('bcc-button bcc-button--primary large')[0].click()
  }
}