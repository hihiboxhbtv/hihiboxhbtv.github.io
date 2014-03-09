var infoName = 'Hihibox';
var infoCredit = 'Designed by VannZic, Lemon';
var infoVersion = 'v1.5.1';
var infoLastUpdate = 'Last Updated on 2014-03-10';

var defaultGenre = 'HKG';
var listGenre = ['Recent','HKG','meme','pkmon','腦魔','禿伯','小丑','壯膽同學會'];
var listParse = [];
var listIcon = [].concat(

/********************\
	HKG
\********************/
[
	{	"code": ["O:-)"],
		"icon": "http://forum11.hkgolden.com/faces/angel.gif",
		"genre": ["HKG"]
	},
	{	"code": ["xx("],
		"icon": "http://forum11.hkgolden.com/faces/dead.gif",
		"genre": ["HKG"]
	},
	{	"code": [":)",'<img src="http://edge.vie.hitbox.tv/static/img/chat/default/smile1.png" title=":smile:, :)" alt="" class="smiley">'],
		"icon": "http://forum11.hkgolden.com/faces/smile.gif",
		"genre": ["HKG"]
	},
	{	"code": [":o)"],
		"icon": "http://forum11.hkgolden.com/faces/clown.gif",
		"genre": ["HKG"]
	},
	{	"code": [":-("],
		"icon": "http://forum11.hkgolden.com/faces/frown.gif",
		"genre": ["HKG"]
	},
	{	"code": [":~("],
		"icon": "http://forum11.hkgolden.com/faces/cry.gif",
		"genre": ["HKG"]
	},
	{	"code": [";-)"],
		"icon": "http://forum11.hkgolden.com/faces/wink.gif",
		"genre": ["HKG"]
	},
	{	"code": [":-["],
		"icon": "http://forum11.hkgolden.com/faces/angry.gif",
		"genre": ["HKG"]
	},
	{	"code": [":-]"],
		"icon": "http://forum11.hkgolden.com/faces/devil.gif",
		"genre": ["HKG"]
	},
	{	"code": [":D",'<img src="http://edge.vie.hitbox.tv/static/img/chat/default/lol1.png" title=":lol:, :D" alt="" class="smiley">'],
		"icon": "http://forum11.hkgolden.com/faces/biggrin.gif",
		"genre": ["HKG"]
	},
	{	"code": [":O",'<img src="http://edge.vie.hitbox.tv/static/img/chat/default/surprised2.png" title="omg, :O" alt="" class="smiley">'],
		"icon": "http://forum11.hkgolden.com/faces/oh.gif",
		"genre": ["HKG"]
	},
	{	"code": [":P",'<img src="http://edge.vie.hitbox.tv/static/img/chat/default/tongue2.png" title=":P, :p" alt="" class="smiley">'],
		"icon": "http://forum11.hkgolden.com/faces/tongue.gif",
		"genre": ["HKG"]
	},
	{	"code": ["^3^"],
		"icon": "http://forum11.hkgolden.com/faces/kiss.gif",
		"genre": ["HKG"]
	},
	{	"code": ["?_?"],
		"icon": "http://forum11.hkgolden.com/faces/wonder.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#yup#"],
		"icon": "http://forum11.hkgolden.com/faces/agree.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#ng#"],
		"icon": "http://forum11.hkgolden.com/faces/donno.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#hehe#"],
		"icon": "http://forum11.hkgolden.com/faces/hehe.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#love#"],
		"icon": "http://forum11.hkgolden.com/faces/love.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#oh#"],
		"icon": "http://forum11.hkgolden.com/faces/surprise.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#cn#"],
		"icon": "http://forum11.hkgolden.com/faces/chicken.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#ass#"],
		"icon": "http://forum11.hkgolden.com/faces/ass.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[sosad]"],
		"icon": "http://forum11.hkgolden.com/faces/sosad.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#good#"],
		"icon": "http://forum11.hkgolden.com/faces/good.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#hoho#"],
		"icon": "http://forum11.hkgolden.com/faces/hoho.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#kill#"],
		"icon": "http://forum11.hkgolden.com/faces/kill.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#bye#"],
		"icon": "http://forum11.hkgolden.com/faces/bye.gif",
		"genre": ["HKG"]
	},
	{	"code": ["Z_Z"],
		"icon": "http://forum11.hkgolden.com/faces/z.gif",
		"genre": ["HKG"]
	},
	{	"code": ["@_@"],
		"icon": "http://forum11.hkgolden.com/faces/@.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#adore#"],
		"icon": "http://forum11.hkgolden.com/faces/adore.gif",
		"genre": ["HKG"]
	},
	{	"code": ["???"],
		"icon": "http://forum11.hkgolden.com/faces/wonder2.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[banghead]"],
		"icon": "http://forum11.hkgolden.com/faces/banghead.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[bouncer]"],
		"icon": "http://forum11.hkgolden.com/faces/bouncer.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[bouncy]"],
		"icon": "http://forum11.hkgolden.com/faces/bouncy.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[censored]"],
		"icon": "http://forum11.hkgolden.com/faces/censored.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[flowerface]"],
		"icon": "http://forum11.hkgolden.com/faces/flowerface.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[shocking]"],
		"icon": "http://forum11.hkgolden.com/faces/shocking.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[photo]"],
		"icon": "http://forum11.hkgolden.com/faces/photo.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#fire#"],
		"icon": "http://forum11.hkgolden.com/faces/fire.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[yipes]"],
		"icon": "http://forum11.hkgolden.com/faces/yipes.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[369]"],
		"icon": "http://forum11.hkgolden.com/faces/369.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[bomb]"],
		"icon": "http://forum11.hkgolden.com/faces/bomb.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[slick]"],
		"icon": "http://forum11.hkgolden.com/faces/slick.gif",
		"genre": ["HKG"]
	},
	{	"code": ["fuck"],
		"icon": "http://img4.wikia.nocookie.net/__cb20080713124518/evchk/images/f/fb/Fuck.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#no#"],
		"icon": "http://forum11.hkgolden.com/faces/no.gif",
		"genre": ["HKG"]
	},
	{	"code": ["#kill2#"],
		"icon": "http://forum11.hkgolden.com/faces/kill2.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[offtopic]"],
		"icon": "http://forum11.hkgolden.com/faces/offtopic.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[sosad369]"],
		"icon": "http://img3.wikia.nocookie.net/__cb20060327033446/evchk/images/5/55/Sosad-369.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[sosad369ex]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100901112145/evchk/images/b/b9/2010818205939156567860.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[369flowerface]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20060327040053/evchk/images/3/35/369face.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[ass369]"],
		"icon": "http://img4.wikia.nocookie.net/__cb20060327040129/evchk/images/2/27/Ass3.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[assclown]"],
		"icon": "http://img3.wikia.nocookie.net/__cb20060327040144/evchk/images/6/65/AssC.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[sosadbouncer]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20060327040204/evchk/images/b/bc/Bounsad.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[369sosad]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20060327040538/evchk/images/a/a9/Hahaha.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[sosadgood]"],
		"icon": "http://img1.wikia.nocookie.net/__cb20060327040613/evchk/images/9/98/Sogood.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[clownbouncy]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20080620050648/evchk/images/a/a5/Soft_plastic.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[clownbouncer]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20080623080121/evchk/images/e/eb/Clownbouncer.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[369bye]"],
		"icon": "http://img1.wikia.nocookie.net/__cb20080623075949/evchk/images/e/e9/369bye.gif",
		"genre": ["HKG"]
	},
	{	"code": ["[clownbye]"],
		"icon": "http://img1.wikia.nocookie.net/__cb20080803074219/evchk/images/5/55/CBye.gif",
		"genre": ["HKG"]
	}
],
/********************\
	壯膽同學會
\********************/
[
	{	"code": ["[打打打渣b]"],
		"icon": "http://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2013/10/10/1381417466775/Beyond-Two-Souls-008.jpg",
		"genre": ["壯膽同學會"],
		"width": 80
	}
],
/********************\
	腦魔
\********************/
[
	{	"code": [":)lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100616154204/evchk/images/9/94/85.gif",
		"genre": ["腦魔"]
	},
	{	"code": [";-)lm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100618120620/evchk/images/b/b9/Danni.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["O:-)lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100616154309/evchk/images/a/ab/Th_oh_copy.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["xx(lm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100616154353/evchk/images/0/0e/Th_xx.png",
		"genre": ["腦魔"]
	},
	{	"code": [":o)lm"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100616154621/evchk/images/5/5e/Th_on9.gif",
		"genre": ["腦魔"]
	},
	{	"code": [":o)lm2"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100616155005/evchk/images/c/c0/Th_pa.gif",
		"genre": ["腦魔"]
	},
	{	"code": [":o)lm3"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100820160801/evchk/images/6/61/031221g1nwNaCg3d.png",
		"genre": ["腦魔"]
	},
	{	"code": [":-(lm"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100616155057/evchk/images/0/06/Th_sad.gif",
		"genre": ["腦魔"]
	},
	{	"code": [":~(lm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100617141635/evchk/images/c/c3/Th_cry2.gif",
		"genre": ["腦魔"]
	},
	{	"code": [":-[lm"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100617142037/evchk/images/8/81/Th_angry.gif",
		"genre": ["腦魔"]
	},
	{	"code": [":Olm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100617142105/evchk/images/3/35/Th_oh.jpg",
		"genre": ["腦魔"]
	},
	{	"code": [":Plm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100822142512/evchk/images/e/ef/Th_tounge.gif",
		"genre": ["腦魔"]
	},
	{	"code": [":Plm2"],
		"icon": "http://img1.wikia.nocookie.net/__cb20100820154415/evchk/images/5/50/LOMORR.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["?_?lm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100617142235/evchk/images/2/2a/Th_wonder2.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#oh#lm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100617142312/evchk/images/d/d0/Th_4_13.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#good#lm"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100617142359/evchk/images/c/c3/Th_good.jpg",
		"genre": ["腦魔"]
	},
	{	"code": ["#hoho#lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617142427/evchk/images/4/43/Th_hoho.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#hoho#lm2"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100830110529/evchk/images/7/7f/Hoholm_alcohol_plastic.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#kill#lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617142503/evchk/images/b/bf/Th_kill.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#kill2#lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100618120205/evchk/images/a/a8/Kill2lm.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["@_@lm"],
		"icon": "http://img1.wikia.nocookie.net/__cb20100617142537/evchk/images/7/7d/Th_fb45347a.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["???lm"],
		"icon": "http://img1.wikia.nocookie.net/__cb20100617142620/evchk/images/e/ec/Th_wonder1.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["fucklm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100617142644/evchk/images/0/09/Th_diu.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["fucklm2"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100901095942/evchk/images/9/96/Thdiuu.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[banghead]lm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100617142707/evchk/images/8/85/Th_31lmbanghead.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[shocking]lm"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100617142736/evchk/images/f/fa/Th_shocking.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[photo]lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617142808/evchk/images/7/74/Th_20100506d980e19b600aea9.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[sosad]lm"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100617142915/evchk/images/1/1a/Th_lososad.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[sosad]lm2"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617142955/evchk/images/4/4e/Th_sosad2.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#yup#lm"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100617143109/evchk/images/0/06/Th_85.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[369]lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617143132/evchk/images/3/3e/Th_369.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[bomb]lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617143429/evchk/images/4/43/Th_1_78.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[bom]lm2","lm[bomb]2"],
		"icon": "http://img2.wikia.nocookie.net/__cb20110419143501/evchk/images/2/28/BomblmJ.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[slick]lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617143507/evchk/images/a/a3/Th_2010050629e0acd7b8ad410.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#ng#lm"],
		"icon": "http://img1.wikia.nocookie.net/__cb20100617143618/evchk/images/4/4d/Th_YTTTTT.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["Z_Zlm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617143754/evchk/images/4/4b/Th_sleep.gif",
		"genre": ["腦魔"]
	},
	{	"code": [":-]lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617143900/evchk/images/d/df/Th_deval.png",
		"genre": ["腦魔"]
	},
	{	"code": ["#adore#lm"],
		"icon": "http://img1.wikia.nocookie.net/__cb20100617143947/evchk/images/5/57/Th_adore.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#bye#lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617144026/evchk/images/3/36/Th_goodbye.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[flowerface]lm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100617144119/evchk/images/d/d8/Th_flowerface.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#love#lm"],
		"icon": "http://img1.wikia.nocookie.net/__cb20100617144207/evchk/images/7/74/Th_love.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[yipes]lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100617144314/evchk/images/f/f5/Th_yipes.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[bouncer]lm"],
		"icon": "http://img3.wikia.nocookie.net/__cb20100619080047/evchk/images/e/e0/Bouncerlm.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["[bouncer]lm2"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100822142655/evchk/images/c/c5/Steadybouncelm.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["#ass#lm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20100820154721/evchk/images/f/f7/Th_gggggggsddf.gif",
		"genre": ["腦魔"]
	},
	{	"code": ["^3^lm"],
		"icon": "http://img2.wikia.nocookie.net/__cb20100823060526/evchk/images/e/ec/Lmkiss.gif",
		"genre": ["腦魔"]
	},
	{	"code": [":Dlm"],
		"icon": "http://img4.wikia.nocookie.net/__cb20110206090454/evchk/images/1/1c/Lmbiggrin.JPG",
		"genre": ["腦魔"]
	}
],
/********************\
	meme
\********************/
[
	{	"code": [":troll:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Malicious-Troll/30.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":no:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Angry2/NO.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":kidding:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Angry2/AreYouKiddingMe.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":deskflip:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Angry2/angry-desk-flip.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":yaoface:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Laughing/34.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":accept:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Determined/ChallengeAccepted.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":why:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Female-Blonde-3/blonde_why.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":gtfo:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Victorious/gtfo.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":soon:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Determined/SoonComputer.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":sir:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Miscellaneous-2/feel-like-a-sir.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":yeah:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Victorious/Freddie.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":isee:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Happy/iseewhatyoudidthere.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":lolol:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Laughing/LOL.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":badass:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Neutral-2/watch-out-badass.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":jackiechan:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Stupidity/EpicJackieChan.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":spiderman:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Miscellaneous/spiderpman.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":truestory:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Miscellaneous/TrueStory.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":ohgod:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Miscellaneous/oh%20god.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":bean:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Miscellaneous-2/if-you-know-what-i-mean.jpg",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":pokerface:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Neutral/38.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":jesus:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Pleasure/sweetjesusface.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":fap:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Pleasure/FapFap.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":fuuu:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Rage/rage%20super.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":okay:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Sad/okay%20with%20words.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":1week:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Some-Time-Later-3/06%20-%201%20week.jpg",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":alone:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Sad/39.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":sad:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Sad/TheSaddestGuy.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":soclose:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Sad/FreddieSoClose.png",
		"genre": ["meme"],
		"width": 80
	},
	{	"code": [":ohgodwhy:"],
		"icon": "http://ragegenerator.com/images/ragebuilder-faces/Stupidity/OhGodWhy.png",
		"genre": ["meme"],
		"width": 80
	}
],
/********************\
	禿伯
\********************/
[
	{	"code": ["@_@t8"],
		"icon": "http://img4.wikia.nocookie.net/__cb20091018111053/evchk/images/a/a4/Tube8icon1.gif",
		"genre": ["禿伯"]
	},
	{	"code": [":-[t8"],
		"icon": "http://img2.wikia.nocookie.net/__cb20091018111108/evchk/images/9/9e/Tube8icon2.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["[shocking]t8"],
		"icon": "http://img1.wikia.nocookie.net/__cb20091018111121/evchk/images/7/75/Tube8icon3.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["[yipes]t8"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091018111129/evchk/images/9/9f/Tube8icon4.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["#hoho#t8"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091018111219/evchk/images/0/07/Tube8icon5.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["[369]t8","T8[369"],
		"icon": "http://img4.wikia.nocookie.net/__cb20091018111358/evchk/images/a/a9/Tube8icon6.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["[light]t8","t8[lught]"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091018111517/evchk/images/9/9c/Tube8icon7.gif",
		"genre": ["禿伯"]
	},
	{	"code": [":~(t8"],
		"icon": "http://img1.wikia.nocookie.net/__cb20091018111530/evchk/images/a/a2/Tube8icon8.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["fuckt8"],
		"icon": "http://img2.wikia.nocookie.net/__cb20091018111549/evchk/images/8/83/Tube8icon9.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["#kill#t8"],
		"icon": "http://img1.wikia.nocookie.net/__cb20091018111703/evchk/images/3/3f/Tube8icon10.gif",
		"genre": ["禿伯"]
	},
	{	"code": [":Ot8"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091018111727/evchk/images/c/cb/Tube8icon11.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["#oh#t8"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091018111747/evchk/images/d/da/Tube8icon12.gif",
		"genre": ["禿伯"]
	},
	{	"code": [":Pt8"],
		"icon": "http://img1.wikia.nocookie.net/__cb20091018111802/evchk/images/9/9b/Tube8icon13.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["???t8"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091018111851/evchk/images/3/31/Tube8icon16.gif",
		"genre": ["禿伯"]
	},
	{	"code": [":-(t8"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091018111858/evchk/images/e/e1/Tube8icon17.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["[sosad]t8"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091018111920/evchk/images/8/81/Tube8icon18.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["#yup#t8"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091018111936/evchk/images/0/04/Tube8icon19.gif",
		"genre": ["禿伯"]
	},
	{	"code": ["Z_Zt8"],
		"icon": "http://img1.wikia.nocookie.net/__cb20091018112002/evchk/images/8/8c/Tube8icon20.gif",
		"genre": ["禿伯"]
	},
	{	"code": [":O)t8"],
		"icon": "http://img4.wikia.nocookie.net/__cb20091018112019/evchk/images/c/c6/Tube8icon21.gif",
		"genre": ["禿伯"]
	}
],
/********************\
	小丑
\********************/
[
	{	"code": ["#good#cl"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329155121/evchk/images/2/2c/P01good.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#bad#cl"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329155159/evchk/images/2/24/P02bad.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#bye#cl"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070329155234/evchk/images/1/1f/P03bye.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#think#cl"],
		"icon": "http://img4.wikia.nocookie.net/__cb20070329155216/evchk/images/7/74/P04sick.gif",
		"genre": ["小丑"]
	},
	{	"code": ["???cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329155326/evchk/images/1/10/P05no.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[crash]cl"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329155405/evchk/images/8/88/P06ballup.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[yipes]cl"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070329155431/evchk/images/3/30/P07afraid.gif",
		"genre": ["小丑"]
	},
	{	"code": [":~(cl"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329155458/evchk/images/e/e5/P08cry.gif",
		"genre": ["小丑"]
	},
	{	"code": ["|||cl"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070329155522/evchk/images/d/d1/P09water.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[grass]cl"],
		"icon": "http://img4.wikia.nocookie.net/__cb20070329155549/evchk/images/a/a4/P10grass.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[noeyec]cl"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329155629/evchk/images/7/77/P11ah.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[no]cl"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070329155652/evchk/images/2/2c/P12no2.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#adore#cl","cl#adore"],
		"icon": "http://img4.wikia.nocookie.net/__cb20070329155718/evchk/images/f/fe/P13adore.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#god#cl"],
		"icon": "http://img4.wikia.nocookie.net/__cb20070329155745/evchk/images/5/5c/P14adore2.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[fuck]cl"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329155728/evchk/images/c/c7/P15f1.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[sun]cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329155842/evchk/images/c/cd/P16sun.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[rain]cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329155904/evchk/images/b/b7/P17umbrella.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[jail]cl"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070329155926/evchk/images/b/b0/P18jail.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[fuck]cl2"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070329155953/evchk/images/d/d7/P19midfinger.gif",
		"genre": ["小丑"]
	},
	{	"code": ["???cl3"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070329160040/evchk/images/5/53/P21ng.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#yup#cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329160019/evchk/images/3/37/P22385602iUdgq.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#photo#cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329160209/evchk/images/e/e8/P23040822165313-105283.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#smoke#cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329160228/evchk/images/3/3a/P2404072022142-45236.gif",
		"genre": ["小丑"]
	},
	{	"code": ["???cl2"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329160332/evchk/images/2/2e/P2504071723945-45236.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[bouncer]cl"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329160352/evchk/images/a/a4/P26040801112519-102412.gif",
		"genre": ["小丑"]
	},
	{	"code": [":)cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329160411/evchk/images/1/12/P2704072023856-103790.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#fire#cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329160438/evchk/images/5/58/P28clown_fire.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#hoho#cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329160519/evchk/images/3/37/P29hoho.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#dive#cl"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329160453/evchk/images/6/62/P30sub.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[sosad]cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329160619/evchk/images/b/be/P32sosadplas.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[offtopic]cl"],
		"icon": "http://img3.wikia.nocookie.net/__cb20070329160550/evchk/images/a/ab/P33clownoff.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[jerk]cl"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070329160655/evchk/images/5/50/P343y64o5e.gif",
		"genre": ["小丑"]
	},
	{	"code": ["[offtopic]cl2"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329160714/evchk/images/d/d6/P35clownmoney.gif",
		"genre": ["小丑"]
	},
	{	"code": ["fuckcl"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070329160752/evchk/images/c/c2/P37clownf.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#kill#cl"],
		"icon": "http://img1.wikia.nocookie.net/__cb20070329160823/evchk/images/6/64/P38clownkill.gif",
		"genre": ["小丑"]
	},
	{	"code": ["#kill2#cl"],
		"icon": "http://img4.wikia.nocookie.net/__cb20070329160842/evchk/images/b/b1/P39clownkill2.gif",
		"genre": ["小丑"]
	}
],
/********************\
	pkmon
\********************/
[
	{	"code": ["#pkmbye#"],
		"icon": "http://img2.wikia.nocookie.net/__cb20130317132637/evchk/images/4/48/CHZISme.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm???"],
		"icon": "http://img4.wikia.nocookie.net/__cb20090507051125/evchk/images/9/90/3questionmarkpkmn.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm:~("],
		"icon": "http://img2.wikia.nocookie.net/__cb20090507051233/evchk/images/c/c1/Crypkmn.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm#hehe#"],
		"icon": "http://img2.wikia.nocookie.net/__cb20090314033455/evchk/images/3/3b/Aipomhehe.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm#no#"],
		"icon": "http://img2.wikia.nocookie.net/__cb20090314033847/evchk/images/0/07/Bearno.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm[censored]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20090314034008/evchk/images/6/6b/Cenegg.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm[banghead]"],
		"icon": "http://img4.wikia.nocookie.net/__cb20090507051934/evchk/images/2/2c/Bangjig2.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm[police]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20090314034102/evchk/images/0/06/Eggeggpolice.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm@_@"],
		"icon": "http://img4.wikia.nocookie.net/__cb20090314034258/evchk/images/5/5a/Exeshock.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm:-]"],
		"icon": "http://img3.wikia.nocookie.net/__cb20090314034327/evchk/images/5/50/Evilsmilepkmnbug.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm:o)"],
		"icon": "http://img3.wikia.nocookie.net/__cb20090314034403/evchk/images/5/56/Wfc.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm#adore#"],
		"icon": "http://img3.wikia.nocookie.net/__cb20090314034729/evchk/images/3/3c/Formcastadore2.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm#kill2#"],
		"icon": "http://img2.wikia.nocookie.net/__cb20090314034752/evchk/images/5/5c/Geodudekill.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm[shocking]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20090314034835/evchk/images/6/6b/Kabutoshock.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm[bomb]"],
		"icon": "http://img3.wikia.nocookie.net/__cb20090314034858/evchk/images/6/63/Magnitebomb.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm#kill#"],
		"icon": "http://img1.wikia.nocookie.net/__cb20090314034937/evchk/images/d/d0/Mewgun.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm#love#"],
		"icon": "http://img2.wikia.nocookie.net/__cb20090314035002/evchk/images/4/4e/Todolove.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm#hoho#"],
		"icon": "http://img3.wikia.nocookie.net/__cb20090314035100/evchk/images/3/3b/Sudowokkuplasticwine.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm[seed]"],
		"icon": "http://img1.wikia.nocookie.net/__cb20090507051901/evchk/images/a/a7/Seedwhere.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm[flowerface]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20090314035343/evchk/images/7/73/Starfishface.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm:-("],
		"icon": "http://img4.wikia.nocookie.net/__cb20090314035424/evchk/images/f/ff/Poisonwoffe.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm[369]"],
		"icon": "http://img3.wikia.nocookie.net/__cb20090314035453/evchk/images/6/63/Shell.gif",
		"genre": ["pkmon"]
	},
	{	"code": ["pkm[sosad]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20090514113614/evchk/images/3/3a/Pika897.gif",
		"genre": ["pkmon"]
	}
],
/********************\
	Other
\********************/
[
	{	"code": ["[wonggiyin]"],
		"icon": "http://static2.wikia.nocookie.net/__cb20121104181931/evchk/images/thumb/f/fa/IbvexqKQrPKgRe.jpg/500px-IbvexqKQrPKgRe.jpg",
		"width": 80
	},
	{	"code": ["[talkthis]"],
		"icon": "http://img1.wikia.nocookie.net/__cb20131015004820/evchk/images/c/cb/Dew_chatting_this_1080p.png",
		"width": 80
	},
	{	"code": ["[specialskill]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20140107085615/evchk/images/3/38/Recitation_002.gif",
		"width": 80
	},
	{	"code": ["[youknowrules]"],
		"icon": "http://img1.wikia.nocookie.net/__cb20110616150001/evchk/images/a/a5/Di-JN2V.jpg",
		"width": 80
	},
	{	"code": ["[repeaterror]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20070902105305/evchk/images/1/16/Repetitive_error.jpg",
		"width": 80
	},
	{	"code": ["[whynotboth]"],
		"icon": "http://cdn.androidpolice.com/wp-content/uploads/2012/08/nexusae0_whynotboth.jpg",
		"width": 80
	},
	{	"code": ["[bitchplease]"],
		"icon": "http://www.reactionimage.org/img/gallery/918476615.jpg",
		"width": 80
	},
	{	"code": ["[sundaydriver]"],
		"icon": "http://subspecies.files.wordpress.com/2011/10/elderly-female-driver.jpg",
		"width": 80
	},
	{	"code": ["[payback]"],
		"icon": "http://hihiboxhbtv.github.io/images/icons/[payback].jpg",
		"width": 80
	},
	{	"code": ["[kingcheck]"],
		"icon": "http://static.apple.nextmedia.com/images/e-paper/20130319/large/1363674373_416d.jpg",
		"width": 80
	},
	{	"code": ["[pccw]"],
		"icon": "http://www.designerhk.com/sites/designerhk.com/files/blog/59/6118/02.jpg",
		"width": 80
	},
	{	"code": ["[what]"],
		"icon": "http://img.jpnxcn.com/pics/2013/0423/20130423041830583.jpg",
		"width": 80
	},
	{	"code": ["[kimchi]"],
		"icon": "http://img3.wikia.nocookie.net/__cb20091204132509/evchk/images/a/a9/U_are_korean.jpg",
		"width": 80
	},
	{	"code": ["[goldbird]"],
		"icon": "http://img1.wikia.nocookie.net/__cb20101025162933/evchk/images/f/f7/S18925goldenbitextl121.gif",
		"width": 80
	},
	{	"code": ["[never]"],
		"icon": "http://img2.wikia.nocookie.net/__cb20080104213913/evchk/images/thumb/f/f7/Liulaughat.jpg/185px-Liulaughat.jpg",
		"width": 80
	},
	{	"code": ["[ahaha]"],
		"icon": "http://img4.wikia.nocookie.net/__cb20071214025759/evchk/images/thumb/7/7c/1188230991.jpg/200px-1188230991.jpg",
		"width": 80
	},
	{	"code": ["[summonvannzic]"],
		"icon": "http://hihiboxhbtv.github.io/images/icons/[summonvannzic].jpg",
		"width": 80
	}
]
/********************\
	Ending
\********************/

);