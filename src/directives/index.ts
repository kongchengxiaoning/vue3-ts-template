// 自定义指令集
export default (app) => {
  /**
  * 防抖 单位时间只触发最后一次
  *  @param {?Number|300} time - 间隔时间
  *  @param {Function} fn - 执行事件
  *  @param {?String|"click"} event - 事件类型 例："click"
  *  @param {Array} binding.value - [fn,event,time]
  *  @author aChuan
  *  例：<el-button v-debounce="[reset,`click`,300]">刷新</el-button>
  *  也可简写成：<el-button v-debounce="[reset]">刷新</el-button>
  */
  app.directive('debounce', {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el, binding) {
      const [fn, event = 'click', time = 300] = binding.value
      let timer
      el.addEventListener(event, () => {
        timer && clearTimeout(timer)
        timer = setTimeout(() => fn(), time)
      })
    }
  })

  /**
  *  节流 每单位时间可触发一次
  *  第一次瞬间触发，最后一次不管是否达到间隔时间依然触发
  * 【考虑到input的change事件】
  *  @param {?Number|300} time - 间隔时间
  *  @param {Function} fn - 执行事件
  *  @param {?String|"click"} event - 事件类型 例："click"
  *  @param {Array} binding.value - [fn,event,time]
  *  @author aChuan
  *  例：<el-button v-throttle="[reset,`click`,300]">刷新</el-button>
  *  传递参数则：<el-button v-throttle="[()=>reset(param),`click`,300]">刷新</el-button>
  */

  app.directive('throttle', {
    // 当被绑定的元素挂载到 DOM 中时……
    mounted(el, binding) {
      const [fn, event = 'click', time = 300] = binding.value
      let timer, timer_end
      el.addEventListener(event, () => {
        if (timer) {
          clearTimeout(timer_end)
          timer_end = setTimeout(() => fn(), time)
          return
        }
        fn()
        timer = setTimeout(() => {
          timer = null
        }, time)
      })
    }
  })
}
