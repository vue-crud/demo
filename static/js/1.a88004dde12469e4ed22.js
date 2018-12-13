webpackJsonp([1],{"9Q3u":function(e,t){},W59y:function(e,t,s){"use strict";var i=s("BO1k"),l=s.n(i),a=s("Gu7T"),n=s.n(a),o=s("Dd8w"),r=s.n(o),d=s("NYxO"),c=s("o31/"),u=s("x6CG"),m=s("XY2G");t.a={components:{DataTableRow:u.default,DataTableControls:m.default},props:["tableFields","deleteMode","customButtons","itemElements","editButton","fileMode","meta","primaryKey","activeColumnName"],data:function(){return{selected:[]}},computed:r()({},Object(d.e)(["filesPath"]),Object(d.e)("crud",["prefix","path"]),Object(d.c)("crud",["itemsList"]),{selectedIds:function(){return this.selected.map(function(e){return e.id})},headers:function(){var e=[{text:this.$t("fields.action"),sortable:!1}],t=this.tableFields.map(function(e){var t={};return t.text=e.text,t.value=e.name.toLowerCase(),void 0!=e.sortable&&(t.sortable=e.sortable),t});return[].concat(e,n()(t))},items:function(){return this.itemsList(this.tableFields,this.meta,this.primaryKey,this.customButtons,this.activeColumnName)}}),methods:r()({},Object(d.d)(["alertError"]),Object(d.d)("crud",["resetItems","resetItem","editItemDialog","createItemDialog","multipleEditDialog","setItemElementsInfo","editItemElementsDialog","openImageContainer","setSelectedIds"]),Object(d.b)("crud",["getItem","updateItem","storeItem","deleteItem","getItemElements","mulitipleItemsUpdate","mulitipleItemsDelete"]),{edit:function(e){var t=this;this.getItem([e]).then(function(s){t.editItemDialog(e)})},create:function(){this.resetItem(),this.createItemDialog()},suspend:function(e){var t={};t[this.activeColumnName]=0,this.updateItem([e,t,this.$t("global.alerts.suspended"),this.$t("global.alerts.suspendError")])},restore:function(e){var t={};t[this.activeColumnName]=1,this.updateItem([e,t,this.$t("global.alerts.restored"),this.$t("global.alerts.restoreError")])},destroy:function(e){confirm(this.$t("global.alerts.confirm"))&&this.deleteItem([e,this.$t("global.alerts.deleted"),this.$t("global.alerts.deleteError")])},checkSelected:function(){return 0==this.selected.length?(this.alertError(this.$t("noItemsSelected")),!1):!!confirm(this.$t("confirm"))},editSelected:function(){if(0==this.selected.length)return this.alertError(this.$t("noItemsSelected")),!1;this.setSelectedIds(this.selected),this.resetItem(),this.multipleEditDialog()},suspendSelected:function(){this.checkSelected()&&this.mulitipleItemsUpdate([{ids:this.selectedIds,request:{active:0}},this.$t("global.alerts.suspended"),this.$t("global.alerts.suspendError")])},restoreSelected:function(){this.checkSelected()&&this.mulitipleItemsUpdate([{ids:this.selectedIds,request:{active:1}},this.$t("global.alerts.restored"),this.$t("global.alerts.restoreError")])},destroySelected:function(){this.checkSelected()&&this.mulitipleItemsDelete([{ids:this.selectedIds},this.$t("global.alerts.deleted"),this.$t("global.alerts.deleteError")])},custom:function(e,t){this.$parent.custom(e,t)},editItemElements:function(e,t){var s=this.itemElements[e];this.setItemElementsInfo([t,s]),this.getItemElements()},rowDblclickAction:function(e){if(this.editButton)this.edit(e.meta.id);else{var t=!1,s=!0,i=!1,a=void 0;try{for(var n,o=l()(this.customButtons);!(s=(n=o.next()).done);s=!0){if("goToItem"==n.value.name){t=!0;break}}}catch(e){i=!0,a=e}finally{try{!s&&o.return&&o.return()}finally{if(i)throw a}}t&&this.custom("goToItem",e)}},download:function(e){Object(c.a)(this.filesPath+e.meta.path,e.filename)},isImage:function(e){return["image/jpeg","image/png"].includes(e)},showImage:function(e){this.openImageContainer(e)}})}},ipT6:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("Dd8w"),l=s.n(i),a=s("W59y"),n=s("Uc7C"),o=s("1FYM"),r=s("NYxO"),d={mixins:[a.a,n.a,o.a],data:function(){return{}},created:function(){this.resetItems(),this.getItems(),this.filterColumns=this.tableFields.map(function(e){var t={mode:"like"};return t.text=e.text,t.name=e.name.toLowerCase(),t.column=e.column,t.value="",t})},computed:l()({},Object(r.e)("crud",["loading","detailsDialog","tableRefreshing"])),watch:{detailsDialog:function(e){e||this.getItems()},tableRefreshing:function(e){e&&this.getItems()}},methods:l()({},Object(r.d)("crud",["refreshTable"]),Object(r.b)("crud",["getItems"]))},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-card",[s("v-card-title",{staticClass:"card-title table-controls"},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",lg4:""}},[s("data-table-controls",{attrs:{deleteMode:e.deleteMode},on:{create:e.create,editSelected:e.editSelected,suspendSelected:e.suspendSelected,restoreSelected:e.restoreSelected,destroySelected:e.destroySelected,refreshTable:e.refreshTable}})],1),e._v(" "),s("v-flex",{attrs:{xs12:"",lg8:"","text-xs-left":"","text-lg-right":""}},[s("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1}},[s("v-btn",{staticClass:"primary",attrs:{slot:"activator",small:"",fab:"",dark:""},slot:"activator"},[s("v-icon",[e._v("filter_list")])],1),e._v(" "),s("v-list",{staticStyle:{"overflow-y":"false"}},e._l(e.filterColumns,function(t,i){return s("v-list-tile",{key:i},[s("v-select",{attrs:{items:e.filterModes,"item-text":"text","item-value":"name",label:e.$t("filterModes.label"),"hide-details":""},on:{input:function(t){e.updateColumnFilterMode(t,i)}},model:{value:t.mode,callback:function(s){e.$set(t,"mode",s)},expression:"item.mode"}}),e._v(" "),s("v-text-field",{attrs:{"hide-details":"",label:t.text},on:{input:function(t){e.updateFilterColumns(t,i)}},model:{value:t.value,callback:function(s){e.$set(t,"value",s)},expression:"item.value"}})],1)}))],1),e._v(" "),s("span",{staticStyle:{display:"inline-block","margin-left":"50px",width:"250px"}},[s("v-text-field",{attrs:{"append-icon":"search",label:e.$t("search"),"single-line":"","hide-details":"","min-width":"200"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),["soft","both"].includes(e.deleteMode)?[s("span",{staticStyle:{display:"inline-block","margin-left":"50px",width:"250px"}},[s("v-select",{attrs:{label:e.$t("status.title"),items:e.statuses,"single-line":"","item-text":"text","item-value":"value",multiple:"",chips:""},model:{value:e.selectedStatuses,callback:function(t){e.selectedStatuses=t},expression:"selectedStatuses"}})],1)]:e._e()],2)],1)],1),e._v(" "),s("v-data-table",{staticClass:"datatable",attrs:{"disable-initial-sort":!0,"must-sort":!0,"select-all":"black","rows-per-page-items":[20,50,{text:e.$t("all"),value:-1}],pagination:e.pagination,light:"",headers:e.headers,items:e.filteredItems,"no-results-text":e.$t("noMatchingResults"),"no-data-text":e.$t("noDataAvailable"),"rows-per-page-text":e.$t("rowsPerPageText"),loading:e.loading},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"items",fn:function(t){return[s("data-table-row",{attrs:{props:t,editButton:e.editButton,customButtons:e.customButtons,deleteMode:e.deleteMode,itemElements:e.itemElements,fileMode:e.fileMode,columnTextModes:e.columnTextModes},on:{edit:e.edit,custom:e.custom,suspend:e.suspend,restore:e.restore,destroy:e.destroy,editItemElements:e.editItemElements,download:e.download,showImage:e.showImage}})]}},{key:"pageText",fn:function(t){var i=t.pageStart,l=t.pageStop,a=t.itemsLength;return[s("data-table-footer",{attrs:{pagination:e.pagination,pageStart:i,pageStop:l,itemsLength:a},on:{setPage:e.setPage}})]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)},staticRenderFns:[]};var u=s("VU/8")(d,c,!1,function(e){s("9Q3u")},"data-v-191b7a16",null);t.default=u.exports}});
//# sourceMappingURL=1.a88004dde12469e4ed22.js.map