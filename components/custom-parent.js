// components/custom-parent.js
Component({

  relations: {
    //这个字段的名字要和文件名一致。要不会找不到。。。。。，如果按需加载组件？
    './custom-child': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        // 每次有子组件被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged: function (target) {
        // 每次有子组件被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function (target) {
        // 每次有子组件被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
      }
    },
    './custom-child2': {
      type: 'child', // 关联的目标节点应为子节点
      linked: function (target) {
        // 每次有子组件被插入时执行，target是该节点实例对象，触发在该节点attached生命周期之后
      },
      linkChanged: function (target) {
        // 每次有子组件被移动后执行，target是该节点实例对象，触发在该节点moved生命周期之后
      },
      unlinked: function (target) {
        // 每次有子组件被移除时执行，target是该节点实例对象，触发在该节点detached生命周期之后
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
    parentClick() {
      var myEventDetail = {} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('custom-event', myEventDetail, myEventOption);
      var child = this.getRelationNodes('./custom-child');
      child[0].setData({
        childProps: 'hello child'
      })
    }
  }
})
