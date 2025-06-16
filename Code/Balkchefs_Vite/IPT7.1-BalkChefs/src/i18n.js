import { createI18n } from 'vue-i18n';

const messages = {
  tr: {
    nav: {
      home: "Ana Sayfa",
      search: "Tarif Ara",
      login: "Giriş Yap"
    },
    home: {
      featured: "Öne Çıkan Tarifler",
      meat: "🍖 Et Yemekleri",
      vegan: "🌿 Vegan & Vejetaryen",
      desserts: "🍬 Tatlılar & Atıştırmalıklar"
    },
    changeLanguage: "Dili Değiştir",
    ingredients: "Malzemeler",
    instructions: "Yapılış",
    recipes: {
        karniyarik: {
        name: "Karnıyarık",
        description: "Lezzetli Türk mutfağı klasiği: Karniyarık, kızartılmış patlıcanların kıymalı harçla buluştuğu, nefis sosuyla damaklarda iz bırakan geleneksel bir lezzet.",
        ingredients: [
          "4 patlıcan", "250g kıyma", "1 soğan", "2 domates", "2 diş sarımsak", "1–2 yeşil biber", "1 yemek kaşığı domates salçası", "Tuz", "Karabiber", "Pul biber (isteğe bağlı)", "Sıvı yağ", "Yarım çay bardağı sıcak su", "Birkaç dal maydanoz (isteğe bağlı)"
        ],
        instructions: [
          "Patlıcanları alacalı soyun, tuzlu suda 20–30 dakika bekletin. Kurulayın ve bol sıvı yağda yumuşayana kadar kızartın.",
          "Bir tavada sıvı yağ ile doğranmış soğanları kavurun. Kıymayı ekleyip suyunu salıp çekene kadar pişirin.",
          "Doğranmış sarımsak, yeşil biber, tuz, karabiber ve isteğe bağlı pul biberi ekleyin. Salçayı da ilave edip 1–2 dakika daha kavurun.",
          "Rendelenmiş 1 domatesi ekleyin ve harcı 5 dakika pişirin.",
          "Kızarttığınız patlıcanların ortasını uzunlamasına yarın ve iç harçla doldurun.",
          "Üzerine domates ve biber dilimleri yerleştirip tepsiye dizin.",
          "Kalan 1 domatesi rendeleyip yarım çay bardağı sıcak su ve az salçayla karıştırın, tepsiye dökün.",
          "180°C önceden ısıtılmış fırında 25–30 dakika pişirin.",
          "Fırından aldıktan sonra ince doğranmış maydanozla süsleyerek servis edin."
        ]
      },
      tiramisu: {
        name: "Tiramisu",
        description: "Kahveyle ıslatılmış kedi dili ve mascarpone kremasının buluştuğu, klasik bir İtalyan tatlısı.",
        ingredients: [
          "1 paket kedi dili (yaklaşık 200g)",
          "2 adet yumurta",
          "250g mascarpone peyniri",
          "1/2 su bardağı toz şeker",
          "1 su bardağı soğutulmuş filtre kahve veya espresso",
          "1 tatlı kaşığı vanilin (isteğe bağlı)",
          "Kakao (üzeri için)"
        ],
        instructions: [
          "Yumurtaların sarılarını ve beyazlarını ayırın. Yumurta sarılarını toz şekerle rengi açılana kadar çırpın.",
          "Mascarpone peynirini ekleyip pürüzsüz bir kıvam alana kadar karıştırın. Vanilin kullanacaksanız bu aşamada ekleyin.",
          "Ayrı bir kapta yumurta beyazlarını kar gibi olana kadar çırpın. Köpüğü, krema karışımına spatula ile yavaşça yedirin.",
          "Kedi dili bisküvileri soğuk kahveye batırıp kısa süre bekletin (fazla bekletmeyin, dağılabilir).",
          "Islatılan bisküvileri servis kabına tek sıra dizin. Üzerine kremadan bir kat yayın.",
          "Aynı işlemi kat kat tekrarlayın, en üstte krema olacak şekilde tamamlayın.",
          "Üzerine bolca kakao serpin. Streç film ile örtüp buzdolabında en az 4 saat, tercihen bir gece dinlendirin.",
          "Servis etmeden önce tekrar kakao serpebilirsiniz."
        ]
      },
      baklava: {
      name: "Baklava",
      description: "Kat kat yufkaların cevizle buluştuğu, şerbetle taçlanan geleneksel bir Türk tatlısı.",
      ingredients: [
        "500g baklavalık yufka",
        "300g dövülmüş ceviz içi",
        "250g tereyağı",
        "3 su bardağı toz şeker",
        "2,5 su bardağı su",
        "Birkaç damla limon suyu"
      ],
      instructions: [
        "Tereyağını eritip soğumaya bırakın.",
        "Fırın tepsisini yağlayın ve yufkaların yarısını tepsiye tek tek sererek her kata eritilmiş tereyağı sürün.",
        "Ortaya ceviz içini eşit şekilde serpiştirin.",
        "Kalan yufkaları da aynı şekilde dizip yağlayın.",
        "Baklavayı bıçakla dilimleyin (baklava dilimi veya kare).",
        "Kalan tereyağını üzerine dökün.",
        "Önceden ısıtılmış 180°C fırında üzeri iyice kızarana kadar pişirin.",
        "Bu sırada şerbet için su ve şekeri kaynatın. Kaynadıktan sonra limon suyunu ekleyip 10 dakika daha kaynatın.",
        "Fırından çıkan sıcak baklavanın üzerine ılık şerbeti dökün.",
        "Şerbetini çekmesi için oda sıcaklığında birkaç saat bekletin ve servis edin."
      ]
    },
      adanaKebap: {
      name: "Adana Kebap",
      description: "Acılı ve bol baharatlı, ızgarada pişen geleneksel bir kebap lezzeti.",
      ingredients: [
        "500g kıyma (tercihen kuzu veya karışık)",
        "1 adet soğan",
        "2 diş sarımsak",
        "1 tatlı kaşığı pul biber",
        "1 çay kaşığı karabiber",
        "1 tatlı kaşığı tuz",
        "Şiş (ızgara için)",
        "Lavaş veya pilav (servis için)"
      ],
      instructions: [
        "Soğan ve sarımsağı rendeleyin.",
        "Kıymayı derin bir kaba alın, soğan, sarımsak ve baharatları ekleyin.",
        "Macun kıvamına gelene kadar iyice yoğurun (yaklaşık 10 dakika).",
        "Hazırladığınız kıymayı şişlere bastırarak uzun ve ince şekilde şekillendirin.",
        "Izgarada veya döküm tavada, yüksek ateşte çevirerek pişirin.",
        "Lavaş ekmek, közlenmiş biber ve domatesle sıcak servis edin."
      ]
    },
    etliGuvec: {
      name: "Etli Güveç",
      description: "Sebzeler ve yumuşacık etin bir araya geldiği, fırında yavaş pişen nefis bir güveç yemeği.",
      ingredients: [
        "500g kuşbaşı dana veya kuzu eti",
        "2 adet patates",
        "2 adet patlıcan",
        "1 adet soğan",
        "2 adet yeşil biber",
        "2 adet domates",
        "2 diş sarımsak",
        "1 yemek kaşığı domates salçası",
        "Tuz",
        "Karabiber",
        "Sıvı yağ"
      ],
      instructions: [
        "Etleri sıvı yağda suyunu salıp çekene kadar kavurun.",
        "Doğranmış soğan ve sarımsağı ekleyip birkaç dakika kavurun.",
        "Salçayı ekleyin, ardından doğranmış sebzeleri sırayla tencereye alın.",
        "Tuz ve karabiberle tatlandırın, iyice karıştırın.",
        "Hazırlığı güveç kabına alın ve üzerini domatesle süsleyin.",
        "Üzerine biraz su gezdirin ve kapağını kapatın.",
        "Önceden ısıtılmış 180°C fırında 45–60 dakika pişirin.",
        "Sıcak olarak servis edin."
      ]
    },
      falafel: {
      name: "Falafel",
      description: "Nohutla yapılan, dışı çıtır içi yumuşak, Ortadoğu kökenli nefis bir vejetaryen köfte.",
      ingredients: [
        "2 su bardağı haşlanmamış nohut (bir gece suda bekletilmiş)",
        "1 adet soğan",
        "3 diş sarımsak",
        "1/2 su bardağı doğranmış maydanoz",
        "1/2 su bardağı doğranmış taze kişniş (isteğe bağlı)",
        "1 tatlı kaşığı kimyon",
        "1 çay kaşığı karbonat",
        "Tuz",
        "Karabiber",
        "Kızartmak için sıvı yağ"
      ],
      instructions: [
        "Nohutları bir gece önceden ıslatın, ertesi gün suyunu süzün.",
        "Tüm malzemeleri mutfak robotunda pütürlü ama yapışkan bir kıvam alana kadar çekin.",
        "Karışımdan ceviz büyüklüğünde toplar yapın ve hafifçe bastırın.",
        "Geniş bir tavada yağı ısıtın ve falafelleri altın rengi alana kadar kızartın.",
        "Kağıt havlu üzerinde fazla yağını alın ve sıcak servis edin.",
        "İsteğe göre tahin sosu veya lavaşla servis edebilirsiniz."
      ]
    },
      veganburger: {
      name: "Vegan Burger",
      description: "Bitkisel proteinle hazırlanan, dışı çıtır içi yumuşak ve doyurucu nefis bir vegan burger.",
      ingredients: [
        "1 su bardağı haşlanmış nohut",
        "1 su bardağı haşlanmış mercimek (kırmızı veya yeşil)",
        "1 adet soğan",
        "2 diş sarımsak",
        "2 yemek kaşığı un (veya yulaf unu)",
        "1 yemek kaşığı keten tohumu (isteğe bağlı)",
        "1 çay kaşığı kimyon",
        "Tuz",
        "Karabiber",
        "Zeytinyağı",
        "Burger ekmeği",
        "Domates, marul, turşu (servis için)"
      ],
      instructions: [
        "Nohut, mercimek, doğranmış soğan, sarımsak ve baharatları mutfak robotunda püre haline getirin.",
        "Un ve keten tohumunu ekleyin, karışım elle şekil alacak kıvama gelene kadar yoğurun.",
        "Karışımdan burger köfteleri oluşturun.",
        "Tavada zeytinyağında her iki tarafı da kızarana kadar pişirin.",
        "Ekmek arası olarak; domates, marul, turşu ile birlikte servis edin."
      ]
    },
    profiterol: {
      name: "Profiterol",
      description: "İçi kremayla dolu, üzeri çikolata sosuyla kaplı klasik bir Fransız tatlısı.",
      ingredients: [
        "1 su bardağı su",
        "100g tereyağı",
        "1 su bardağı un",
        "3 adet yumurta",
        "1 tutam tuz",
        "2 su bardağı süt (kreması için)",
        "2 yemek kaşığı un (kreması için)",
        "1 yemek kaşığı nişasta",
        "1/2 su bardağı şeker",
        "1 yumurta (kreması için)",
        "1 paket vanilin",
        "80g bitter çikolata",
        "1 su bardağı süt (çikolata sosu için)",
        "1 tatlı kaşığı tereyağı"
      ],
      instructions: [
        "Tencereye su, tereyağı ve tuzu alıp kaynatın. Unu ekleyip hızlıca karıştırarak pişirin. Hamur toparlanınca ocaktan alın.",
        "Ilıyan hamura yumurtaları teker teker ekleyin ve iyice çırpın.",
        "Hamuru sıkma torbasına alın, yağlı kağıt serili tepsiye küçük parçalar sıkın. Önceden ısıtılmış 180°C fırında pişirin.",
        "Krema için süt, un, nişasta, şeker ve yumurtayı pişirin. Ocaktan alınca vanilin ekleyin, soğutun.",
        "Soğuyan hamurların içini kesin ve kremayla doldurun.",
        "Çikolata sos için sütü ısıtın, çikolatayı ve tereyağını ekleyip eritin.",
        "Profiterollerin üzerine çikolata sos gezdirerek servis edin."
      ]
    }





    }
  },
en: {
  nav: {
    home: "Home",
    search: "Search",
    login: "Log in"
  },
  home: {
    featured: "Featured Recipes",
    meat: "🍖 Meat Dishes",
    vegan: "🌿 Vegan & Vegetarian",
    desserts: "🍬 Desserts & Snacks"
  },
  changeLanguage: "Change Language",
  ingredients: "Ingredients",
  instructions: "Instructions",
  recipes: {
    karniyarik: {
      name: "Stuffed Eggplant",
      description: "A delicious classic from Turkish cuisine: fried eggplants filled with savory minced meat and baked with tomato sauce.",
      ingredients: [
        "4 eggplants", "250g ground beef", "1 onion", "2 tomatoes", "2 cloves of garlic", "1–2 green peppers",
        "1 tbsp tomato paste", "Salt", "Black pepper", "Red pepper flakes (optional)", "Oil", "1/2 tea glass hot water", "A few sprigs of parsley (optional)"
      ],
      instructions: [
        "Peel the eggplants in stripes and soak them in salted water for 20–30 minutes to remove bitterness. Pat them dry and fry until softened.",
        "In a pan, sauté chopped onions in oil. Add ground beef and cook until the liquid evaporates.",
        "Stir in minced garlic, chopped green peppers, salt, black pepper, and optionally red pepper flakes. Add tomato paste and cook for 1–2 minutes.",
        "Grate 1 tomato and add to the pan. Cook the filling mixture for 5 more minutes.",
        "Make a slit in the fried eggplants and fill them with the meat mixture.",
        "Place sliced tomatoes and peppers on top and arrange the stuffed eggplants in a baking dish.",
        "Grate the remaining tomato and mix with 1/2 tea glass of hot water and a bit of tomato paste. Pour around the eggplants.",
        "Bake in a preheated oven at 180°C (356°F) for 25–30 minutes.",
        "Garnish with chopped parsley before serving, if desired."
      ]
    },
    tiramisu: {
      name: "Tiramisu",
      description: "A classic Italian dessert made with layers of coffee-soaked ladyfingers and creamy mascarpone filling.",
      ingredients: [
        "1 pack ladyfingers (about 200g)", "2 eggs", "250g mascarpone cheese", "1/2 cup sugar", "1 cup cooled brewed coffee or espresso", "1 tsp vanilla (optional)", "Cocoa powder (for topping)"
      ],
      instructions: [
        "Separate egg yolks and whites. Whisk the yolks with sugar until pale and creamy.",
        "Add mascarpone cheese and vanilla (if using), and mix until smooth.",
        "In a separate bowl, beat egg whites until stiff peaks form. Gently fold into the mascarpone mixture using a spatula.",
        "Quickly dip the ladyfingers into the cooled coffee and arrange them in a single layer in a serving dish.",
        "Spread a layer of the cream mixture over the ladyfingers.",
        "Repeat the layers, finishing with a layer of cream on top.",
        "Dust generously with cocoa powder. Cover and refrigerate for at least 4 hours, preferably overnight.",
        "Optional: dust again with fresh cocoa before serving."
      ]
    },
    baklava: {
      name: "Baklava",
      description: "A traditional Turkish dessert made of layers of phyllo filled with walnuts and topped with sweet syrup.",
      ingredients: [
        "500g phyllo dough",
        "300g crushed walnuts",
        "250g butter",
        "3 cups granulated sugar",
        "2.5 cups water",
        "A few drops of lemon juice"
      ],
      instructions: [
        "Melt the butter and set it aside to cool slightly.",
        "Grease a baking tray and layer half of the phyllo sheets one by one, brushing each with melted butter.",
        "Evenly sprinkle the crushed walnuts over the layered sheets.",
        "Add the remaining phyllo sheets in the same way, brushing with butter.",
        "Cut the baklava into diamond or square shapes using a sharp knife.",
        "Pour the remaining butter evenly on top.",
        "Bake in a preheated oven at 180°C (356°F) until golden brown.",
        "Meanwhile, boil the water and sugar for the syrup. Add lemon juice and simmer for 10 more minutes.",
        "Pour the warm syrup over the hot baklava as soon as it comes out of the oven.",
        "Let it absorb the syrup at room temperature for a few hours before serving."
      ]
    },
    adanaKebap: {
    name: "Adana Kebab",
    description: "A spicy and flavorful Turkish kebab, traditionally grilled over open fire.",
    ingredients: [
      "500g ground meat (preferably lamb or a mix)",
      "1 onion",
      "2 cloves of garlic",
      "1 tsp red pepper flakes",
      "1/2 tsp black pepper",
      "1 tsp salt",
      "Skewers (for grilling)",
      "Flatbread or rice (for serving)"
    ],
    instructions: [
      "Grate the onion and garlic.",
      "Place the ground meat in a bowl and add the onion, garlic, and spices.",
      "Mix and knead the mixture until it reaches a paste-like texture (about 10 minutes).",
      "Shape the mixture around skewers into long, thin kebabs.",
      "Grill on high heat, rotating frequently until cooked through.",
      "Serve hot with flatbread, grilled peppers, and tomatoes."
    ]
  },
      etliGuvec: {
      name: "Meat Casserole",
      description: "A delicious oven-baked dish where tender meat meets a mix of vegetables in perfect harmony.",
      ingredients: [
        "500g diced beef or lamb",
        "2 potatoes",
        "2 eggplants",
        "1 onion",
        "2 green peppers",
        "2 tomatoes",
        "2 cloves of garlic",
        "1 tbsp tomato paste",
        "Salt",
        "Black pepper",
        "Vegetable oil"
      ],
      instructions: [
        "Sauté the meat in vegetable oil until it releases and reabsorbs its juices.",
        "Add chopped onion and garlic, and cook for a few minutes.",
        "Stir in the tomato paste, then add chopped vegetables one by one.",
        "Season with salt and black pepper, mix well.",
        "Transfer the mixture to a casserole dish and top with sliced tomatoes.",
        "Add a bit of water and cover with a lid or foil.",
        "Bake in a preheated oven at 180°C (356°F) for 45–60 minutes.",
        "Serve hot."
      ]
    },
          falafel: {
          name: "Falafel",
          description: "A crispy-on-the-outside, tender-on-the-inside vegetarian patty made from chickpeas and herbs.",
          ingredients: [
            "2 cups dried chickpeas (soaked overnight)",
            "1 onion",
            "3 cloves of garlic",
            "1/2 cup chopped parsley",
            "1/2 cup chopped fresh coriander (optional)",
            "1 tsp ground cumin",
            "1 tsp baking soda",
            "Salt",
            "Black pepper",
            "Vegetable oil for frying"
          ],
          instructions: [
            "Soak the chickpeas overnight and drain the next day.",
            "Blend all ingredients in a food processor until coarse but sticky.",
            "Shape into walnut-sized balls and flatten slightly.",
            "Heat oil in a pan and fry the falafel until golden brown.",
            "Drain on paper towels and serve hot.",
            "Optionally serve with tahini sauce or in flatbread."
          ]
        },
        veganburger: {
      name: "Vegan Burger",
      description: "A hearty and flavorful vegan burger made with plant-based protein and spices.",
      ingredients: [
        "1 cup cooked chickpeas",
        "1 cup cooked lentils (red or green)",
        "1 onion",
        "2 cloves of garlic",
        "2 tbsp flour (or oat flour)",
        "1 tbsp ground flaxseed (optional)",
        "1 tsp cumin",
        "Salt",
        "Black pepper",
        "Olive oil",
        "Burger buns",
        "Tomato, lettuce, pickles (for serving)"
      ],
      instructions: [
        "Blend chickpeas, lentils, chopped onion, garlic, and spices in a food processor until smooth.",
        "Add flour and flaxseed, then mix until firm enough to shape.",
        "Form into burger patties.",
        "Fry in olive oil until both sides are golden brown.",
        "Serve in a bun with tomato, lettuce, and pickles."
      ]
    },
      profiterol: {
      name: "Profiterole",
      description: "A classic French dessert filled with pastry cream and topped with rich chocolate sauce.",
      ingredients: [
        "1 cup water",
        "100g butter",
        "1 cup flour",
        "3 eggs",
        "A pinch of salt",
        "2 cups milk (for pastry cream)",
        "2 tbsp flour (for pastry cream)",
        "1 tbsp starch",
        "1/2 cup sugar",
        "1 egg (for cream)",
        "1 packet vanilla",
        "80g dark chocolate",
        "1 cup milk (for chocolate sauce)",
        "1 tsp butter"
      ],
      instructions: [
        "Boil water, butter, and salt. Add flour and stir until dough forms. Let cool slightly.",
        "Add eggs one by one, beating well after each addition.",
        "Pipe small mounds onto a baking sheet and bake at 180°C until golden.",
        "For cream, cook milk, flour, starch, sugar, and egg. Remove from heat and add vanilla. Let it cool.",
        "Cut the baked puffs and fill them with the cream.",
        "For sauce, heat milk, melt in chocolate and butter.",
        "Pour chocolate sauce over the filled profiteroles and serve."
      ]
    }




  }
  
},
  fr: {
    nav: {
      home: "Accueil",
      search: "Recherche",
      login: "Se connecter"
    },
    home: {
      featured: "Recettes en vedette",
      meat: "🍖 Plats de viande",
      vegan: "🌿 Végétalien & Végétarien",
      desserts: "🍬 Desserts & Snacks"
    },
    changeLanguage: "Changer de langue",
    ingredients: "Ingrédients",
    instructions: "Préparation",
    recipes: {
      karniyarik: {
        name: "Aubergine Farcie",
        description: "Un classique délicieux de la cuisine turque : des aubergines frites farcies de viande hachée savoureuse, le tout cuit au four avec une sauce tomate.",
        ingredients: [
          "4 aubergines", "250g de viande hachée", "1 oignon", "2 tomates", "2 gousses d’ail", "1–2 poivrons verts",
          "1 c. à soupe de concentré de tomate", "Sel", "Poivre noir", "Piment en flocons (optionnel)", "Huile", "1/2 verre d’eau chaude", "Quelques brins de persil (optionnel)"
        ],
        instructions: [
          "Pelez les aubergines en bandes et faites-les tremper 20–30 minutes dans de l’eau salée pour enlever l’amertume. Séchez-les et faites-les frire jusqu’à ce qu’elles soient tendres.",
          "Dans une poêle, faites revenir l’oignon haché dans un peu d’huile. Ajoutez la viande hachée et faites cuire jusqu’à évaporation du liquide.",
          "Ajoutez l’ail émincé, les poivrons, le sel, le poivre, et éventuellement du piment. Incorporez le concentré de tomate et faites revenir 1–2 minutes.",
          "Ajoutez une tomate râpée et faites mijoter le mélange 5 minutes.",
          "Fendez les aubergines et farcissez-les avec la préparation.",
          "Disposez des tranches de tomate et de poivron sur le dessus et placez les aubergines dans un plat à four.",
          "Râpez l’autre tomate, mélangez avec 1/2 verre d’eau chaude et un peu de concentré, versez dans le plat.",
          "Faites cuire au four à 180°C pendant 25–30 minutes.",
          "Parsemez de persil frais avant de servir, si désiré."
        ]
      },
      tiramisu: {
        name: "Tiramisu",
        description: "Un dessert italien classique à base de biscuits imbibés de café et d'une crème onctueuse au mascarpone.",
        ingredients: [
          "1 paquet de biscuits à la cuillère (environ 200g)", "2 œufs", "250g de mascarpone", "1/2 verre de sucre", "1 verre de café refroidi", "1 c. à café de vanille (optionnel)", "Cacao en poudre (pour le dessus)"
        ],
        instructions: [
          "Séparez les blancs des jaunes. Fouettez les jaunes avec le sucre jusqu’à ce que le mélange blanchisse.",
          "Ajoutez le mascarpone et la vanille (si utilisée), mélangez jusqu’à consistance lisse.",
          "Montez les blancs en neige ferme et incorporez-les délicatement à la crème.",
          "Trempez rapidement les biscuits dans le café froid et disposez-les en une couche dans un plat.",
          "Étalez une couche de crème sur les biscuits.",
          "Répétez les couches en terminant par la crème.",
          "Saupoudrez généreusement de cacao. Couvrez et laissez reposer au frais au moins 4 heures, idéalement toute la nuit.",
          "Avant de servir, vous pouvez saupoudrer de nouveau de cacao."
        ]
      },
      baklava: {
      name: "Baklava",
      description: "Un dessert traditionnel turc composé de couches de pâte filo garnies de noix et nappé de sirop sucré.",
      ingredients: [
        "500g de pâte filo",
        "300g de noix concassées",
        "250g de beurre",
        "3 verres de sucre",
        "2,5 verres d'eau",
        "Quelques gouttes de jus de citron"
      ],
      instructions: [
        "Faites fondre le beurre et laissez-le refroidir légèrement.",
        "Beurrez un plat allant au four et disposez la moitié des feuilles de pâte filo en les badigeonnant de beurre fondu.",
        "Répartissez uniformément les noix concassées au centre.",
        "Ajoutez le reste des feuilles de la même manière, en les beurrant.",
        "Découpez le baklava en losanges ou en carrés à l’aide d’un couteau bien aiguisé.",
        "Versez le reste du beurre fondu sur le dessus.",
        "Faites cuire dans un four préchauffé à 180°C jusqu’à ce que le dessus soit doré.",
        "Entre-temps, faites bouillir l'eau et le sucre pour le sirop. Ajoutez le jus de citron et laissez mijoter encore 10 minutes.",
        "Versez le sirop tiède sur le baklava chaud dès sa sortie du four.",
        "Laissez-le absorber le sirop à température ambiante pendant quelques heures avant de servir."
      ]
    },
      adanaKebap: {
      name: "Kebab d’Adana",
      description: "Un kebab turc épicé et savoureux, traditionnellement grillé sur feu ouvert.",
      ingredients: [
        "500g de viande hachée (de préférence de l’agneau ou un mélange)",
        "1 oignon",
        "2 gousses d’ail",
        "1 c. à café de piment en flocons",
        "1/2 c. à café de poivre noir",
        "1 c. à café de sel",
        "Brochettes (pour griller)",
        "Pain plat ou riz (pour accompagner)"
      ],
      instructions: [
        "Râpez l’oignon et l’ail.",
        "Placez la viande hachée dans un saladier, ajoutez l’oignon, l’ail et les épices.",
        "Mélangez bien jusqu’à obtenir une texture pâteuse (environ 10 minutes de pétrissage).",
        "Formez des kebabs longs et fins autour des brochettes.",
        "Faites griller à feu vif en les retournant régulièrement jusqu’à cuisson complète.",
        "Servez chaud avec du pain plat, des poivrons et des tomates grillés."
      ]
    },
        etliGuvec: {
      name: "Ragoût de Viande",
      description: "Un plat mijoté au four où viande tendre et légumes se marient à merveille.",
      ingredients: [
        "500g de bœuf ou d’agneau en cubes",
        "2 pommes de terre",
        "2 aubergines",
        "1 oignon",
        "2 poivrons verts",
        "2 tomates",
        "2 gousses d’ail",
        "1 c. à soupe de concentré de tomate",
        "Sel",
        "Poivre noir",
        "Huile végétale"
      ],
      instructions: [
        "Faites revenir la viande dans de l’huile jusqu’à ce qu’elle rende son jus et l’absorbe de nouveau.",
        "Ajoutez l’oignon et l’ail émincés, faites revenir quelques minutes.",
        "Incorporez le concentré de tomate, puis ajoutez les légumes coupés.",
        "Salez, poivrez et mélangez bien.",
        "Versez le tout dans un plat en terre cuite et décorez avec des tranches de tomate.",
        "Ajoutez un peu d’eau, couvrez avec un couvercle ou du papier aluminium.",
        "Faites cuire au four préchauffé à 180°C pendant 45–60 minutes.",
        "Servez chaud."
      ]
    },
      falafel: {
      name: "Falafel",
      description: "Une boulette végétarienne croustillante à l’extérieur et moelleuse à l’intérieur, à base de pois chiches et d’herbes.",
      ingredients: [
        "2 verres de pois chiches secs (trempés toute la nuit)",
        "1 oignon",
        "3 gousses d’ail",
        "1/2 verre de persil haché",
        "1/2 verre de coriandre fraîche hachée (optionnel)",
        "1 c. à café de cumin",
        "1 c. à café de bicarbonate de soude",
        "Sel",
        "Poivre",
        "Huile végétale pour friture"
      ],
      instructions: [
        "Faites tremper les pois chiches toute la nuit, puis égouttez-les.",
        "Mixez tous les ingrédients jusqu’à obtention d’une pâte grossière mais collante.",
        "Formez des boules de la taille d’une noix et aplatissez-les légèrement.",
        "Faites chauffer l’huile et faites frire les falafels jusqu’à ce qu’ils soient bien dorés.",
        "Égouttez sur du papier absorbant et servez chaud.",
        "Servez avec une sauce tahini ou dans un pain plat, selon votre préférence."
      ]
    },
      veganburger: {
      name: "Burger Végétalien",
      description: "Un burger savoureux et consistant à base de protéines végétales et d’épices.",
      ingredients: [
        "1 verre de pois chiches cuits",
        "1 verre de lentilles cuites (rouges ou vertes)",
        "1 oignon",
        "2 gousses d’ail",
        "2 c. à soupe de farine (ou farine d’avoine)",
        "1 c. à soupe de graines de lin moulues (optionnel)",
        "1 c. à café de cumin",
        "Sel",
        "Poivre",
        "Huile d’olive",
        "Pains à burger",
        "Tomate, laitue, cornichons (pour servir)"
      ],
      instructions: [
        "Mixez les pois chiches, lentilles, oignon, ail et épices jusqu’à obtention d’une pâte homogène.",
        "Ajoutez la farine et les graines de lin, puis mélangez jusqu’à pouvoir former des galettes.",
        "Façonnez les burgers.",
        "Faites-les frire dans l’huile d’olive jusqu’à ce qu’ils soient bien dorés.",
        "Servez dans du pain à burger avec tomate, laitue et cornichons."
      ]
    },
      profiterol: {
      name: "Profiterole",
      description: "Un dessert français classique garni de crème pâtissière et nappé de sauce au chocolat.",
      ingredients: [
        "1 verre d’eau",
        "100g de beurre",
        "1 verre de farine",
        "3 œufs",
        "1 pincée de sel",
        "2 verres de lait (pour la crème)",
        "2 c. à soupe de farine (pour la crème)",
        "1 c. à soupe de fécule",
        "1/2 verre de sucre",
        "1 œuf (pour la crème)",
        "1 sachet de vanille",
        "80g de chocolat noir",
        "1 verre de lait (pour la sauce)",
        "1 c. à café de beurre"
      ],
      instructions: [
        "Faire bouillir l’eau, le beurre et le sel. Ajouter la farine, mélanger jusqu’à obtention d’une pâte. Laisser tiédir.",
        "Incorporer les œufs un par un en mélangeant bien.",
        "Former des petits tas sur une plaque et cuire à 180°C jusqu’à ce qu’ils soient dorés.",
        "Préparer la crème : cuire le lait, la farine, la fécule, le sucre et l’œuf. Hors du feu, ajouter la vanille. Laisser refroidir.",
        "Couper les choux et les garnir de crème.",
        "Préparer la sauce : chauffer le lait, ajouter le chocolat et le beurre jusqu’à ce que le tout soit fondu.",
        "Napper les choux garnis de sauce au chocolat et servir."
      ]
    }





    }
  },
    de: {
    nav: {
      home: "Startseite",
      search: "Suche",
      login: "Anmelden"
    },
    home: {
      featured: "Empfohlene Rezepte",
      meat: "🍖 Fleischgerichte",
      vegan: "🌿 Vegan & Vegetarisch",
      desserts: "🍬 Desserts & Snacks"
    },
    changeLanguage: "Sprache ändern",
    ingredients: "Zutaten",
    instructions: "Zubereitung",
    recipes: {
      karniyarik: {
        name: "Gefüllte Aubergine",
        description: "Ein köstlicher Klassiker der türkischen Küche: gebratene Auberginen, gefüllt mit würzigem Hackfleisch und in Tomatensoße gebacken.",
        ingredients: [
          "4 Auberginen", "250g Hackfleisch", "1 Zwiebel", "2 Tomaten", "2 Knoblauchzehen", "1–2 grüne Paprika",
          "1 EL Tomatenmark", "Salz", "Schwarzer Pfeffer", "Paprikaflocken (optional)", "Öl", "1/2 Teeglas heißes Wasser", "Einige Zweige Petersilie (optional)"
        ],
        instructions: [
          "Die Auberginen schälen (gestreift) und 20–30 Minuten in Salzwasser einweichen. Trocknen und in Öl weich frittieren.",
          "In einer Pfanne die gehackte Zwiebel in Öl anbraten. Hackfleisch hinzufügen und braten, bis die Flüssigkeit verdampft ist.",
          "Gehackten Knoblauch, Paprika, Salz, Pfeffer und ggf. Paprikaflocken hinzufügen. Tomatenmark unterrühren und 1–2 Minuten anbraten.",
          "Eine Tomate reiben und zur Füllung geben. Noch 5 Minuten köcheln lassen.",
          "Die frittierten Auberginen längs einschneiden und mit der Füllung befüllen.",
          "Mit Tomaten- und Paprikascheiben belegen und in eine Auflaufform legen.",
          "Die restliche Tomate reiben, mit heißem Wasser und etwas Tomatenmark vermischen und in die Form geben.",
          "Im vorgeheizten Ofen bei 180°C ca. 25–30 Minuten backen.",
          "Vor dem Servieren mit gehackter Petersilie bestreuen (nach Wunsch)."
        ]
      },
      tiramisu: {
        name: "Tiramisu",
        description: "Ein klassisches italienisches Dessert mit in Kaffee getränkten Löffelbiskuits und einer cremigen Mascarponefüllung.",
        ingredients: [
          "1 Packung Löffelbiskuits (ca. 200g)", "2 Eier", "250g Mascarpone", "1/2 Tasse Zucker", "1 Tasse abgekühlter Kaffee oder Espresso", "1 TL Vanille (optional)", "Kakaopulver (zum Bestreuen)"
        ],
        instructions: [
          "Eier trennen. Eigelbe mit dem Zucker schaumig schlagen, bis die Masse hell wird.",
          "Mascarpone und Vanille (optional) hinzufügen und glatt rühren.",
          "Eiweiß steif schlagen und vorsichtig unter die Creme heben.",
          "Löffelbiskuits kurz in den kalten Kaffee tauchen und eine Schicht in eine Form legen.",
          "Eine Schicht Creme auf die Biskuits streichen.",
          "Schichten wiederholen und mit Creme abschließen.",
          "Großzügig mit Kakaopulver bestreuen. Abdecken und mindestens 4 Stunden, besser über Nacht, kühlen.",
          "Optional vor dem Servieren erneut mit Kakao bestäuben."
        ]
      },
            baklava: {
        name: "Baklava",
        description: "Ein traditionelles türkisches Dessert aus Schichten von Filoteig, gefüllt mit Walnüssen und übergossen mit süßem Sirup.",
        ingredients: [
          "500g Filoteig",
          "300g gehackte Walnüsse",
          "250g Butter",
          "3 Tassen Zucker",
          "2,5 Tassen Wasser",
          "Einige Tropfen Zitronensaft"
        ],
        instructions: [
          "Butter schmelzen und etwas abkühlen lassen.",
          "Eine Backform einfetten und die Hälfte der Filoblätter einzeln hineinlegen, dabei jede Schicht mit Butter bestreichen.",
          "Die gehackten Walnüsse gleichmäßig in der Mitte verteilen.",
          "Die restlichen Blätter ebenso schichten und mit Butter bestreichen.",
          "Baklava mit einem scharfen Messer in Rauten oder Quadrate schneiden.",
          "Die restliche Butter gleichmäßig darüber gießen.",
          "Im vorgeheizten Ofen bei 180°C goldbraun backen.",
          "Währenddessen Wasser und Zucker für den Sirup aufkochen. Zitronensaft hinzufügen und 10 Minuten weiter köcheln lassen.",
          "Den warmen Sirup sofort über das heiße Baklava gießen, sobald es aus dem Ofen kommt.",
          "Einige Stunden bei Zimmertemperatur ziehen lassen, dann servieren."
        ]
      },
          adanaKebap: {
          name: "Adana Kebab",
          description: "Ein würziger, aromatischer türkischer Kebab, traditionell über offener Flamme gegrillt.",
          ingredients: [
            "500g Hackfleisch (vorzugsweise Lamm oder gemischt)",
            "1 Zwiebel",
            "2 Knoblauchzehen",
            "1 TL Chiliflocken",
            "1/2 TL schwarzer Pfeffer",
            "1 TL Salz",
            "Spieße (zum Grillen)",
            "Fladenbrot oder Reis (zum Servieren)"
          ],
          instructions: [
            "Zwiebel und Knoblauch reiben.",
            "Das Hackfleisch in eine Schüssel geben, Zwiebel, Knoblauch und Gewürze hinzufügen.",
            "Die Masse ca. 10 Minuten kräftig durchkneten, bis sie pastenartig ist.",
            "Die Mischung länglich und dünn um die Spieße formen.",
            "Bei starker Hitze grillen und regelmäßig wenden, bis sie durchgegart sind.",
            "Heiß mit Fladenbrot, gegrillten Paprika und Tomaten servieren."
          ]
        },
      etliGuvec: {
      name: "Fleisch-Gemüse-Eintopf",
      description: "Ein im Ofen geschmorter Eintopf, in dem zartes Fleisch auf eine bunte Mischung aus Gemüse trifft.",
      ingredients: [
        "500g Rind- oder Lammfleisch in Würfeln",
        "2 Kartoffeln",
        "2 Auberginen",
        "1 Zwiebel",
        "2 grüne Paprika",
        "2 Tomaten",
        "2 Knoblauchzehen",
        "1 EL Tomatenmark",
        "Salz",
        "Schwarzer Pfeffer",
        "Pflanzenöl"
      ],
      instructions: [
        "Das Fleisch in Öl anbraten, bis es Flüssigkeit abgibt und diese wieder aufnimmt.",
        "Zwiebel und Knoblauch hinzufügen und einige Minuten mitbraten.",
        "Tomatenmark einrühren, dann das gewürfelte Gemüse nach und nach dazugeben.",
        "Mit Salz und Pfeffer würzen und gut vermengen.",
        "Die Mischung in eine Auflaufform geben und mit Tomatenscheiben belegen.",
        "Etwas Wasser hinzufügen und mit einem Deckel oder Alufolie abdecken.",
        "Im vorgeheizten Ofen bei 180°C etwa 45–60 Minuten garen.",
        "Heiß servieren."
      ]
    },
      falafel: {
      name: "Falafel",
      description: "Knusprige, vegetarische Bällchen aus Kichererbsen und Kräutern – außen knusprig, innen zart.",
      ingredients: [
        "2 Tassen getrocknete Kichererbsen (über Nacht eingeweicht)",
        "1 Zwiebel",
        "3 Knoblauchzehen",
        "1/2 Tasse gehackte Petersilie",
        "1/2 Tasse gehackter frischer Koriander (optional)",
        "1 TL gemahlener Kreuzkümmel",
        "1 TL Natron",
        "Salz",
        "Schwarzer Pfeffer",
        "Pflanzenöl zum Frittieren"
      ],
      instructions: [
        "Die Kichererbsen über Nacht einweichen und am nächsten Tag abtropfen lassen.",
        "Alle Zutaten in einer Küchenmaschine zu einer groben, aber klebrigen Masse verarbeiten.",
        "Aus der Masse walnussgroße Bällchen formen und leicht flach drücken.",
        "Öl erhitzen und die Falafel goldbraun frittieren.",
        "Auf Küchenpapier abtropfen lassen und heiß servieren.",
        "Nach Wunsch mit Tahinisauce oder Fladenbrot servieren."
      ]
    },
      veganburger: {
      name: "Veganer Burger",
      description: "Ein herzhafter, pflanzlicher Burger mit Kichererbsen, Linsen und aromatischen Gewürzen.",
      ingredients: [
        "1 Tasse gekochte Kichererbsen",
        "1 Tasse gekochte Linsen (rot oder grün)",
        "1 Zwiebel",
        "2 Knoblauchzehen",
        "2 EL Mehl (oder Hafermehl)",
        "1 EL Leinsamen (gemahlen, optional)",
        "1 TL Kreuzkümmel",
        "Salz",
        "Schwarzer Pfeffer",
        "Olivenöl",
        "Burgerbrötchen",
        "Tomate, Salat, Gewürzgurken (zum Servieren)"
      ],
      instructions: [
        "Kichererbsen, Linsen, gehackte Zwiebel, Knoblauch und Gewürze in einer Küchenmaschine pürieren.",
        "Mehl und Leinsamen hinzufügen und zu einer formbaren Masse verarbeiten.",
        "Burger-Patties formen.",
        "In Olivenöl goldbraun braten.",
        "Im Brötchen mit Tomate, Salat und Gurken servieren."
      ]
    },
      profiterol: {
      name: "Windbeutel",
      description: "Ein klassisches französisches Dessert mit Vanillecremefüllung und Schokoladensoße.",
      ingredients: [
        "1 Tasse Wasser",
        "100g Butter",
        "1 Tasse Mehl",
        "3 Eier",
        "Eine Prise Salz",
        "2 Tassen Milch (für die Creme)",
        "2 EL Mehl (für die Creme)",
        "1 EL Stärke",
        "1/2 Tasse Zucker",
        "1 Ei (für die Creme)",
        "1 Päckchen Vanillezucker",
        "80g Zartbitterschokolade",
        "1 Tasse Milch (für die Sauce)",
        "1 TL Butter"
      ],
      instructions: [
        "Wasser, Butter und Salz aufkochen. Mehl einrühren, bis ein Teig entsteht. Etwas abkühlen lassen.",
        "Eier einzeln unterrühren, bis der Teig glatt ist.",
        "Mit einem Spritzbeutel kleine Häufchen auf ein Backblech setzen und bei 180°C goldbraun backen.",
        "Für die Creme Milch, Mehl, Stärke, Zucker und Ei kochen. Vom Herd nehmen, Vanille zugeben und abkühlen lassen.",
        "Die gebackenen Windbeutel aufschneiden und mit der Creme füllen.",
        "Für die Sauce Milch erhitzen, Schokolade und Butter einrühren und schmelzen lassen.",
        "Die gefüllten Windbeutel mit der Schokoladensauce übergießen und servieren."
      ]
    }



    }
  }
  };

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages
});

export default i18n;
