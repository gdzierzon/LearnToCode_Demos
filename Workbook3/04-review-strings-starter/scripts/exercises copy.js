
/**
 * This function accepts one input parameter as a string.
 * The input is a persons full name.
 * - your task is to return just the first name of the person
 * - the return value should not have any leading or trailing spaces
 * 
 * Examples:
 *  "Thor" -> "Thor"
 *  "Iron Man" -> "Iron"
 *  "Black Widow" -> "Black"
 *  "   The Incredible Hulk   " -> "The"
 * @param {string} fullName 
 * @returns {string}
 */
function getFirstName(fullName) {
    fullName = fullName.trim()
    const index = fullName.indexOf(" ");

    if(index > 0) return fullName.substring(0, index);
    else return fullName;
}


/**
 * This function accepts a full name as an input parameter.
 * - your task is to determine whether or not the given name
 *   includes a middle name
 * - you will return TRUE if a middle name is provided
 * - or FALSE if NO middle name is given
 * 
 * Examples:
 *  "Samuel" -> FALSE
 *  "Emily Mitchell" -> FALSE
 *  "Benjamine Daniel Sanchez" -> TRUE
 *  "Sophia Marie Grace Turner" -> TRUE
 * @param {string} fullName 
 * @returns {boolean}
 */
function hasMiddleName(fullName) {
    const firstIndex = fullName.indexOf(" ");
    const lastIndex = fullName.lastIndexOf(" ");

    return firstIndex > 0 && lastIndex > firstIndex;
}


/**
 * this function accepts a filename as an input parameter - 
 * - your task is to return the file extension of the filename
 * - the return value should always be lower case
 * 
 * Examples:
 *  dog.jpg -> jpg
 *  DOG.JPG -> jpg
 *  https://www.mysite.com/images/hamburger.jpg -> jpg
 *  2023/finance.xls -> xls
 * 
 * @param {string} fileName 
 * @returns {string}
 */
function getFileExtension(fileName){
    const index = fileName.lastIndexOf(".");
    return fileName.toLowerCase().substring(index + 1);
}


/**
 * this function accepts a filename as an input parameter
 * - your task is to return the name of 
 *   the type of file that this is
 * - possible file types are:
 *      - image
 *      - document
 *      - spreadsheet
 * 
 * Examples:
 *  logo.jpg -> image
 *  cat.png -> image
 *  dancingHamster.gif -> image
 *  invoices.xls -> spreadsheet
 *  prices.csv -> spreadsheet
 *  invoices.xlsx -> spreadsheet
 *  essay.doc -> document
 *  essay.docx -> document
 *  essay.txt -> document
 * 
 * @param {string} fileName 
 * @returns {string}
 */
function getFileType(fileName){
    const extension = getFileExtension(fileName);

    switch(extension)
    {
        case "jpg":
        case "png":
        case "gif":
            return "image";
        case "xls":
        case "xlsx":
        case "csv":
            return "spreadsheet"
        case "txt":
        case "doc":
        case "docx":
            return "document";
        default:
            return "unknown";
    }
}
