



function getComic(){
	let comicNum = 1;
	let url = `https://xkcd.now.sh/${comicNum}`
	//console.log({comicNum});
	//console.log({url});

	return fetch(url)
	.then((result) => {
		console.log({result});
		return result.json()
	}).then((json) => {
		console.log({json});
		return json;
	}).catch((error) => {
		console.log({error})
	})
//	console.log({comicInfo});
//	return comicInfo;
}

// $(document).ready(function() {
// 	console.log('installed')
// 	getComic();
//   });

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        // initApplication();
        console.log('installed')
				const comicInfo = getComic().then((info) => {
					const image = document.getElementById('image');
					console.log({image});
					image.setAttribute('src', info.img);
					console.log({img: info.img});
				});
    }
}
