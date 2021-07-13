const locale = 'en-GB';

const DTF = require('../dist');
const dtf = new DTF(locale);

const test = require('ava');
const error = 'The filled placeholder does not match the expected value.';

const date = new Date('March 23, 2020 20:01:35');

test('YYYY', t => {
	const expected = '2020';
	const format = 'YYYY';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('YY', t => {
	const expected = '20';
	const format = 'YY';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('MMMM', t => {
	const expected = 'March';
	const format = 'MMMM';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('MMM', t => {
	const expected = 'Mar';
	const format = 'MMM';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('MM', t => {
	const expected = '03';
	const format = 'MM';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('M', t => {
	const expected = '3';
	const format = 'M';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('DDDD', t => {
	const expected = 'Monday';
	const format = 'DDDD';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('DDD', t => {
	const expected = 'Mon';
	const format = 'DDD';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('DD', t => {
	const expected = '23';
	const format = 'DD';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('D_', t => {
	const expected = '23rd';
	const format = 'D_';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('D', t => {
	const expected = '23';
	const format = 'D';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('HH', t => {
	const expected = '20';
	const format = 'HH';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('hh', t => {
	const expected = '08';
	const format = 'hh';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('h', t => {
	const expected = '8';
	const format = 'h';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('mm', t => {
	const expected = '01';
	const format = 'mm';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('m', t => {
	const expected = '1';
	const format = 'm';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('ss', t => {
	const expected = '35';
	const format = 'ss';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('s', t => {
	const expected = '35';
	const format = 's';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('SSS', t => {
	const expected = '000';
	const format = 'SSS';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});

test('AMPM', t => {
	const expected = 'PM';
	const format = 'AMPM';
	const actual = dtf.fill(format, date);
	t.is(actual, expected, error);
});