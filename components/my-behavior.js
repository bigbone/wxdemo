/*代码复用的方法。事件触发机制和属性方法的覆盖。
属性：都是简单的后面覆盖前面的（对象交叉合并）
方法：先调用behavior中再调用commpent中的。
behavior不是数据传递的方法，但是可以把找compent封装在这。
/*/
module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function () { 
    console.log('in attached');
  },
  methods: {
    myBehaviorMethod: function () { 
      console.log("in behavior");
    },
    _parent(pname) {
      // 如果根据该路径获取到acestor组件为null，则说明this为ancesor
      var parentNode = this.getRelationNodes(pname);
      if (parentNode && parentNode.length !== 0) {
        return parentNode[0]
      }
    }
  }
})