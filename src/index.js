import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';
function component() {
  var element = document.createElement('div');

 // Lodash是由当前script脚本impor导入进来的
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //将图像添加到我们现有的div
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  console.log(Data);

  return element;
}

document.body.appendChild(component());