/* eslint-disable max-lines */

const MagicGen = require('./snippets/magic.gen.js');
const ClassTableGen = require('./snippets/classtable.gen.js');
const MonsterBlockGen = require('./snippets/monsterblock.gen.js');
const scriptGen = require('./snippets/script.gen.js');
const CoverPageGen = require('./snippets/coverpage.gen.js');
const TableOfContentsGen = require('./snippets/tableOfContents.gen.js');
const indexGen = require('./snippets/index.gen.js');
const dedent = require('dedent-tabs').default;



module.exports = [

	{
		groupName: 'Text Editor',
		icon: 'fas fa-pencil-alt',
		view: 'text',
		snippets: [
			{
				name: 'Manuelle Seitenzahl',
				icon: 'fas fa-bookmark',
				gen: '{{seitenzahl 1}}\n{{fusszeile PART 1 | SECTION NAME}}\n\n'
			},
			{
				name: 'Selbstzählende Seitennummer',
				icon: 'fas fa-sort-numeric-down',
				gen: '{{seitenzahl,auto}}\n{{fusszeile PART 1 | SECTION NAME}}\n\n'
			},
			{
				name: 'Inhaltsverzeichnis',
				icon: 'fas fa-book',
				gen: TableOfContentsGen
			},
			{
				name: 'Kopfzeile',
				icon: 'fas fa-minus',
				gen: function () {
					return dedent`
					{{kopfzeile Dies ist eine Kopfzeile}}`;
				},
			},
			{
				name: 'Fußzeile',
				icon: 'fas fa-minus',
				gen: function () {
					return dedent`
					{{fusszeile Dies ist eine Fußzeile}}`;
				},
			},
			{
				name: 'Nicht ins Inhaltsverzeichnis',
				icon: 'fas fa-ban',
				gen: function () {
					return dedent`
					{{keininhalt}}
					`;
				},
			},
			// {
			// 	name: 'Index',
			// 	icon: 'fas fa-bars',
			// 	gen: indexGen,
			// 	experimental: true
			// }
		]
	},
	{
		groupName: 'Style Editor',
		icon: 'fas fa-pencil-alt',
		view: 'style',
		snippets: [
			// {
			// 	name: 'Remove Drop Cap',
			// 	icon: 'fas fa-remove-format',
			// 	gen: dedent`/* Removes Drop Caps */
			// 			.page h1+p:first-letter {
			// 				all: unset;
			// 			}\n\n
			// 			/* Removes Small-Caps in first line */
			// 			.page h1+p:first-line {
			// 				all: unset;
			// 			}`
			// },
			// {
			// 	name: 'Tweak Drop Cap',
			// 	icon: 'fas fa-sliders-h',
			// 	gen: dedent`/* Drop Cap settings */
			// 			.page h1 + p::first-letter {
			// 				font-family: SolberaImitationRemake;
			// 				font-size: 3.5cm;
			// 				background-image: linear-gradient(-45deg, #322814, #998250, #322814);
			// 				line-height: 1em;
			// 			}\n\n`
			// }
		]
	},

	/*********************** IMAGES *******************/
	{
		groupName: 'Grafiken',
		icon: 'fas fa-images',
		view: 'text',
		snippets: [
			{
				name: 'Bild',
				icon: 'fas fa-image',
				gen: dedent`
					![Bierelementar](https://brauerei.ilaris-online.de/assets/ilaris/lebewesen/baromna.png){width:300px,mix-blend-mode:multiply}`
			},
			{
				name: 'Bild mit Credits',
				icon: 'fas fa-image',
				gen: dedent`
					![Bierelementar](https://brauerei.ilaris-online.de/assets/ilaris/lebewesen/baromna.png) {width:300px,mix-blend-mode:multiply}

					{{artist,position:relative,top:-230px,left:10px,margin-bottom:-30px
					##### Elementar Baromna
					[Bernhard Eisner](https://www.artstation.com/bernhard_eisner)
					}}`
			},
			{
				name: 'Hintergrundbild',
				icon: 'fas fa-tree',
				gen: dedent`
					![Hintergrund](http://i.imgur.com/hMna6G0.png) {position:absolute,top:50px,right:30px,width:280px}

					{{artist,top:80px,right:30px
					##### Homebrew Mug
					[naturalcrit](https://homebrew.naturalcrit.com)
					}}`
			},
			{
				name: 'Wasserzeichen',
				icon: 'fas fa-id-card',
				gen: dedent`
				{{watermark Ilaris}}\n`
			},
			{
				name: 'Icons',
				icon: 'fas fa-icons',
				gen: function () { return "{{symbol}}"; },
				subsnippets: [
					{
						name: "Königin",
						icon: 'fas fa-chess-queen',
						gen: function () { return "{{symbol,koenigin}}"; }
					},
					{
						name: "Springer",
						icon: 'fas fa-chess-knight',
						gen: function () { return "{{symbol,springer}}"; }
					},
					{
						name: "Bauer",
						icon: 'fas fa-chess-pawn',
						gen: function () { return "{{symbol,bauer}}"; }
					},
					{
						name: "Feder",
						icon: 'fas fa-feather',
						gen: function () { return "{{symbol,feder}}"; }
					},
					{
						name: "Medalie",
						icon: 'fas fa-medal',
						gen: function () { return "{{symbol,medalie}}"; }
					},
					{
						name: "Helm",
						icon: 'fas fa-hard-hat',
						gen: function () { return "{{symbol,helm}}"; }
					},
					{
						name: "Schubkarre",
						icon: 'fas fa-shopping-cart',
						gen: function () { return "{{symbol,schubkarre}}"; }
					},
					{
						name: "Kompass",
						icon: 'far fa-compass',
						gen: function () { return "{{symbol,kompass}}"; }
					},
					{
						name: "Turm",
						icon: 'fas fa-gopuram',
						gen: function () { return "{{symbol,turm}}"; }
					},
					{
						name: "Schatz",
						icon: 'far fa-gem',
						gen: function () { return "{{symbol,schatz}}"; }
					},
				]
			},
			{
				name: 'Logo',
				icon: 'fas fa-dice-d20',
				gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_rot.png)}}\n'; },
				subsnippets: [
					{
						name: 'Würfel Rot',
						icon: 'fas fa-dice-d20',
						color: 'red',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_rot.png)}}\n'; }
					},
					{
						name: 'Würfel Braun',
						icon: 'fas fa-dice-d20',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_braun.png)}}\n'; }
					},
					{
						name: 'Würfel Orange',
						icon: 'fas fa-dice-d20',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_orange.png)}}\n'; }
					},
					{
						name: 'Würfel Gelb',
						icon: 'fas fa-dice-d20',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_gelb.png)}}\n'; }
					},
					{
						name: 'Würfel Hellgrün',
						icon: 'fas fa-dice-d20',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_hellgruen.png)}}\n'; }
					},
					{
						name: 'Würfel Grün',
						icon: 'fas fa-dice-d20',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_gruen.png)}}\n'; }
					},
					{
						name: 'Würfel Blau',
						icon: 'fas fa-dice-d20',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_blau.png)}}\n'; }
					},
					{
						name: 'Würfel Hellblau',
						icon: 'fas fa-dice-d20',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_hellblau.png)}}\n'; }
					},
					{
						name: 'Würfel Lila',
						icon: 'fas fa-dice-d20',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_lila.png)}}\n'; }
					},
					{
						name: 'Würfel Pink',
						icon: 'fas fa-dice-d20',
						gen: function () { return '{{logo ![Ilaris Würfel-Logo](/assets/ilaris/logo/icon_pink.png)}}\n'; }
					},
				]
			}
		]
	},

	/************************* ILARIS ********************/
	{
		groupName: 'Ilaris',
		icon: 'fas fa-book',
		view: 'text',
		snippets: [
			{
				name: 'Versalie',
				icon: 'fas fa-archway',
				gen: function () {
					return '{{versalie A}}';
				},
			},
			{
				name: 'Zauber',
				icon: 'fas fa-magic',
				gen: MagicGen.spell,
			},
			{
				name: 'Notiz',
				icon: 'fas fa-sticky-note',
				gen: function () {
					return dedent`
						{{notiz
						##### Eine kleine Randnotiz
						SL-Infos oder andere Randbemerkungen passen doch gut in so einen Kasten.

						**Tabellen und Listen** funktionieren hier auch..
						}}
						\n`;
				},
			},
			{
				name: 'Textbox',
				icon: 'fas fa-comment-alt',
				gen: function () {
					return dedent`
						{{textbox
						##### Hier kann was wichtiges stehen
						Besonders wichtige Hinweise oder SL infos.

						- Tabellen
						- Listen
						- Bilder
						
						können auch in diese Box.
						}}
						\n`;
				},
			},
			{
				name: 'Kasten - Brief in Handschrift',
				icon: 'fas fa-envelope',
				gen: function () {
					return dedent`
					{{kasten,handschrift
					Edle Helden,
					<br>
					warum in die Ferne schweifen, wenn das größte Abenteuer direkt vor eurer Nase liegt.
					
					{{rechtsbuendig -- Niemand}}
					}}
					\n`;
				},
			},
			{
				name: 'Kasten - Brief in Krakelschrift',
				icon: 'fas fa-envelope',
				gen: function () {
					return dedent`
					{{kasten,krakelschrift
					Menschen,
					<br>
					haut ab oder Ork euch zerschmettern!
					
					}}
					\n`;
				},
			},
			{
				name: 'Kreatur',
				icon: 'fas fa-paw',
				gen: MonsterBlockGen.creature(),
				experimental: true
			},
			{
				name: 'NSC',
				icon: 'fas fa-user-secret',  // fa-masks-theater
				gen: MonsterBlockGen.humanoid(),
			},
			{
				name: 'Künstler Credit',
				icon: 'fas fa-signature',
				gen: function () {
					return dedent`
						{{artist,top:90px,right:30px
						##### Starry Night
						[Van Gogh](https://www.vangoghmuseum.nl/en)
						}}
						\n`;
				},
			},
			{
				name: 'Ulisses Disclaimer',
				icon: 'far fa-copyright',
				gen: function () {
					return dedent`
					{{credit
					#### Artwork © ${new Date().getFullYear()} Ulisses Spiele.  
					DAS SCHWARZE AUGE, AVENTURIEN, DERE, MYRANOR, THARUN, UTHURIA, RIESLAND 
					und THE DARK EYE sind eingetragene Marken der Ulisses Spiele GmbH, Waldems. 
					Die Verwendung der Grafiken erfolgt unter den von Ulisses Spiele erlaubten Richtlinien. 
					Eine Verwendung über diese Richtlinien hinaus darf nur nach vorheriger schriftlicher 
					Genehmigung der Ulisses Medien und Spiel Distribution GmbH erfolgen.
					}}
					\n`;
				},
			}
		]
	},

	/*********************  TABLES *********************/
	{
		groupName: 'Tabellen',
		icon: 'fas fa-table',
		view: 'text',
		snippets: [
			{
				name : 'Tabelle',
				icon : 'fas fa-th-list',
				gen  : function(){
					return dedent`
						##### Schwierigkeiten von Proben
						| Probenschwierigkeiten | PW = 2 | PW = 10 | PW = 18 |
						|:----------------------|:------:|:-------:|:-------:|
						| alltäglich (90%)      | 4      | 12      | 20      |
						| einfach (72%)         | 10     | 18      | 26      |
						| schwierig (43%)       | 14     | 22      | 30      |
						| unreal. (16%)         | 18     | 26      | 34      |
						| spektakulär (1%)      | 22     | 30      | 38      |
						\n`;
				}
			},
			{
				name : 'Geteilte Tabelle',
				icon : 'fas fa-th-large',
				gen  : function(){
					return dedent`
						##### Kampfmodifikatoren
						{{column-count:2
						| Nahkampf              | Mod |
						|:----------------------|----:|
						| knietiefes Wasser     | -2  |
						| hüfttiefes Wasser     | -4  |
						| schultertiefes Wasser | –8  |
						
						| Fernkampf           | Mod |
						|:--------------------|----:|
						| sehr groß (Elefant) | +8  |
						| mittel (Mensch)     | 0   |
						| sehr klein (Hase)   | –8  |
						}}					
						\n`;
				}
			},
			{
				name : 'Breite Tabelle',
				icon : 'fas fa-list',
				experimental: true,
				gen  : function(){
					return dedent`			
						{{weit
						##### Fernkampfwaffen
						|Waffe | TP  | RW  | LZ | Härte | Eigenschaften |
						|:------------------------|:-----:|:----------------|--------:|:-----------|:--|
						| ***Bögen***  ||||||
						| &emsp; Kurzbogen  | 2W6+1 | 16 | 0 | 3 | Zweihändig |
						| &emsp; Langbogen  | 2W6+3 | 64 | 1 | 3 | Schwer (4), Zweihändig, kein Reittier
						| ***Armbrüste***  ||||||
						| &emsp; Arbalette | 3W6+2 | 32 | 8 | 5 | Niederwerfen (-4), Zweihändig
						| &emsp; Arbalone | 3W6+7 | 64 | 16 | 6 | Niederwerfen (-8), kein Reittier, stationär
						}}
						\n`;
				}
			},
			{
				name: 'Runen',
				icon: 'fas fa-language',
				gen: scriptGen.dwarvish,
				experimental: true,
				subsnippets: [
					{
						name: 'Zwergisch',
						icon: 'fac davek',
						gen: scriptGen.dwarvish,
					},
					{
						name: 'Elfisch',
						icon: 'fac rellanic',
						gen: scriptGen.elvish,
					},
					{
						name: 'Drachisch',
						icon: 'fac iokharic',
						gen: scriptGen.draconic,
					},
				]
			},
		]
	},

	/*********************  Seiten *********************/
	{
		groupName: 'Seiten',
		icon: 'fas fa-table',
		view: 'text',
		snippets: [
			{
				name: 'Vorderseite - Vollbild',
				icon: 'fac book-front-cover',
				gen: CoverPageGen.front,
			},
			{
				name: 'Vorderseite - Teilbild',
				icon: 'fac book-part-cover',
				gen: CoverPageGen.frontPart,
			},
			{
				name: 'Rückseite - Teilbild',
				icon: 'fac book-back-cover',
				gen: CoverPageGen.backRight,
			},
			{
				name: 'Rückseite - Bild oben',
				icon: 'fac book-back-cover',
				gen: CoverPageGen.backTop,
			},
			// {
			// 	name: "Dank und Copyright",
			// 	icon: "fas fa-copyright",
			// 	gen: dedent`
			// 	#### Icons von [game-icons.net](https://game-icons.net/) unter [CC by 3.0](https://creativecommons.org/licenses/by/3.0/)
			// 	Chess queen, Chess pawn, Chess knight, Open treasure chest von Skoll
			// 	Feather, Compass, Medal skull, Locked fortress von Lorc
			// 	Weight, Wheelbarrow von Delapouite
			// 	Warlord helmet von Caro Asercion
			// 	`
			// },
			{
				name: "Impressum",
				icon: "fas fa-copyright",
				gen: dedent`
				{{keininhalt}}

				# Impressum

				![](/assets/ilaris/logo/icon_grau.png) {position:absolute,top:6.2cm,left:1.9cm,width:80%,mix-blend-mode:multiply,opacity:15%}

				{{wide,width:80%,margin:auto
				{{credit
				## Text
				Dein Name
				::
				## Veröffentlichung
				${new Intl.DateTimeFormat('de', {day:'2-digit', month:'2-digit', year:'numeric'}).format(new Date())} / Version 1.0
				::
				## Illustrationen
				Weitere Credits
				::
				## Lektorat
				Person A und B
				::
				## Spieletests
				Person A, B und C
				::
				## Kontakt
				📧 beispiel@example.com
				<br/>
				![](/assets/discord.png) {width:14px} https://discordapp.com/users/DeineID
				<br/>
				🌐 https://brauerei.ilaris-online.de


				::::::
				## Disclaimer
				::
				#### Artwork © ${new Date().getFullYear()} Ulisses Spiele.  
				DAS SCHWARZE AUGE, AVENTURIEN, DERE, MYRANOR, THARUN, UTHURIA, RIESLAND 
				und THE DARK EYE sind eingetragene Marken der Ulisses Spiele GmbH, Waldems. 
				Die Verwendung der Grafiken erfolgt unter den von Ulisses Spiele erlaubten Richtlinien. 
				Eine Verwendung über diese Richtlinien hinaus darf nur nach vorheriger schriftlicher 
				Genehmigung der Ulisses Medien und Spiel Distribution GmbH erfolgen.
				}}
				::
				{{zentriert
				#### Icons von [game-icons.net](https://game-icons.net/) unter [CC by 3.0](https://creativecommons.org/licenses/by/3.0/)
				Chess queen, Chess pawn, Chess knight, Open treasure chest von Skoll
				Feather, Compass, Medal skull, Locked fortress von Lorc
				Weight, Wheelbarrow von Delapouite
				Warlord helmet von Caro Asercion
				::
				#### Illustrationen
				Ilaris-Grafiken: Copyright [Bernhard Eisner](https://bernhard_eisner.artstation.com/)  
				Cover-Artwork: Copyright <a href="https://www.freepik.com/free-photo/angel-quiet-primeval-forest-digital-painting_15174520.htm">Image by liuzishan</a> on Freepik  
				::
				#### Layout und Dokument-Generierung
				https://brauerei.ilaris-online.de
				}}

				}}

				\page
				`
			},
			{
				name: 'Einzelkarte',
				icon: 'far fa-square',
				gen: function () {
					return dedent`
						\page
						{{einzelkarte}}
						{{karte
						#### Kartentitel
						##### Untertitel
						Kartentext oder Inhalte
						###### Fußzeile
						}}
						\n`;
				},
			},
			{
				name: 'Karten (3x3)',
				icon: 'fas fa-th',
				gen: function () {
					return dedent`
						\page
						{{kopfzeile Karten}}
						{{karten,keinhintergrund}}
			
						{{karte,schwarz
						#### Randfarben
						Gib eine Farbe für Rand und Überschrift an.
						Farbcodes für Manöverkarten:
						- \`schwarz\`: Proben & Profanes 
						- \`rot\`: Gesundheit 
						- \`braun\`: Kampf 
						- \`lila\`: Magie, Zauber
						- \`gold\`: Karma, Liturgie
						- \`pink\`: Pakt, Anrufung
						**Experte:** :: Eigene Farben können als Hex wie folgt angegeben werden: \`border-color:#7352A1\`
						}}
						
						{{karte,randlos
						##### Randlose Karte
						Setze \`randlos\` um den Rand der Karte wegzulassen. 
						
						**Experte:** :: Du kannst mit CSS auch eigene Randdicken wie zum Beispiel \`border:7mm;\` setzen.
						}}
						
						{{karte,
						#### Kartentitel
						##### Kartenuntertitel
						Kartentext oder Tabellen oder Bilder...
						Hier können auch andere Layoutelemente innerhalb einer Karte genutzt werden.
						###### Fußzeile
						}}
						
						{{karte,border-color:#984806
						#### Kartentitel
						Text...
						###### Fußzeile
						}}
						
						{{karte,
						#### Kartentitel
						##### Kartenuntertitel
						Kartentext oder Tabellen oder Bilder...
						###### Fußzeile
						}}
						
						{{karte,
						#### Kartentitel
						Mit Bild...
						
						![Kraeuterkopf](/assets/ilaris/lebewesen/kraeuterkopf.png) {position:absolute,left:0.7cm,bottom:1cm,width:80%,mix-blend-mode:multiply}
						
						
						###### Fußzeile
						}}
						
						{{karte,border-color:#5F4778
						#### Kartentitel
						Text...
						###### Fußzeile
						}}
						
						{{karte,
						#### Kartentitel
						Text...
						
						##### Tabelle auf Karte
						| Spezies | Rolle | Fähigkeiten |
						|:------------------|:-----:|:-----------------:|
						| Menschen                 | Krieger     | Schwertkampf, Taktik, Ausdauer                |
						| Elfen               | Magier     | Elementarmagie, Heilung, Illusion                |
						| Zwerge             | Krieger     | Hammerkampf, Schmiedekunst                |
						| Orks             | Berserker     | Raserei, Widerstand                |
						| Gnome            | Schurke     | Schleichen, Diebeskunst, Fallen entschärfen                |
						
						###### Fußzeile
						}}
							
						
						{{karte,kleinertitel,kleinertext
						#### Sehr kleiner Kartentitel
						##### Mini-Untertitel
						Und äußerst kleiner Text...
						:
						In den weiten und magischen Landen erhob sich eine düstere Bedrohung, die das Gleichgewicht der Welt zu zerstören drohte. Verzweifelt versammelten sich tapfere Helden aus allen Ecken des Landes, bereit, sich der Herausforderung entgegenzustellen. 
						
						Gemeinsam durchstreiften sie gefährliche Wälder, uralte Verliese und unbekannte Reiche, um die Rätsel vergessener Artefakte zu lösen. In epischen Schlachten trafen sie auf mächtige Kreaturen und dunkle Magier, während sie ihre Entschlossenheit und Tapferkeit unter Beweis stellten. Schließlich erreichten sie den finsteren Meister des Bösen, um sich ihm in einem alles entscheidenden Kampf zu stellen.
						
						Mit vereinten Kräften gelang es den Helden, die Welt vor ihrem sicheren Untergang zu bewahren.
						###### Fußzeile
						}}
						
						{{seitenzahl,auto}}
						\n`;
				},
			},
		]
	},




	/**************** PAGE *************/

	{
		groupName: 'Druck',
		icon: 'fas fa-print',
		view: 'style',
		snippets: [
			{
				name: 'Toner-schonend',
				icon: 'fas fa-tint',
				gen: dedent`
					/* Ink Friendly */
					*:is(.page,.notiz,.textbox) {
						background : white !important;
						filter : drop-shadow(0px 0px 3px #888) !important;
					}

					.page img {
						visibility : hidden;
					}\n\n`
			},
		]
	}
];
