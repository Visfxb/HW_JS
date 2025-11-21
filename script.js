const holidays = [
  // Листопад 2025 року
  new Date(2025, 10, 21),

  // Грудень 2025 року
  new Date(2025, 11, 6),
  new Date(2025, 11, 6),
  new Date(2025, 11, 24),
  new Date(2025, 11, 25),

  // Січень 2026 року
  new Date(2026, 0, 1),
  new Date(2026, 0, 6),
  new Date(2026, 0, 22),
  new Date(2026, 0, 29)
]

const months = [
  "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
  "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
]

function addWeek(firstDayOfWeek, dayOfMonth) {
    let week = document.createElement(`tr`)

    for (let i = 0; i < 7; i++) {

        let workOfWeekDay = firstDayOfWeek.getDay() == 6 || firstDayOfWeek.getDay() == 0 ? "weekDay" : "workDay"
        let isThisMonth = firstDayOfWeek.getMonth() == dayOfMonth.getMonth() ? "thisMonth" : "notThisMonth"
        let today = (firstDayOfWeek.getFullYear() == new Date().getFullYear()) && (firstDayOfWeek.getMonth() == new Date().getMonth()) && (firstDayOfWeek.getDate() == new Date().getDate()) ? " today" : ""
        let isHoliday = ""
        for (let i = 0; i < holidays.length; i++)
            if (holidays[i].getMonth() == firstDayOfWeek.getMonth() &&  holidays[i].getDate() == firstDayOfWeek.getDate())
                isHoliday = " holiday"
        
        week.innerHTML += `<td class = "${workOfWeekDay} ${isThisMonth}${isHoliday}${today}">${firstDayOfWeek.getDate()}</td>`

        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1)
    }
    document.getElementById(`calendarBody`).appendChild(week)
}

function addCalendar(dayOfMonth = new Date()) {
    document.body.innerHTML += `
    <div class="calendar">
        <h1>${months[dayOfMonth.getMonth()]} ${dayOfMonth.getFullYear()}</h1>

        <table>
            <thead>
                <td class="workDay">ПН</td>
                <td class="workDay">ВТ</td>
                <td class="workDay">СР</td>
                <td class="workDay">ЧТ</td>
                <td class="workDay">ПТ</td>
                <td class="weekDay">СБ</td>
                <td class="weekDay">НД</td>
            </thead>
            <tbody id = "calendarBody">

            </tbody>
        </table> 
    </div>
    `
    let firstDay = new Date(dayOfMonth.getFullYear(), dayOfMonth.getMonth(), 1)
    if (firstDay.getDay() != 1)
        firstDay.setDate(firstDay.getDate() - firstDay.getDay() + 1)

    while (firstDay < new Date(dayOfMonth.getFullYear(), dayOfMonth.getMonth() + 1, 1))
        addWeek(firstDay, dayOfMonth)

}

addCalendar()