<template>
  <Layout>
    <h1 class="text-3xl">Category: {{ $page.category.title }}</h1>
    <h2 class="text-2xl">Articles:</h2>
    <li v-for="article in $page.category.belongsTo.edges">
      <g-link
        :to="article.node.path"
        class="text-orange-500 hover:text-orange-800"
        >{{ article.node.title }}</g-link
      >
    </li>
    <hr />
    <pre>
      {{ $page }}
    </pre>
  </Layout>
</template>

<page-query>
query($id: ID!){
  category(id: $id){
    id
    title
    slug
    belongsTo{
      edges{
        node{
          ... on Article{
            id
            title
            author {id, title}
            path
          }
        }
      }
    }
  }
}
</page-query>
