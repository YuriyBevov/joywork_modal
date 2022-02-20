import noUiSlider from 'nouislider';

const rangeSlider = document.getElementById('range');

if (rangeSlider) {
    let min = Number(range.getAttribute('data-min'));
    let max = Number(range.getAttribute('data-max'));

	noUiSlider.create(rangeSlider, {
    start: [min, max],
		connect: true,
		step: 1,
        range: {
            'min': [min],
            'max': [max]
        }
	});

	const rangeFrom = document.getElementById('rangeFrom');
	const rangeTo = document.getElementById('rangeTo');
	const inputs = [rangeFrom, rangeTo];

	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle]);
	});

	const setRangeSlider = (i, value) => {
		let arr = [null, null];
		arr[i] = value;

		rangeSlider.noUiSlider.set(arr);
	};

	inputs.forEach((el, index) => {
		el.addEventListener('change', (evt) => {
			setRangeSlider(index, evt.currentTarget.value);
		});
	});
}