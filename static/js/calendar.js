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

// document.addEventListener('swiped-left', function (e) {
// 	console.log('left')
// });

// document.addEventListener('swiped-right', function (e) {
// 	console.log('right')
// });

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
			'image': '../static/images/2022123.jpg'
		},
		'2022-2-5': {
			'name': '司馬庫斯櫻花行',
			'des': '第一次介紹朋友給你認識，其實蠻緊張的，很怕你會不喜歡他們，還好結果很讚',
			'image': '../static/images/202225.jpg'
		},
		'2022-2-22': {
			'name': '交往紀念日',
			'des': '這天因為你無心的一句話，讓我成功取得你的芳心',
			'image': ''
		},
		'2022-3-12': {
			'name': '高空彈跳',
			'des': '很謝謝你陪我做我想要做的事情～',
			'image': '../static/images/2022312.jpg'
		},
		'2022-3-25': {
			'name': '生日蛋糕',
			'des': '百忙之中抽空幫我買蛋糕，還自己偷偷騎到平鎮幫我慶生，謝謝～～',
			'image': '../static/images/2022325.png'
		},
		'2022-4-3': {
			'name': '阿里山行',
			'des': '總是有你幫我拍美美的照片，雖然我們在後面都很不舒服...',
			'image': '../static/images/202243.jpg'
		},
		'2022-4-11': {
			'name': '北德拉曼',
			'des': '第一次跟你一起爬山，也是第一次認識你的朋友，很好玩！',
			'image': '../static/images/2022411.jpg'
		},
		'2022-5-1': {
			'name': '大壩之旅',
			'des': '第一次的百岳，第一次跟你在外面過夜，好玩！',
			'image': '../static/images/202251.jpg'
		},
		'2022-5-11': {
			'name': '第一次敷面膜',
			'des': '想盡辦法讓我的臉變好',
			'image': '../static/images/2022511.jpg'
		},
		'2022-5-18': {
			'name': '李大廚準備美食',
			'des': '厲害的老婆總是煮好吃的給我吃',
			'image': '../static/images/2022518.jpg'
		},
		'2022-5-28': {
			'name': '你的吻',
			'des': '',
			'image': '../static/images/2022528.jpg'
		},
		'2022-5-29': {
			'name': '合歡石門',
			'des': '總是很希歡跟你去爬山',
			'image': '../static/images/2022529.jpg'
		},
		'2022-7-9': {
			'name': '巴陵鐵塔',
			'des': '第一次晚上載你騎這麼遠，不過看到星星應該值得',
			'image': '../static/images/202279.jpg'
		},
		'2022-7-15': {
			'name': '夏夕夏景',
			'des': '第一次跟你的家人吃飯，雖然沒有爸爸媽媽，但是還是有點緊張',
			'image': '../static/images/2022715.jpg'
		},
		'2022-8-13': {
			'name': '滑雪的寶貝',
			'des': '認真的女人最美麗',
			'image': '../static/images/2022813.jpg'
		},
		'2022-8-28': {
			'name': '武嶺行',
			'des': '陪我完成如此艱鉅的任務，雖然沒上到武嶺亭。下次一定可以！',
			'image': '../static/images/2022828.jpg'
		},
		'2022-9-4': {
			'name': '泳渡日月潭',
			'des': '我們真的很厲害，在颱風天完成這項壯舉！',
			'image': '../static/images/202294.jpg'
		},
		'2022-9-30': {
			'name': '興南公演',
			'des': '算是陪我回娘家？雖然讓你有點尷尬，但是我一定會改進的！',
			'image': '../static/images/2022930.jpg'
		},
		'2022-10-28': {
			'name': '萬聖節',
			'des': '最可愛的無臉男',
			'image': '../static/images/20221028.jpg'
		},
		'2022-11-20': {
			'name': '宜蘭小旅行',
			'des': '感謝厲害的老婆當司機，我們要走遍全世界',
			'image': '../static/images/20221120.jpg'
		},
		'2022-12-11': {
			'name': '尖石露營',
			'des': '懶懶懶的露營，好吃好玩好睡',
			'image': '../static/images/20221211.jpg'
		},
		'2022-12-24': {
			'name': '聖誕大餐',
			'des': '終於吃到心心念念的小舊閣樓ＸＤ',
			'image': '../static/images/20221224.jpg'
		},
		'2023-2-11': {
			'name': '歐萊德春酒',
			'des': '最美里的春酒主持，完成任務～',
			'image': '../static/images/2023211.jpg'
		},
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
				modal.querySelector('.modal-date').innerHTML = `${my_year}/${my_month + 1}/${i}`
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