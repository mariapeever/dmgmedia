const articleBody = document.getElementsByClassName("article-body")[0];
// calc pos in px
const height = Math.round(articleBody.offsetHeight);
const quarter = Math.round(height * .25);
const half = Math.round(height * .5);

let reachedQuarter = false;
let reachedHalf = false;
let reachedHeight = false;

// styles
const style = document.createElement("style");
style.innerHTML = ".notify{background-color:#000;color:#ccc;font-size:16px;line-height:40px;position:fixed;bottom:0;left:0;width:100%;padding:0 20px;}.notify-close::before{content:'x';display:block;position:absolute;top:0;right:3.5%;cursor:pointer;color:#ccc;font-size:14px;padding:0 5px;}";
document.head.appendChild(style);
// notification element
const notification = document.createElement("p");
notification.setAttribute("class", "notify");

const span = document.createElement("span");
span.setAttribute("class", "notify-close");
span.addEventListener("click", () => document.body.removeChild(notification));

/**
 * Notify
 * @param val - current pos
 * @return void
 **/ 
function notify(val) {
	// message
	notification.innerHTML = `Read: ${val}%`;
	notification.appendChild(span);
	document.body.appendChild(notification);
}

// add event
document.addEventListener("scroll", (event) => {
	// handle event
	const pos = window.scrollY;
	if (pos >= quarter && !reachedQuarter) {
		reachedQuarter = true;
		notify('25');
	} else if (pos >= half && !reachedHalf) {
		reachedHalf = true;
		notify('50');
	} else if (pos >= height && !reachedHeight) {
		reachedHeight = true;
		notify('100');
	}
});