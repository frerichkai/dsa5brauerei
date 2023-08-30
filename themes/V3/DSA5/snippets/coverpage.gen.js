const _ = require('lodash');
const dedent = require('dedent-tabs').default;

const titles = [
	"Elfenohren und Orkennasen", 
	"Zauberhaftes Kochbuch", 
	"Die Kunst des Schwertkampfs", 
	"Goblins und Gekicher", 
	"Die geheime Sprache der Zwerge", 
	"Drachen zähmen leichtgemacht", 
	"Der perfekte Bardenauftritt", 
	"Einhornreiten für Wagemutige", 
	"Die Kunst des Diebstahls", 
	"Zaubertränke selbstgemacht", 
	"Orakel und Wahrsagerei", 
	"Der Dungeon-Entdecker", 
	"Fabelhafte Geschichten erfinden", 
	"Die Flora der Fantasywelt", 
	"Alchemistisches Experimentieren", 
	"Die Kunst des Pfeilewerfens", 
	"Götter und Göttinnen", 
	"Die hohe Kunst des Fechtens", 
	"Der Weg des Friedens", 
	"Die Sprache der Magie", 
	"Die verrückte Welt der Trolle", 
	"Das ABC der Zauberschulen", 
	"Die Kunst des Überlebens", 
	"Feen, Elfen und Kobolde", 
	"Die geheime Welt der Schatzkarten", 
	"Kochen mit Monstern", 
	"Die Kunst des Schleichen und Verbergens", 
	"Der sagenhafte Tierführer", 
	"Die Rätsel der Zwerge", 
	"Heldenhafter Humor", 
];

const subtitles = [
	"Ein Leitfaden für fantastische Verkleidungen",
	"Magische Rezepte für hungrige Abenteurer",
	"Für Tollpatsche",
	"Ein Handbuch für den Umgang mit Kobolden",
	"Ein Guide für linguistische Abenteurer",
	"Tipps und Tricks für mutige Helden",
	"Wie man das Publikum verzaubert",
	"Ein Handbuch für Abenteurer",
	"Anleitungen für schelmische Schurken",
	"Brauen Sie Ihre eigenen Tränke",
	"Eine Einführung in die mystische Kunst",
	"Wie man verborgene Schätze findet",
	"Ein Leitfaden für angehende Spielleiter",
	"Eine Sammlung kurioser Pflanzen",
	"Gefahr und Spaß in einem",
	"Bogenschießen für Tollpatsche",
	"Ein Handbuch für theologisch interessierte Abenteurer",
	"Ein Leitfaden für tapfere Schwertkämpfer",
	"Wie man Feinde mit Worten besiegt",
	"Zaubersprüche und ihre Bedeutung",
	"Ein Kompendium über diese eigenwilligen Wesen",
	"Eine Einführung in die magischen Künste",
	"Tipps für heldenhafte Abenteurer",
	"Eine Reise ins Reich der Fabelwesen",
	"Ein Guide für Schatzsucher",
	"Unkonventionelle Rezepte für mutige Köche",
	"Ein Leitfaden für Schattenmeister",
	"Magische Kreaturen und wie man sie zähmt",
	"Knifflige Aufgaben für kluge Köpfe",
	"Witze und Spaß für tapfere Abenteurer",
];

const footnote = [
	"Beispielfußnote"
];

const coverText = [    
	"Tauchen Sie ein in eine Welt voller Magie, Abenteuer und faszinierender Kreaturen. Dieses Buch entführt Sie in eine epische Fantasywelt, in der tapfere Helden gegen finstere Mächte antreten. Begleiten Sie sie auf ihren gefährlichen Reisen, während sie Geheimnisse lüften, Schätze entdecken und sich den Herausforderungen stellen, die ihnen begegnen. Ein unvergessliches Abenteuer wartet auf Sie!",
	"Betreten Sie eine fesselnde Fantasywelt, in der die Grenzen der Vorstellungskraft verschwimmen. Tauchen Sie ein in ein Reich voller Magie, in dem mystische Wesen die Lande durchstreifen und uralte Prophezeiungen das Schicksal der Welt bestimmen. Erleben Sie die Spannung und den Nervenkitzel, wenn mutige Helden gegen dunkle Bedrohungen kämpfen und das Gleichgewicht wiederherstellen. Eine unvergessliche Reise erwartet Sie!",
	"Willkommen in einer fantastischen Welt, in der die Grenzen zwischen Realität und Mythos verschwimmen. Erleben Sie den Zauber einer vergessenen Ära, in der tapfere Krieger, weise Zauberer und geheimnisvolle Wesen Seite an Seite existieren. Entdecken Sie uralte Relikte, ergründen Sie geheime Mysterien und setzen Sie Ihre Fähigkeiten ein, um das Unmögliche zu erreichen. Eine packende Reise in die Welt der Fantasie erwartet Sie!",
	"Bereiten Sie sich vor, in eine fantastische Welt einzutauchen, in der Abenteuer an jeder Ecke lauern. Tauchen Sie ein in eine Geschichte voller Magie, Intrigen und heldenhafter Taten. Begegnen Sie faszinierenden Charakteren, während Sie in eine Welt eintauchen, in der nichts unmöglich scheint. Lassen Sie sich von der Macht der Fantasie verführen und entdecken Sie eine Geschichte, die Sie bis zur letzten Seite in ihren Bann ziehen wird.",
	"Willkommen in einer Welt, in der das Unvorstellbare Wirklichkeit wird. Hier treffen furchtlose Krieger auf finstere Kreaturen, Magie durchdringt jeden Winkel und Abenteuer warten hinter jeder Tür. Erleben Sie eine atemberaubende Reise in ein Land der Fantasie, in dem das Schicksal auf dem Spiel steht und der Mut eines Einzelnen die Welt verändern kann. Treten Sie ein und lassen Sie sich verzaubern!",
	"Entfliehen Sie dem Alltag und tauchen Sie ein in eine Welt voller Fantasy und Phantasie. Erleben Sie den Nervenkitzel des Unbekannten, wenn Sie in eine Welt eintauchen, in der Hexen und Zauberer, Elfen und Orks die Lande bevölkern. Begleiten Sie furchtlose Helden auf ihren gefährlichen Abenteuern."
];

const coverTextShort = [
	"Stürze dich in eine epische Fantasy-Welt voller Gefahren und Abenteuer!",
    "Entfessele deine Macht und werde zum Helden einer magischen Prophezeiung.",
    "Erkunde eine postapokalyptische Wüste und kämpfe ums Überleben in einer brutalen Welt.",
    "Tauche ein in die düstere Atmosphäre eines Noir-Krimis und löse mysteriöse Fälle.",
    "Reise durch die Zeit und erlebe historische Ereignisse hautnah in einem actiongeladenen RPG.",
    "Schließe dich einer Gruppe von Rebellen an und stürze das korrupte Imperium.",
    "Begib dich auf eine intergalaktische Odyssee und erkunde fremde Planeten voller Gefahren.",
    "Werde zum mächtigsten Zauberer und besiege dunkle Kreaturen in einer Welt voller Magie.",
    "Erschaffe deine eigene Legende und werde zum legendären Krieger in einer epischen Schlacht.",
    "Enthülle das Geheimnis einer verfluchten Insel und kämpfe gegen übernatürliche Bedrohungen."
]

module.exports = {

	front : function() {
		return dedent`
		  {{vorderseite}}
		  {{dunkel}}

		  {{keininhalt}}

		  {{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_rot.png)}}

		  # ${_.sample(titles)}
		  ## ${_.sample(subtitles)}

		  {{vollbild ![Hintergrund](/assets/ilaris/hintergruende/challenger.png)}}

		  {{fusszeile 
		    Ilaris - Schlanke Regeln für Aventurien
		  }}

		  \page
		  \n`;
	},

	frontPart : function() {
		return dedent`
			{{vorderseite}}

			{{keininhalt}}

			{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_rot.png)}}

			# ${_.sample(titles)}
			## ${_.sample(subtitles)}

			{{maske,mitte
			  ![Hintegrund](/assets/ilaris/hintergruende/challenger.png){width:100%,height:100%}
			}}

			{{fusszeile 
			  Ilaris - Schlanke Regeln für Aventurien
			}}

			\page
			\n`;
	},

	backRight : function() {
		return dedent`
			\page
			{{rueckseite}}

			{{keininhalt}}

			# ${_.sample(titles)}
			:
			## ${_.sample(subtitles)}
			:
			___
			
			${_.sampleSize(coverTextShort, 3).join('\n:\n')}
			:
			___
			:
			##### Auf einen Blick
			| | | | | |
			|:-----|:-:|:-:|:-:|:-:|
			| Genre                 | Attentat, Rätsel ||||
			| Ort                 | Beliebig ||||
			| Zeit                 | Beliebig ||||
			| Benötigt                 | Ilaris GRW ||||
			| Komplexität Spieler   | {{punkt,voll}} | {{punkt,leer}} | {{punkt,leer}} | {{punkt,leer}} |
			| Komplexität Meister   | {{punkt,voll}} | {{punkt,voll}} | {{punkt,leer}} | {{punkt,leer}} |
			| Erfahrungsgrad        | {{punkt,voll}} | {{punkt,voll}} | {{punkt,voll}} | {{punkt,leer}} |
			| Kampf                 | {{punkt,voll}} | {{punkt,voll}} | {{punkt,voll}} | {{punkt,voll}} |
			| Soziale Fertigkeiten  | {{punkt,leer}} | {{punkt,leer}} | {{punkt,leer}} | {{punkt,leer}} |

			{{logo,left:110px;
			ilaris-online.de
			![](/assets/ilaris/maskotchen-kopie-2.webp)
			}}
			
			{{maske,rechts
			<!-- ergänze zB ,--offset:-4cm um den Textbereich breiter zu machen -->
			![Hintergrund](https://i.imgur.com/GZfjDWV.png)
			}}
			`;
	},

	backTop : function() {
		return dedent`
			\page
			{{rueckseite,oben}}

			{{keininhalt}}

			# ${_.sample(subtitles)}
			:
			## ${_.sample(subtitles)}
			:
			___
			${_.sample(coverTextShort)}
			:
			${_.sampleSize(coverText, 1).join('\n:\n')}
			:
			{{wide,width:50%,position:absolute,bottom:10px,left:1.5cm
			##### Auf einen Blick
			| | | | | |
			|:----------------------|:--:|:--:|:--:|:--:|
			| Genre                 | Attentat, Rätsel ||||
			| Ort                   | Beliebig ||||
			| Zeit                  | Beliebig ||||
			| Benötigt              | Ilaris GRW ||||
			| Komplexität Spieler   | {{punkt,voll}} | {{punkt,leer}} | {{punkt,leer}} | {{punkt,leer}} |
			| Komplexität Meister   | {{punkt,voll}} | {{punkt,voll}} | {{punkt,leer}} | {{punkt,leer}} |
			| Erfahrungsgrad        | {{punkt,voll}} | {{punkt,voll}} | {{punkt,voll}} | {{punkt,leer}} |
			| Kampf                 | {{punkt,voll}} | {{punkt,voll}} | {{punkt,voll}} | {{punkt,voll}} |
			| Soziale Fertigkeiten  | {{punkt,leer}} | {{punkt,leer}} | {{punkt,leer}} | {{punkt,leer}} |
			}}
			{{logo,right:26px;left:unset
			ilaris-online.de
			![](/assets/ilaris/maskotchen-kopie-2.webp)
			}}

			{{maske,oben
			![Hintergrund](https://i.imgur.com/GZfjDWV.png){height:100%}
			}}
			`;
	},

};
