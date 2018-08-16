

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

function getDateAndTime() {
  const date = new Date()
  const dateTime = date.toDateString() + ' ' + date.toLocaleTimeString()
  document.getElementById('timestamp').innerHTML = dateTime
}

document.onreadystatechange = function () {
    if (document.readyState === "interactive") {
        // initApplication();
        console.log('installed')

		const comicInfo = getComic().then((info) => {
			

			const image = document.getElementById('image');
			console.log({image});
			getDateAndTime()
			image.setAttribute('src', info.img);
			console.log({img: info.img});
		});
    }
    let searchBar = document.getElementsByClass('searchBar')
	// searchBar.opacity = 1;
}
