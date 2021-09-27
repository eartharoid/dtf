declare module '@eartharoid/dtf' {

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
		constructor(locale?: string)

		/**
		 * Fill a timestamp
		 * @param {string} format - The timestamp format
		 * @param {Date} [date] - Optional Date object
		 * @param {Boolean} [utc] - Use UTC time?
		 * @returns {string}
		 */
		public fill(
			format?: string,
			date?: Date,
			utc?: boolean
		): string

		/**
		 * Get AM/PM
		 * @param {Date} [date] - Optional Date object
		 * @param {Boolean} [utc] - Use UTC time?
		 * @returns {string} "AM" or "PM"
		 */
		public AMPM(
			date?: Date,
			utc?: boolean
		): string

		/**
		 * Append an ordinal suffix to a number
		 * @param {number} number - The number
		 * @returns {string}
		 */
		public suffix(number: number): string

		/**
		 * Convert a 24 hour number to 12 hour
		 * @param {number} h - The hour number
		 * @returns {number}
		 */
		public convert24To12(h: number): number

		private offsetUTC(date: Date): Date
	}

	export default DTF;
}