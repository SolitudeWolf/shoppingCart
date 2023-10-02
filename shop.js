let products = [
    {tradeName: '香水', img: "picture/trade2.jpg", price: 189, tradeNum: 0, is_checked: false},
    {tradeName: '香奈儿', img: "picture/trade3.jpg", price: 890, tradeNum: 0, is_checked: false},
    {tradeName: '红酒', img: "picture/trade1.jpg", price: 380, tradeNum: 0, is_checked: false},
    {tradeName: '项链', img: "picture/trade4.jpg", price: 168, tradeNum: 0, is_checked: false},
]
let tbody = document.querySelector('tbody');
let checkAll = document.querySelector('thead tr th span');
let bodyCheck = document.querySelectorAll('tbody tr td input');
let flag = 1;
init();
//全选
checkAll.addEventListener('click', function () {
    if (flag) {
        products.forEach(item => {
            item.is_checked = true;
        })
        init();
        flag = 0;
    } else {
        products.forEach(item => {
            item.is_checked = false;
        })
        init();
        flag = 1;
    }
})



//渲染页面
function init() {
    tbody.innerHTML = products.reduce((s, item) =>
            s + `
            <tr>
        <td><input  type = "checkbox" ${item.is_checked ? 'checked' : ''}></td>
    <td><span>${item.tradeName}</span></td>
    <td><img src="${item.img}" alt=""></td>
    <td><span class="price">${item.price}&nbsp;元</span></td>
    <td><span class="reduceBtn">-</span><span class="tradeNum">${item.tradeNum}</span><span class="addBtn">+</span></td>
    <td><span class="subPrice">${item.tradeNum * item.price}&nbsp;元</span></td>
    <td><span class="deleteBtn">删除</span></td>
</tr>       `
        , '')
    All();
    allCheck();
    everyCheck();
    subtotal();
}

function All() {
    let num = document.querySelector('tfoot .totalNum');
    let price = document.querySelector('tfoot .totalPrice')
    let allNum = 0, allPrice = 0;
    products.forEach(item => {
        allNum += item.is_checked ? item.tradeNum : 0;
        allPrice += item.is_checked ? item.price * item.tradeNum : 0;
    })

    num.innerHTML = allNum;
    price.innerHTML = allPrice;
}

//判断全选状态
function allCheck() {
    checkAll.checked = products.every(item => item.is_checked);
}

//绑定商品的选中事件 (反选)
function everyCheck() {
    let check = [...tbody.querySelectorAll('input')];
    check.forEach((item, index) => {
        item.onchange = function () {
            products[index].is_checked = this.checked;
            init();
        }
    })
}
function subtotal() {
    let add = tbody.querySelectorAll('.addBtn');
    let red = tbody.querySelectorAll('.reduceBtn');
    let del = tbody.querySelectorAll('.deleteBtn');
    products.forEach((item, index) => {
        add[index].onclick = function () {
            item.tradeNum += 1;
            if (item.tradeNum > 99) {
                item.tradeNum = 99;
            }
            init();
        }
        red[index].onclick = function () {
            item.tradeNum -= 1;
            if (item.tradeNum < 0) {
                item.tradeNum = 0;
            }
            init();
        }
        del[index].onclick = function () {
            item.tradeNum = 0;
            init();
        }
    })
}
function returnClick(){
    window.location.replace("mainWindow.html")
}