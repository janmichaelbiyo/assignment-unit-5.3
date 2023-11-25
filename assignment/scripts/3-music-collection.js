console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection (collection, title, artist, yearPublishd){
    //collection = [];
    let albumMusic = 0;
    if ( albumMusic = {
      Title: title,
      Artist: artist,
      Year: yearPublishd,})
      {
    collection.push(albumMusic);
      
    
  }
    
  return albumMusic
}

console.log(addToCollection(myCollection, 'Queen II', 'Queen', 1974));
console.log(addToCollection(myCollection,'Led Zeppelin III','Led Zeppelin', 1970));
console.log(addToCollection(myCollection,'Hybrid Theory', 'Linkin Park', 2000));
console.log(addToCollection(myCollection,'Country Grammer', 'Nelly', 2000));
console.log(addToCollection(myCollection,'Paper Trail', 'T.I', 2008));
console.log(addToCollection(myCollection,'Great Depression','DMX', 2001));


console.log (myCollection);


// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
