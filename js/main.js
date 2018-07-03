// console.log("connected");
var user = {
	name: "Nicole Duff",
	image: "img/nicole.jpg",
	progress: 0.95
}

var courseArr = [{
		title: "Inside Your Thoughts",
		subject: "Psychology"
	}, {
		title: "World War II",
		subject: "History"
	}, {
		title: "Intro to HTML",
		subject: "Computer Science"
	}];

var activityArr = [{
		title: "Completed PSY 101",
		subject: "Submitted for review 1/11/18 at 10:1 AM"
	}, {
		title: "Completed HIST201",
		subject: "Submitted for review 1/11/18 at 9:00AM"
	}, {
		title: "Enrolled in Intro to HTML",
		subject: "Cohort begins 3/08/18"
	}];

var accountArr = [{
		title: "Enrolled since: ",
		subject: "8/22/2017"
	}, {
		title: "Enrollment Status: ",
		subject: "Active Student"
	}, {
		title: "Department",
		subject: "Undecided"
	}];

function setUser(user, image, name, id) {
	image.src = user.image;
	image.alt = user.name;
	name.innerText = user.name;
	id.innerText = "User #: " + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10); 
}
setUser(user, document.getElementById("userImg"), document.getElementById("username"), document.getElementById("userId"));

function formatTime(time) {
	if(time < 10) {
		return "0" + time;
	} else {
		return time;
	}
}

function getTime() {
	var now = new Date();
	var hours = formatTime(now.getHours());
	var minutes = formatTime(now.getMinutes());
	var seconds = formatTime(now.getSeconds());
	var month = formatTime(now.getMonth() + 1);
	var date = formatTime(now.getDate());
	var year = now.getFullYear() - 2000;
	return month + "/" + date + "/" + year + "   |   " + hours + ":" + minutes + ":" + seconds
}

function setTime(el) {
	el.style.whiteSpace = "pre"
	el.innerText = getTime();
	var elem = el;
	setTimeout(function() {
		return setTime(elem);
	}, 1000)
}
setTime(document.getElementById("time"));

function setActive(arr, title, list, str) {
	title.innerText = str
	list.innerHTML = "";
	for(var i = 0; i < arr.length; i++) {
		list.innerHTML += "<li><h4>" + arr[i].title + "</h4><p>" + arr[i].subject + "</p></li>"
	}
}
setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses: ")

function setProgress(user, bar, percent) {
	bar.style.width = user.progress * 100 + "%";
	percent.innerText = user.progress * 100 + "%";
}
setProgress(user, document.getElementById("progress-inner"), document.getElementById("progress-percent"))

// the impure functions
function showCourses() {
	setActive(courseArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Courses: ")
}
function showActivity() {
	setActive(activityArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Recent Activity: ")	
}
function showAccount() {
	setActive(accountArr, document.getElementById("active-title"), document.getElementById("active-list"), "My Account: ")	
}
function expandMenu() {
	if(document.getElementsByTagName("main")[0].style.width) {
		document.getElementsByTagName("main")[0].style = "";
		document.getElementsByTagName("nav")[0].className = "";
	} else {
		document.getElementsByTagName("main")[0].style = "padding: 30px 5vw;; width: 75vw";
		document.getElementsByTagName("nav")[0].className = "open";
	}
}