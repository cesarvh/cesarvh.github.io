var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

var donutRandomizer = function() {
  var randArray = [...Array(10).keys()];
  var roster = ['Allison Ou',
  'Amanda Awan',
  'Amanda Jorgernsen',
  'Anna Saephan',
  'Ben Wu',
  'Brandon Peav',
  'Carolina Rios-Martinez',
  'Caroline Jones',
  'Celine Yang',
  'Cesar Villalobos',
  'Charleston Wong',
  'Christina Liu',
  'Elizabeth Montes',
  'Evan Mei',
  'Georgann Ireland',
  'Ivy Li',
  'Jacob Virtusio',
  'Jasmine Sun',
  'Jasmine Wang',
  'Jason Boutavanh',
  'Jaysen . Shi',
  'Jena Alcaraz',
  'Jennifer Jia',
  'Jennifer Lin',
  'Jerry Chen',
  'Jimmy Guevara',
  'Jirachaya Kiriuangchai',
  'Kristina Kim',
  'Lena Luong',
  'Lin Vuong',
  'Madeline Enciso',
  'Maxwell Nguyen',
  'Mia Tu',
  'Pranathi Santosh',
  'Scatlett Tao',
  'Sophia Xiao',
  'Sunny Hsu',
  'Tanvee Joshi',
  'Vivian Le',
  'Yuriko Akeyama',
  'Zoe Chen',
  'Rachel Wang']

  // Shuffle 10 times
  for (num of randArray) {
    roster = shuffle(roster);
  }

  var donutsA = roster.slice(0, roster.length/2)
  var donutsB = roster.slice(roster.length/2)

  for (num in randArray) {
    donutsA = shuffle(donutsA);
    donutsB = shuffle(donutsB);
  }

  var donuts = donutsA.concat(donutsB);

  for (num of randArray) {
    donuts = shuffle(donuts);
  }

  donutsA = roster.slice(0, roster.length/2)
  donutsB = roster.slice(roster.length/2)

  alert(donutsA);
  alert(donutsB);

}