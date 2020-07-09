const tsumamiValue = (() => {
	const val = Object.create(null);
	Object.defineProperty(val, 'value', {
		set: (value) => {
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
	mode:"nomal"
}

const tsumami = new Tsumami(option);