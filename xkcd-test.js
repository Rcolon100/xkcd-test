



function getComic(){
	let comicNum = 1;
	let url = `https://xkcd.com/${comicNum}/info.0.json`

//, {
		// mode: 'no-cors',
	// }
	const comicInfo = fetch(url, {mode: 'cors'}).then((result) => {
		console.log({result});
		return result.json()
		
	}).catch((error) => {
		console.log({error})
	})
}

// $(document).ready(function() {
// 	console.log('installed')
// 	getComic();
//   });

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        // initApplication();
        console.log('installed')
		getComic();
    }
}