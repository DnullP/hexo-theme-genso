'use strict';

hexo.extend.helper.register('postCount', (site) => {
   return site.posts.length;
});

hexo.extend.helper.register('categoryCount', (site) => {
   return site.categories.length;
});

hexo.extend.helper.register('tagCount', (site) => {
   return site.tags.length;
});