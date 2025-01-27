// To be used with the MS Edge debugger you can open in the Function Translator add-in for Excel.
// Starting point is to first click "References" at the top left, then click settings at the bottom right.

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

let cliDropdown = document.querySelector("#clientCultureDropDown");

// Get the number of options in the dropdown
const numberOfOptions = cliDropdown.options.length;

for (let i = 1; i <= 2 /*numberOfOptions*/; i++) {
    let wait = 1000;
    let cliDropdown = document.querySelector("#clientCultureDropDown");
    let thisOption = cliDropdown.querySelector(`option:nth-child(${i})`);
    console.log(thisOption.innerHTML.trim()+";"+thisOption.value);
    thisOption.selected = true;
    cliDropdown.dispatchEvent(new Event("change"));
    await sleep(wait);

    // Go back to reference table
    document.querySelector('[uib-tooltip="Go back"]').click();
    await sleep(wait);

    // Select "All" function categories
    let funcDropdown = document.querySelector("#functionCategoryDropdown");
    funcDropdown.value = "All";
    funcDropdown.dispatchEvent(new Event("change"));

    // Get the reference table
    let thisRefTable = document.getElementById("referenceTable");

    // Query all elements inside the <tbody> and filter those with a `title` or `lang` attribute, then do some
    // cursed highjacking of the map function cause idc to enumerate a proper for-each.
    titlesArr = Array.from(thisRefTable.querySelectorAll("[title], [lang]")).map(
        (el) => {
            if (el.getAttribute("lang") == null && el.getAttribute("title") != "Toggle sorting") {
                // return el.getAttribute("href") + "~" + el.getAttribute("title");
                console.log(el.getAttribute("href").replace("#!/ws/dictionary?query=","") + "~" + el.getAttribute("title"));
            } else {
                // return el.getAttribute("lang");
                console.log(el.getAttribute("lang"));
            }
        }
    );

    // Output the titlesArr to the console
    // console.log(titlesArr.slice(2));

    // Click preferences
    document.querySelector('[ui-sref="preferences"]').click();
    await sleep(wait);
}
