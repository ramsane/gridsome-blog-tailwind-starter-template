<<template>
  <Layout>
    <h1 class="bg-red-900 text-white">
      {{ $page.article.title }} - {{ $page.article.author.title }}
    </h1>
    Tags:
    <ul class="pl-4">
      <li v-for="tag in $page.article.tags" :key="tag.id">
        <g-link :to="tag.path" class="text-orange-500 hover:text-orange-800">{{
          tag.title
        }}</g-link>
        <!-- <g-link :to="ta.id."></g-link> -->
      </li>
    </ul>
    Category:
        <g-link :to="$page.article.category.path" class="text-orange-500 hover:text-orange-800">
          {{$page.article.category.title}}
          </g-link>
        <!-- <g-link :to="ta.id."></g-link> -->
    </ul>
    <br/>
    Author:
        <g-link :to="$page.article.author.path" class="text-orange-500 hover:text-orange-800">
          {{$page.article.author.title}}
          </g-link>
        <!-- <g-link :to="ta.id."></g-link> -->
    </ul>
    <VueRemarkContent />
    <pre>
      {{$page.article}}
    </pre>
  </Layout>
</template>

<page-query>
query Article($id: ID!){
  article(id: $id){
    id,
    path
    content
    title
    author {title path}
    tags { id title path}
    category { title, path}
    headings {
      depth
      value
      # anchor
    }
  }
}

</page-query>
<script>
export default {
  metaInfo() {
    return {
      title: this.$page.article.title
    }
  }
}
</script>
