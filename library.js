var a = 10;
var b = 20;
var c = 30;

export {a, b};
export default c;

// export default a;
/*  export default 내보낼거
  - 1. export default는 파일당 1회 사용 가능
  - 2. 여러개 내보내는 export 문법: export {내보낼것들}
  
  - export var a = 10;도 가능
  - export와 export default 동시 사용 가능
 */