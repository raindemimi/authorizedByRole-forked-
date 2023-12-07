<template>
   <v-card>
      <v-data-table
          fixed-header
          :items-per-page="tableData.length"
          item-key="id"
          hide-default-footer
          :headers="headers"
          :items="tableData"
          class="table v-data-table--select"
        >
        <template  v-slot:item.createUser="{ item }">
            <v-icon
              v-if="
                $store.state.userIdByAdminList.includes(item.createUser)
              "
              size="1.65rem"
              color="primary"
              >mdi-alpha-a-circle</v-icon
            >
            <span v-else>{{ item.createUser }}</span>
          </template>
          <template  v-slot:item.actions="{ item }">
            <v-btn v-has:edit icon @click.stop="edit(item)">
              <v-icon  size="1.25rem"> mdi-pencil </v-icon>
            </v-btn>
            <v-btn v-has:del icon >
              <v-icon
              size="1.25rem"
              class="icon-hover-bg ml-2"
              @click.stop="del(item)"
            >
              mdi-delete
            </v-icon>
            </v-btn>
            
          </template>
        </v-data-table>
   </v-card>
</template>

<script>
export default {
   name: 'HelloWorld',

   data: () => ({
      headers: [
        {
          text: '',
          value: 'id',
          width: '50px',
        },

        {
          text: '名称',
          value: 'name',
          width: '200px',
        },

        {
          text: '描述',
          value: 'description',
          width: '200px',
        },
        {
          text: '最后更新时间',
          value: 'updateDate',
          width: '160px',
        },
        {
          text: 'Admin',
          value: 'createUser',
          width: '120px',
        },
        {
          text: '',
          value: 'actions',
          width: '150px',
          sortable: false,
        },
      ],
      tableData:[
         {
            id:1,
            name:'zhangshan',
            updateDate:Date.now(),
            createUser:'zhangsan'
         },
         {
            id:2,
            name:'zhangshan',
            updateDate:Date.now(),
            createUser:'zhangshan'
         }
      ]
   })
}
</script>
