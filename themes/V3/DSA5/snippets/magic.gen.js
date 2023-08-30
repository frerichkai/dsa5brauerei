const _ = require('lodash');

const spellNames = [
	'Astral Rite of Acne',
	'Create Acne',
	'Cursed Ramen Erruption',
	'Dark Chant of the Dentists',
	'Erruption of Immaturity',
	'Flaming Disc of Inconvenience',
	'Heal Bad Hygene',
	'Heavenly Transfiguration of the Cream Devil',
	'Hellish Cage of Mucus',
	'Irritate Peanut Butter Fairy',
	'Luminous Erruption of Tea',
	'Mystic Spell of the Poser',
	'Sorcerous Enchantment of the Chimneysweep',
	'Steak Sauce Ray',
	'Talk to Groupie',
	'Astonishing Chant of Chocolate',
	'Astounding Pasta Puddle',
	'Ball of Annoyance',
	'Cage of Yarn',
	'Control Noodles Elemental',
	'Create Nervousness',
	'Cure Baldness',
	'Cursed Ritual of Bad Hair',
	'Dispell Piles in Dentist',
	'Eliminate Florists',
	'Illusionary Transfiguration of the Babysitter',
	'Necromantic Armor of Salad Dressing',
	'Occult Transfiguration of Foot Fetish',
	'Protection from Mucus Giant',
	'Tinsel Blast',
	'Alchemical Evocation of the Goths',
	'Call Fangirl',
	'Divine Spell of Crossdressing',
	'Dominate Ramen Giant',
	'Eliminate Vindictiveness in Gym Teacher',
	'Extra-Planar Spell of Irritation',
	'Induce Whining in Babysitter',
	'Invoke Complaining',
	'Magical Enchantment of Arrogance',
	'Occult Globe of Salad Dressing',
	'Overwhelming Enchantment of the Chocolate Fairy',
	'Sorcerous Dandruff Globe',
	'Spiritual Invocation of the Costumers',
	'Ultimate Rite of the Confetti Angel',
	'Ultimate Ritual of Mouthwash',
];
const itemNames = [
	'Doorknob of Niceness',
	'Paper Armor of Folding',
	'Mixtape of Sadness',
	'Staff of Endless Confetti',
];

const zauberList = [{
		"name": "Himmelssegen",
		"description": "Der Himmelssegen ruft die Macht der Sterne herab, um Verbündete zu stärken und Verletzungen zu heilen. Ein Segen der Erleuchtung, der Hoffnung und Harmonie."
	},
	{
		"name": "Ätherumarmung",
		"description": "Die Ätherumarmung umhüllt den Anwender mit Ätherenergie und bietet Schutz vor physischen und magischen Angriffen. Ein unsichtbarer Mantel der Verteidigung."
	},
	{
		"name": "Arkanes Flüstern",
		"description": "Arkanes Flüstern lässt uraltes Wissen in die Gedanken des Magiers einflüstern. Ein Quell von Geheimnissen, der entdeckt und entschlüsselt werden muss."
	},
	{
		"name": "Sylvische Serenade",
		"description": "Die Sylvische Serenade erweckt die Natur zum Leben, zaubert einen tänzerischen Waldgeist herbei und beruhigt wilde Kreaturen mit melodischem Zauber."
	},
	{
		"name": "Lodernde Glut",
		"description": "Lodernde Glut beschwört die hitzige Macht des Feuers herauf und lässt sie auf die Feinde niedersausen, sie in Flammen hüllen und Schaden zufügen."
	},
	{
		"name": "Frostbiss-Schleier",
		"description": "Der Frostbiss-Schleier erzeugt eine frostige Aura, die die Geschwindigkeit von Gegnern verlangsamt und ihre Glieder mit eisiger Kälte umhüllt."
	},
	{
		"name": "Phantom-Mirage",
		"description": "Die Phantom-Mirage erschafft Illusionen und Schattenbilder, die den Blick der Feinde trüben und sie verwirren, um das Entkommen zu ermöglichen."
	},
	{
		"name": "Sturmkraftwind",
		"description": "Sturmkraftwind entfesselt die brachiale Gewalt des Windes, um Gegner wegzustoßen und durch Luftströmungen zu manövrieren."
	},
	{
		"name": "Leuchtende Glyphe",
		"description": "Die Leuchtende Glyphe lässt magische Symbole aufleuchten, die als Wegweiser, Schutzbarrieren oder Auslöser für andere Zauber dienen."
	},
	{
		"name": "Schattenverschmelzung",
		"description": "Die Schattenverschmelzung verschleierte den Anwender in Dunkelheit und erlaubt es ihm, unbemerkt zu schleichen oder aus den Schatten anzugreifen."
	},
	{
		"name": "Ewige Dämmerung",
		"description": "Die Ewige Dämmerung lässt eine dichte Nebeldecke herabsteigen, die die Sicht verdeckt und den Ort in geheimnisvolles Zwielicht hüllt."
	},
	{
		"name": "Mystisches Rätsel",
		"description": "Das Mystische Rätsel beschwört kryptische Symbole und Zeichen, die es den Anwendern erlauben, magische Rätsel zu lösen und Geheimnisse zu entdecken."
	},
	{
		"name": "Nebelgewebe-Netz",
		"description": "Das Nebelgewebe-Netz webt ein unsichtbares Netz aus Äthernebeln, das Feinde verlangsamt und ihre Sicht behindert."
	},
	{
		"name": "Feenverzauberung",
		"description": "Die Feenverzauberung zieht die Aufmerksamkeit von Feenwesen an und ermöglicht den Austausch von Wünschen oder die Bitte um Unterstützung."
	},
	{
		"name": "Kristalliner Strom",
		"description": "Der Kristalline Strom beschleunigt die Magie des Anwenders und verstärkt seine Zauber, sodass sie mit erhöhter Kraft auf ihre Ziele treffen."
	},
	{
		"name": "Umfang der Hüter",
		"description": "Der Umfang der Hüter ruft eine barriereartige Schutzaura hervor, die Verbündete schützt und Angriffe abwehrt, um sie vor Gefahren zu bewahren."
	},
	{
		"name": "Wirbel der Verwüstung",
		"description": "Der Wirbel der Verwüstung erzeugt einen magischen Strudel, der alles in seinem Pfad durcheinanderwirbelt und Schaden verursacht."
	},
	{
		"name": "Verdorrte Eruption",
		"description": "Die Verdorrte Eruption entzieht der Umgebung die Lebenskraft und lässt eine düstere, entkräftende Aura entstehen, die Gegner schwächt."
	},
	{
		"name": "Schleierstreich-Vortex",
		"description": "Der Schleierstreich-Vortex ist eine plötzliche, rasende Magie, die Feinde in eine andere Dimension zu schleudern scheint."
	},
	{
		"name": "Abgründiger Klagelaut",
		"description": "Der Abgründige Klagelaut ruft verzweifelnde Schreie aus der Dunkelheit hervor, die die Herzen der Feinde mit Furcht erfüllen."
	},
	{
		"name": "Flammensturmstoß",
		"description": "Der Flammensturmstoß schleudert Feuerbälle in schneller Abfolge auf die Gegner und verursacht ein infernalisches Feuerwerk."
	},
	{
		"name": "Rachsüchtige Geister",
		"description": "Die Rachsüchtigen Geister beschwören verfluchte Seelen, die sich an ihren Feinden rächen und ihnen schreckliche Visionen senden."
	},
	{
		"name": "Aurora Borealis",
		"description": "Aurora Borealis ist ein atemberaubendes Spektakel am Himmel, das eine Welle von Farben und Magie freisetzt und Gegner in Staunen versetzt."
	},
	{
		"name": "Sengender Schatten",
		"description": "Der Sengende Schatten erzeugt eine finstere Schattenschicht, die Feinde verbrennt und sie in der Schwärze gefangen hält."
	},
	{
		"name": "Verdammte Traumreise",
		"description": "Die Verdammte Traumreise ermöglicht es, die Träume der anderen zu betreten und sie in Albträumen gefangen zu halten."
	},
	{
		"name": "Donnerhall-Echo",
		"description": "Der Donnerhall-Echo erzeugt laute, donnernde Geräusche, die Gegner verwirren und den Weg für einen Überraschungsangriff ebnen."
	},
	{
		"name": "Arkaner Seelenhammer",
		"description": "Der Arkaner Seelenhammer ist eine magische Waffe, die Seelenenergie bündelt, um mächtige Schläge auszuteilen und Feinde zu zerschmettern."
	},
	{
		"name": "Mondlicht-Heilung",
		"description": "Die Mondlicht-Heilung nutzt das heilende Licht des Mondes, um Wunden zu schließen und den Körper zu regenerieren."
	},
	{
		"name": "Herrschaft der Dämmerung",
		"description": "Die Herrschaft der Dämmerung ruft die Dunkelheit hervor, um Schattenwesen zu beschwören und sie gegen Feinde zu lenken."
	},
	{
		"name": "Flammenbrut-Inkantation",
		"description": "Die Flammenbrut-Inkantation beschwört einen mächtigen feuerspeienden Drachen, der die Feinde des Anwenders in Angst und Schrecken versetzt."
	},
	{
		"name": "Eisiger Adernfluss",
		"description": "Der Eisiger Adernfluss lässt das Blut der Gegner erstarren und verlangsamt ihre Bewegungen durch eine eisige Berührung."
	},
	{
		"name": "Spektrale Symphonie",
		"description": "Die Spektrale Symphonie erzeugt hypnotische Klänge, die die Sinne benebeln und die Konzentration der Feinde stören."
	},
	{
		"name": "Windsang-Wächter",
		"description": "Der Windsang-Wächter beschwört eine majestätische Windkreatur, die den Anwender durch die Lüfte trägt und vor Gefahren schützt."
	},
	{
		"name": "Mondfinsternis",
		"description": "Die Mondfinsternis hüllt die Umgebung in finstere Dunkelheit und erhöht die Macht der Schattenmagie."
	},
	{
		"name": "Frostbiss-Furor",
		"description": "Der Frostbiss-Furor lässt den Anwender in einen rasenden Frostwirbel ausbrechen, der alles in seiner Nähe einfriert."
	},
	{
		"name": "Ätherisches Echo",
		"description": "Das Ätherische Echo reflektiert feindliche Zauber und verstärkt sie, um sie gegen ihre ursprünglichen Werfer einzusetzen."
	},
	{
		"name": "Lodernder Phönix",
		"description": "Der Lodernde Phönix beschwört eine mächtige Feuerkreatur, die im Kampf an der Seite des Anwenders kämpft."
	},
	{
		"name": "Mystischer Kenner",
		"description": "Der Mystische Kenner gewährt dem Anwender Erkenntnisse über die Geheimnisse der Welt und ermöglicht es, verborgene Wahrheiten zu entdecken."
	},
	{
		"name": "Chronobeben",
		"description": "Das Chronobeben manipuliert die Zeit um den Anwender herum, um Zeitlöcher zu erzeugen oder die Zeit für kurze Momente anzuhalten."
	},
	{
		"name": "Seelenfeuer-Stoß",
		"description": "Der Seelenfeuer-Stoß schleudert magische Projektile auf die Gegner, die ihre Seelen zu verbrennen scheinen."
	},
	{
		"name": "Urzeitliche Blüte",
		"description": "Die Urzeitliche Blüte beschwört eine prähistorische Blumenkreatur, die Leben spendet und die Umgebung erblühen lässt."
	},
	{
		"name": "Sengende Glut",
		"description": "Die Sengende Glut entzündet die Umgebung und lässt alles um den Anwender herum in Flammen aufgehen."
	},
	{
		"name": "Dunkler Griff",
		"description": "Der Dunkle Griff fesselt die Gegner mit unsichtbaren Schattenketten und lässt sie bewegungsunfähig zurück."
	},
	{
		"name": "Astrale Vernichtung",
		"description": "Die Astrale Vernichtung entfesselt eine gewaltige Explosion, die alles in ihrem Radius vernichtet und eine Leere zurücklässt."
	},
	{
		"name": "Nimbus-Nova",
		"description": "Die Nimbus-Nova erzeugt einen leuchtenden, strahlenden Nebel, der den Anwender unsichtbar macht und vor Angriffen schützt."
	},
	{
		"name": "Violetter Vortex",
		"description": "Der Violette Vortex erzeugt einen reißenden, wirbelnden Strudel, der Gegner einfängt und durch die Dimensionen schleudert."
	},
	{
		"name": "Schattenreinigung",
		"description": "Die Schattenreinigung befreit einen Ort von dunklen Kräften, negativer Energie und unreinen Geistern."
	},
	{
		"name": "Donnernde Ouvertüre",
		"description": "Die Donnernde Ouvertüre erschafft einen gewaltigen, ohrenbetäubenden Klang, der die Gegner vorübergehend taub macht und sie desorientiert."
	},
	{
		"name": "Himmelblaue Kaskade",
		"description": "Die Himmelblaue Kaskade ruft eine magische Wasserfallquelle hervor, die Wunden heilt und Energie spendet."
	},
	{
		"name": "Infernales Requiem",
		"description": "Das Infernale Requiem beschwört eine schaurige Geisterarmee, die in düsteren Reihen voranschreitet und ihre Gegner heimsucht."
	}
]


module.exports = {

	spellList : function(){
		const levels = ['Cantrips (0 Level)', '1st Level', '2nd Level', '3rd Level', '4th Level', '5th Level', '6th Level', '7th Level', '8th Level', '9th Level'];

		const content = _.map(levels, (level)=>{
			const spells = _.map(_.sampleSize(spellNames, _.random(4, 10)), (spell)=>{
				return `- ${spell}`;
			}).join('\n');
			return `##### ${level} \n${spells} \n`;
		}).join('\n');

		return `{{spellList,wide\n${content}\n}}`;
	},

	spell : function(){
		const level = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];
		const spellSchools = ['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy', 'transmutation'];


		let components = _.sampleSize(['V', 'S', 'M'], _.random(1, 3)).join(', ');
		if(components.indexOf('M') !== -1){
			components += ` (${_.sampleSize(['a small doll', 'a crushed button worth at least 1cp', 'discarded gum wrapper'], _.random(1, 3)).join(', ')})`;
		}

		return [
			`#### ${_.sample(spellNames)}`,
			`*${_.sample(level)}-level ${_.sample(spellSchools)}*`,
			'',
			'**Casting Time:** :: 1 action',
			`**Range:**        :: ${_.sample(['Self', 'Touch', '30 feet', '60 feet'])}`,
			`**Components:**   :: ${components}`,
			`**Duration:**     :: ${_.sample(['Until dispelled', '1 round', 'Instantaneous', 'Concentration, up to 10 minutes', '1 hour'])}`,
			'',
			'A flame, equivalent in brightness to a torch, springs from an object that you touch. ',
			'The effect look like a regular flame, but it creates no heat and doesn\'t use oxygen. ',
			'A *continual flame* can be covered or hidden but not smothered or quenched.',
			'\n\n\n'
		].join('\n');
	},

	zauber : function(){
		const level = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];
		const spellSchools = ['abjuration', 'conjuration', 'divination', 'enchantment', 'evocation', 'illusion', 'necromancy', 'transmutation'];
		

		let components = _.sampleSize(['V', 'S', 'M'], _.random(1, 3)).join(', ');
		if(components.indexOf('M') !== -1){
			components += ` (${_.sampleSize(['a small doll', 'a crushed button worth at least 1cp', 'discarded gum wrapper'], _.random(1, 3)).join(', ')})`;
		}

		let randomZauber = _.sample(zauberList);
		return [
			`:`,
			`##### ${randomZauber.name}`,
			`${randomZauber.description}`,
			'**Mächtige Magie:** :: Etwas unerwartetes passiert',
			`**Probenschwierigkeit:** :: ${8 + _.random(1,3)*4}`,
			`**Modifikationen:**        :: ${_.sample(['Mehr (+4)', 'Weniger (-4)'])}`,
			`**Vorbereitungszeit:**   :: ${_.sample(['1 Aktion', '2 Aktionen', '3 Aktionen'])}`,
			`**Ziel:**     :: ${_.sample(['Einzelwesen', 'Einzelperson', 'Einzelobjekt oder Teilobjekt', 'Einzelobjekt'])}`,
			`**Reichweite:**     :: ${_.sample(['Berührung', '4 Schritt'])}`,
			`**Wirkungsdauer:**     :: ${_.random(2,5)} ${_.sample(['Minuten', 'Stunden'])}`,
			`**Kosten:**     :: ${8 + _.random(1,3)*4} AsP`,
			`**Fertigkeiten:**     :: ${_.sampleSize(['Dämonisch', 'Eigenschaften', 'Einfluss', 'Verwandlung', 'Wasser'], _.random(1,3)).join(', ')}`,
			`**Erlernen:**     :: Bor 14; Ach, Dru, Geo 16; Alch, Mag 18; 60 EP`,
			`:`,
			'\n\n\n'
		].join('\n');
	},

	item : function() {
		return [
		  `#### ${_.sample(itemNames)}`,
			`*${_.sample(['Wondrous item', 'Armor', 'Weapon'])}, ${_.sample(['Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary', 'Artifact'])} (requires attunement)*`,
			`:`,
			`This knob is pretty nice. When attached to a door, it allows a user to`,
			`open that door with the strength of the nearest animal. For example, if`,
			`there is a cow nearby, the user will have the "strength of a cow" while`,
			`opening this door.`
		].join('\n');
	}
};
