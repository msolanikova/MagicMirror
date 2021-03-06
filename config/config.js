﻿/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.235"],

	language: 'en',
	timeFormat: 24,
	units: 'metric',

	modules: [
		{
			module: 'alert',
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		/*{
			module: 'calendar',
			header: 'US Holidays',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'webcal://www.calendarlabs.com/templates/ical/US-Holidays.ics'
					}
				]
			}
		},*/
		/*{
			module: 'compliments',
			position: 'lower_third'
		},*/
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Kosice',
				locationID: '724443',  //ID from http://www.openweathermap.org
				appid: 'be60c2f6d060e6327a6afed2e510418f',
                useBeaufort: false
			}
		},
		{
			module: 'weatherforecast',
			position: 'bottom_left',
			header: 'Predpoveď pre',
			config: {
				location: 'Kosice',
				locationID: '724443',  //ID from http://www.openweathermap.org
				appid: 'be60c2f6d060e6327a6afed2e510418f',
				fadePoint: 1
			}
		},
		{
			module: 'multinewsfeed',
			position: 'bottom_right',
			config: {
				feeds: [
					{
						//title: "New York Times",
						title: "sme.sk",
						//url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
						url: "http://rss.sme.sk/rss/rss.asp?id=frontpage",
                        //url: "https://www.zive.cz/rss/sc-47/",
						//url: "http://www.spiegel.de/schlagzeilen/index.rss",
						//url: "http://spravy.pravda.sk/rss/xml/s-obrazkom/",
						encoding: 'UTF-8'
					}
				],
				showDescription: false,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
