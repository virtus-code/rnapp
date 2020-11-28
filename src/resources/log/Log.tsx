// import crashlytics from '@react-native-firebase/crashlytics';
// const fbc = crashlytics();
const fbc :any = {
    log:(message:string)=>{console.log(message)},
    crash:()=>{console.log('crash...')}
}

export default class Log {
  static exception(tag: string, method: string, error: any) {
    console.log('exception');
  }

  static format(type: string, tag: string, method: string, params: any) {
    return `[${type.toUpperCase()}] ${tag} - ${method} => ${
      params ? JSON.stringify(params) : ''
    }`;
  }

  static log(tag: string, method: string, ...params: any) {
    const message = this.format('log', tag, method, params);
    fbc.log(message);
  }

  static debug(tag: string, method: string, ...params: any) {
    const message = this.format('log', tag, method, params);
    fbc.log(message);
  }

  static info(tag: string, method: string, ...params: any) {
    if (__DEV__) {
      console.info(tag, method, ...params);
      return;
    }
    const message = this.format('info', tag, method, params);
    fbc.log(message);
  }

  static warn(tag: string, method: string, ...params: any) {
    if (__DEV__) {
      console.warn(tag, method, ...params);
      return;
    }
    const message = this.format('warn', tag, method, params);
    fbc.log(message);
  }

  static error(tag: string, method: string, ...params: any) {
    if (__DEV__) {
      console.error(tag, method, ...params);
      return;
    }
    const message = this.format('error', tag, method, params);
    fbc.log(message);
  }

  static crash() {
    fbc.crash();
  }
}
