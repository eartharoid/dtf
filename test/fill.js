const locale = 'en-GB';

const DTF = require('../dist');
const dtf = new DTF(locale);

const test = require('ava');

test.beforeEach(t => {
	t.context.now = new Date();
});

test('fill()', t => {
	const HH = t.context.now.getHours();
	const mm = t.context.now.getMinutes().toString().padStart(2, '0');
	const ss = t.context.now.toLocaleString('en-GB', { second: '2-digit' }).padStart(2, '0');
	const expected = `${HH}:${mm}:${ss}`;
	const actual = dtf.fill();
	actual.length === expected.length ? t.pass() : t.fail();
});

test('fill(format)', t => {
	const expected = t.context.now.getFullYear().toString();
	const format = 'YYYY';
	const actual = dtf.fill(format);
	t.is(actual, expected, format);
});

test('fill(format, date)', t => {
	const expected = '25/12/2004';
	const format = 'DD/MM/YYYY';
	const date = new Date('December 25, 2004 15:00:00');
	const actual = dtf.fill(format, date);
	t.is(actual, expected, format);
});

test('fill(format, date, utc)', t => {
	const date = new Date();
	const expected = date.getUTCHours().toString();
	const format = 'HH';
	const actual = dtf.fill(format, date, true);
	t.is(actual, expected, 'utc = true');
});