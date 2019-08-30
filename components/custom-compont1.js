// compont/custom-compont1.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      test: { // 属性名
        type: String,
        value: ''
      }
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
    onTap: function () {
    var myEventDetail = { 'a': '1', 'text': this.properties.test} // detail对象，提供给事件监听函数
      var myEventOption = {
        bubbles: true, capturePhase: false, composed:true} // 触发事件的选项
        //bubbles	Boolean	否	false	事件是否冒泡
    //composed	Boolean	否	false	事件是否可以穿越组件边界，为false时，事件将只能在引用组件的节点树上触发，不进入其他任何组件内部
    //capturePhase	Boolean
      this.triggerEvent('myevent', myEventDetail, myEventOption);
    }
  }
})
