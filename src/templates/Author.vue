<template>
  <Layout>
    <h1>Author: {{ $page.author.title }}</h1>
    <h2>Articles</h2>
    <ul class="px-3">
      <li
        v-for="article in $page.author.belongsTo.edges"
        :key="article.node.id"
      >
        <g-link
          :to="article.node.path"
          class="text-orange-500 hover:text-orange-800"
        >
          {{ article.node.title }}
        </g-link>
      </li>
    </ul>
    <hr />
    <pre>
      {{ $page.author }}
    </pre>
  </Layout>
</template>

<page-query>
query Author{
  author(id: "ramsane"){
    id
    title
    slug
    belongsTo{
      edges{
        node{
          ... on Article{
            id
            title
            path
            tags {path, title}
          }
				}
      }
    }
  }
}

</page-query>
