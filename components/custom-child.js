// components/custom-child.js
Component({
  relations: {
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
    childClick() {
      var myEventDetail = {'data': parseInt(Math.random()*100)} // detail对象，提供给事件监听函数
      var myEventOption = {} // 触发事件的选项
      this.triggerEvent('child-evnet', myEventDetail, myEventOption);  
      var parent = this.getRelationNodes('./custom-parent')
      parent[0].setData({
        parentProps: 'hello parent'
      })
    }
  }
})
