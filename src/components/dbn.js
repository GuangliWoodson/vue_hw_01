function dbn(func, wait) {
	let timeout;

	return function () {
			let context = this; // 保存this指向
			let args = arguments; // 拿到event对象

			clearTimeout(timeout)
			timeout = setTimeout(function(){
					func.apply(context, args)
			}, wait);
	}
}

dbn()