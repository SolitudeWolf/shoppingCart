let box = document.getElementsByClassName('box')[0]
let wipper = document.getElementsByClassName('wipper')[0]
let divs = wipper.getElementsByTagName('div')
let pre = document.getElementsByClassName('pre')[0]
let next = document.getElementsByClassName('next')[0]
let lis = document.getElementsByClassName('lis')[0]
let spans = lis.getElementsByTagName('span')
let index = 0

function nextClick() {
    index++
    //给盒子过渡效果，向左移动
    wipper.style.transition = 'all .5s'
    wipper.style.transform = 'translateX(' + (-index * divs[0].offsetWidth) + 'px)';
    //判断如果到了最后一张
    if (index == divs.length - 1) {
        //初始化index=0
        index = 0
        //设置定时器把最后一张变为第一张
        setTimeout(() => {
            wipper.style.transform = 'translate(0,0)';
            wipper.style.transition = 'none'
        }, 500);//定时器时间设置为500毫秒，与过渡时间相等
    }
    //小圆点变化
    for (var i = 0; i < spans.length; i++) {
        //初始化类名
        spans[i].className = ''
        //给相应图片对应的小圆点添加类名修改颜色
        spans[index].className = 'current'
    }
}

next.onclick = nextClick

function preClick() {
    index--
    if (index == -1) {
        //使图片转为最后一张
        wipper.style.transform = 'translateX(' + (-4 * divs[0].offsetWidth) + 'px)';
        wipper.style.transition = 'none'
        //初始化index为倒数第二张
        index = 3
        //初始化点击的过渡效果，使其执行完毕，不设置定时器会事件冲突
        setTimeout(() => {
            wipper.style.transform = 'translateX(' + (-index * divs[0].offsetWidth) + 'px)';
            wipper.style.transition = 'all .5s'
        }, 0);
    } else {
        //正常情况的切换
        wipper.style.transform = 'translateX(' + (-index * divs[0].offsetWidth) + 'px)';
        wipper.style.transition = 'all .5s'
    }
    //小圆点变化
    for (var i = 0; i < spans.length; i++) {
        spans[i].className = ''
        spans[index].className = 'current'
    }
}

pre.onclick = preClick
//自动轮播
var timer = setInterval(nextClick, 4000);

//小圆点的点击事件
for (var i = 0; i < spans.length; i++) {
    //设置自调用函数并传入i值，避免点击时循环已经到了最大值结束
    (function (i) {
        spans[i].onclick = function () {
            //获取当前点击圆点父级元素的所有子元素span
            var allSpans = this.parentNode.children
            //循环遍历，清空所有小圆点的类名
            for (var j = 0; j < allSpans.length; j++) {
                allSpans[j].className = ''
            }
            //给当前点击的小圆点添加类名
            this.className = 'current'
            //将i赋值给index
            index = i
            //设置图片切换到点击的小圆点所对应的图片
            wipper.style.transform = 'translateX(' + (-index * divs[0].offsetWidth) + 'px)';
            wipper.style.transition = 'all .5s'
        }
    })(i)
}
// 移入box，清除定时器
box.onmouseenter = function () {
    clearInterval(timer)
}
// 移出box，重新调用定时器
box.onmouseleave = function () {
    timer = setInterval(nextClick, 4000)
}
let contain_img = document.getElementsByClassName('contain_img')
let img_font = document.getElementsByClassName('img_font')
contain_img.onmouseenter = function () {
    img_font.style.zIndex = '3';
    img_font.style.fontSize = "50px";
}
function shoppingCarClick(){
    window.location.replace("shoppingCar.html");
}
let btn=document.getElementsByClassName("checked");

