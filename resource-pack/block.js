document.querySelectorAll(".block img").forEach(img => {
	img.src = `https://raw.githubusercontent.com/mcpeachpies/mcpeachpies-resource-pack/master/§9mcpeachpies%20§f1.16.2${img.getAttribute("data-src")}`
});