



function getComic(){
	let comicNum = 1;
	let url = `https://xkcd.com/${comicNum}/info.0.json`

	const comicInfo = fetch(url, {
		mode: 'no-cors'
	})
	.then((result) => {
		console.log({result});
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