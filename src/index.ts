import type { FORMAT_CONFIG } from './index.d';
const EN = 'en-US';

const config: FORMAT_CONFIG = {
    weekday: {
        ddd: 'short',
        dddd: 'long',
    },
    month: {
        m: 'numeric',
        mmm: 'short',
        mmmm: 'long',
    },
    year: {
        yyyy: 'numeric',
    },
};

/**
 * 🎯 Get a localized date string for a specific part of the date.
 * @param {string} id ➡️ The part of the date to format (e.g., 'weekday', 'month', 'year').
 * @param {string} key ➡️ The format key (e.g., 'ddd', 'mmmm', 'yyyy').
 * @param {Date} date ➡️ The date object to format.
 * @param {string} local ➡️ The locale to use for formatting (default: 'en-US').
 * @returns {string | undefined} 📤 The formatted date string, or undefined if the format key is not found.
 */
export const getLocal = (id: string, key: string, date: Date, local = EN) => {
    const item: any = config[id][key.toLowerCase()];
    if (item) {
        return date.toLocaleDateString(local, { [id]: item });
    }
};

/**
 * 🎯 Get the day of a date.
 * @param {Date} date ➡️ The date object.
 * @param {string} format ➡️ The desired format (e.g., 'd', 'dd', 'ddd').
 * @param {string} local ➡️ The locale to use for formatting (default: 'en-US').
 * @returns {string} 📤 The formatted day.
 */
export const getDay = (date: Date, format = '', local = EN): string => {
    const localDate = getLocal('weekday', format, date, local);
    const start = format.length === 1 ? 0 : 2;
    return localDate ?? String(date.getDate()).padStart(start, '0');
};

/**
 * 🎯 Get the month of a date.
 * @param {Date} date ➡️ The date object.
 * @param {string} format ➡️ The desired format (e.g., 'm', 'mm', 'mmm', 'mmmm').
 * @param {string} local ➡️ The locale to use for formatting (default: 'en-US').
 * @returns {string} 📤 The formatted month.
 */
export const getMonth = (date: Date, format = '', local = EN): string => {
    const localDate = getLocal('month', format, date, local);
    const start = format.length === 1 ? 0 : 2;
    return localDate ?? String(date.getMonth() + 1).padStart(start, '0');
};

/**
 * 🎯 Get the year of a date.
 * @param {Date} ➡️ date The date object.
 * @param {string} ➡️ format The desired format (e.g., 'YY', 'YYYY').
 * @param {string} ➡️ local The locale to use for formatting (default is 'en-US').
 * @returns {string} 📤 The formatted year.
 */
export const getYear = (date: Date, format = '', local = 'en-US'): string => {
    const localDate = getLocal('year', format, date, local);
    const start = format.length === 2 ? -2 : 0;
    return localDate ?? String(date.getFullYear()).slice(start);
};

/**
 * 🎯 Get the first match of a string against a regular expression.
 * @param {string} ➡️ str The string to search.
 * @param {RegExp} regex The regular expression to match against.
 * @returns {string} 📤 The first match, or an empty string if no match is found.
 */
const getMatch = (str: string, regex: RegExp): string => {
    const match = str.match(regex);
    return match ? match[0] : '';
};

/**
 * 🎯 Get a formatted date according to ISO 8601.
 * @param {string} dateString ➡️ The date string in ISO 8601 format.
 * @param {string} format ➡️ The desired output format (e.g., 'dd.MM.yyyy', 'MMMM yyyy').
 * @param {string} local ➡️ The locale to use for formatting (default is 'en-US').
 * @returns {string} 📤 The formatted date string.
 */
const fn = (dateString: string, format: string = '', local = EN) => {
    if (format === '') {
        return dateString;
    }
    const date = new Date(dateString);
    const regexDay = /(d+)/i;
    const regexMonth = /(M+)/i;
    const regexYear = /(y+)/i;
    const day = getMatch(format, regexDay);
    const month = getMatch(format, regexMonth);
    const year = getMatch(format, regexYear);

    return format
        .replace(regexYear, getYear(date, year, local))
        .replace(regexMonth, getMonth(date, month, local))
        .replace(regexDay, getDay(date, day, local));
};
export default fn;
