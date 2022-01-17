export const globDirectives = (app) => {
  /**
   * 防抖 单位时间只触发最后一次
   * @param {?Number|300} time - 间隔时间
   * @param {Function} fn - 执行事件
   * @param {?String|"click"} event - 事件类型 例："click"
   * @param {Array} binding.value - [fn,event,time]
   */
  app.directive('debounce', {
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
   * 节流 每单位时间可触发一次
   * @param {?Number|300} time - 间隔时间
   * @param {Function} fn - 执行事件
   * @param {?String|"click"} event - 事件类型 例："click"
   * @param {Array} binding.value - [fn,event,time]
   */
  app.directive('throttle', {
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
