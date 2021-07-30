---
title: element-ui
date: 2021-07-01 10:37:37

tags:
  - component
---

## table

1. 自定义表头

```html
<el-table-column>
  <template slot="header">
    ...
  </template>
</el-table-column>
```

2. 使用远程排序,设置`sortable="custom"`,并且需要自定义`sort-change`事件

```html
<el-table ref="pageTable" @sort-change="sortChange">
  <el-table-column sortable="custom"></el-table-column>
</el-table>
```

3. 动态列后重新绘制 table:`doLayout()`

```html
<template>
  <el-table ref="pageTable"> </el-table>
</template>
<script>
  ...
  this.$refs.pageTable.doLayout()
</script>
```

4. 默认勾选特定列,且置灰。

```html
<template>
  <el-table
    ref="pageTable"
    :data="tableData"
    :row-key="(row)=>{ return row.id}"
    @selection-change="handleSelectionChange"
    @select="selectItemHandle"
  >
  </el-table>
</template>
<script>
   data(){
     return {
       tableData:[],
       choosedItem:[]
       deleteChoosedArr:[]
     }
   },
   methods:{
     getTableData(){
       this.$nextTick(() => {
        this.tableData.forEach((row) => {
            if (row.id > 1) {
              //勾选条件
              this.$refs.pageTable.toggleRowSelection(row, true)
            }
          })
       })
      },
      handleSelectionChange (obj) {
         this.choosedItem = obj
       },
      selectItemHandle (row, obj) {
         if (!row.includes(obj)) {
           this.deleteChoosedArr.push(obj)
         } else {
           this.deleteChoosedArr = this.deleteChoosedArr.filter(i => i.id !== obj.id)
         }
      }
   }
</script>
```
