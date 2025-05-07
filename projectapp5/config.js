// Configuration for the 1950s Character Generator
const CONFIG = {
    // Character gender options
    genders: [
        { value: "girl", label: "Girls/Women" },
        { value: "boy", label: "Boys/Men" }
    ],
    
    // Style foundations for each gender
    styleFoundations: {
        girl: [
            { value: "sweet", label: "Sweet/Wholesome" },
            { value: "bold", label: "Bold/Rebellious" },
            { value: "glamorous", label: "Glamorous/Pin-up" },
            { value: "working", label: "Working Class/Practical" }
        ],
        boy: [
            { value: "athletic", label: "Athletic/Sporty" },
            { value: "rebellious", label: "Rebellious/Edgy" },
            { value: "intellectual", label: "Intellectual/Clean-cut" },
            { value: "working", label: "Working Class/Mechanical" }
        ]
    },
    
    // Hairstyles for each gender
    hairstyles: {
        girl: [
            { value: "ponytail", label: "Ponytail" },
            { value: "victoryRolls", label: "Victory Rolls" },
            { value: "poodleCut", label: "Poodle Cut" },
            { value: "pageboy", label: "Pageboy" },
            { value: "bouffant", label: "Bouffant" },
            { value: "longCurled", label: "Long with Curled Ends" },
            { value: "flip", label: "Flip" },
            { value: "beehive", label: "Beehive" },
            { value: "pixieCut", label: "Pixie Cut" },
            { value: "bandana", label: "Bandana Wrap/Scarf Tie" },
            { value: "bubbleCut", label: "Bubble Cut" },
            { value: "italianCut", label: "Italian Cut" }
        ],
        boy: [
            { value: "pompadour", label: "Pompadour" },
            { value: "ducksAss", label: "DA (Duck's Ass)" },
            { value: "crewCut", label: "Crew Cut" },
            { value: "sidePart", label: "Side Part with Brylcreem" },
            { value: "flattop", label: "Flattop" },
            { value: "naturalWaves", label: "Natural Waves" },
            { value: "slickedBack", label: "Slicked Back" },
            { value: "ivyLeague", label: "Ivy League Cut" },
            { value: "mohawk", label: "Mohawk" },
            { value: "sideburns", label: "Prominent Sideburns" }
        ]
    },
    
    // Tops for each gender
    tops: {
        girl: [
            { value: "buttonBlouse", label: "Button-up Blouse" },
            { value: "peterPanCollar", label: "Peter Pan Collar Blouse" },
            { value: "twinSet", label: "Twin Set" },
            { value: "fittedKnit", label: "Fitted Knit Top" },
            { value: "boatNeck", label: "Boat Neck Top" },
            { value: "peasantBlouse", label: "Off-shoulder Peasant Blouse" },
            { value: "halterTop", label: "Halter Top" },
            { value: "sleevelessShell", label: "Sleeveless Shell" },
            { value: "ginghamButton", label: "Gingham/Plaid Button-up" },
            { value: "sailorTop", label: "Sailor Top" },
            { value: "poloShirt", label: "Polo Shirt" },
            { value: "croppedTop", label: "Cropped Top" },
            { value: "scoopNeck", label: "Scoop Neck T-shirt" },
            { value: "cardiganTop", label: "Cardigan (worn as top)" },
            { value: "varsitySweater", label: "Varsity/Letterman Sweater" },
            { value: "bowlingShirt", label: "Bowling Shirt" }
        ],
        boy: [
            { value: "whiteTshirt", label: "White T-shirt" },
            { value: "bowlingShirt", label: "Bowling Shirt" },
            { value: "buttonDress", label: "Button-up Dress Shirt" },
            { value: "poloShirt", label: "Polo Shirt" },
            { value: "varsitySweater", label: "Varsity/Letterman Sweater" },
            { value: "knitPullover", label: "Knit Pullover" },
            { value: "hawaiianShirt", label: "Hawaiian Shirt" },
            { value: "henleyShirt", label: "Henley Shirt" },
            { value: "flannelShirt", label: "Flannel Shirt" },
            { value: "mechanicShirt", label: "Mechanic Work Shirt" },
            { value: "vneckSweater", label: "V-neck Sweater" },
            { value: "shortSleeve", label: "Short-sleeve Button-up" },
            { value: "ginghamShirt", label: "Gingham/Plaid Shirt" },
            { value: "athleticJersey", label: "Athletic Jersey" }
        ]
    },
    
    // Bottoms for each gender
    bottoms: {
        girl: [
            { value: "poodleSkirt", label: "Poodle Skirt" },
            { value: "pencilSkirt", label: "Pencil Skirt" },
            { value: "circleSkirt", label: "Circle Skirt" },
            { value: "capriPants", label: "Capri Pants" },
            { value: "pedalPushers", label: "Pedal Pushers" },
            { value: "highWaistedJeans", label: "High-waisted Jeans (cuffed)" },
            { value: "highWaistedShorts", label: "High-waisted Shorts" },
            { value: "bermudaShorts", label: "Bermuda Shorts" },
            { value: "pleatedSkirt", label: "Pleated Skirt" },
            { value: "swingSkirt", label: "Swing Skirt" },
            { value: "dungarees", label: "Dungarees/Overalls" },
            { value: "cigarettePants", label: "Cigarette Pants" },
            { value: "ginghamPants", label: "Gingham Pants" },
            { value: "plaidSkirt", label: "Plaid Skirt" }
        ],
        boy: [
            { value: "highWaistSlacks", label: "High-waisted Dress Slacks" },
            { value: "blueJeans", label: "Blue Jeans (cuffed)" },
            { value: "chinos", label: "Chinos/Khakis" },
            { value: "pleatedPants", label: "Pleated Dress Pants" },
            { value: "workPants", label: "Work Pants" },
            { value: "dungarees", label: "Dungarees/Overalls" },
            { value: "basketballShorts", label: "Basketball Shorts" },
            { value: "swimTrunks", label: "Swim Trunks" },
            { value: "trackPants", label: "Track Pants" },
            { value: "plaidPants", label: "Plaid Pants" },
            { value: "westernPants", label: "Western-style Pants" },
            { value: "kneeLengthShorts", label: "Shorts (knee-length)" }
        ]
    },
    
    // Dresses (girls only)
    dresses: [
        { value: "shirtwaist", label: "Shirtwaist Dress" },
        { value: "swingDress", label: "Swing Dress" },
        { value: "wiggleDress", label: "Wiggle Dress" },
        { value: "sundress", label: "Sundress" },
        { value: "partyDress", label: "Party Dress" },
        { value: "dayDress", label: "Day Dress" },
        { value: "jumperDress", label: "Jumper Dress" },
        { value: "sailorDress", label: "Sailor Dress" },
        { value: "housewifeDress", label: "Housewife Dress" },
        { value: "sweetheartDress", label: "Sweetheart Neckline Dress" },
        { value: "fullSkirtFormal", label: "Full Skirt Formal" },
        { value: "pinafore", label: "Pinafore" }
    ],
    
    // Jackets/Outerwear for each gender
    jackets: {
        girl: [
            { value: "cardigan", label: "Cardigan" },
            { value: "bolero", label: "Bolero Jacket" },
            { value: "croppedJacket", label: "Cropped Jacket" },
            { value: "carCoat", label: "Car Coat" },
            { value: "denimJacket", label: "Denim Jacket" },
            { value: "varsityJacket", label: "Varsity Jacket (boyfriend's)" },
            { value: "rainSlicker", label: "Rain Slicker" },
            { value: "furCollarCoat", label: "Fur-collared Coat" },
            { value: "swingCoat", label: "Swing Coat" },
            { value: "blazer", label: "Blazer" },
            { value: "cape", label: "Cape" }
        ],
        boy: [
            { value: "leatherJacket", label: "Leather Jacket" },
            { value: "varsityJacket", label: "Letterman/Varsity Jacket" },
            { value: "denimJacket", label: "Denim Jacket" },
            { value: "windbreaker", label: "Windbreaker" },
            { value: "sportCoat", label: "Sport Coat/Blazer" },
            { value: "bomberJacket", label: "Bomber Jacket" },
            { value: "carCoat", label: "Car Coat" },
            { value: "cardigan", label: "Cardigan (worn as outerwear)" },
            { value: "workJacket", label: "Work Jacket" },
            { value: "motorcycleJacket", label: "Motorcycle Jacket" },
            { value: "gabardineJacket", label: "Gabardine Jacket" },
            { value: "westernJacket", label: "Western-style Jacket" }
        ]
    },
    
    // Footwear for each gender
    footwear: {
        girl: [
            { value: "saddleShoes", label: "Saddle Shoes" },
            { value: "bobbySocks", label: "Bobby Socks with Loafers" },
            { value: "maryJanes", label: "Mary Janes" },
            { value: "balletFlats", label: "Ballet Flats" },
            { value: "pennyLoafers", label: "Penny Loafers" },
            { value: "oxfords", label: "Oxfords" },
            { value: "kittenHeels", label: "Kitten Heels" },
            { value: "tStrapHeels", label: "T-strap Heels" },
            { value: "wedgeSandals", label: "Wedge Sandals" },
            { value: "keds", label: "Converse/Keds Sneakers" },
            { value: "ankleStrap", label: "Ankle Strap Heels" },
            { value: "moccasins", label: "Moccasins" },
            { value: "whiteSneakers", label: "White Sneakers" }
        ],
        boy: [
            { value: "pennyLoafers", label: "Penny Loafers" },
            { value: "saddleShoes", label: "Saddle Shoes" },
            { value: "engineerBoots", label: "Engineer Boots" },
            { value: "chucks", label: "Converse/Chuck Taylor Sneakers" },
            { value: "brogues", label: "Brogues/Oxfords" },
            { value: "desertBoots", label: "Desert Boots" },
            { value: "motorcycleBoots", label: "Motorcycle Boots" },
            { value: "workBoots", label: "Work Boots" },
            { value: "twoTone", label: "Two-tone Dress Shoes" },
            { value: "basketballShoes", label: "Basketball High-tops" },
            { value: "westernBoots", label: "Western Boots" },
            { value: "slipOns", label: "Slip-on Dress Shoes" }
        ]
    },
    
    // Combined accessories and features
    accessories: {
        girl: [
            { value: "bobbySocks", label: "Bobby Socks" },
            { value: "catEyeGlasses", label: "Cat-eye Glasses" },
            { value: "pearlNecklace", label: "Pearl Necklace" },
            { value: "charmBracelet", label: "Charm Bracelet" },
            { value: "neckScarf", label: "Neck Scarf" },
            { value: "hairRibbon", label: "Hair Ribbon" },
            { value: "brooch", label: "Brooch" },
            { value: "whiteGloves", label: "White Gloves" },
            { value: "anklet", label: "Anklet" },
            { value: "rollerSkates", label: "Roller Skates" },
            { value: "headband", label: "Headband" },
            { value: "wristwatch", label: "Wristwatch" },
            { value: "walletChain", label: "Wallet on Chain" },
            { value: "gum", label: "Chewing Gum" },
            { value: "lollipop", label: "Lollipop" },
            { value: "sodaBottle", label: "Soda Bottle" },
            { value: "milkshake", label: "Milkshake" },
            { value: "freckles", label: "Freckles" },
            { value: "beautyMark", label: "Beauty Mark" },
            { value: "sunglasses", label: "Sunglasses" },
            { value: "nameEmbroidered", label: "Name Embroidered on Clothing" },
            { value: "stance", label: "Distinctive Stance" },
            { value: "expression", label: "Characteristic Expression" },
            { value: "nameTag", label: "Name Tag" },
            { value: "orderPad", label: "Order Pad" },
            { value: "whiteApron", label: "White Apron" },
            { value: "pom-poms", label: "Pom-poms" },
            { value: "megaphone", label: "Megaphone" },
            { value: "schoolColors", label: "School Colors" },
            { value: "redLipstick", label: "Red Lipstick" },
            { value: "apron", label: "Apron" },
            { value: "beret", label: "Beret" },
            { value: "bowlingBall", label: "Bowling Ball" },
            { value: "schoolBooks", label: "School Books" },
            { value: "beachBall", label: "Beach Ball" }
        ],
        boy: [
            { value: "pocketComb", label: "Comb (pocket)" },
            { value: "cigaretteSleeve", label: "Cigarette Pack (rolled in sleeve)" },
            { value: "classRing", label: "Class Ring" },
            { value: "wristwatch", label: "Wristwatch" },
            { value: "chainWallet", label: "Chain Wallet" },
            { value: "bandana", label: "Bandana (pocket)" },
            { value: "hornRimmed", label: "Glasses (horn-rimmed)" },
            { value: "bowTie", label: "Bow Tie" },
            { value: "neckTie", label: "Neck Tie" },
            { value: "hat", label: "Hat (various styles)" },
            { value: "patches", label: "Patches on Jacket" },
            { value: "letterPins", label: "Letter Sweater Pins" },
            { value: "belt", label: "Belt (leather, western)" },
            { value: "suspenders", label: "Suspenders" },
            { value: "idBracelet", label: "ID Bracelet" },
            { value: "gum", label: "Chewing Gum" },
            { value: "cigarette", label: "Cigarette/Toothpick" },
            { value: "sodaBottle", label: "Soda Bottle" },
            { value: "slickedHair", label: "Slicked Hair Shine" },
            { value: "varsityLetters", label: "Varsity Letters/Patches" },
            { value: "clubInsignia", label: "Club/Gang Insignia" },
            { value: "sunglasses", label: "Sunglasses" },
            { value: "tattoo", label: "Tattoo" },
            { value: "nameEmbroidered", label: "Name Embroidered on Clothing" },
            { value: "stance", label: "Distinctive Stance" },
            { value: "expression", label: "Characteristic Expression" },
            { value: "carKeys", label: "Car Keys/Motorcycle Keys" },
            { value: "footballLetterman", label: "Football Letterman" },
            { value: "schoolBooks", label: "School Books" },
            { value: "grease", label: "Grease Stains" },
            { value: "beret", label: "Beret" },
            { value: "bowlingBall", label: "Bowling Ball" },
            { value: "guitar", label: "Guitar" },
            { value: "straw", label: "Straw in Mouth" },
            { value: "sweatbands", label: "Sweatbands" },
            { value: "basketBall", label: "Basketball" }
        ]
    },
    
    // Color options
    colors: [
        { value: "none", label: "None" },
        { value: "red", label: "Red" },
        { value: "pastelPink", label: "Pastel Pink" },
        { value: "hotPink", label: "Hot Pink" },
        { value: "coral", label: "Coral" },
        { value: "orange", label: "Orange" },
        { value: "yellow", label: "Yellow" },
        { value: "mint", label: "Mint Green" },
        { value: "kelly", label: "Kelly Green" },
        { value: "forestGreen", label: "Forest Green" },
        { value: "turquoise", label: "Turquoise" },
        { value: "skyBlue", label: "Sky Blue" },
        { value: "navy", label: "Navy Blue" },
        { value: "royalBlue", label: "Royal Blue" },
        { value: "purple", label: "Purple" },
        { value: "lavender", label: "Lavender" },
        { value: "black", label: "Black" },
        { value: "white", label: "White" },
        { value: "cream", label: "Cream" },
        { value: "tan", label: "Tan" },
        { value: "brown", label: "Brown" },
        { value: "grey", label: "Grey" },
        { value: "silver", label: "Silver" },
        { value: "gold", label: "Gold" },
        { value: "polkaDot", label: "Polka Dot Pattern" },
        { value: "plaid", label: "Plaid Pattern" },
        { value: "gingham", label: "Gingham Pattern" },
        { value: "striped", label: "Striped Pattern" },
        { value: "checkered", label: "Checkered Pattern" },
        { value: "floral", label: "Floral Pattern" }
    ],
    
    // Archetype outfits for each gender
    outfits: {
        girl: [
            { 
                value: "dinerWaitress", 
                label: "Diner Waitress",
                components: {
                    style: "working",
                    hairstyle: "ponytail",
                    top: "buttonBlouse",
                    bottom: "pencilSkirt",
                    jacket: "",
                    footwear: "whiteSneakers",
                    accessories: ["nameTag", "orderPad", "whiteApron"]
                }
            },
            { 
                value: "cheerleader", 
                label: "Cheerleader",
                components: {
                    style: "sweet",
                    hairstyle: "ponytail",
                    top: "varsitySweater",
                    bottom: "pleatedSkirt",
                    jacket: "",
                    footwear: "saddleShoes",
                    accessories: ["pom-poms", "megaphone", "schoolColors"]
                }
            },
            { 
                value: "poodleGirl", 
                label: "Poodle Skirt Sweetheart",
                components: {
                    style: "sweet",
                    hairstyle: "ponytail",
                    top: "twinSet",
                    bottom: "poodleSkirt",
                    jacket: "cardigan",
                    footwear: "saddleShoes",
                    accessories: ["bobbySocks", "charmBracelet", "hairRibbon"]
                }
            },
            { 
                value: "rockabilly", 
                label: "Rockabilly Rebel",
                components: {
                    style: "bold",
                    hairstyle: "victoryRolls",
                    top: "halterTop",
                    bottom: "highWaistedJeans",
                    jacket: "denimJacket",
                    footwear: "keds",
                    accessories: ["bandana", "redLipstick", "sunglasses"]
                }
            },
            { 
                value: "pinup", 
                label: "Pin-up Girl",
                components: {
                    style: "glamorous",
                    hairstyle: "victoryRolls",
                    top: "",
                    bottom: "",
                    dress: "wiggleDress",
                    jacket: "",
                    footwear: "tStrapHeels",
                    accessories: ["redLipstick", "beautyMark", "pearlNecklace"]
                }
            },
            { 
                value: "housewife", 
                label: "Domestic Housewife",
                components: {
                    style: "working",
                    hairstyle: "poodleCut",
                    top: "",
                    bottom: "",
                    dress: "housewifeDress",
                    jacket: "",
                    footwear: "kittenHeels",
                    accessories: ["pearlNecklace", "apron", "whiteGloves"]
                }
            },
            {
                value: "beatnik",
                label: "Beatnik",
                components: {
                    style: "bold",
                    hairstyle: "pixieCut",
                    top: "buttonBlouse",
                    bottom: "cigarettePants",
                    jacket: "",
                    footwear: "balletFlats",
                    accessories: ["beret", "hornRimmed", "cigarette"]
                }
            },
            {
                value: "bowlingTeam",
                label: "Bowling Team Girl",
                components: {
                    style: "sweet",
                    hairstyle: "ponytail",
                    top: "bowlingShirt",
                    bottom: "capriPants",
                    jacket: "",
                    footwear: "keds",
                    accessories: ["nameEmbroidered", "bowlingBall", "gum"]
                }
            },
            {
                value: "preppyGirl",
                label: "Preppy College Girl",
                components: {
                    style: "sweet",
                    hairstyle: "flip",
                    top: "twinSet",
                    bottom: "pleatedSkirt",
                    jacket: "blazer",
                    footwear: "pennyLoafers",
                    accessories: ["pearlNecklace", "hornRimmed", "schoolBooks"]
                }
            },
            {
                value: "driveInDate",
                label: "Drive-In Movie Date",
                components: {
                    style: "sweet",
                    hairstyle: "flip",
                    top: "peasantBlouse",
                    bottom: "circleSkirt",
                    jacket: "varsityJacket",
                    footwear: "saddleShoes",
                    accessories: ["bobbySocks", "sodaBottle", "milkshake"]
                }
            },
            {
                value: "suburbanTeen",
                label: "Suburban Teen",
                components: {
                    style: "sweet",
                    hairstyle: "ponytail",
                    top: "peterPanCollar",
                    bottom: "bermudaShorts",
                    jacket: "cardigan",
                    footwear: "keds",
                    accessories: ["rollerSkates", "schoolBooks", "sodaBottle"]
                }
            },
            {
                value: "swimsuit",
                label: "Beach Bunny",
                components: {
                    style: "glamorous",
                    hairstyle: "bandana",
                    top: "halterTop",
                    bottom: "highWaistedShorts",
                    jacket: "",
                    footwear: "wedgeSandals",
                    accessories: ["sunglasses", "beachBall", "sodaBottle"]
                }
            }
        ],
        boy: [
            { 
                value: "greaser", 
                label: "Greaser",
                components: {
                    style: "rebellious",
                    hairstyle: "pompadour",
                    top: "whiteTshirt",
                    bottom: "blueJeans",
                    jacket: "leatherJacket",
                    footwear: "engineerBoots",
                    accessories: ["pocketComb", "cigaretteSleeve", "chainWallet"]
                }
            },
            { 
                value: "jock", 
                label: "School Jock",
                components: {
                    style: "athletic",
                    hairstyle: "crewCut",
                    top: "varsitySweater",
                    bottom: "chinos",
                    jacket: "varsityJacket",
                    footwear: "saddleShoes",
                    accessories: ["classRing", "footballLetterman", "wristwatch"]
                }
            },
            { 
                value: "preppy", 
                label: "Preppy College Boy",
                components: {
                    style: "intellectual",
                    hairstyle: "sidePart",
                    top: "buttonDress",
                    bottom: "chinos",
                    jacket: "sportCoat",
                    footwear: "pennyLoafers",
                    accessories: ["hornRimmed", "schoolBooks", "bowTie"]
                }
            },
            { 
                value: "mechanic", 
                label: "Hot Rod Mechanic",
                components: {
                    style: "working",
                    hairstyle: "slickedBack",
                    top: "mechanicShirt",
                    bottom: "workPants",
                    jacket: "workJacket",
                    footwear: "workBoots",
                    accessories: ["cigarette", "nameEmbroidered", "grease"]
                }
            },
            { 
                value: "beatnik", 
                label: "Beatnik",
                components: {
                    style: "intellectual",
                    hairstyle: "naturalWaves",
                    top: "buttonDress",
                    bottom: "chinos",
                    jacket: "",
                    footwear: "desertBoots",
                    accessories: ["beret", "hornRimmed", "cigarette"]
                }
            },
            { 
                value: "bowlingTeam", 
                label: "Bowling Team Captain",
                components: {
                    style: "athletic",
                    hairstyle: "sidePart",
                    top: "bowlingShirt",
                    bottom: "pleatedPants",
                    jacket: "",
                    footwear: "brogues",
                    accessories: ["nameEmbroidered", "bowlingBall", "cigarette"]
                }
            },
            {
                value: "cleanCut",
                label: "Clean-Cut All-American",
                components: {
                    style: "intellectual",
                    hairstyle: "crewCut",
                    top: "buttonDress",
                    bottom: "chinos",
                    jacket: "cardigan",
                    footwear: "pennyLoafers",
                    accessories: ["wristwatch", "schoolBooks", "sodaBottle"]
                }
            },
            {
                value: "rockabilly",
                label: "Rockabilly Musician",
                components: {
                    style: "rebellious",
                    hairstyle: "pompadour",
                    top: "bowlingShirt",
                    bottom: "blueJeans",
                    jacket: "",
                    footwear: "chucks",
                    accessories: ["guitar", "cigarette", "slickedHair"]
                }
            },
            {
                value: "driveInDate",
                label: "Drive-In Movie Date",
                components: {
                    style: "athletic",
                    hairstyle: "sidePart",
                    top: "buttonDress",
                    bottom: "chinos",
                    jacket: "sportCoat",
                    footwear: "pennyLoafers",
                    accessories: ["carKeys", "wristwatch", "sodaBottle"]
                }
            },
            {
                value: "motorhead",
                label: "Motorcycle Enthusiast",
                components: {
                    style: "rebellious",
                    hairstyle: "ducksAss",
                    top: "whiteTshirt",
                    bottom: "blueJeans",
                    jacket: "motorcycleJacket",
                    footwear: "motorcycleBoots",
                    accessories: ["bandana", "clubInsignia", "carKeys"]
                }
            },
            {
                value: "farmBoy",
                label: "Farm Boy",
                components: {
                    style: "working",
                    hairstyle: "crewCut",
                    top: "ginghamShirt",
                    bottom: "dungarees",
                    jacket: "",
                    footwear: "workBoots",
                    accessories: ["straw", "belt", "bandana"]
                }
            },
            {
                value: "basketballPlayer",
                label: "Basketball Player",
                components: {
                    style: "athletic",
                    hairstyle: "crewCut",
                    top: "athleticJersey",
                    bottom: "basketballShorts",
                    jacket: "varsityJacket",
                    footwear: "basketballShoes",
                    accessories: ["sweatbands", "varsityLetters", "basketBall"]
                }
            }
        ]
    }
};