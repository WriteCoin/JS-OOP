let L = (function () {
  let i = 0
  function log() {
    if (L.isDebugMode == true) {
      console.log('Функция: ' + this.name + ', Счётчик: ' + ++i)
    } else {
      ++i
    }
  }
  let isDebugMode = false
  let publicAPI = {
    n: () => 'Библиотека L.js',
    v: () => 'Version 1.0.2',
    // name:"Библиотека L.js",
    CL: function CL(...str) {
      console.log(...str)
      log.call(CL)
      //return str.join();
      //return str.toString();
      //return JSON.stringify(str);
      //return str.reduce(function(total, val){if(total){total += " ";} return total + val;}, "")
      return str.reduce((total, val) => total + (total ? ' ' : '') + val, '')
    },
    CGb: function CGb(str) {
      log()
      console.group(str)
    },
    CGe: function CGe() {
      log()
      console.groupEnd()
    },
    t: (x) => typeof x,
    d: (ms = 1000) => {
      let curDate = Date.now()
      let curDate_i = null
      do {
        curDate_i = Date.now()
      } while (curDate_i - curDate < ms)
    },
    b: (txt, isClear = false) => {
      let elemBody = document.getElementsByTagName('body')[0]
      if (isClear) {
        elemBody.innerHTML = ''
      }
      elemBody.innerHTML += txt
      //elemBody.style.color = '$f00'
      //elemBody.style.backgroundColor = '#000'
      elemBody.style.fontSize = '25px'
      return txt
    },
    //ВЫВОД СООБЩЕНИЯ НА ЭКРАН
    m: function m(thisObj, caller, message, style = '') {
      let styleSpan = ''
      let styleP = ''
      let callerName = caller.name
      let thisObjName = thisObj.name
      if (callerName == thisObjName) {
        callerName = 'Я'
        message = message.replace('меня', 'себя')
      }
      if (style) {
        styleP = " style = '" + style + ";'"
      }
      styleSpan = "style = 'font-weight:bold; color:" + thisObj.color + ";'"
      let f = L.b

      this.b(
        '<p ' +
          styleP +
          '><span ' +
          styleSpan +
          '>' +
          thisObjName.toUpperCase() +
          ':</span> ' +
          callerName +
          ' ' +
          message +
          '.</p>'
      )
    },
  }
  publicAPI.__defineGetter__('name', publicAPI.n)
  publicAPI.__defineSetter__('name', (newName) => {
    publicAPI.CL('Доступ запрещен')
    let elemBody = document.getElementsByTagName('body')[0]
    elemBody.innerHTML = 'Доступ запрещен. Prepare to die.'
    elemBody.style.color = '#f00'
    elemBody.style.backgroundColor = '#000'
    elemBody.style.fontSize = '100px'
    return newName
  })
  publicAPI.__defineGetter__('version', publicAPI.v)
  publicAPI.__defineSetter__('version', publicAPI.__lookupSetter__('name'))
  Object.defineProperty(publicAPI, 'name', {
    //value:"Version 1.0.2",
    //writable:false,
    enumerable: false,
    configurable: false,
    set: publicAPI.__lookupSetter__('name'),
    get: publicAPI.__lookupGetter__('name'),
  })
  Object.defineProperty(publicAPI, 'version', {
    //value:"Библиотека L.js",
    //writable:false,
    enumerable: false,
    configurable: false,
    set: publicAPI.__lookupSetter__('version'),
    get: publicAPI.__lookupGetter__('version'),
  })
  Object.defineProperty(publicAPI, 'isDebugMode', {
    configurable: false,
    set: function (val) {
      isDebugMode = val
    },
    get: function () {
      return isDebugMode
    },
  })
  let publicAPIChild = Object.create(publicAPI, {
    date: {
      value: '17.10.2020',
      writable: false,
      configurable: false,
    },
    author: {
      value: 'М3О-235Б-19',
      writable: false,
      configurable: false,
    },
  })
  publicAPIChild.pl = function () {
    for (key in this) {
      L.CL(this[key])
    }
  }.bind(publicAPIChild)
  publicAPIChild.pl.decsription = 'Выводит список всех свойств библиотеки'
  publicAPIChild.rfg = function (x, y) {
    return function (a = x, b = y) {
      if (a > b) {
        console.error(
          'Ошибочный интервал в функции генерации случайных чисел: ' +
            a +
            ', ' +
            b
        )
        return undefined
      }
      let n
      n = a + Math.round((b - a) * Math.random())
      return n
    }
  }
  publicAPIChild.rfg.decsription =
    'Создаёт функцию генерации случайных целых чисел.'
  publicAPIChild.r = publicAPIChild.rfg()
  let _str = {
    valueOf: function () {
      let index = publicAPIChild.r(0, this.valueList.length - 1)
      return this.valueList[index]
    },
    // pU:function(){

    // }
  }
  function Str(x) {
    this.valueList = x
  }
  Str.prototype = _str
  _str.constructor = Str
  publicAPIChild.Str = Str
  let _phrase = {
    valueOf: function () {
      let result = ' '
      for (let i = 0; i < this.wordList.length; i++) {
        result += this.wordList[i].valueOf()
      }
      return result
    },
  }
  function Phrase(...x) {
    this.wordList = x.map(function (v) {
      let string = new Str(v)
      return string
    })
  }
  Phrase.prototype = _phrase
  _phrase.constructor = Phrase

  publicAPIChild.Phrase = Phrase

  let propertyName = Symbol('spdfj')
  publicAPIChild.Counter = function Counter() {
    this[propertyName] = 0
    this.__proto__[propertyName] = 0
  }
  publicAPIChild.Counter.prototype.next = function next() {
    this[propertyName]++
    this.__proto__[propertyName]++
    return this[propertyName]
  }

  return publicAPIChild
})() //IIFE(Immediate Invoce Function Expression)
