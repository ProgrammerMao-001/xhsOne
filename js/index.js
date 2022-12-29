var fansile = document.querySelector('.tab-group');
var list = document.querySelectorAll('.tab-group li');
var four = document.querySelector('#four');
var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');

for (var i = 0; i < list.length; i++) {
	list[i].onclick = function() {
		// this:表示当前点击的那个li元素。
		// alert(this.innerHTML); //获取当前点击的li里面的内容
		// fansile.removeChild(this);
		// this.classList.add('on');
		list[0].onclick = function() {
			list[0].classList.add('on');
			list[1].classList = [];
			list[2].classList = [];
			list[3].classList = [];
			four.style.display = 'block';
			one.style.display = 'none';
			two.style.display = 'none';
			three.style.display = 'none';
		}
		list[1].onclick = function() {
			list[1].classList.add('on');
			list[0].classList = [];
			list[2].classList = [];
			list[3].classList = [];
			one.style.display = 'block';
			four.style.display = 'none';
			two.style.display = 'none';
			three.style.display = 'none';
		}
		list[2].onclick = function() {
			list[2].classList.add('on');
			list[1].classList = [];
			list[0].classList = [];
			list[3].classList = [];
			two.style.display = 'block';
			one.style.display = 'none';
			four.style.display = 'none';
			three.style.display = 'none';
		}
		list[3].onclick = function() {
			list[3].classList.add('on');
			list[1].classList = [];
			list[2].classList = [];
			list[0].classList = [];
			three.style.display = 'block';
			one.style.display = 'none';
			two.style.display = 'none';
			four.style.display = 'none';
		}
	}
}

// 关闭客服窗口
var kfClose = document.getElementById('kf-close');
kfClose.onclick = function() {
	var kfBox = document.querySelector('.st-kfBox');
	kfBox.style.display = 'none';
}

// 返回顶部的事件
var backTop = document.getElementById('kf-backTop');
backTop.onclick = function() {
	document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function jumpToSousuo(name) {
	console.log(name);
	// location.pathname = '/xhsOne/page/sousuo.html?name =' + name;
	window.location.href = `/xhsOne/page/sousuo.html?name = ${name}`
}
