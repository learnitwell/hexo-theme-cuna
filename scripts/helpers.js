// 获取文章摘要
hexo.extend.helper.register('excerpt', function(content, len) {
  if (!content) {
    return '...';
  }
  // 去除html标签
  content = content.replace(/<[^>]+>/g,"");
  if (content.length > len) {
    return content.substr(0, len) + '...';
  }
  return content.substr(0, len);
});