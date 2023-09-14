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

hexo.extend.helper.register('newsThisMonth', (site) => {
   var pages = site.posts;

   const currentDate = new Date();
   const currentYear = currentDate.getFullYear();
   const currentMonth = currentDate.getMonth() + 1;

   var recentPosts = 0;
   pages.forEach(element => {
      var postDate = new Date(element.date);

      if (postDate.getFullYear() == currentYear && postDate.getMonth() + 1 == currentMonth)
         recentPosts++;
   });

   return recentPosts;
})