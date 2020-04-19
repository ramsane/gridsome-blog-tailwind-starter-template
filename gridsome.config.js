// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    // tailwind css
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js'
      }
    },

    // for Tags and Authors 
    // {
    //   use: '@gridsome/vue-remark',
    //   options: {
    //     typeName: 'Tag',
    //     baseDir: './content/tags',
    //     route: '/tags/:id',
    //     template: './src/templates/Tag.vue'
    //   }
    // },

    // vue - remark  for articles
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Article', // Required
        baseDir: './content/articles', // Where .md files are located
        // pathPrefix: '/articles', // Add route prefix. Optional
        route: '/articles/:title',
        template: './src/templates/Article.vue', // Optional
        refs: {
          // create a author collection with `Author` as its name. md file should have `author`
          author: {
            typeName: 'Author',
          },
          // regerence to tags collection.
          tags: {
            typeName: 'Tag',
          },
          // reference to Category collection
          category: {
            typeName: 'Category'
          }
        }
      }
    }
  ],
  // templates for each collection  -- doesn't work if collections are from vue-remark
  templates: {
    Tag: [{
      path: '/tag/:title',
      component: './src/templates/Tag.vue'
    }],
    Category: [{
      path: '/category/:slug',
      component: './src/templates/Category.vue'
    }],
    Author: [{
      path: '/author/:slug',
      component: './src/templates/Author.vue'
    }]
  }
}