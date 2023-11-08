
enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
console.log(getMedia('Forbes'));



enum PrintMedia {
    Newspapers = 1,
    Newsletters = getPrintMediaCode('newsletters'),
    Magazines = Newsletters * 3,
    Books = 10
}

function getPrintMediaCode(mediaName: string): number {
    if (mediaName === 'newsletters') {
        return 5;
    }
}

PrintMedia.Newsletters; // returns 5
PrintMedia.Magazines; // returns 15

console.log(PrintMedia.Newsletters);
console.log(PrintMedia.Magazines);



enum aPrintMedia {
    aNewspaper = "NEWSPAPER",
    aNewsletter = "NEWSLETTER",
    aMagazine = "MAGAZINE",
    aBook = "BOOK"
}
// Access String Enum 
aPrintMedia.aNewspaper; //returns NEWSPAPER
aPrintMedia['aMagazine'];//returns MAGAZINE

console.log(aPrintMedia.aNewspaper);
console.log(aPrintMedia['aMagazine']);

