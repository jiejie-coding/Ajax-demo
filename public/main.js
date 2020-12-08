
// console.log("nihao")

getXmls.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get","/3.xml");
  request.onreadystatechange = () => {
    if(request.readyState == 4) {
      if(request.status >= 200 && request.status < 300) {
        
          console.log(request.responseXML);
      }
      else {
        console.log("fail");
      }
    }
  }
  request.send();
}

getJson.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get","/4.json");
  request.onreadystatechange = () => {
    if(request.readyState == 4) {
      if(request.status >= 200 && request.status < 300) {
        console.log(JSON.parse(request.response));
      }
    }
  }
  request.send();
}
getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get",'/2.html');
  request.onload = () => {
    console.log("ok");
    const div = document.createElement('div');
    div.innerHTML = request.response;
    document.body.append(div)
  }
  request.onerror = () => {
    console.log("no")
  }
  request.send();
}
addJss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("get",'/1.js');
  request.onload = () => {
    console.log("ok");
    const script = document.createElement('script');
    script.innerHTML = request.response;
    document.body.append(script)
  }
  request.onerror = () => {
    console.log("no")
  }
  request.send();
}

getCss.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/style.css");
  request.onreadystatechange = ()=> {
    if(request.readyState == 4) {
      if(request.status >= 200 && request.status < 300) {
          const style = document.createElement('style');
          style.innerHTML = request.response;
          document.head.append(style);
      }
      else {
        console.log("fail");
      }
    }
  }
  // request.onload = () => {
  //   const style = document.createElement('style');
  //   style.innerHTML = request.response;
  //   document.head.append(style);
  // }
  // request.onerror = () => {
  //   console.log("失败了");
  // }
  request.send();

}