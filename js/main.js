var bar = document.getElementById('progressBar');

function fillProgressBar() {
	bar.style.border = "0.5px solid red";
	var barWidth = 0;
	var timer = setInterval(function() {
	  	bar.style['background-color'] = 'red';
	    barWidth += 5;
	    bar.style.width = barWidth.toString() + 'px';
	    if(bar.style.width === '400px') {
	    	clearInterval(timer);
	    	alert('Process Complete');
	    }
    }, 50)
}

document.querySelector('button').addEventListener('click', fillProgressBar)