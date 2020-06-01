const tsumamiValue = (() => {
	const val = Object.create(null);
	Object.defineProperty(val, 'value', {
		set: (value) => {
			//ここに処理を書く
			document.getElementById("value").innerHTML = Math.round(value);
			document.getElementById("wrap").style.opacity = value/100;
		}
	});
	return val;
})();

const option = {
	obj: tsumamiValue,
	size: 200,
	meterSize: 20,
	value:50
}

const tsumami = new Tsumami(option);