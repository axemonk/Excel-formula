# [Excel formula for Sublime Text][gh]

Spreadsheet formula syntax highlighting for Sublime Text. This syntax was originally
intended to only provide support for Excel formulae, but now supports both Google Sheets
and LibreOffice formulae.

## Features

- Syntax highlighting for spreadsheet formulae
- Built-in function completions
- Support for [locale-specific separators](#localization)
- Additional support for both Google Sheets and LibreOffice Calc
- SQL highlighting when using the `QUERY()` function in Google Sheets

## Installation

[Install][pc-install] via Package Control.

## Usage

1. In Sublime, open or navigate to a `.txt` file containing the spreadsheet
formulae you wish to be highlighted (or create a new file with <kbd>Ctrl</kbd>+<kbd>N</kbd>).
2. Activation options:
   - Depending on what spreadsheet application you plan on using, select the corresponding
   "(...) formula" syntax option from the syntax selection menu at the bottom right of Sublime Text.
   - Alternatively, open the Command Palette and type "formula". Select the option
   corresponding to your application of choice ("Set Syntax: (...) formula").
3. Enjoy!

New files will be saved with a two-level extension to signal Sublime Text to
use the right syntax in the future.

### Localization

Some locales use different characters for decimal numbers, function argument
separators, and array separators. If your locale differs from the characters
chosen by this package, you can make small extension syntax files to enable
your local preferences.

In your `Packages/User` folder, add a file like this for Excel, Google Sheets,
etc., containing regular expressions for matching your locale's format.

```yaml
%YAML 1.2
---
name: Excel Formula (FR)
scope: source.sheet.excel.fr
version: 2
extends: Excel Formula.sublime-syntax
file_extensions:
  - fr.xls.txt

variables:
  array_column_separator: ';'
  array_row_separator: '\\'
  number_radix: ','
  argument_separator: ';'
```

## Contributing

### Issues

Please send any bug reports or suggestions by opening an issue on Github
or to \_alco via a direct message on Discord.
You can find me on the official Sublime Text Discord server.

## Credits

Made by \_alco and [michaelblyons][]. Thanks to acid_form for the first key bug
reports we've received and for Google Sheets functions.

A **huge** thank you to [michaelblyons][] for his collaboration.

[gh]: https://github.com/axemonk/Excel-formula
[pc-install]: https://packagecontrol.io/installation
[michaelblyons]: https://github.com/michaelblyons
