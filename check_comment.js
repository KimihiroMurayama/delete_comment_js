if (location.pathname === '/platform/comment/article') {
  NG_WORD_LIST = [
    '取关',
    'BV',
    '拉黑',
    '控评',
    '陈睿',
    '抄袭',
    '抄',
    '搬运',
    '搬',
    'biss',
    '油管',
    'YouTube',
    '钱',
    '拷贝',
    '卡卡',
    '汉化',
    '爬',
    '丢',
    '丢脸',
    '抑郁',
    '删',
    '户口',
    '屏控',
    '黑名单',
    '黑心',
    '塞拉斯',
    'b',
    '原作者',
    '仮',
    'える',
    'eru',
    '取关',
    '失望',
    '牢笼',
    '控评',
    '搜索',
    'ctrl',
    '删',
    'baidu',
    '拉黑',
    '恶心',
    '一模一样',
    'Y2b',
    '财 富',
    '锤人',
    '原创',
    '爪',
    'cos',
    '溜',
    '照搬',
    '字幕组',
    '克隆',
    '原作者',
    '复制',
    '油 管',
    '道歉',
    '抗',
    '镜像',
    '贴吧',
    '呕',
    '撤硕',
    '塞拉斯',
    '妮蔻',
    'av90788390',
    'BV1D7411F77U',
    'BV1dE411M71N',
    'BV1W7411C7iS',
    'cv5364492',
    '呸' //ここより上にコメントを追加してください。
    ]
  var set_interval_id = setInterval(deleteNgComment, 1000);
}

function deleteNgComment() {
  if (checkboxs().length > 0) {
    clearInterval(set_interval_id);
    checkNgWord_tmp(comments(), checkboxs())
  }
}

function checkNgWord_tmp(comments, checkboxs) {
  comments.forEach(function(comment,index){
    NG_WORD_LIST.forEach(function(ng_word){
      if(comment.innerText.indexOf(ng_word) > -1) {
        checkboxs[index].click()
      }
    });
  });
}

function checkboxs() {
 return document.getElementsByClassName('check-box')
}

function comments() {
 return document.getElementsByClassName('ci-content')
}
