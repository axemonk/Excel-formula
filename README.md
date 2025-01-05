# [Excel formula for Sublime Text][gh]

Excel formula syntax highlighting for Sublime Text (with some explicit
support for Google Sheets, although currently experimental).

Potential future enhancements include explicit support for LibreOffice Calc
and Mac Numbers as separate extensions of this definition and potentially configurable
on demand through the command palette.
Using this syntax with formulae written for those programs should be more or less
functional, although differences in things like naming rules and legal cell reference
formats may break formatting in places.
Explicit support for locales/users that use a decimal separator other than `.`, row
and column separators in arrays other than `,` and `;`, and argument separators in functions
other than `,` is planned in a similar manner.

## Installation

[Install][pc-install] via Package Control.

## Usage

1. In Sublime, open or navigate to a `.txt` file containing the Excel
formulae you wish to be highlighted (or create a new file with `CTRL+N`).
2. Activation options:
   - Select the "Excel formula" syntax option from the syntax selection menu at
   the bottom right of Sublime Text.
   - Alternatively, open the Command Palette and type "Excel formula". Select
   the top option ("Set Syntax: Excel formula").
3. Enjoy!

## Issues

Please send any bug reports or suggestions by opening an issue on Github
or to \_alco via a direct message on Discord.
You can find me on the official Sublime Text Discord server.

## Credits

Made by \_alco and [michaelblyons][]. Thanks to acid_form for the first key bug
reports we've received and for the updated builtin function list with Google
Sheets functions added.

A **huge** thank you to [michaelblyons][] for his collaboration.

[gh]: https://github.com/axemonk/Excel-formula
[pc-install]: https://packagecontrol.io/installation
[michaelblyons]: https://github.com/michaelblyons
