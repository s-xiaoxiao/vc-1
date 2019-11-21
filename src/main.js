let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `/*
*你好,我叫笑笑
*接下来我要演示一下逐步制作太极图
*首先我要准备一个div
*/
#div1{
  border:1px solid red;
  width:200px;
  height:200px;
}
/*
*首先,把div变成一个圆
*/
#div1{
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border:none
}
/*
*八卦是阴阳形成的
*一黑一白
*/
#div1{
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 65%, rgba(255,255,255,1) 70%, rgba(255,255,255,1) 100%);
}
/*
阴阳
*/
#div1::after{
  width:100px;
  height:100px;
  border:1px solid red;
  top:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background:white;
  border:none;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
#div1::before{
  width:100px;
  height:100px;
  border:1px solid red;
  bottom:0;
  left:50%;
  transform:translateX(-50%);
  border-radius:50%;
  background:black;
  border:none;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
`;

let string2 = "";

let n = 0;

let step = () => {
  setTimeout(() => {
    if (n <= string.length - 1) {
      //回车空格替换成HTML元素内容中可识别的回车空格
      string2 +=
        string[n] === "\n" ? "<br>" : string[n] === " " ? "&nbsp" : string[n];

      n += 1;
      html.innerHTML = string2; //输出string2
      style.innerHTML = string.substring(0, n);
      window.scrollTo(0, 99999);
      demo.scrollTo(0, 99999);
      step();
    }
  }, 0);
};

step();
