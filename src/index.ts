/**
 * @module @eartharoid/dtf
 * @author eartharoid <contact@eartharoid.me>
 * @copyright 2021 Isaac Saunders (eartharoid)
 * @license MIT
 */

/* eslint-disable sort-keys */

'use strict';

interface PlaceholderMap {
	[placeholder: string]: (date: Date, locale?: string) => string
}

class DTF {
	public locale: string;
	private ordinals: Intl.PluralRules;
	private placeholders: PlaceholderMap;

	/**
	 * Create a new DTF instance
	 * @param {string} locale - The locale to use for this DTF instance
	 */
	constructor(locale = 'en') {
		this.locale = locale;
		this.ordinals = new Intl.PluralRules(this.locale, { type: 'ordinal' });
		this.placeholders = {
			YYYY: (date, locale) => date.toLocaleString(locale, { year: 'numeric' }),
			YY: (date, locale) => date.toLocaleString(locale, { year: '2-digit' }),
			MMMM: (date, locale) => date.toLocaleString(locale, { month: 'long' }),
			MMM: (date, locale) => date.toLocaleString(locale, { month: 'short' }),
			MM: (date, locale) => date.toLocaleString(locale, { month: '2-digit' }),
			M: (date, locale) => date.toLocaleString(locale, { month: 'numeric' }),
			DDDD: (date, locale) => date.toLocaleString(locale, { weekday: 'long' }),
			DDD: (date, locale) => date.toLocaleString(locale, { weekday: 'short' }),
			DD: (date, locale) => date.toLocaleString(locale, { day: '2-digit' }),
			D_: date => this.suffix(date.getDate()),
			D: (date, locale) => date.toLocaleString(locale, { day: 'numeric' }),
			HH: (date, locale) => date.toLocaleString(locale, {
				hour: '2-digit',
				hour12: false
			}),
			hh: date => this.convert24To12(date.getHours()).toString().padStart(2, '0'), // Date#toLocaleString() appends AM/PM which is not wanted
			h: date => this.convert24To12(date.getHours()).toString(),
			mm: (date, locale) => date.toLocaleString(locale, { minute: '2-digit' }).padStart(2, '0'),
			m: (date, locale) => date.toLocaleString(locale, { minute: 'numeric' }),
			ss: (date, locale) => date.toLocaleString(locale, { second: '2-digit' }).padStart(2, '0'),
			s: (date, locale) => date.toLocaleString(locale, { second: 'numeric' }),
			SSS: date => date.getMilliseconds().toString().padStart(3, '0'),
			AMPM: date => this.AMPM(date)
		};
	}

	/**
	 * Fill a timestamp
	 * @param {string} format - The timestamp format
	 * @param {Date} [date] - Optional Date object
	 * @param {boolean} [utc] - Use UTC time?
	 * @returns {string}
	 */
	public fill(format = 'HH:mm:ss', date = new Date(), utc = false): string {
		let timestamp = format;
		if (utc) date = this.offsetUTC(date);
		for (const placeholder in this.placeholders) {
			const regex = new RegExp(`(?<!\\w)${placeholder}(?!\\w)`, 'gm');
			timestamp = timestamp.replace(regex, this.placeholders[placeholder](date, this.locale));
		}
		return timestamp;
	}

	/**
	 * Get AM/PM
	 * @param {Date} [date] - Optional Date object
	 * @param {boolean} [utc] - Use UTC time?
	 * @returns {string} "AM" or "PM"
	 */
	public AMPM(date = new Date(), utc = false): string {
		const hours = utc ? date.getUTCHours() : date.getHours();
		return hours >= 12 ? 'PM' : 'AM';
	}

	/**
	 * Append an ordinal suffix to a number
	 * @param {number} number - The number
	 * @returns {string}
	 */
	public suffix(number: number): string {
		const suffixes = {
			few: 'rd',
			one: 'st',
			other: 'th',
			two: 'nd'
		};
		const suffix = suffixes[this.ordinals.select(number)];
		return number + suffix;
	}

	/**
	 * Convert a 24 hour number to 12 hour
	 * @param {number} h - The hour number
	 * @returns {number}
	 */
	public convert24To12(h: number): number {
		return h > 12 ? h - 12 : h;
	}

	/**
	 * Offset a date so `before.getUTCHours() === after.getHours()`.
	 * @param {Date} date - The date to offset
	 * @returns {Date} **Warning:** don't use UTC methods on this date as it will be wrong
	 */
	private offsetUTC(date: Date): Date {
		return new Date(date.getTime() + (date.getTimezoneOffset() * 60000));
	}
}

module.exports = DTF;