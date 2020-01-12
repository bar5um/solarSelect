/*
 * solarSelect v1.0.0
 *
 * http://github.com/bar5um/persianDatepicker/
 *
 * Copyright (c) 2020 Bar5um | All rights reserved.
 *
 * Released under the MIT license.
 *
 * Date: Mon Jan 13 2020
*/
var solarSelect = {
        atts: {
                startYear: 1300,
                endYear: 1398,
                months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
                yearsSelectId: "#khorshid-year",
                monthsSelectId: "#khorshid-month",
                daysSelectId: "#khorshid-day"
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
                selectedYear = $(this.atts.yearsSelectId).val();
                selectedMonth = $(this.atts.monthsSelectId).children("option:selected").val();
                $(this.atts.daysSelectId).html("");

                if (selectedMonth == 12 && this.isLeapYear(selectedYear)) {
                        for (i = 1; i <= 30; i++)
                                $(this.atts.daysSelectId).append("<option value='" + i + "'>" + i + "</option>>");
                } else if (selectedMonth == 12) {
                        for (i = 1; i <= 29; i++)
                                $(this.atts.daysSelectId).append("<option value='" + i + "'>" + i + "</option>>");
                } else if (selectedMonth > 6) {
                        for (i = 1; i <= 30; i++)
                                $(this.atts.daysSelectId).append("<option value='" + i + "'>" + i + "</option>>");
                } else if (selectedMonth < 7) {
                        for (i = 1; i <= 31; i++)
                                $(this.atts.daysSelectId).append("<option value='" + i + "'>" + i + "</option>>");
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
                $(this.atts.monthsSelectId).change(function() {
                        self.updateDays();
                });

                $(this.atts.yearsSelectId).change(function() {
                        self.updateDays();
                });
        }
};