

function getComic(){
	

	let comicNum = Math.floor(Math.random() * 2032);
	let url = `https://xkcd.now.sh/${comicNum}`

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
}


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

    document.getElementById("search").addEventListener("click", myFunction);

}
