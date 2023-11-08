var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspaper"] = 1] = "Newspaper";
    PrintMedia[PrintMedia["Newsletter"] = 2] = "Newsletter";
    PrintMedia[PrintMedia["Magazine"] = 3] = "Magazine";
    PrintMedia[PrintMedia["Book"] = 4] = "Book";
})(PrintMedia || (PrintMedia = {}));
function getMedia(mediaName) {
    if (mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
}
var mediaType = getMedia('Forbes'); // returns Magazine
console.log(getMedia('Forbes'));
(function (PrintMedia) {
    PrintMedia[PrintMedia["Newspapers"] = 1] = "Newspapers";
    PrintMedia[PrintMedia["Newsletters"] = getPrintMediaCode('newsletters')] = "Newsletters";
    PrintMedia[PrintMedia["Magazines"] = PrintMedia.Newsletters * 3] = "Magazines";
    PrintMedia[PrintMedia["Books"] = 10] = "Books";
})(PrintMedia || (PrintMedia = {}));
function getPrintMediaCode(mediaName) {
    if (mediaName === 'newsletters') {
        return 5;
    }
}
PrintMedia.Newsletters; // returns 5
PrintMedia.Magazines; // returns 15
console.log(PrintMedia.Newsletters);
console.log(PrintMedia.Magazines);
var aPrintMedia;
(function (aPrintMedia) {
    aPrintMedia["aNewspaper"] = "NEWSPAPER";
    aPrintMedia["aNewsletter"] = "NEWSLETTER";
    aPrintMedia["aMagazine"] = "MAGAZINE";
    aPrintMedia["aBook"] = "BOOK";
})(aPrintMedia || (aPrintMedia = {}));
// Access String Enum 
aPrintMedia.aNewspaper; //returns NEWSPAPER
aPrintMedia['aMagazine']; //returns MAGAZINE
console.log(aPrintMedia.aNewspaper);
console.log(aPrintMedia['aMagazine']);
