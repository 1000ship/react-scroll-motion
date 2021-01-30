const isIphone = /iPhone/.test(navigator.userAgent)
const isSafari = /Safari/.test(navigator.userAgent)

type ProxyHandler<T> = {
  get: (target: Object, key:Symbol|number|string) => any
};

interface ProxyConstructor {
  new <T extends object>(target: T, handler: ProxyHandler<T>): T;
}
declare var Proxy: ProxyConstructor;

const environment = new Proxy({width: 0, height: 0}, {
  get: (target:Object, key:Symbol|number|string) => {
    if(key === "height"){
      if( isIphone && isSafari )
        return window.screen.height - 80
      return window.innerHeight
    }
    if(key === "width"){
      if( isIphone && isSafari )
        return window.screen.width
      return window.innerWidth
    }
    return undefined
  }
})

export default environment