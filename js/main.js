import {intervalToDuration, format, formatDuration} from "date-fns";

inputDate.setAttribute("min", format(new Date(),"yyyy-MM-dd"));
let outputElement = document.querySelector(".output__text");
button.onclick = countdown;

function countdown(){
	let todayDate = Date.now();
	let inputValue = inputDate.value;
	let resultObject = intervalToDuration({
		start : new Date(todayDate),
		end : new Date(inputValue)
	});
	let result = formatDuration(resultObject, {format: ['years', 'days', 'hours'], zero: true });
	outputElement.innerHTML = result;
}
