const searchPart = document.getElementById("searchBar");

function partInventory(part1, part2, part3, part4, part5, part6, part7, part8) {
    this.exhaust = part1,
    this.spoiler = part2,
    this.turbo = part3,
    this.hood = part4,
    this.rims = part5,
    this.fender = part6,
    this.muffler = part7,
    this.steeringWheel = part8
}

var allPart = new partInventory("exhaust", "spoiler", "turbo", "hood", "rims", "fender", "muffler", "steering wheel cover");

document.write("We have parts that range from " + allPart.rims + " to " + allPart.steeringWheel + " to " + allPart.turbo + " and more!");


