const month_name = ["January", "Febrary", "March", "April", "May", "June", "July", "Auguest", "September", "October", "November", "December"];

const prev = document.getElementById("prev");
const next = document.getElementById("next");

const my_date = new Date('2022/01/01');
let my_year = my_date.getFullYear();
let my_month = my_date.getMonth();
let my_day = my_date.getDate();

const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

span.addEventListener('click', () => {
	modal.classList.remove("show");
	modal.classList.add("hide");
});

window.addEventListener('click', (event) => {
	if (event.target == modal) {
		modal.classList.remove("show");
		modal.classList.add("hide");
	}
});

modal.addEventListener('click', (event) => {
	if (event.target == modal) {
		modal.classList.remove("show");
		modal.classList.add("hide");
	}
})

function dayStart(month, year) {
	return new Date(year, month, 1).getDay();
}

function daysMonth(month, year) {
	return new Date(year, (month + 1), 0).getDate();
}

function refreshDate() {
	const events = {
		'2022-1-23': {
			'name': '新竹海邊遊',
			'des': '我們一起去海邊走走逛逛，雖然最後飄雨，但是心暖暖的',
			'image': '../static/images/IMG_6242.jpg'
		},
		'2022-2-5': {
			'name': '司馬庫斯櫻花行',
			'des': '第一次介紹朋友給你認識，其實蠻緊張的，很怕你會不喜歡他們，還好結果很讚',
			'image': ''
		},
		'2022-2-22': {
			'name': '交往紀念日',
			'des': '這天因為你無心的一句話，讓我成功取得你的芳心',
			'image': ''
		},
		'2022-3-12': {
			'name': '高空彈跳',
			'des': '很謝謝你陪我做我想要做的事情～',
			'image': ''
		},
		'2022-3-25': {
			'name': '生日蛋糕',
			'des': '百忙之中抽空幫我買蛋糕，還自己偷偷騎到平鎮幫我慶生，謝謝～～',
			'image': ''
		},
		'2022-4-3': {
			'name': '阿里山行',
			'des': '總是有你幫我拍美美的照片，雖然我們在後面都很不舒服...',
			'image': ''
		},
		'2022-4-11': {
			'name': '北德拉曼',
			'des': '第一次跟你一起爬山，也是第一次認識你的朋友，很好玩！',
			'image': ''
		}

	};

	const holder = document.getElementById("days");
	holder.innerHTML = '';
	const totalDay = daysMonth(my_month, my_year);
	const firstDay = dayStart(my_month, my_year);

	for (let i = 1; i < firstDay; i++) {
		const li = document.createElement('li');
		holder.appendChild(li);
	}



	for (let i = 1; i <= totalDay; i++) {
		let event;
		const li = document.createElement('li');
		if ((i < my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) || my_year < my_date.getFullYear() || (my_year == my_date.getFullYear() && my_month < my_date.getMonth())) {
			li.setAttribute('class', 'lightgrey');
		} else if (i == my_day && my_year == my_date.getFullYear() && my_month == my_date.getMonth()) {
			// li.setAttribute('class', 'green greenbox');
		} else {
			li.setAttribute('class', 'darkgrey');
		}

		if (event = events[`${my_year}-${my_month + 1}-${i}`]) {
			li.classList.add('event');
			li.addEventListener('click', () => {
				modal.querySelector('h1').innerHTML = event.name
				modal.querySelector('p').innerHTML = event.des
				modal.querySelector('img').src = event.image
				modal.classList.remove("hide");
				modal.classList.add("show");
			})
		}
		li.innerHTML = i;
		holder.appendChild(li);
		const ctitle = document.getElementById("calendar-title");
		const cyear = document.getElementById("calendar-year");
		ctitle.innerHTML = month_name[my_month];
		cyear.innerHTML = my_year;
	}
}

prev.onclick = function (e) {
	e.preventDefault();
	my_month--;
	if (my_month < 0) {
		my_year--;
		my_month = 11;
	}
	refreshDate();
}
next.onclick = function (e) {
	e.preventDefault();
	my_month++;
	if (my_month > 11) {
		my_year++;
		my_month = 0;
	}
	refreshDate();
}

refreshDate();