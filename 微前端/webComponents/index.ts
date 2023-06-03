window.onload = () => {
  class Wujie extends HTMLElement {
    constructor() {
      super();
      // shadowdom 样式隔离
      let dom = this.attachShadow({ mode: "open" });
      // 模板
      let template = document.querySelector('#wujie') as HTMLTemplateElement;
      // 拷贝模板
      dom.appendChild(template.content.cloneNode(true));

      // 输出属性
      console.log(this.getAttr('url'), this.getAttr('age'));
    }
    // 获取属性
    private getAttr(attr: string) {
      return this.getAttribute(attr);
    }

    // 生命周期自动触发有东西插入
    connectedCallback() {
      console.log('类似 vue 的 mounted');
    }

    // 生命周期挂载
    disconnectedCallback() {
      console.log('类似 vue 的 destroy');
    }

    // 跟watch类似
    attributeChangedCallback(name: string, oldVal: string, newVal: string) {
      console.log('跟 vue 的 watch 类似 有属性发生变化自动触发', name, oldVal, newVal);
    }
  }
  window.customElements.define('wu-jie', Wujie); // 挂载完成
}