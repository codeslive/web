import { DefaultOptons, TrackerConfig, Options } from "../types/index";
import { createHistoryEvent } from '../utils/pv';


const MouseEventList: string[] = ['click', 'dblclick', 'contextmenu', 'mousedown', 'mouseup', 'mouseenter', 'mouseout', 'mouseover'];

export default class Tracker {
  public data: Options;
  constructor(options: Options) {
    this.data = Object.assign(this.initDef(), options);
    this.installTracker();
  }

  // 初始化默认值
  private initDef(): DefaultOptons {
    window.history['pushState'] = createHistoryEvent('pushState');
    window.history['replaceState'] = createHistoryEvent('replaceState');
    return <DefaultOptons>{
      sdkVersion: TrackerConfig.version,
      historyTracker: false,
      hashTracker: false,
      domTracker: false,
      jsError: false,
    }
  }

  // 设置用户id
  public setUserId<T extends DefaultOptons['uuid']>(uuid: T) {
    this.data.uuid = uuid;
  }

  // 设置用户自定义字段
  public setExtra<T extends DefaultOptons['extra']>(extra: T) {
    this.data.extra = extra;
  }

  // 用户手动上报
  public sendTracker<T>(data: T) {
    this.reportTracker(data);
  }

  // 监听dom事件
  private targetKeyReport() {
    MouseEventList.forEach(ev => {
      window.addEventListener(ev, (e) => {
        const target = e.target as HTMLElement;
        const targetKey = target.getAttribute('target-key');
        if (!targetKey) return;
        this.reportTracker({
          event: ev,
          targetKey
        })
      })
    })
  }

  // 监听事件
  private captureEvents<T>(mouseEventList: string[], targetKey: string, data?: T) {
    mouseEventList.forEach(event => {
      window.addEventListener(event, () => {
        console.log('监听到了');
        this.reportTracker({
          event,
          targetKey,
          data
        });
      })
    })
  }

  // 安装埋点
  private installTracker() {

    // 如果用户开启了historyTracker，就监听history相关事件
    if (this.data.historyTracker) {
      this.captureEvents(['pushState', 'replaceState', 'popstate'], 'history-pv');
    }
    // 如果用户开启了hashTracker，就监听hash相关事件
    if (this.data.hashTracker) {
      this.captureEvents(['hashchange'], 'hash-pv');
    }
    // 如果用户开启了domTracker，就监听dom相关事件
    if (this.data.domTracker) {
      this.targetKeyReport();
    }
    // 如果用户开启了jsError，就监听js相关事件
    if (this.data.jsError) {
      this.jsError();
    }

  }
  // 收集js错误信息
  private jsError() {
    this.errorEvent();
    this.promiseReject();
  }

  // 监听js错误信息
  private errorEvent() {
    window.addEventListener('error', (event) => {
      this.sendTracker({
        event: 'error',
        targetKey: "message",
        message: event.message,
      })
    })
  }

  // 监听 promise 错误信息
  private promiseReject() {
    window.addEventListener('unhandledrejection', (event) => {
      event.promise.catch(error => {
        this.sendTracker({
          event: 'promise',
          targetKey: "message",
          message: error,
        })
      })
    })
  }

  // 上报数据
  private reportTracker<T>(data: T) {
    const params = Object.assign(this.data, data, { time: new Date().getTime() });
    let header = {
      type: 'application/x-www-form-urlencoded',
    };
    let blob = new Blob([JSON.stringify(params)], header);
    navigator.sendBeacon(this.data.requestUrl, blob);
  }


}
