import fn, { getDay, getMonth, getYear } from './index';

const DE = 'de-DE';
const EN = 'en-US';
const DATE: Date = new Date('2026-07-02');

describe('✅️ getDay()', () => {
    const FN = getDay;
    it('should return the day of the month', () => {
        // EN
        expect(FN(DATE)).toBe('02');
        expect(FN(DATE, 'D')).toBe('2');
        expect(FN(DATE, 'DD')).toBe('02');
        expect(FN(DATE, 'DDD')).toBe('Thu');
        expect(FN(DATE, 'dddd')).toBe('Thursday');
        // DE
        expect(FN(DATE, '', DE)).toBe('02');
        expect(FN(DATE, 'd', DE)).toBe('2');
        expect(FN(DATE, 'dd', DE)).toBe('02');
        expect(FN(DATE, 'ddd', DE)).toBe('Do');
        expect(FN(DATE, 'dddd', DE)).toBe('Donnerstag');
    });
});
describe('✅ getMonth()', () => {
    const FN = getMonth;
    it('should return the month', () => {
        // EN
        expect(FN(DATE)).toBe('07');
        expect(FN(DATE, 'M')).toBe('7');
        expect(FN(DATE, 'MM')).toBe('07');
        expect(FN(DATE, 'MMM')).toBe('Jul');
        expect(FN(DATE, 'MMMM')).toBe('July');
        // DE
        expect(FN(DATE, '', DE)).toBe('07');
        expect(FN(DATE, 'M', DE)).toBe('7');
        expect(FN(DATE, 'MM', DE)).toBe('07');
        expect(FN(DATE, 'MMM', DE)).toBe('Jul');
        expect(FN(DATE, 'MMMM', DE)).toBe('Juli');
    });
});
describe('✅ getYear()', () => {
    const FN = getYear;
    it('should return the year', () => {
        // EN
        expect(FN(DATE)).toBe('2026');
        expect(FN(DATE, 'YY')).toBe('26');
        expect(FN(DATE, 'YYYY')).toBe('2026');
        // DE
        expect(FN(DATE, '', DE)).toBe('2026');
        expect(FN(DATE, 'YY', DE)).toBe('26');
        expect(FN(DATE, 'YYYY', DE)).toBe('2026');
    });
});

describe('✅️ fn()', () => {
    const FN = fn;
    it('should return a pretty date', () => {
        expect(FN('2026-09-02', 'MMMM yyyy')).toBe('September 2026');
        expect(FN('2026-10-02', 'MMMM yYyy', DE)).toBe('Oktober 2026');
        expect(FN('2026-10-02', 'MMmM-yyyy', EN)).toBe('October-2026');
        expect(FN('2026-09-02', 'MMM yy')).toBe('Sep 26');
        expect(FN('2026-09-02', 'dd.MM.yyyy')).toBe('02.09.2026');
        expect(FN('2026-09-02', 'M yyyy')).toBe('9 2026');
        expect(FN('2026-09-02')).toBe('2026-09-02'); // YYYY
    });
});
