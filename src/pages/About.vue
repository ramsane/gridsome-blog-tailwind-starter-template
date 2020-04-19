<template>
  <Layout>
    <h1>About us</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque
      omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum
      odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
      Iusto.
    </p>
    <hr />
    <!-- just to see if we can execute normal queries or not -->
    Tags: {{ $page.tags.edges }}
  </Layout>
</template>

<page-query>
query{
  tags: allTag{
    edges{
      node{
        id
        title
      }
    }
  }
  
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'About us'
  }
}
</script>
