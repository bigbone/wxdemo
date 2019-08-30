// components/custom-child2.js
var behavior_relation = require('my-behavior.js');

Component({
  behaviors: [behavior_relation],
  relations: {
    //必须和文件名一样
  './custom-parent': {
    type: 'parent', // 关联的目标节点应为parent节点
    linked: function (target) {
      // 每次有custom-li被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
    },
    linkChanged: function (target) {
      // 每次有custom-li被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
    },
    unlinked: function (target) {
      // 每次有custom-li被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
    }
  }
  },
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    childClick:function(){
      //通过behavior这样 这个组件就拥有了parent这个方法。
      var parent = this._parent('./custom-parent');
      console.log(parent);
      parent.setData({
        parentProps: 'hello parent2'
      })
      return;
      var parent = this.getRelationNodes('./custom-parent');
      //调用父组件的方法
      parent[0].setData({
        parentProps: 'hello parent2'
      })
    }
  }
})
