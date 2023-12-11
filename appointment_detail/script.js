const isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };
  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };
  let calendar = document.querySelector('.calendar');
  const month_names = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  let month_picker = document.querySelector('#month-picker');
  const dayTextFormate = document.querySelector('.day-text-formate');
  const timeFormate = document.querySelector('.time-formate');
  const dateFormate = document.querySelector('.date-formate');
  
  month_picker.onclick = () => {
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
    dayTextFormate.classList.remove('showtime');
    dayTextFormate.classList.add('hidetime');
    timeFormate.classList.remove('showtime');
    timeFormate.classList.add('hideTime');
    dateFormate.classList.remove('showtime');
    dateFormate.classList.add('hideTime');
  };
  
  const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    
    let currentDate = new Date();
    
    month_picker.innerHTML = month_names[month];
    
    calendar_header_year.innerHTML = year;
    
    let first_day = new Date(year, month);
  
  
  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
  
      let day = document.createElement('div');
  
      if (i >= first_day.getDay()) {
        day.innerHTML = i - first_day.getDay() + 1;

        if (i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add('current-date');
        }
      }
      calendar_days.appendChild(day);
    }
  };
  
  let month_list = calendar.querySelector('.month-list');
  month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
  
    month_list.append(month);
    month.onclick = () => {
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      month_list.classList.replace('show', 'hide');
      dayTextFormate.classList.remove('hideTime');
      dayTextFormate.classList.add('showtime');
      timeFormate.classList.remove('hideTime');
      timeFormate.classList.add('showtime');
      dateFormate.classList.remove('hideTime');
      dateFormate.classList.add('showtime');
    };
  });
  
  (function () {
    month_list.classList.add('hideonce');
  })();
  document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  
  let currentDate = new Date();
  let currentMonth = { value: currentDate.getMonth() };
  let currentYear = { value: currentDate.getFullYear() };
  generateCalendar(currentMonth.value, currentYear.value);

  const todayShowTime = document.querySelector('.time-formate');
  const todayShowDate = document.querySelector('.date-formate');
  
  const currshowDate = new Date();
  const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
  };
  const currentDateFormate = new Intl.DateTimeFormat(
    'en-US',
    showCurrentDateOption
  ).format(currshowDate);
  todayShowDate.textContent = currentDateFormate;
  setInterval(() => {
    const timer = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
      2,
      '0'
    )}:${`${timer.getMinutes()}`.padStart(
      2,
      '0'
    )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
    todayShowTime.textContent = formateTimer;
  }, 1000);

  let scheduleContainer = document.querySelector('.schedule');

// 時間表
let scheduleTable = document.querySelector('.schedule-table');
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// 當周日期
const generateWeekDays = () => {
  for (let i = 1; i <= 7; i++) {
    let dayElement = document.getElementById(`day${i}`);
    let day = new Date(currentDate);
    day.setDate(currentDate.getDate() + i - 1);
    dayElement.textContent = `${daysOfWeek[i - 1]} ${day.getMonth() + 1}/${day.getDate()}`;
  }
};

// 產生時間表
const generateScheduleTable = () => {
  let tbody = scheduleTable.querySelector('tbody');
  tbody.innerHTML = '';

  const hours = [
    '08:00', '09:00', '10:00', '11:00',
    '12:00', '13:00', '14:00', '15:00',
    '16:00', '17:00', '18:00', '19:00',
    '20:00', '21:00', '22:00', '23:00',
    '00:00', '01:00', '02:00'
  ];

  for (let i = 0; i < hours.length; i++) {
    let row = document.createElement('tr');
    let timeCell = document.createElement('td');
    timeCell.textContent = hours[i];
    row.appendChild(timeCell);

    for (let day = 1; day <= 7; day++) {
      let cell = document.createElement('td');
      // 可以添加
      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }

  // 點擊表格
  tbody.addEventListener('click', (event) => {
    if (event.target.tagName === 'TD') {
      const selectedTime = event.target.parentNode.firstChild.textContent;
      const selectedDate = event.target.id; // Use the entire ID
      // 請求獲取後端預約用戶數據
      fetchDataForSelectedTime(selectedDate, selectedTime);
    }
  });
};
  
// 模擬後端請求
const fetchDataForSelectedTime = (selectedDate, selectedTime) => {
  // 解析日期部分
  const year = parseInt(selectedDate.slice(3, 7), 10);
  const month = parseInt(selectedDate.slice(7, 9), 10) - 1; // Month is zero-based
  const day = parseInt(selectedDate.slice(9), 10);

  const selectedDateTime = new Date(year, month, day);
  
  setTimeout(() => {
    const responseData = {
      // 模擬預約用戶
      students: ['Damon', 'Alex', 'Kevin'],
    };

    // 更新頁面顯示數據
    showAvailableStudents(selectedDateTime, selectedTime, responseData.students);
  }, 500); // 模擬請求延遲
};

// 顯示預約用戶
const showAvailableStudents = (selectedDateTime, selectedTime, students) => {
  // 彈出提示框
  alert(`預約 ${selectedTime} 的用戶：\n${students.join(', ')}`);
};


// 顯示時間表
generateWeekDays();
generateScheduleTable();
