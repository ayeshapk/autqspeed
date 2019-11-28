export const banner = {
      image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574923409/05_SA250_KV552_LH_8038_rdvsue.jpg',
      text:' Autqspeed',
};

export const smallBanner = {
  bannerA:{
    id:1,
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574923511/1_SSV-b_p34dgt.jpg',
    text:' VENTRAC SSV',
  },
  bannerB:{
    id:2,
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574923452/03_HE482_Dallas_3690_extended_tvni4w.jpg',
    text:' 3400 TRACTOR',
  },
  bannerC:{
    id:3,
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574923597/05_KA160_PGD_7804_txpaya.jpg',
    text:' 4500 TRACTOR',
  },
}

export const carData = [
  {
    id:1,
    name: "VENTRAC SSV",
    version: [{ver:"2100C SSV KAWASAKI FS600V"}],
    highlight:[{text:'18.5 HP Commercial Kawasaki Engine'},
      {text:'Dedicated snow attachments and accessories'},
      {text:'All Wheel Drive'},
      {text:'Simple Intuitive Controls'}],
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574922560/SSV_vdu273.jpg',
    date:'12 nov 2017',
    link:'/carA/',
    price:'start at xxxxx sgd'
  },
  {
    id:2,
    name: "3400 TRACTOR",
    version: [{ver:"VANGUARD M38"},{ver:"KUBOTA D902"}],
    highlight:[
      {text:"Excellent outfront visibility"},
      {text:"Compact Size and tight turning radius"},
      {text:"20-22 HP Engines"},
      {text:"Over 15 Attachments"},
      {text:"All Wheel Drive"},
      {text:"Center Articulating/Oscillating Frame"},
      {text:"Simple Ergonomic SDLA Controls",}],
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574922998/3400_uclsoz.jpg',
    date:'9 dec 2018',
    link:'/carB/',
    price:'start at xxxxx sgd'
  },
  {
    id:3,
    name: "4500 TRACTOR",
    version: [{ver:"VANGUARD M54"},{ver:"KAWASAKI FD851D"},{ver:"KUBOTA D902"},{ver:"KUBOTA WG972-GL"}],
    highlight:[{text:"25-32.5 HP Engines"},
      {text:"Over 30 Attachments"},
      {text:"All Wheel Drive"},
      {text:"Center Articulating/Oscillating Frame"},
      {text:"Up to 300 Slope Operation"},
      {text:"Simple Ergonomic SDLA Controls",}],
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574923242/4500_guwdwz.jpg',
    date:'6 sep 2019',
    link:'/carC/',
    price:'start at xxxxx sgd'
  },
]

export const commonText = {
  seeMore:'view more',
  siteName:'Autqspeed',
  siteDescription:'Welcome to Autqspeed site.',
}

export const mainCarData = {
  carA:{
    id:1,
    title:'VENTRAC SSV',
    name: "VENTRAC SSV",
    version:  "2100C SSV KAWASAKI FS600V",
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574922560/SSV_vdu273.jpg',
    date:'12 nov 2017',
    link:'/',
    linkData:'Go back to the homepage',
    text:"The new Ventrac SSV makes it easy and efficient to manage snow and ice on sidewalks. The SSV is a dedicated Sidewalk Snow Vehicle with an industry-first 36 inch width in order to allow access to the tightest areas of any property. The SSV allows more reduction of hand labor and walk-behind equipment than ever before. It's also designed with a full arsenal of commercial quality snow removal attachments and de-icing options that are engineered to provide a system that can handle any winter storm. The wait for a proper sidewalk snow machine is finally over.",
    models:[{model:'2100C SSV KAWASAKI FS600V 39.61100'}],
    accessory_Options:[{option:'70.6006 KIT, 12V FRONT NT '},{option:'70.6011-99 KIT, ACCESSORY OPT. 2100C FACTORY'},{option:'70.6014 KIT, BACKUP ALARM NT '},{option:'70.6013 KIT, HORN NT'},{option:'70.6003 KIT, PTO NT '},{option:'70.6005 KIT, REAR WORK LIGHTS NT'},{option:'70.6010 KIT, STORAGE BASKET NT '},{option:'70.6007 KIT, STROBE LIGHT NT '},{option:'70.6012 KIT, TAIL LIGHTS NT '},{option:'70.6004 KIT, WEIGHT TRANSFER NT '},],
    features:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574931046/feature_jycpql.jpg',
  },
  carB:{
    id:2,
    title:'3400 TRACTOR',
    name: "3400 TRACTOR",
    version: "VANGUARD M38,KUBOTA D902",
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574922998/3400_uclsoz.jpg',
    date:'9 dec 2018',
    link:'/',
    linkData:'Go back to the homepage',
    text:"When you need the power and versatility of a compact tractor, but want the maneuverability and visibility of a zero turn mower, the Ventrac 3400 will give you the best of both worlds and more. Engineered with an innovative articulating frame, the 3400 tractor is the industry's best combination of visibility, maneuverability, power and versatility.Choose from over 15 professional grade Ventrac Mount attachments to transform your Ventrac into a productivity powerhouse.Standard on the 3400 is Ventrac's patented S.D.L.A. control, which allows for easy control of Speed, Direction, Lift and Auxiliary function all with one hand.Combine these features with a tight 28 inch (71 cm) turning radius and you will find the 3400 can tackle jobs reserved for much larger, less maneuverable machines.",
    models:[{model:'3400L VANGUARD M38 39.31500'},{model:'3400Y KUBOTA D902 39.31505'}],
    accessory_Options:[{option:'70.3040-99 KIT, SUSP SEAT 3400 FACTORY '},{option:'70.3019-99 KIT, TILT STEERING 3400 FACTRY '},{option:'70.3014-99 KIT, WEIGHT TRANSFER 3400 FCTRY'},{option:'70.3052-99 KIT, WHEEL 18" TURF FACTORY '},],
    features:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574932317/featureb_tqvvck.jpg',
  },
  carC:{
    id:3,
    title:'4500 TRACTOR',
    name: "4500 TRACTOR",
    version: "VANGUARD M54, KAWASAKI FD851D,KUBOTA D902,KUBOTA WG972-GL",
    image:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574923242/4500_guwdwz.jpg',
    date:'6 sep 2019',
    link:'/',
    linkData:'Go back to the homepage',
    text:"It only takes one test drive on this incredibly agile, yet power-packed tractor and you'll know that the Ventrac 4500 is in a class of its own. An innovative design combines all-wheel drive, an articulating frame, and powerful engines to give you unmatched stability and control to get work done. Most importantly, the Ventrac 4500 is designed to be the most fun you'll ever have on a tractor.   Choose from over 30 professional grade Ventrac Mount attachments to transform your Ventrac into a productivity powerhouse. This incredibly rugged and dependable machine is a wise business investment for golf courses, schools and universities, parks, street maintenance departments, commercial mowing services, contractors, wineries, farms, property owner associations, estate homes and anyone needing ONE machine to do it all.",
    models:[{model:'4500K VANGUARD M54 39.51130'},{model:'4500P KAWASAKI FD851D 39.51207'},{model:'4500Y KUBOTA D902 39.51209'},{model:'4500Z KUBOTA WG972-GL 39.51208'}],
    accessory_Options:[{option:'70.4100-99 KN, OPT. 3 POINT HITCH FACTORY '},{option:'70.4116-99 KIT, ACC. OPT. 4500K FACTORY '},{option:'70.4154-99 KIT, SUSPENSION SEAT 4500 '},{option:'53.0101-99 WHEEL, ASM 21X11X8 BAR-FACTORY '},{option:'53.0137-99 WHEEL, ASM 22X11X10 TURF FACTRY '},],
    features:'https://res.cloudinary.com/www-weddingpenguin-co/image/upload/v1574932317/featurec_tr9bny.jpg',
  },
}
