// 获取文章摘要
hexo.extend.helper.register('excerpt', function (content, len) {
  if (!content) {
    return '...';
  }
  // 去除html标签
  content = content.replace(/<[^>]+>/g, "");
  if (content.length > len) {
    return content.substr(0, len) + '...';
  }
  return content.substr(0, len);
});
var autoCompleTime = function(time) {
  if (time >= 10) {
    return time;
  }
  return '0' + time
}
hexo.extend.helper.register('GMT2Str', function (time) {
  var date, str;
  if (!time) {
    date = new Date()
  } else {
    date = new Date(time)
  }
  str = date.getFullYear() + '-' +
    autoCompleTime(date.getMonth() + 1) + '-' +
    autoCompleTime(date.getDate()) + ' ' +
    autoCompleTime(date.getHours()) + ':' +
    autoCompleTime(date.getMinutes()) + ':' +
    autoCompleTime(date.getSeconds())
  return str
})