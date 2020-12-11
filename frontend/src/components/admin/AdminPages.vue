<template>
  <div class="admin-pages">
    <PageTitle icon="fa fa-cogs" main="Administração do Sistema"
    sub="Cadastros & Cia"/>
    <div class="admin-page-tabs">
      <b-card no-body>
          <b-tabs card>
            <b-tab title="Artigos" active>
              <ArticlesAdmin/>
            </b-tab>
            <b-tab title="categorias">
              <CategoryAdmin/>
            </b-tab>
            <b-tab title="Usuários">
              <UserAdmin/>
            </b-tab>
          </b-tabs>
      </b-card>
    </div>

  </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticlesAdmin from './ArticlesAdmin'
import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
  name: "AdminPages",
  components: {PageTitle,CategoryAdmin, UserAdmin,ArticlesAdmin}
}
</script>

<style>

</style>