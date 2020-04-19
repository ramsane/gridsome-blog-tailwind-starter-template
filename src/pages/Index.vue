<template>
  <Layout>
    <h1 class="text-2xl">Articles</h1>
    <ul class="pl-3">
      <li v-for="article in $page.articles.edges">
        <g-link
          :to="article.node.path"
          class="text-orange-500 hover:text-orange-800"
          >{{ article.node.title }}</g-link
        >
        <!-- <g-link :to="ta.id."></g-link> -->
      </li>
    </ul>
    <hr />
    <pre>
      {{ $page.articles }}
    </pre>
  </Layout>
</template>

<script>
import Test from '~/components/Test.vue'
export default {
  components: {
    Test
  },
  metaInfo: {
    title: 'Hello, world!'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>

<page-query>
query {
  articles: allArticle{
    edges{
      node{
        id,
        category{
          title
        }
        path,
        fileInfo{
          extension
          directory
          path
          name
        },
        content,
        title,
        author{id title}
        
      }
    }
  }
}

</page-query>
