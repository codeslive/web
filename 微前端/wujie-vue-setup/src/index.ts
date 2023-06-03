import { defineComponent, h, getCurrentInstance, onMounted, watch, onBeforeUnmount } from "vue";
import { startApp, bus } from "wujie";
import type { PropType } from "vue";
import { Props } from "./type";

const wujie = defineComponent({
  props: {
    width: { type: String, default: "" },
    height: { type: String, default: "" },
    name: { type: String, default: "", required: true },
    loading: { type: HTMLElement, default: undefined },
    url: { type: String, default: "", required: true },
    sync: { type: Boolean, default: undefined },
    prefix: { type: Object, default: undefined },
    alive: { type: Boolean, default: undefined },
    props: { type: Object, default: undefined },
    attrs: { type: Object, default: undefined },
    replace: { type: Function as PropType<Props['replace']>, default: undefined },
    fetch: { type: Function as PropType<Props['fetch']>, default: undefined },
    fiber: { type: Boolean, default: undefined },
    degrade: { type: Boolean, default: undefined },
    plugins: { type: Array as PropType<Props['plugins']>, default: null },
    beforeLoad: { type: Function as PropType<Props['beforeLoad']>, default: null },
    beforeMount: { type: Function as PropType<Props['beforeMount']>, default: null },
    afterMount: { type: Function as PropType<Props['afterMount']>, default: null },
    beforeUnmount: { type: Function as PropType<Props['beforeUnmount']>, default: null },
    afterUnmount: { type: Function as PropType<Props['afterUnmount']>, default: null },
    activated: { type: Function as PropType<Props['activated']>, default: null },
    deactivated: { type: Function as PropType<Props['deactivated']>, default: null },
  },
  setup(props, { emit }) {
    const instance = getCurrentInstance();
    // 微前端初始化完成
    const init = () => {
      startApp({
        name: props.name,
        url: props.url,
        el: instance?.refs.wujie as HTMLElement,
        loading: props.loading,
        alive: props.alive,
        fetch: props.fetch,
        props: props.props,
        attrs: props.attrs,
        replace: props.replace,
        sync: props.sync,
        prefix: props.prefix,
        fiber: props.fiber,
        degrade: props.degrade,
        plugins: props.plugins,
        beforeLoad: props.beforeLoad,
        beforeMount: props.beforeMount,
        afterMount: props.afterMount,
        beforeUnmount: props.beforeUnmount,
        afterUnmount: props.afterUnmount,
        activated: props.activated,
        deactivated: props.deactivated,
      })
    }
    // 监听name和url变化
    watch([props.name, props.url], () => {
      init();
    })
    // 事件监听
    const hanlderEmit = (event: string, ...args: any[]) => {
      emit(event, ...args);
    }
    // 初始化
    onMounted(() => {
      bus.$onAll(hanlderEmit);
      init();
    });
    // 销毁
    onBeforeUnmount(() => {
      bus.$offAll(hanlderEmit);
    });

    return () => h('div', {
      style: {
        width: props.width,
        height: props.height
      },
      ref: "wujie" // 方便以后读取
    })
  }
});
// 全局注册
wujie.install = function (app: any) {
  app.component("wujieVue", wujie);
}

export default wujie;