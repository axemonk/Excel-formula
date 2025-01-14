# [Excel formula for Sublime Text][gh]

Spreadsheet formula syntax highlighting for Sublime Text. The primary focus is
Excel, but there is good support for Google Sheets, too.

## Features

- Syntax highlighting
- Built-in function completions

Potential future enhancements include explicit support for LibreOffice Calc
and Mac Numbers as separate extensions of this definition and potentially configurable
on demand through the command palette.
Using this syntax with formulae written for those programs should be more or less
functional, although differences in things like naming rules and legal cell reference
formats may break formatting in places.

## Installation

[Install][pc-install] via Package Control.

## Usage

1. In Sublime, open or navigate to a `.txt` file containing the Excel
formulae you wish to be highlighted (or create a new file with <kbd>Ctrl</kbd>+<kbd>N</kbd>).
2. Activation options:
   - Select the "Excel formula" syntax option from the syntax selection menu at
   the bottom right of Sublime Text.
   - Alternatively, open the Command Palette and type "Excel formula". Select
   the top option ("Set Syntax: Excel formula").
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
