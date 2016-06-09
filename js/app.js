// when the page is ready
	// make array that stores location of images in carousel 1
	
	var chicOuterwear = [		
		{
			img: "url(images/offduty/chic/one/zara_tribal_linen_coat.png)",
			url: "http://www.zara.com/us/en/woman/outerwear/view-all/tribal-linen-coat-c719012p3521042.html",
			designer: "ZARA",
			description: "Tribal Linen Coat",
			price: "$149"
		},
		{
			img: "url(images/offduty/chic/one/SJ234T_RILEY_Blazer_Taupe_Front.png)",
			url: "http://shopsincerelyjules.com/collections/outerwear/products/riley-blazer",
			designer: "SINCERELY JULES",
			description: "Riley Blazer",
			price: "$129"
		},
		{
			img: "url(images/offduty/chic/one/sj_camille_trench.png)",
			url: "http://shopsincerelyjules.com/collections/outerwear/products/camille-trench-coat",
			designer: "SINCERELY JULES",
			description: "Camille Trench",
			price: "$169"
		},
		{
			img: "url(images/offduty/chic/one/BR_Limited-Edition_Python_Leather_Moto_Jacket.png)",
			url: "http://bananarepublic.gap.com/browse/product.do?cid=1048920&vid=1&pid=177181002",
			designer: "BANANA REPUBLIC",
			description: "Limited-Edition Python Print Leather Moto Jacket",
			price: "$598"
		},
		{
			img: "url(images/offduty/chic/one/topshop_satin_pyjama_style_jacket.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/jackets-coats-2390895/premium-satin-pj-jacket-5472423?bi=80&ps=20",
			designer: "TOPSHOP",
			description: "Satin Pyjama Style Jacket",
			price: "$125"
		},
		{
			img: "url(images/offduty/chic/one/topshop_double_belt_sleeveless_duster_coat.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/jackets-coats-2390895/premium-sleeveless-duster-5560383?bi=20&ps=20",
			designer: "TOPSHOP",
			description: "Double Belt Sleeveless Duster Coat",
			price: "$180"
		},
		{
			img: "url(images/offduty/chic/one/topshop_Textured_Tencel_Truster_Coat.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/jackets-coats-2390895/textured-tencel-trus-5387506?bi=100&ps=20",
			designer: "TOPSHOP",
			description: "Textured Tencel Truster Coat",
			price: "$150"
		},
		{
			img: "url(images/offduty/chic/one/Rachel_Zoe_VIVECA.png)",
			url: "https://rachelzoe.com/shop/ready-to-wear/jackets-outerwear/viveca-fringed-jacket/?attribute_pa_color=bkgo",
			designer: "RACHEL ZOE",
			description: "Viveca Fringed Jacket",
			price: "$477"
		},
		{
			img: "url(images/offduty/chic/one/BR_Limited_Edition_Floral_Leather_Jacket.png)",
			url: "http://bananarepublic.gap.com/browse/product.do?cid=1048920&vid=1&pid=177186002",
			designer: "BANANA REPUBLIC",
			description: "Limited-Edition Floral Leather Moto Jacket",
			price: "$498"
		},
		{
			img: "url(images/offduty/chic/one/Topshop_Soft_Tailored_Blazer.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/jackets-coats-2390895/soft-tailored-blazer-5560463?bi=20&ps=20",
			designer: "TOPSHOP",
			description: "Soft Tailored Blazer",
			price: "$100"
		}
	];

	// declare index variable and set to 0
	var indexOuterwear = 0;
	var indexOuterwearOfLastImage = chicOuterwear.length - 1;

	// when the back button is clicked
	$(".back_button").eq(0).click(function(){
		$('.outfit_info').remove();
		if (indexOuterwear === 0) {
			indexOuterwear = indexOuterwearOfLastImage;
		} else {
			indexOuterwear = indexOuterwear - 1;
		}


		$(".image.outerwear1").css("background-image", chicOuterwear[indexOuterwear].img);
	});

	// when the next button is clicked
	$(".next_button").eq(0).click(function(){
		console.log('next button');
		$('.outfit_info').remove();
		if (indexOuterwear === indexOuterwearOfLastImage) {
			indexOuterwear = 0;
		} else {
			indexOuterwear = indexOuterwear + 1;
		}
		$(".image.outerwear1").css("background-image", chicOuterwear[indexOuterwear].img);
	});

$(".row .outerwear1").hover(
	function() {
  		var clothing = $(this).data("image");
  		var outfitInfo = chicOuterwear[indexOuterwear];
		$(this).prepend($("<div class='outfit_info'>"+ outfitInfo.designer+ "<br>" + outfitInfo.description + "<br>" + outfitInfo.price +"</div>"));
	}, 
	function() {
		$(this).find('.outfit_info').remove();
	}
);

// CHIC TOPS

var chicTops = [		
		{
			img: "url(images/offduty/chic/two/SJ218BW_Gwen_Tank_Bone_White_208x280.png)",
			url: "http://shopsincerelyjules.com/collections/sweatshirts/products/gwen-tank-bone-white",
			designer: "SINCERELY JULES",
			description: "Gwen Tank - Bone White",
			price: "$45"
		},
		{
			img: "url(images/offduty/chic/two/Rachel_Zoe_nashua_ecru_top.png)",
			url: "https://rachelzoe.com/shop/new-arrivals/nashua-victorian-inspired-blouse/?attribute_pa_color=ecr",
			designer: "RACHEL ZOE",
			description: "Nashua Victorian-Inspired Blouse",
			price: "$395"
		},
		 {
			img: "url(images/offduty/chic/two/SJ247_GEORGIA_Layered_Tank_Front-WEB.png)",
			url: "http://shopsincerelyjules.com/collections/sweatshirts/products/georgia-layered-tank",
			designer: "SINCERELY JULES",
			description: "Georgia Layered Tank",
			price: "$92"
		},
		{
			img: "url(images/offduty/chic/two/Zara_Lace_Hem_Top.png)",
			url: "http://www.zara.com/us/en/woman/tops/view-all/lace-hem-top-c719021p3444023.html",
			designer: "ZARA",
			description: "Lace Hem Top",
			price: "$25.90"
		},
		{
			img: "url(images/offduty/chic/two/SJ260_JET_Lace_Top.png)",
			url: "http://shopsincerelyjules.com/collections/sweatshirts/products/jet-lace-top",
			designer: "SINCERELY JULES",
			description: "Jet Lace Top",
			price: "$99"
		},
		{
			img: "url(images/offduty/chic/two/Zara_Animal_Print_Top.png)",
			url: "http://www.zara.com/us/en/woman/tops/view-all/animal-print-top-c719021p3565010.html",
			designer: "ZARA",
			description: "Animal Print Top",
			price: "$39.90"
		},
		{
			img: "url(images/offduty/chic/two/SJ256_Carmen_Flutter_Sleeve_Top.png)",
			url: "http://shopsincerelyjules.com/collections/sweatshirts/products/carmen-flutter-sleeve-top",
			designer: "SINCERELY JULES",
			description: "Carmen Flutter Sleeve Top",
			price: "$80"
		},
		{
			img: "url(images/offduty/chic/two/Rachel_Zoe_BARI_ARMY.png)",
			url: "https://rachelzoe.com/shop/ready-to-wear/tops/bari-top/?attribute_pa_color=army",
			designer: "RACHEL ZOE",
			description: "Bari Top",
			price: "$295"
		},
		{
			img: "url(images/offduty/chic/two/Topshop_Tall_Stripe_Linen_Bardot_Top.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/tops-70498/tall-stripe-linen-bardot-5603970?bi=0&ps=20",
			designer: "TOPSHOP",
			description: "Stripe Linen Bardot Top",
			price: "$55"
		},
		{
			img: "url(images/offduty/chic/two/Topshop_Broderie_Square_Neck_top.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/tops-70498/broderie-square-neck-top-5565754?bi=142&ps=20",
			designer: "TOPSHOP",
			description: "Broderie Square Neck Top",
			price: "$45"
		}
	];

	// declare index variable and set to 0
	var indexTops = 0;
	var indexTopsOfLastImage = chicTops.length - 1;

	// when the back button is clicked
	$(".back_button2").eq(0).click(function(){
		$('.outfit_info').remove();
		if (indexTops === 0) {
			indexTops = indexTopsOfLastImage;
		} else {
			indexTops = indexTops - 1;
		}


		$(".image.tops1").css("background-image", chicTops[indexTops].img);
	});

	// when the next button is clicked
	$(".next_button2").eq(0).click(function(){
		console.log('next button');
		$('.outfit_info').remove();
		if (indexTops === indexTopsOfLastImage) {
			indexTops = 0;
		} else {
			indexTops = indexTops + 1;
		}
		$(".image.tops1").css("background-image", chicTops[indexTops].img);
	});

$(".row .tops1").hover(
	function() {
  		var clothing = $(this).data("image");
  		var outfitInfo = chicTops[indexTops];
		$(this).prepend($("<div class='outfit_info'>"+ outfitInfo.designer+ "<br>" + outfitInfo.description + "<br>" + outfitInfo.price +"</div>"));
	}, 
	function() {
		$(this).find('.outfit_info').remove();
	}
);

// CHIC BOTTOMS

var chicBottoms = [		
		{
			img: "url(images/offduty/chic/three/SJ002W_WANDERER_Skinny_Jeans_White-FRONT1.png)",
			url: "http://shopsincerelyjules.com/collections/bottoms/products/wanderer-skinny-jeans-white",
			designer: "SINCERELY JULES",
			description: "Wanderer Skinny Jeans - White",
			price: "$119"
		},
		{
			img: "url(images/offduty/chic/three/Topshop_Leather_Mini_Pink.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/skirts-70504/pleather-mini-skirt-by-boutiq-5388066?bi=60&ps=20",
			designer: "TOPSHOP",
			description: "Leather Mini Skirt by Boutique",
			price: "$210"
		},
		 {
			img: "url(images/offduty/chic/three/Topshop_Spot_Wide_Leg_Trouser.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/pants-70502/petite-spot-wide-leg-trouser-5504971?bi=40&ps=20",
			designer: "TOPSHOP",
			description: "PETITE Spot Wide Leg Trouser",
			price: "$65"
		},
		 {
			img: "url(images/offduty/chic/three/Topshop_MOTO_Stripe_Denim_Culottes.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/pants-70502/moto-stripe-denim-culottes-5508107?bi=40&ps=20",
			designer: "TOPSHOP",
			description: "MOTO Stripe Denim Culottes",
			price: "$70"
		},
		 {
			img: "url(images/offduty/chic/three/Zara_Striped_Trousers.png)",
			url: "http://www.zara.com/us/en/woman/trousers/view-all/striped-trousers-c719022p3567516.html",
			designer: "ZARA",
			description: "Striped Trousers",
			price: "$49.90"
		},
		{
			img: "url(images/offduty/chic/three/Zara_Flowing_Jacquard_Shorts.png)",
			url: "http://www.zara.com/us/en/woman/shorts/flowing-jacquard-shorts-c404505p3511508.html",
			designer: "ZARA",
			description: "Flowing Jacquard Shorts",
			price: "$49.90"
		},
		{
			img: "url(images/offduty/chic/three/Zara_Faux_Leather_Bermudas.png)",
			url: "http://www.zara.com/us/en/woman/shorts/faux-leather-bermudas-c404505p3186460.html",
			designer: "ZARA",
			description: "Faux Leather Bermudas",
			price: "$29.90"
		},
		{
			img: "url(images/offduty/chic/three/Topshop_Elystan_Trouser.png)",
			url: "http://us.topshop.com/en/tsus/product/clothing-70483/pants-70502/elystan-trouser-by-unique-5287946?bi=160&ps=20",
			designer: "TOPSHOP",
			description: "Elystan Trouser By Unique",
			price: "$250"
		},
		{
			img: "url(images/offduty/chic/three/zara_high_waist_skinny_trousers.png)",
			url: "http://www.zara.com/us/en/woman/jeans/view-all/high-waist-skinny-trousers-c719019p3542504.html",
			designer: "ZARA",
			description: "High Waist Skinny Trousers",
			price: "$49.90"
		},
		{
			img: "url(images/offduty/chic/three/Rachel_Zoe_NORA_ARMY.png)",
			url: "https://rachelzoe.com/shop/ready-to-wear/bottoms/nora-tasseled-leather-trousers/?attribute_pa_color=blk",
			designer: "RACHEL ZOE",
			description: "Nora Tasseled Leather Trousers",
			price: "$995"
		}
	];

// declare index variable and set to 0
	var indexBottoms = 0;
	var indexBottomsOfLastImage = chicBottoms.length - 1;

	// when the back button is clicked
	$(".back_button3").eq(0).click(function(){
		$('.outfit_info').remove();
		if (indexBottoms === 0) {
			indexBottoms = indexBottomsOfLastImage;
		} else {
			indexBottoms = indexBottomsOfLastImage - 1;
		}


		$(".image.bottoms1").css("background-image", chicBottoms[indexBottoms].img);
	});

	// when the next button is clicked
	$(".next_button3").eq(0).click(function(){
		console.log('next button');
		$('.outfit_info').remove();
		if (indexBottoms === indexBottomsOfLastImage) {
			indexBottoms = 0;
		} else {
			indexBottoms = indexBottoms + 1;
		}
		$(".image.bottoms1").css("background-image", chicBottoms[indexBottoms].img);
	});

$(".row .bottoms1").hover(
	function() {
  		var clothing = $(this).data("image");
  		var outfitInfo = chicBottoms[indexBottoms];
		$(this).prepend($("<div class='outfit_info'>"+ outfitInfo.designer+ "<br>" + outfitInfo.description + "<br>" + outfitInfo.price +"</div>"));
	}, 
	function() {
		$(this).find('.outfit_info').remove();
	}
);

// CHIC SHOES

var chicShoes = [		
		{
			img: "url(images/offduty/chic/four/Rachel_Zoe_Maddi-black.png)",
			url: "https://rachelzoe.com/shop/footwear/maddi-backless-flatforms/?attribute_pa_color=blk",
			designer: "RACHEL ZOE",
			description: "Maddi Backless Flatforms - Black",
			price: "$178.80"
		},
		{
			img: "url(images/offduty/chic/four/STEVEMADDEN-SANDALS_TANAR_NATURAL-LEATHER.png)",
			url: "http://www.stevemadden.com/product/TRENDS/WOMENS/Nudes/TANAR/pc/4157/c/2163/sc/3809/239786.uts?selectedColor=NATURAL-LEATHER",
			designer: "STEVE MADDEN",
			description: "Tanar - Natural Leather",
			price: "$69.95"
		},
		 {
			img: "url(images/offduty/chic/four/Madewell_the_daniela_lace-up_sandal.png)",
			url: "https://www.madewell.com/madewell_category/SHOESANDBOOTS/pumpsheels/PRDOVR~F2524/F2524.jsp",
			designer: "MADEWELL",
			description: "The Daniela Lace-Up Sandal",
			price: "$158"
		},
		{
			img: "url(images/offduty/chic/four/Rachel_Zoe_Maddi-brandy.png)",
			url: "https://rachelzoe.com/shop/footwear/maddi-backless-flatforms/?attribute_pa_color=blk",
			designer: "RACHEL ZOE",
			description: "Maddi Backless Flatforms - Brandy",
			price: "$178.80"
		},
		{
			img: "url(images/offduty/chic/four/jeffrey_Campbell_Pink_Heels.png)",
			url: "http://shop.nordstrom.com/s/jeffrey-campbell-lindsay-ankle-strap-sandal-women/4256863?origin=category-personalizedsort&fashioncolor=LIGHT%20PINK%20SUEDE",
			designer: "JEFFREY CAMPBELL",
			description: "'Lindsay' Ankle Strap Sandal - Light Pink Suede",
			price: "$129.95"
		},
		{
			img: "url(images/offduty/chic/four/VC_black.png)",
			url: "http://shop.nordstrom.com/s/vince-camuto-krysta-platform-sandal-women/4246762?origin=category-personalizedsort&fashioncolor=BLACK",
			designer: "VINCE CAMUTO",
			description: "'Krysta' Platform Sandal - Black",
			price: "$119.95"
		},
		{
			img: "url(images/offduty/chic/four/stevemadden-dress_pipa_natural.png)",
			url: "http://www.stevemadden.com/product/TRENDS/WOMENS/Nudes/PIPA/pc/4157/c/2163/sc/3809/239495.uts?selectedColor=NATURAL",
			designer: "STEVE MADDEN",
			description: "Pipa - Natural",
			price: "$109.95"
		},
		{
			img: "url(images/offduty/chic/four/stevemadden-dress_pipa_white.png)",
			url: "http://www.stevemadden.com/product/TRENDS/WOMENS/Nudes/PIPA/pc/4157/c/2163/sc/3809/239495.uts?selectedColor=NATURAL",
			designer: "STEVE MADDEN",
			description: "Pipa - White",
			price: "$109.95"
		},
		{
			img: "url(images/offduty/chic/four/STEVEMADDEN-SANDALS_IRENEE_OLIVE-NUBUCK.png)",
			url: "http://www.stevemadden.com/product/TRENDS/WOMENS/Nudes/IRENEE/pc/4157/c/2163/sc/3809/237633.uts?selectedColor=TAN-SUEDE",
			designer: "STEVE MADDEN",
			description: "Irenee - Olive Nubuck",
			price: "$79.95"
		},
		{
			img: "url(images/offduty/chic/four/STEVEMADDEN-SANDALS_IRENEE_TAN-SUEDE.png)",
			url: "http://www.stevemadden.com/product/TRENDS/WOMENS/Nudes/IRENEE/pc/4157/c/2163/sc/3809/237633.uts?selectedColor=TAN-SUEDE",
			designer: "STEVE MADDEN",
			description: "Irenee - Tan Suede",
			price: "$79.95"
		},
		{
			img: "url(images/offduty/chic/four/STEVEMADDEN-SANDALS_KENSIE_BLUSH-SUEDE.png)",
			url: "http://www.stevemadden.com/product/TRENDS/WOMENS/Nudes/KENSIE/pc/4157/c/2163/sc/3809/239991.uts?selectedColor=BLUSH-SUEDE",
			designer: "STEVE MADDEN",
			description: "Kensie - Blush Suede",
			price: "$69.95"
		},
		{
			img: "url(images/offduty/chic/four/STEVEMADDEN-SANDALS_LIVEANA_GREY-SUEDE.png)",
			url: "http://www.stevemadden.com/product/TRENDS/WOMENS/Nudes/LIVEANA/pc/4157/c/2163/sc/3809/237035.uts?selectedColor=GREY-SUEDE",
			designer: "STEVE MADDEN",
			description: "Liveana - Grey Suede",
			price: "$62.98"
		},
		{
			img: "url(images/offduty/chic/four/STEVEMADDEN-SANDALS_SWEETYY_LIGHT-BLUE.png)",
			url: "http://www.stevemadden.com/product/TRENDS/WOMENS/Nudes/SWEETYY/pc/4157/c/2163/sc/3809/238601.uts?selectedColor=BLUSH-SUEDE",
			designer: "STEVE MADDEN",
			description: "Sweetyy - Light Blue",
			price: "$79.95"
		}
	];

// declare index variable and set to 0
	var indexShoes = 0;
	var indexShoesOfLastImage = chicShoes.length - 1;

	// when the back button is clicked
	$(".back_button4").eq(0).click(function(){
		$('.outfit_info').remove();
		if (indexShoes === 0) {
			indexShoes = indexShoesOfLastImage;
		} else {
			indexShoes = indexShoes - 1;
		}


		$(".image.shoes1").css("background-image", chicShoes[indexShoes].img);
	});

	// when the next button is clicked
	$(".next_button4").eq(0).click(function(){
		console.log('next button');
		$('.outfit_info').remove();
		if (indexShoes === indexShoesOfLastImage) {
			indexShoes = 0;
		} else {
			indexShoes = indexShoes + 1;
		}
		$(".image.shoes1").css("background-image", chicShoes[indexShoes].img);
	});

$(".row .shoes1").hover(
	function() {
  		var clothing = $(this).data("image");
  		var outfitInfo = chicShoes[indexShoes];
		$(this).prepend($("<div class='outfit_info'>"+ outfitInfo.designer+ "<br>" + outfitInfo.description + "<br>" + outfitInfo.price +"</div>"));
	}, 
	function() {
		$(this).find('.outfit_info').remove();
	}
);


