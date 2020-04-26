<template>
  <div>
    <el-form :inline="true" :model="form" class="demo-form-inline">
       <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="姓名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
       <el-form-item>
        <el-button type="primary">新增</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="tableData">
      <el-table-column  prop="_id" label="ID"></el-table-column>
      <el-table-column  prop="createdAt" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="市区"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="zip" label="邮编"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="small">编辑</el-button>
          <el-button
            @click.native.prevent="deleteRow(scope.$index, tableData)"
            type="danger"
            size="small"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="current.page"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="current.limit"
      layout="total, sizes, prev, pager, next, jumper"
      :total="current.total"
    ></el-pagination>
  </div>
</template>
<script>
import { table } from '../../api'
export default {
   data() {
    return {
       form: {
          name:'',
          page:0,
          limit:10
        },
      current:{
        page:0,
        limit:0,
        total:0
      },
      tableData: [
      ]
    };
  },
  created() {
    this.getQueryData()
  },
  methods: {
     async getQueryData() {
      let {data} = await this.$http.GET(table.index,this.form)
      this.tableData = data.data.data
 
      this.current = {
        page:data.data.page,
        limit:data.data.limit,
        total:data.data.total
      }
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // 每页多少条
    handleSizeChange(val) {
      this.form.limit = val
      this.getQueryData()
    },
    //当前页
    handleCurrentChange(val) {
      this.form.page = val - 1
      this.getQueryData()
    },
     onSubmit() {
          this.getQueryData()
      }
  },
 
};
</script>
<style lang="less" scoped>
/deep/ .el-pagination {
  text-align: right;
  margin-top: 12px;
}
/deep/.el-table{
       width:99.9%;
}
</style>