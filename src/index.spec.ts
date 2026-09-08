/**
 * 🧪 testing module
 * @version 1.0.0
 * @date 2026-09-08
 * @license MIT
 * @author Robert Willemelis <github.com/robert-tools>
 */
import { sample } from './index';

describe('@robert.tools/eleventy-filter-pretty-date', () => {
    it('should return a eleventy-filter-pretty-date string', () => {
        expect(sample('hello')).toBe('sample: hello');
    });

    it('should return a eleventy-filter-pretty-date string with empty input', () => {
        expect(sample('')).toBe('sample: ');
    });
});
