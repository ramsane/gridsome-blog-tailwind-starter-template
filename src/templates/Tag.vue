<template>
  <Layout>
    <h1 class="header text-6xl">Tag: {{ $page.tag.id }}</h1>
    <h1 class="header text-4xl">Articles</h1>
    <!-- <pre>
        {{ $page }}
    </pre> -->
    <div v-for="edge in $page.tag.belongsTo.edges">
      <h2 class="header text-2xl">Title:</h2>
      <h2 class="header text-xl">Author: {{ edge.node.author.title }}</h2>
      <g-link
        :to="edge.node.path"
        class="text-orange-400 hover:text-orange-800"
      >
        {{ edge.node.title }}
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query Tag($id: ID!){
  tag(id: $id){
    id,
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

<script>
export default {}
</script>
