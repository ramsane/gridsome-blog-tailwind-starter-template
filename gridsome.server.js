// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = function (api) {
  // make sure there are no trailing spaces in the tags
  api.loadSource(({
    addCollection
  }) => {
    /* *****************************
     *        Loading Tags          *
     ***************************** */
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const tags = require('./content/data/tags.json')
    // Create a collection named tags
    const tagsCollection = addCollection('Tag')

    // add tag nodes to the collection
    for (const tag of tags) { // of : iterates over values
      tagsCollection.addNode({
        id: tag.id,
        title: tag.title
      })
    }
    /* *****************************
     *     Loading Categories      *
     ***************************** */
    const categories = require('./content/data/categories.json')
    const catCollection = addCollection('Category')
    for (category of categories) {
      catCollection.addNode({
        id: category.id,
        title: category.title,
        slug: category.slug
      })
    }

    /* *****************************
     *      Loading Authors        *
     ***************************** */
    const authors = require('./content/data/authors.json')
    const authorsCollection = addCollection('Author')
    for (author of authors) {
      authorsCollection.addNode({
        id: author.id,
        title: author.title,
        slug: author.slug
      })
    }


  })

  api.createPages(({
    createPage
  }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}