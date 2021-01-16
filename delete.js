NG_WORD_LIST = [
  'cat',
  'dog',
]

# コメント管理画面であることをチェックする
#TODO ページのステータスコードを確認 404意外であることを確認
if (location.pathname === '/platform/comment/article') {
  # ページの数だけ
  ## NGワードの数だけ以下を繰り返す
  console.log('delete page');
  ###sectionを取得
  var section = document.getElementsByClassName('section-list_wrap')[0]
  ### コメント一覧を含んだDOMを取得
  var comment_list = section.getElementsByClassName('ci-content')
  ### コメントに正規表現を走らせて削除対象のコメントを判定する
  comment_list.forEach(function(comment,index){
    if (NG_WORD_LIST.includes(comment.innerText)) {
      #チェックボックスにチェックを付ける
      section.getElementsByClassName('check_box')[1].click()  
    }
  });
  ### 判定されたコメントのチェックボックスにチェックを付ける
  ### 削除ボタンを押す
}
