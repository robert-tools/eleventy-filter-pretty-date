# 🗂️ @robert.tools/eleventy-filter-pretty-date

Filter to beautify the date string according to ISO 8601.

## 📜 Usage

### 🟢 Installation

```bash
npm install @robert.tools/eleventy-filter-pretty-date
```

### 📝 Sample usage

```typescript
import prettyDate from '@robert.tools/eleventy-filter-pretty-date';

prettyDate('2026-10-02', 'MMMM yyyy'); // 'October 2026'
prettyDate('2026-10-02', 'MMM yyyy', 'de-DE'); // 'Okt 2026'
```
sample: 2026-09-02
- **year:** `yy` (26) or `yyyy` (2026)
- **month:** `M` (9) or `MM` (09) or `MMM` (Sep) or `MMMM` (September)
- **day:** `d` (2) or `dd` (02) or `ddd` (Thu) or `dddd` (Thursday)


## 🗃️ commands
After an npm install with `npm i` the following commands are available:
* initialize placeholders: `npm run init <semantic>`
* release a new version: `npm run release <semantic>`


## ⚖️ Notes
This software is hand-crafted, test-driven and assisted by AI tools. I know each line of my code. ✌️


| Tool  | Comment |
 | ------------- | ------------- |
| <img src="https://img.shields.io/badge/Jest-TDD-008800?logo=jest" alt="assisted by Jest" />  | Test-driven development with Jest |
| <img src="https://img.shields.io/badge/robert.tools-ecosystem-008800" alt="assisted by robert.tools" />  | Part of the robert.tools ecosystem |
| <img src="https://img.shields.io/badge/GitHub_Copilot-assisted-8A2BE2?logo=githubcopilot" alt="assisted by GitHub Copilot" />   | Code completion |
| <img src="https://img.shields.io/badge/OpenAI-assisted-8A2BE2?logo=openaigym" alt="assisted by OpenAI" />  | chatGPT research |