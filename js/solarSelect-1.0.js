/*
 * solarSelect v2.0.0
 *
 * http://github.com/bar5um/persianDatepicker/
 *
 * Copyright (c) 2021 Bar5um | All rights reserved.
 *
 * Released under the MIT license.
 *
 * Date: Fri Dec 3 2021
*/
var solarSelect = {
        atts: {
                startYear: 1300,
                endYear: 1398,
                months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                yearsSelectId: "khorshid-year",
                monthsSelectId: "khorshid-month",
                daysSelectId: "khorshid-day"
        },
        isLeapYear(year) {
                var ary = [0, 4, 8, 12, 16, 20, 24, 29, 33, 37, 41, 45, 49, 53, 57, 62, 66, 70, 74, 78, 82, 86, 90, 95, 99, 103, 107, 111, 115, 119];
                var b = year % 128;
                if (ary.includes(b)) {
                        return true;
                }
                return false;
        },
        updateDays() {
                selectedYear = document.getElementById(this.atts.yearsSelectId).value;
                selectedMonth = document.getElementById(this.atts.monthsSelectId).value;
                daysInput = document.getElementById(this.atts.daysSelectId);
                daysInput.innerHTML = '';

                if (selectedMonth == 12 && this.isLeapYear(selectedYear)) {
                        for (i = 1; i <= 30; i++)
                                daysInput.innerHTML += "<option value='" + i + "'>" + i + "</option>>";
                } else if (selectedMonth == 12) {
                        for (i = 1; i <= 29; i++)
                                daysInput.innerHTML += "<option value='" + i + "'>" + i + "</option>>";
                } else if (selectedMonth > 6) {
                        for (i = 1; i <= 30; i++)
                                daysInput.innerHTML += "<option value='" + i + "'>" + i + "</option>>";
                } else if (selectedMonth < 7) {
                        for (i = 1; i <= 31; i++)
                                daysInput.innerHTML += "<option value='" + i + "'>" + i + "</option>>";
                }
        },
        printYears() {
                var yearsHTML = "";
                for (i = this.atts.endYear; i >= this.atts.startYear; i--)
                        yearsHTML += "<option>" + i + "</option>";
                document.getElementById('khorshid-year').innerHTML = yearsHTML;
        },
        printMonths() {
                var monthsHTML = "";
                for (i = 0; i < 12; i++) {
                        monthsHTML += "<option value='" + (i + 1) + "'>" + this.atts.months[i] + "</option>";
                }
                document.getElementById('khorshid-month').innerHTML = monthsHTML;
        },
        init(atts) {
                if (!(typeof atts === 'undefined')) {
                        this.atts = atts;
                }
                this.printYears();
                this.printMonths();
                this.updateDays();
                var self = this;
                document.getElementById(this.atts.monthsSelectId).addEventListener("change", function(){self.updateDays()});
                document.getElementById(this.atts.yearsSelectId).addEventListener("change", function(){self.updateDays()});
        }
};
