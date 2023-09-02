'use strict';

hexo.extend.helper.register('postCount', (site) => {
   return site.posts.length;
});