const buttonContainers = document.querySelectorAll('.button__container');
const buttonAspects = document.querySelectorAll('.button--aspects');
const weapons = document.getElementById('weapons');
const weaponBow = document.querySelector('.aspects--bow');
const weaponBlade = document.querySelector('.aspects--blade');
const weaponShield = document.querySelector('.aspects--shield');
const weaponSpear = document.querySelector('.aspects--spear');
const weaponRail = document.querySelector('.aspects--rail');
const weaponFists = document.querySelector('.aspects--fists');
const weaponsArray = [weaponBlade, weaponSpear, weaponBow, weaponShield, weaponRail, weaponFists];
const bowAspects = document.querySelectorAll('.bow');
const buildBoilerplate = document.querySelector('.build');
const buildTitle = document.querySelector('.build-title');

const buildArray = [
    {
        weapon: 'Stygian Blade',
        title: 'Aspect of Zagreus',
        playstyle: 'Leveling up Aspect of Zagreus on Stygian Blade gives you more attack speed and movement speed, and doubling down on your strenghts is my philosophy in pretty much anything. Most of your gameplay will consist of zooming around the map while trying to knock foes away into walls with your attacks. Boons and Upgrades chosen for this build improve your attack speed while also giving you decent dps, mostly thanks to Hermes\' Rush Delivery.',
        startingKeepsake: 'Conch Shell (Poseidon\'s keepsake) to get Tempest Strike early.',
        mirror: 'Nothing specific, choose whatever you prefer.',
        boons: [
            {
                name: 'Tempest Strike (Poseidon)', 
                img: './img/tempest-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack deals more damage and knocks foes away.',
                explaination: 'This build focuses on attacks as your main damage output. Combining this boon with other boons from the build will make you relatively safe while still dealing decent amount of damage.'
            },
            {
                name: 'Swift Strike (Hermes)', 
                img: './img/swift-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is +X% faster.',
                explaination: 'By decreasing weapon attack charge time, this boon will make it safer for you to attack as it will make you attack faster.'
            },
            {
                name: 'Greater Haste (Hermes)', 
                img: './img/greater-haste.png', 
                prerequisites: 'none',
                effect: 'You move X% faster.',
                explaination: 'This is your bread and butter for zooming around the map. Also unlocks Rush Delivery, which is a key boon for this build.'
            },
            {
                name: 'Rush Delivery (Hermes)', 
                img: './img/rush-delivery.png', 
                prerequisites: 'Greater Haste, Hyper Sprint, or Lambient Plume (Keepsake)',
                effect: 'You deal bonus damage based on any bonus move speed.',
                explaination: 'This boon works really well with the Aspect of Zagreus, and combined with Greater Haste and Tempest Strike allows you to dish out fast yet deadly attacks.'
            }
        ],
        daedalus: [
            {
                name: 'Breaching Slash',
                img: './img/breaching-slash.png',
                effect: 'Your Attack deals +300% damage to Armor.',
                explaination: 'As your attacks empowered by Tempest Strike can\'t knock away foes with Armor, you will have to make sure that you dispose of those foes quickly. This Daedalus Upgrade should preferably be picked up in Tartarus.'
            },
            {
                name: 'Piercing Wave',
                img: './img/piercing-wave.png',
                effect: 'Your Attack fires a wave that pierces foes, dealing 30 damage.',
                explaination: 'This Daedalus Upgrade, combined with Tempest Strike and Rush Delivery, is pretty much going to make you deal disgusting damage to your foes, and all that while knocking them back and being super fast.'
            }
        ],
        funAlternative: 'Choose Cursed Slash Daedalus Upgrade to play a super wacky and fun lifesteal build!'
    },
    {
        weapon: 'Stygian Blade',
        title: 'Aspect of Nemesis',
        playstyle: 'When I first saw Nemesis, I thought it was going to be my favorite aspect. After using your Special, you gain 30% bonus critical chance on your Attack. This sounds amazing, but sadly it lasts only 3 seconds, meaning you will have to Special once every 3 seconds for constant damage. <br /> Most effective build for this weapon is increasing crit chance on your attack, meaning you\'re going to rely on Artemis boons. Get as much Artemis boons as you can.',
        startingKeepsake: 'Adamant Arrowhead (Artemis\' keepsake) to get Deadly Strike early.',
        mirror: 'Nothing specific, choose whatever you prefer.',
        boons: [
            {
                name: 'Deadly Strike (Artemis)', 
                img: './img/deadly-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is stronger, with +15% chance to deal Critical damage.',
                explaination: 'Pretty self-explainatory, this is your main boon. It will give you more crit chance and is required for unlocking another key boon of the build.'
            },
            {
                name: 'Clean Kill (Artemis)', 
                img: './img/clean-kill.png',
                prerequisites: 'Artemis\' Aid, Deadly Flourish, Deadly Strike, Pressure Points, or True Shot',
                effect: 'Your Critical effects deal even more damage.',
                explaination: 'Not mandatory, but since Critical effects are your main damage, you\'ll want to make them stronger by getting this boon.'
            },
            {
                name: 'Heartbreak Flourish (Aphrodite)', 
                img: './img/heartbreak-flourish.png', 
                prerequisites: 'none',
                effect: 'Your Special deals more damage and inflicts Weak.',
                explaination: 'You will need this boon in order to unlock Aphrodite and Artemis\' duo boon, which is the most most most important boon in the build.'
            },
            {
                name: 'Sweet Surrender (Aphrodite)', 
                img: './img/sweet-surrender.png', 
                prerequisites: 'Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish',
                effect: 'Weak-afflicted foes are also more susceptible to damage.',
                explaination: 'Same as Clean Kill - it\'s not crucial for the build, but the bonus damage is always welcome.'
            },
            {
                name: 'Heart Rend (Aphrodite & Artemis Duo)', 
                img: './img/heart-rend.png', 
                prerequisites: 'One of each of these Aphrodite and Artemis boons: <br />Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish. <br />Artemis: Deadly Strike, Deadly Flourish, or True Shot.',
                effect: 'Your Critical effects deal even more damage to Weak foes. Bonus Critical Damage vs. Weak: +150%',
                explaination: 'This is the best boon you can have with this build. As your gameplay revolves around squeezing Attacks in after Special, making them deal 150% extra damage is the best you can ask for.'
            },
            {
                name: 'Swift Strike (Hermes)', 
                img: './img/swift-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is +X% faster.',
                explaination: 'Since your main damage comes from Attacks, faster attacks are always welcome.'
            }
        ],
        daedalus: [
            {
                name: 'Cruel Thrust',
                img: './img/cruel-thrust.png',
                effect: 'Your Thrust deals +200% damage and has a +40% Critical chance.',
                explaination: 'Your build is based around Attacks and Criticals, so a Thrust with additional Critical Chance is good, albeit a little hard to pull off since you will have to stand and spam Attacks to get to it. If you don\'t like it, try Flurry Slash.'
            },
            {
                name: 'Double Edge',
                img: './img/double-edge.png',
                effect: 'Your Dash-Strike hits twice and deals +20% damage.',
                explaination: 'Sometimes you can\'t just stand around and dish out Attacks after a Special, so you\'ll have to rely on Dash-Striking your way through the Underworld. Having at least some bonus damage on it will make your journey a little easier.'
            }
        ],
        funAlternative: 'Switch out Cruel Thrust/Flurry Slash for World Splitter for that big chop Critical madness'
    },
    {
        weapon: 'Stygian Blade',
        title: 'Aspect of Poseidon',
        playstyle: 'Aspect of Poseidon has got to be the most fun Aspect of this weapon. By using this Aspect, your Special dislodges Cast Ammo from foes and makes your Cast deal 50% extra damage, which can best be further powered up with Mirror upgrades and Artemis boons.',
        startingKeepsake: 'Adamant Arrowhead (Artemis\' keepsake) to get her boons as quickly as possible.',
        mirror: 'It is VERY IMPORTANT that you take Infernal Soul Talent in order to get up to 2 extra Cast Ammo. Not only because of that, but some of the boons in this build straight up can\'t be taken unless you have this Talent activated.', 
        boons: [
            {
                name: 'True Shot (Artemis)', 
                img: './img/true-shot.png',
                prerequisites: 'none',
                effect: 'Your Cast seeks foes, with a 10% chance to deal Critical damage.',
                explaination: 'Given how landing Casts is critical to your success with this build, having a Cast that seeks foes and even has a chance of dealing Critical damage is a great addition to your arsenal.'
            },
            {
                name: 'Exit Wounds (Artemis)', 
                img: './img/exit-wounds.png',
                prerequisites: 'none',
                effect: 'Your foes take damage when your Cast Ammo stuck in them is dislodged.',
                explaination: 'Now this right here is why Poseidon players LOVE Artemis. You will be dislodging Cast Ammo from foes pretty much all the time, and this boon deals damage each time it happens. Spam Cast, dislodge with Special, collect Cast Ammo, repeat. Ah, if only it worked with Crystal Beam!'
            },
            {
                name: 'Pressure Points (Artemis)', 
                img: './img/pressure-points.png', 
                prerequisites: 'none',
                effect: 'Any damage you deal has a chance to be Critical.',
                explaination: 'The only reason I would take this is to unlock Artemis\' legendary boon. You can take Support Fire instead.'
            },
            {
                name: 'Fully Loaded (Artemis)', 
                img: './img/fully-loaded.png', 
                prerequisites: 'Requires two of three: Exit Wounds, Pressure Points, or Support Fire',
                effect: 'Gain extra Cast Ammo for your Cast. Max Ammo: +2 Cast Ammo',
                explaination: 'The build relies on Cast Ammo and this gives it not 1 but 2 Ammo, which is a big deal. However, given that this is a legendary boon, it\'s okay if you don\'t manage to get it.'
            },
            {
                name: 'Thunder Flourish (Zeus)', 
                img: './img/thunder-flourish.png', 
                prerequisites: 'none',
                effect: 'Your Special causes a lightning bolt to strike nearby foes.',
                explaination: 'Optional. Take it if you want to go for Artemis Zeus Duo. You can instead choose Lightning Strike, Thunder Dash, or Zeus\' Aid.'
            },
            {
                name: 'Lightning Rod (Artemis & Zeus Duo)', 
                img: './img/lightning-rod.png', 
                prerequisites: 'One of each of these Artemis and Zeus boons: <br />Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus\' Aid. <br /> Artemis: Artemis\' Aid, Deadly Flourish, Deadly Strike, Hunter Dash, or True Shot.',
                effect: 'Your collectible Cast Ammo strike nearby foes with lightning every 1 Sec. Lightning Damage: 70',
                explaination: 'If you can get this, it\'s GG. The reason this boon is amazing is because you will be dealing damage even if you can\'t collect your Cast Ammo. However, it is quite hard to unlock, so it\'s okay if you don\'t get it.'
            },
            {
                name: 'Flurry Cast (Hermes)',
                img: './img/flurry-cast.png',
                prerequisites: 'none',
                effect: 'Your Cast is +X% faster and fully automatic.',
                explaination: 'You can now hold your Cast button to fire automatically! On top of that, it\'s faster, so try to get this boon as it will increase your dps significantly.'
            },
            {
                name: 'Quick Reload (Hermes)',
                img: './img/quick-reload.png',
                prerequisites: 'none',
                effect: 'Foes drop Cast Ammo stuck in them faster.',
                explaination: 'This boon is recommended because you need Cast Ammo as often as possible to dish out the damage a handsome person such as yourself deserves to deal :). However, given that you can dislodge Cast Ammo with your special, you might find this boon questionable. Trust me when I say that you\'re gonna need it. Too many of my runs suffered simply because all my Cast Ammo was stuck in a foe or a boss that was invulnerable so I had to wait out the cooldown. Take this, and you\'ll have some nerves to spare.'
            },
        ],
        daedalus: [
            {
                name: 'Super Nova',
                img: './img/super-nova.png',
                effect: 'Your Special hits a wider area and deals +20% damage.',
                explaination: 'Your Special dislodges Cast Ammo, so widening your Special\'s hitbox is always a good idea. You can also go for Dash Nova if that\'s more your style.'
            }
        ],
        funAlternative: 'By taking Crystal Beam from Demeter instead of Exit Wounds, you can go for Artemis & Demeter duo boon Crystal Clarity, which will make your Cast stronger as well as making it follow your foes more effectively. Alternatively, by going for Artemis & Poseidon duo, you unlock Mirage Shot which will fire a second projectile everytime you Cast, although it has reduced damage.'
    },
    {
        weapon: 'Stygian Blade',
        title: 'Aspect of Arthur',
        playstyle: 'Oh boy, this one was hard to make. Aspect of Arthur is the kind of weapon you just stare at in awe as you watch your 3rd attack deal half the boss\' HP. Not only does this weapon give you +50 Life Total and 40% Damage Reduction, but it also deals disgusting amount of base damage. Although it\'s the slowest weapon in the game, there\'s sooo much variety with this weapon! You can go for a Critical build to see your Attacks deal upwards of 500 damage combined with other Attack modifiers, you can go Athena to play it slow and steady as an unstoppable tank that crushes all of his foes simply by existing, taking books that increase your Health and healing. However, my favorite way to play this aspect is to increase % damage on your attacks through Aphrodite, Chaos boons and Hermes\' Side Hustle + Hoarding Slash rich boy build.',
        startingKeepsake: 'Chthonic Coin Purse (Hypnos\' keepsake) because this build benefits from scaling with Hoarding Slash Daedalus Upgrade, or Conch Shell (Poseidon\'s keepsake) to get Ocean\'s Bounty and Sunken Treasure.',
        mirror: 'It\'s up to you. I like taking Golden Touch and hope for Hermes\' Hoarding Slash.',
        boons: [
            {
                name: 'Heartbreak Strike (Aphrodite)', 
                img: './img/heartbreak-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack deals more damage and inflicts Weak.',
                explaination: 'The reason you should take this Attack boon over others is because it gives percentage damage instead of flat damage. Since your Attacks already have amazing base damage, throwing in percentage boosts is only going to make you deadlier.'
            },
            {
                name: 'Ocean\'s Bounty (Poseidon)', 
                img: './img/oceans-bounty.png',
                prerequisites: 'none',
                effect: 'Any Gemstone, Darkness or Obols chamber rewards are worth more.',
                explaination: 'As you will rely on getting as much moola as possible with this build, it is recommended to get the boon that increases how much of it you get.'
            },
            {
                name: 'Side Hustle (Hermes)', 
                img: './img/side-hustle.png', 
                prerequisites: 'none',
                effect: 'Each time you enter a Chamber, gain a bit wealth.',
                explaination: 'Whenever I see this boon as an offer, my day looks better and my mood is fixed. Getting this boon early is a godsend (literally) and will scale wonderfully with all your other money generating boons.'
            },
            {
                name: 'Strike (Chaos)', 
                img: './img/strike.png', 
                prerequisites: 'blood sacrifice',
                effect: 'Afterward, your Attack deals +X% damage.',
                explaination: 'Like Aphrodite\'s Attack, this blessing gives you percentage damage on your Attack, and that\'s all you need with a weapon like this one.'
            },
            {
                name: 'Lunge (Chaos)', 
                img: './img/lunge.png', 
                prerequisites: 'blood sacrifice',
                effect: 'Afterward, your Dash Attack deals +X% damage.',
                explaination: 'Same philosophy as Chaos\' Strike blessing, just for Dash Attack instead.'
            }
        ],
        daedalus: [
            {
                name: 'Hoarding Slash',
                img: './img/breaching-slash.png',
                effect: 'Your Attack deals bonus damage equal to 5% of your current Obols.',
                explaination: 'Breaching Slash is the cornerstone of this build. Getting this in Tartarus almost guarantees a win, as long as you\'re not spending money. 5% might seem like a small amount, but even with 1000 Obols (which is pretty easy to achieve with this build) you deal +50 damage, not counting for % damage increases on top of that. It\'s a must-have.'
            },
            {
                name: 'Double Edge',
                img: './img/double-edge.png',
                effect: 'Your Dash-Strike hits twice and deals +20% damage.',
                explaination: 'Did somebody say percent damage? You already know the philosophy by now.'
            }
        ],
        funAlternative: 'One fun way to play this Aspect is to go for Artemis boons that will give you Critical strike chance. When you pair it up with Aphrodite and get their duo boon, no gods can help your foes.<br />Other than that, here\'s a fun challenge! Try this aspect with Sisyphus\' keepsake and let me know how much it took you to beat Hades with it!'
    },
    {
        weapon: 'Eternal Spear',
        title: 'Aspect of Zagreus',
        playstyle: 'The spear is the weapon that many players beat this game with for the first time. This build relies on using Theseus\' tactics - chunking your foes with massive damage from throwing your spear. Naturally, best boons to pick up for this build are those that power up your Special.',
        startingKeepsake: 'Black Shawl (Nyx\' keepsake) is good for dealing bonus backstab damage to foes, given that you\'re going to backstab them often when calling the spear back to you. You should also consider taking Poseidon\'s and Zeus\'s keepsakes early to get their boons.',
        mirror: 'Since you will backstab often, it would be wise to take Shadow Presence.',
        boons: [
            {
                name: 'Tempest Flourish (Poseidon)', 
                img: './img/tempest-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special deals more damage and knocks foes away.',
                explaination: 'Poseidon and Zeus combo is a standard build for this aspect. You\'re gonna rely on rupturing and backstabing your foes while dealing aditional damage with Zeus. The reason you want Poseidon\'s Special and not Zeus\' is because, in combination with Chain Skewer, Poseidon\'s Special bouncing on foes is more useful.'
            },
            {
                name: 'Razor Shoals (Poseidon)', 
                img: './img/razor-shoals.png',
                prerequisites: 'Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash.',
                effect: 'Using knock-away effects also Rupture foes.',
                explaination: 'You will be knocking foes away left-and-right, so this is a must-have pickup.'
            },
            {
                name: 'Wave Pounding (Poseidon)', 
                img: './img/wave-pounding.png',
                prerequisites: 'Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash.',
                effect: 'Your boons with Knock-Away effects deal bonus damage to bosses.',
                explaination: 'An excellent pick-up for dealing with bosses. Your Special will knock foes away, so it\'s only natural that you\'re going to want to pick up this boon.'
            },
            {
                name: 'Electric Shot (Zeus)', 
                img: './img/electric-shot.png',
                prerequisites: 'none',
                effect: 'Your Cast is a burst of chain-lightning that bounces between foes.',
                explaination: 'In combination with your Daedalus Upgrades, your Special will bounce through multiple foes and knock them away. Taking Zeus\' Cast that also hits multiple foes goes well with the theme and it also allows you to unlock Poseidon & Zeus duo boon.'
            },
            {
                name: 'Sea Storm (Poseidon & Zeus Duo)', 
                img: './img/sea-storm.png', 
                prerequisites: 'One of each of these Poseidon and Zeus boons: <br />Poseidon: Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash. <br />Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus\' Aid.',
                effect: 'Your knock-away effects also cause foes to be struck by lightning. Lightning Damage 40.',
                explaination: 'This is your main boon. Cast to damage multiple foes, Special to damage multiple foes, knocking them back and striking them with lightning, and then draw your Spear back for bonus backstab damage. This combo will make you clear most encounters in the blink of an eye.'
            },
            {
                name: 'Swift Flourish (Hermes)', 
                img: './img/swift-flourish.png', 
                prerequisites: 'none',
                effect: 'Your Special is +X% faster.',
                explaination: 'This one will make your life easier, especially since Chain Skewer needs some time before you can take your spear back.'
            }
        ],
        daedalus: [
            {
                name: 'Chain Skewer',
                img: './img/chain-skewer.png',
                effect: 'Your Special bounces to up to 7 foes, dealing +30% damage for each.	                ',
                explaination: 'This is another key boon for this run since it will allow you to tag multiple foes with your Spear. Also comes with a nice percentage damage bonus, and you know we take those!'
            },
            {
                name: 'Charged Skewer',
                img: './img/charged-skewer.png',
                effect: 'Hold Special to charge your skewer for up to +200% base damage.',
                explaination: 'Absolutely disgusting damage when you\'re able to hit multiple foes with your Special, which you will be able to do thanks to your Chain Skewer.'
            },
            {
                name: 'Vicious Skewer',
                img: './img/vicious-skewer.png',
                effect: 'Your Special deals +50% damage; +50% Critical chance on recovery.',
                explaination: 'This one is completely optional but if you want to go for Artemis\' Special instead of Zeus\', this one will help you out a bunch.'
            }
        ],
        funAlternative: 'As I already briefly mentioned, you can switch out Zeus for Artemis in this run, but if you do so, make sure to take Vicious Skewer over Charged Skewer, since it gives 50% Critical chance on Spear return.'
    },
    {
        weapon: 'Eternal Spear',
        title: 'Aspect of Achilles',
        playstyle: 'Aspect of Achilles allows you to retrieve your Spear after Special with Raging Rush. Although Raging Rush doesn\'t deal a lot of damage, the bonus you get for your next 4 Attacks or Casts is nice, 150% more to be exact, making this aspect perfect for a Hunting Blades build.',
        startingKeepsake: 'Take Blood-Filled Vial (Ares\' keepsake) to get Slicing Shot as soon as possible.',
        mirror: 'Take whatever you prefer.',
        boons: [
            {
                name: 'Slicing Shot (Ares)', 
                img: './img/slicing-shot.png',
                prerequisites: 'none',
                effect: 'Your Cast sends a Blade Rift hurling ahead.',
                explaination: 'This build revolves around using Cast after Specials, and a Blade Rift focused build is one of the best for that. Also, taking this and a specific Artemis boon will unlock their duo boon, which is critical to your success with this build.'
            },
            {
                name: 'Blade Dash (Ares)', 
                img: './img/blade-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash creates a Blade Rift where you started.',
                explaination: 'Since a lot of your boons will focus on powering up your Blade Rifts, having a Dash that creates Blade Rifts makes you deal damage even when you have to reposition yourself.'
            },
            {
                name: 'Black Metal (Ares)', 
                img: './img/black-metal.png',
                prerequisites: 'Ares\' Aid, Blade Dash, Slicing Flare, or Slicing Shot.',
                effect: 'Your Blade Rift powers deal damage in a wider area.',
                explaination: 'Blade Rifts are your main damage and this boon will make them stronger and wider.'
            },
            {
                name: 'Engulfing Vortex (Ares)', 
                img: './img/engulfing-vortex.png',
                prerequisites: 'Ares\' Aid, Blade Dash, Slicing Flare, or Slicing Shot.',
                effect: 'Your Blade Rift effects last longer and pull foes in.',
                explaination: 'Just like Black Metal, this boon is crucial to make your Blade Rifts hurt like trucks, with the addition of pulling foes in.'
            },
            {
                name: 'Vicious Cycle (Ares)', 
                img: './img/vicious-cycle.png',
                prerequisites: 'Black Metal or Engulfing Vortex',
                effect: 'Your Blade Rift effects deal more damage for each consecutive hit. Damage Increase per Hit: 2.',
                explaination: 'Note: This is a Legendary boon, so you might not always get it - but if you do, you can play that run one-handed. Seriously, you can just spam Dash and kill foes with Blade Rifts from your Dash.'
            },
            {
                name: 'Deadly Flourish (Artemis)', 
                img: './img/deadly-flourish.png', 
                prerequisites: 'none',
                effect: 'Your Special is stronger, with +20% chance to deal Critical Damage.',
                explaination: 'The only reason you want to take this boon is to unlock the duo boon that\'s gonna make your run significantly easier. Given that you will spam Specials in order to get bonus damage for Attacks and Casts, picking up this Artemis boons instead of others makes the most sense for me.'
            },
            {
                name: 'Hunting Blades (Ares and Artemis Duo)', 
                img: './img/hunting-blades.png', 
                prerequisites: 'none',
                effect: 'Your Cast creates a faster Blade Rift that seeks the nearest foes. Seek Duration: 3.3 Sec.',
                explaination: 'What\'s better than hurling Blade Rifts at your opponents? Why, hurling them even faster and making them into homing artillery! Keep in mind that this works only for the Blade Rifts created by your Cast, not from your Dash or Ares\' Call if you decide to pick that one up.'
            }
        ],
        daedalus: [
            {
                name: 'Chain Skewer',
                img: './img/chain-skewer.png',
                effect: 'Your Special bounces to up to 7 foes, dealing +30% damage for each.',
                explaination: 'I almost always go for this Daedalus Upgrade on the Spear. You will start all your combos with your Special, so hitting multiple foes is a good bonus to have.'
            },
            {
                name: 'Vicious Skewer',
                img: './img/vicious-skewer.png',
                effect: 'Your Special deals +50% damage; +50% Critical chance on recovery.',
                explaination: 'This Daedalus Upgrade works really well with your build because you will be using your Special to start your combo. Given that your Special will have Artemis\' Special boon, your Critical chance on Special will be even higher.'
            }
        ],
        funAlternative: 'Instead of Blade Rifts, see if this build works well with Demeter\'s Crystals. Zeus Cast might also be fun to play. If I were you, I would just stick to the Blade Rift build.'
    },
    {
        weapon: 'Eternal Spear',
        title: 'Aspect of Hades',
        playstyle: 'Compared to the other three Spear aspects, this one kind of feels the most underwhelming for me. Sure, bonus damage on your Spin Attack is nice, but how often do you use Spin Attacks anyway? They are unsafe to pull out, so this build will focus on boons that reduce the amount of time it takes for you to execute a Spin Attack, while also powering up your Attacks since they will be your main damage output.',
        startingKeepsake: 'I recommend taking Owl Pendant (Athena\'s keepsake) early to get a safe start, but taking Artemis\' keepsake is good, too.',
        mirror: 'This build is one of the most open builds when it comes to boons, since you only really need one Olympian boon and the rest is whatever you want. Given that that\'s the case, Family Favorite might be of interest to you.',
        boons: [
            {
                name: 'Deadly Strike (Artemis)', 
                img: './img/deadly-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is stronger, with +15% chance to deal Critical damage.',
                explaination: 'This aspect focuses on using your Spin Attack, so choosing a boon that gives you Critical damage on your Attacks will serve you best. Your gameplay will mostly consist of Dashing, Attacking and using Spin Attacks, so take whatever powers up your Attacks.'
            },
            {
                name: 'Divine Dash (Athena)', 
                img: './img/divine-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash deals damage and can Deflect.',
                explaination: 'Ahh yes, the infamous broken-as-all-hell Athena Dash. Other than being one of the best Dashes in the game, this Dash is vital to your success with this build because ranged foes will be a big hindrance to your runs. Being able to Deflect their projectiles will make you safe while allowing you to reposition and deal some damage.'
            },
            {
                name: 'Swift Strike (Hermes)', 
                img: './img/swift-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is +X% faster.',
                explaination: 'You won\'t be using your Spin Attack most of the time, but will instead rely on Attacks. Addition Attack Speed is great for that.'
            },
        ],
        daedalus: [
            {
                name: 'Quick Spin',
                img: './img/quick-spin.png',
                effect: 'Your Spin Attack charges and recovers much faster.',
                explaination: 'An essential Daedalus Upgrade for this build, helps you land your Spin Attacks more reliably without getting hit by making them charge faster. You will want to prioritize this upgrade over everything else.'
            },
            {
                name: 'Massive Spin',
                img: './img/massive-spin.png',
                effect: 'Your Spin Attack deals +125% damage and hits a larger area.',
                explaination: 'This is another Daedalus Upgrade that focuses on your Spin Attack. I would say it should be prioritized only after getting Quick Spin since Quick Spin makes landing your Spin Attack easier, but if you\'re feeling confident then go for this one instead.'
            }
        ],
        funAlternative: 'You could go for Demeter boons to make your foes slower, allowing you to land your Spin Attacks more reliably. However, I have found that the only REAL fun alternative for this aspect is to just choose any other aspect.'
    },
    {
        weapon: 'Eternal Spear',
        title: 'Aspect of Guan Yu',
        playstyle: 'If I had to describe Aspect of Guan Yu to someone in three words, I would use the term "high skill ceiling". I understand that its high HP cost is very scary at first, but when you max it out and play carefully, it becomes a high-risk, high-reword kind of a weapon. Given that that\'s the case, your build should be a combination of healing, spacing and damaging boons. There are plenty ways to play this aspect, but here\'s the one that sounds the most logical to me.',
        startingKeepsake: 'There\'s actually a lot of options here. Should you go for Athena for early Athena\'s call, or should you go for Demeter for Attack boon, Aphrodite for Max HP boon, Dionysus for HP boons, or perhaps even Cerberus\' keepsake to get your HP up as quickly as possible? Well, my philosophy is taking either Demeter or Athena first because their duo boon is quite helpful for this build. <br /> Taking Athena is also great because she has 2 boons that can restore your Death Defiance.',
        mirror: 'Whatever you prefer. I\'ve seen some people go for Stubborn Defiance because they expect to die a bunch since their HP is low, but I usually never go for that one myself. Privileged Status is good too since you\'re going to have Chill effects on foes from Demeter Attacks.',
        boons: [
            {
                name: 'Frost Strike (Demeter)', 
                img: './img/frost-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is stronger and inflicts Chill.',
                explaination: 'Chill effects stack and slow down your foes, which will help you with spacing and landing your Spin Attacks more reliably without risking taking damage. Another good thing about Chill effects is that they are easy to combine with other Status Curses, allowing you to deal 20% bonus damage if you take Privileged Status Talent from the Mirror of Night.'
            },
            {
                name: 'Divine Dash (Athena)', 
                img: './img/divine-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash deals damage and can Deflect.',
                explaination: 'You are very squishy with this build and having Athena\'s Dash is a literal godsend. It is not <i>that</i> mandatory, but extra safety never hurt anyone.'
            },
            {
                name: 'Athena\'s Aid (Athena)', 
                img: './img/athenas-aid.png',
                prerequisites: 'none',
                effect: 'Your Call briefly makes you Invulnerable and Deflect all attacks.',
                explaination: 'Pommed up Athena\'s Call is the most disgusting Call in the game if you ask me. you can just stand right next to Bosses and dish out Spin Attack after Spin Attack for ages.'
            },
            {
                name: 'Stubborn Roots (Athena & Demeter Duo)', 
                img: './img/stubborn-roots.png',
                prerequisites: 'One of each of these Athena and Demeter boons: <br />Athena: Divine Strike, Divine Flourish, Phalanx Shot, Divine Dash, or Athena\'s Aid <br /> Demeter: Frost Strike, Mistral Dash, Frost Flourish, Crystal Beam, or Demeter\'s Aid.',
                effect: 'While you have no Death/Stubborn Defiance your Health slowly recovers. Life Regeneration: 1 Health (every 0.8 Sec.).',
                explaination: 'You can\'t dodge all the foes\' attempts to satisfy your dad, so I suggest you take this boon just in case. With Divine Dash, you should be able to stall any Encounter long enough until your HP is full. Rinse and repeat.'
            },
            {
                name: 'Hyper Sprint (Hermes)', 
                img: './img/hyper-sprint.png',
                prerequisites: 'none',
                effect: 'For X seconds after you Dash, become Sturdy and run +100% faster.',
                explaination: 'Take this one for extra safety. Goes very well with your Divine Dash.'
            },
        ],
        daedalus: [
            {
                name: 'Quick Spin',
                img: './img/quick-spin.png',
                effect: 'Your Spin Attack charges and recovers much faster.',
                explaination: 'This one gives you extra safety when you decide to land one of those deadly Spin Attacks of yours. Prioritize getting it as quickly as possible.'
            },
            {
                name: 'Massive Spin',
                img: './img/massive-spin.png',
                effect: 'Your Spin Attack deals +125% damage and hits a larger area.',
                explaination: 'Not really that important, you can do without this one, but extra damage is always welcome.'
            }
        ],
        funAlternative: 'As mentioned before, you can instead opt out for boons that focus on giving you more HP, such as Aphrodite and Dionysus. Poseidon can be used for spacing instead of Demeter, too.'
    },
    {
        weapon: 'Shield of Chaos',
        title: 'Aspect of Zagreus',
        playstyle: 'The starting aspect of the shield is somehow the most underwhelming for me, and that\'s not an unpopular opinion. The effects it gives are plain and there are better aspects that have a similar playstyle. However, given that it\'s the first aspect of the weapon, many players might have to play it since they don\'t have enough Titan Blood to unlock better aspects. With this build, you\'re going to focus on dealing as much damage as possible with your Attacks. We\'re going to use a combination of Ares and Aphrodite for this one.',
        startingKeepsake: 'Blood Filled Vial (Ares\' keepsake) to get his Special, or Eternal Rose (Aphrodite\'s keepsake) to get her Attack.',
        mirror: 'Take Privileged Status, as it will be the bread and butter of our playstyle.',
        boons: [
            {
                name: 'Heartbreak Strike (Aphrodite)', 
                img: './img/heartbreak-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack deals more damage and inflicts Weak.',
                explaination: 'The reason you want this isn\'t for the damage, but for the Weak effect and for duo boon with Ares. The combination of Weak and Doom will make you deal 40% more damage thanks to Mirror of Night\'s Privileged Status Talent.'
            },
            {
                name: 'Sweet Surrender (Aphrodite)', 
                img: './img/sweet-surrender.png',
                prerequisites: 'Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish.',
                effect: 'Weak-afflicted foes are also more susceptible to damage.',
                explaination: 'This is a nice pick-up, more damage is always welcome.'
            },
            {
                name: 'Curse of Pain (Ares)', 
                img: './img/curse-of-pain.png',
                prerequisites: 'none',
                effect: 'Your Special inflicts Doom.',
                explaination: 'Applying Doom with your Special while applying Weak with your Attack is, once again, your main playstyle, so this boon is a must.'
            },
            {
                name: 'Impending Doom (Ares)', 
                img: './img/impending-doom.png',
                prerequisites: 'Curse of Agony, Curse of Pain, or Curse of Vengeance',
                effect: 'Your Doom effects deal more damage, after +0.5 Sec.',
                explaination: 'This is a nice power-up for your Doom effects.'
            },
            {
                name: 'Curse of Longing (Aphrodite and Ares Duo)', 
                img: './img/curse-of-longing.png', 
                prerequisites: 'One of each of these Aphrodite and Ares boons: <br />Aphrodite: Crush Shot, Heartbreak Flourish, Heartbreak Strike, Passion Dash, or Passion Flare. <br />Ares: Curse of Agony or Curse of Pain.',
                effect: 'Your Doom effects continuously strike Weak foes. Successive Hit Damage: 50%.',
                explaination: 'This is your main boon, your runs will be way easier if you get lucky enough to get this one.'
            },
            {
                name: 'Swift Strike (Hermes)', 
                img: './img/swift-strike.png', 
                prerequisites: 'none',
                effect: 'Your Attack is +X% faster.',
                explaination: 'You will rely on Attacks more than Specials to deal damage, so this one is a given.'
            }
        ],
        daedalus: [
            {
                name: 'Pulverizing Blow',
                img: './img/pulverizing-blow.png',
                effect: 'Your Attack hits twice, but does not knock foes away.',
                explaination: 'You aren\'t going to be taking advantage of the knock-away effect of your Attacks, so it won\'t hurt you if you exchange it for extra Attacks.'
            },
            {
                name: 'Dashing Wallop',
                img: './img/dashing-wallop.png',
                effect: 'Your Dash Attack deals +50% damage in a larger area.',
                explaination: 'You will Dash Attack a lot. Bigger AoE and more damage are great helpers.'
            },
        ],
        funAlternative: 'You could take advantage of your knock-away effects and go for a Poseidon build. Another fun build is going for Hangover boons from Dionysus and zooming across the Underworld, watching booze kill your foes.'
    },
    {
        weapon: 'Shield of Chaos',
        title: 'Aspect of Chaos',
        playstyle: 'When fully maxed, Aspect of Chaos is one of the most broken weapons in the game. It incentivizes you to use your Bull Rush, while powering up your Special at the same time. The most popular build for it is abusing the synergy between Dionysus and Ares, and that\'s exactly what you should do, too. Your main strategy will consist of dashing to a good place, using Bull Rush and then killing all your foes by spamming Special.',
        startingKeepsake: 'Blood Filled Vial (Ares\' keepsake) to get his Attack, or Overflowing Cup (Dionysus\' keepsake) to get his Special.',
        mirror: 'Since both Ares and Dionysus apply Status Curses with the boons you want from them, take Privileged Status.',
        boons: [
            {
                name: 'Drunken Strike (Dionysus)', 
                img: './img/drunken-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack inflicts Hangover.',
                explaination: 'You will want your Attacks to apply Hangover in order to deal as much damage as possible. Also allows you to unlock duo boon for him and Ares.'
            },
            {
                name: 'Curse of Pain (Ares)', 
                img: './img/curse-of-pain.png',
                prerequisites: 'none',
                effect: 'Your Special inflicts Doom.',
                explaination: 'You will have 5 shields flying at your foes, all applying Doom stacks. This is the formula for some of the fastest clears this game provides.'
            },
            {
                name: 'Impending Doom (Ares)', 
                img: './img/impending-doom.png',
                prerequisites: 'Curse of Agony, Curse of Pain, or Curse of Vengeance',
                effect: 'Your Doom effects deal more damage, after +0.5 Sec.',
                explaination: 'This is a nice power-up for your Doom effects.'
            },
            {
                name: 'Curse of Nausea (Ares & Dionysus Duo)', 
                img: './img/curse-of-nausea.png', 
                prerequisites: 'One of each of these Ares and Dionysus boons: <br />Ares: Curse of Agony, Curse of Pain, or Curse of Vengeance. <br />Dionysus: Dionysus\' Aid, Drunken Dash, Drunken Flourish, or Drunken Strike.',
                effect: 'Your Hangover effects deal damage faster. Damage Rate: .50 sec -> .35 sec.',
                explaination: 'One of the best Status Curse combos in the game, watch it melt the Underworld.'
            },
            {
                name: 'Swift Strike (Hermes)', 
                img: './img/swift-strike.png', 
                prerequisites: 'none',
                effect: 'Your Attack is +X% faster.',
                explaination: 'Pretty much every Hermes boon that speeds you up is welcome.'
            },
            {
                name: 'Swift Flourish (Hermes)', 
                img: './img/swift-flourish.png', 
                prerequisites: 'none',
                effect: 'Your Special is +X% faster.',
                explaination: 'Same as Swift Strike.'
            }
        ],
        daedalus: [
            {
                name: 'Sudden Rush',
                img: './img/sudden-rush.png',
                effect: 'Your Bull Rush charges much faster.',
                explaination: 'This one is mandatory, makes your life so much easier.'
            },
            {
                name: 'Breaching Rush',
                img: './img/breaching-rush.png',
                effect: 'Your Bull Rush deals +400% damage to Armor.',
                explaination: 'This one is very much necessary if you\'re playing on a lot of Heat.'
            }
        ],
        funAlternative: 'Go for Zeus Special and focus on Jolted damage. You will want to take Sudden Rush and Zeus Special as soon as possible, and trust me when I say that the rest doesn\'t even matter. Take Athena\'s Dash to add an extra measure of OP.'
    },
    {
        weapon: 'Shield of Chaos',
        title: 'Aspect of Zeus',
        playstyle: 'Aspect of Zeus might be one of the hardest aspects to play with because its playstyle is unlike any other. The gist of your strategy should be throwing your Special and let it stack any kind of Status Curse you can come across while positioning and shielding yourself from foes using your Attack. There\'s really a ton of builds you can try this weapon with, but we\'re going with Ares & Athena combo.',
        startingKeepsake: 'Blood Filled Vial (Ares\' keepsake) Special as early as possible.',
        mirror: 'If you think you\'re going to be able to take Athena\'s Exposed Curse, go for Privileged Status.',
        boons: [
            {
                name: 'Curse of Pain (Ares)', 
                img: './img/curse-of-pain.png',
                prerequisites: 'none',
                effect: 'Your Special inflicts Doom.',
                explaination: 'This boon is your main damage output. Your Special will be doing all the work for you, and having it stack Doom effects is going to help out a lot.'
            },
            {
                name: 'Impending Doom (Ares)', 
                img: './img/impending-doom.png',
                prerequisites: 'Curse of Agony, Curse of Pain, or Curse of Vengeance.',
                effect: 'Your Doom effects deal more damage, after +0.5 Sec.',
                explaination: 'Pretty standard if you\'re running any Doom-focused build.'
            },
            {
                name: 'Divine Strike (Athena)', 
                img: './img/divine-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is stronger, and can Deflect.',
                explaination: 'This is a great boon for any shield build. You can just sit in a corner and hold your Attack to not only negate damage from foes, but mitigate it and Deflect it back to them.'
            },
            {
                name: 'Merciful End (Ares & Athena Duo)', 
                img: './img/merciful-end.png', 
                prerequisites: 'One of each of these Ares and Athena boons: <br />Ares: Curse of Agony or Curse of Pain. <br />Athena: Divine Flourish or Divine Strike.',
                effect: 'Your attacks that can Deflect immediately activate Doom effects. Doom Combo Damage: 40.',
                explaination: 'Although you can manipulate where your Special will go to some extent, you will find that most of the time, you won\'t be dealing damage to the same foe with your Attack and Special. Thanks to this duo boon, you will be able to deal Doom damage to everything that touches you or your Special.'
            },
            {
                name: 'Swift Flourish (Hermes)', 
                img: './img/swift-flourish.png', 
                prerequisites: 'none',
                effect: 'Your Special is +X% faster.',
                explaination: 'Every Hermes boon is welcome.'
            }
        ],
        daedalus: [
            {
                name: 'Sudden Rush',
                img: './img/sudden-rush.png',
                effect: 'Your Bull Rush charges much faster.',
                explaination: 'Good pickup for any shield build that uses your Bull Rush. It is not mandatory though, you can play this build without using Bull Rush even once.'
            },
            {
                name: 'Explosive Return',
                img: './img/explosive-return.png',
                effect: 'Your Special deals 50 damage to nearby foes when you catch it.',
                explaination: 'Catching your Special leaves you vulnerable, as it can interrupt your Attack charge. However, since it comes back to you automatically, you have to pick it up. Having it deal damage while you pick it up patches the downside of it interrupting you.'
            }
        ],
        funAlternative: 'There is a lot of variety for this aspect. You can go Zeus Special and go for a Jolted run, or take Dionysus Special with Demeter Cast for a nasty Status Curse build.'
    },
    {
        weapon: 'Shield of Chaos',
        title: 'Aspect of Beowulf',
        playstyle: 'I have found that there are 2 distinc ways to play this aspect - you either focus on a Cast build, or a Special build. A lot of people ignore that this aspect has a lot of damage on the Special since its main focus is dislodging Cast Ammo from your foes. However, you will deal more damage with a Cast build.',
        startingKeepsake: 'Take Overflowing Cup (Dionysus\' keepsake) to get Trippy Flare early.',
        mirror: 'Privileged Status is good for this one, but the only really mandatory Talent is Infernal Soul, as it gives you more Cast Ammo.',
        boons: [
            {
                name: 'Trippy Flare (Dionysus)', 
                img: './img/trippy-flare.png',
                prerequisites: 'Unique to Aspect of Beowulf.',
                effect: 'Your Cast damages foes around you, leaving behind Festive Fog.',
                explaination: 'Beowulf changes all Casts in the game, and this one is the most beneficial since it isn\'t a lob anymore. Stacking these into your foes and going for Zeus duo boon is the way to go.'
            },
            {
                name: 'High Tolerance (Dionysus)', 
                img: './img/high-tolerance.png',
                prerequisites: 'Trippy Shot or Trippy Flare.',
                effect: 'Take less damage while standing in Festive Fog.',
                explaination: 'You can\'t always dodge all of your foes\' attacks, and this aspect makes you take more damage. You can skip this boon entirely if you feel like it, but it will make it safer to play.'
            },
            {
                name: 'Thunder Flourish (Zeus)', 
                img: './img/thunder-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special causes a lightning bolt to strike nearby foes.',
                explaination: 'You can take Lightning Strike instead, but I found this boon easier to execute since it is faster than your Attack. The main reason you need this boon is to get the duo boon for Dionysus and Zeus. Other than that, it\'s a great boon in combination with Dread Flight.'
            },
            {
                name: 'Static Discharge (Zeus)', 
                img: './img/static-discharge.png',
                prerequisites: 'Thunder Flourish, Zeus\' Aid, Thunder Dash, Heaven\'s Vengeance, Lightning Strike, Electric Shot, or Lightning Reflexes.',
                effect: 'Your lightning effects also make foes Jolted.',
                explaination: 'For extra damage, works nicely with your Special and your duo.'
            },
            {
                name: 'Scintillating Feast (Dionysus & Zeus Duo)', 
                img: './img/scintillating-feast.png', 
                prerequisites: 'One of each of these Dionysus and Zeus boons: <br />Dionysus: High Tolerance or Trippy Shot. <br />Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus\' Aid.',
                effect: 'Your Festive Fog effects also deal lightning damage periodically. Lightning Damage: 60.',
                explaination: 'Thanks to this boon, your Festive Fog will be even stronger and will do all the playing for you once you get the Jolted effect.'
            },
            {
                name: 'Swift Flourish (Hermes)', 
                img: './img/swift-flourish.png', 
                prerequisites: 'none',
                effect: 'Your Special is +X% faster.',
                explaination: 'Every Hermes boon is welcome.'
            }
        ],
        daedalus: [
            {
                name: 'Unyielding Defense',
                img: './img/unyielding-defense.png',
                effect: 'After using your Naegling\'s Board Cast, you are Sturdy for 3 Sec.',
                explaination: 'Sturdy is a very strong effect and you\'re gonna need it in order not to get stunned during your Attack charge.'
            },
            {
                name: 'Dread Flight',
                img: './img/dread-flight.png',
                effect: 'Your Special can strike up to 4 additional foes before returning.',
                explaination: 'For more Special damage. If you completely focus on your Special, you don\'t even need to go for a Cast build.'
            }
        ],
        funAlternative: 'One fun build is to just focus on your Special by taking Artemis. Dread Flight and Charge Flight are a must if  you\'re going for that build. You can also go for other Cast builds, such as a Blade Rift build, or Aphrodite\'s Cast. It\'s a very versatile aspect, what can I say.'
    },
    {
        weapon: 'Heart-Seeking Bow',
        title: 'Aspect of Zagreus',
        playstyle: 'This build is very straight-forward. Dash behind a foe, unleash point-blank backstab Special, dash away, repeat. It\'s cheesy but it gets the job done, but I promise it\'s not as boring as I make it out to be. This is one of the aspects that a lot of players first won the game with, and that\'s because of how safe it is to poke your foes from the distance. However, I suggest that you do it in a ballsy manner with the shotgun tactics. There\'s a lot of different ways to play with this aspect, and this one is the most fun in my opinion. By taking Ares for your Special, you practically melt all your foes. And when it comes to bosses - you don\'t even have to aim, just shoot a random Special and there\'s a good chance it will hit, applying Doom stacks. Athena Dash for safety, 2 Daedalus Upgrades for your Special, Hermes Special speed boon and Privileged Status if you want to take a Status Curse for your Attack, Cast or Call in order to take Privileged Status are all nice options.',
        startingKeepsake: 'Take Blood-Filled Vial (Ares\' keepsake) to get his Special early on.',
        mirror: 'As mentioned before, Privileged Status is a good idea, although not mandatory. You could also benefit from taking Shadow Presence for hitting foes from behind.',
        boons: [
            {
                name: 'Curse of Pain (Ares)', 
                img: './img/curse-of-pain.png',
                prerequisites: 'none',
                effect: 'Your Special inflicts Doom.',
                explaination: 'This is your main boon. The higher rarity you get it, the better.'
            },
            {
                name: 'Dire Misfortune (Ares)', 
                img: './img/dire-misfortune.png',
                prerequisites: 'Curse of Agony or Curse of Pain.',
                effect: 'Your Doom effects deal more damage when applied multiple times.',
                explaination: 'You\'re going to want to take all the boons that power up your Doom effects.'
            },
            {
                name: 'Impending Doom (Ares)', 
                img: './img/impending-doom.png',
                prerequisites: 'Curse of Agony, Curse of Pain, or Curse of Vengeance.',
                effect: 'Your Doom effects deal more damage, after +0.5 Sec.',
                explaination: 'Same logic as Dire Misfortune, this one will help out a lot.'
            },
            {
                name: 'Divine Dash (Athena)', 
                img: './img/divine-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash deals damage and can Deflect.',
                explaination: 'You don\'t exactly have to take this one if you have other preferences, but a Dash with a Deflect is very useful in my opinion if you use Dashes strictly to reposition yourself. If you get lucky, you can get the Exposed boon too, as well as the duo with Ares.'
            },
            {
                name: 'Swift Flourish (Hermes)', 
                img: './img/swift-flourish.png', 
                prerequisites: 'none',
                effect: 'Your Special is +X% faster.',
                explaination: 'This one is going to help you a ton, especially when you take extra ammo for your Special from a Daedalus Upgrade.'
            }
        ],
        daedalus: [
            {
                name: 'Relentless Volley',
                img: './img/relentless-volley.png',
                effect: 'Your Special shoots +4 shots.',
                explaination: 'Amazing boon for this build. Do, however, take in mind, that extra 4 ammo means it will take longer for you to shoot your Special, so be careful not to get attacked during the animation.'
            },
            {
                name: 'Piercing Volley',
                img: './img/piercing-volley.png',
                effect: 'Your Special pierces foes and deals +400% damage to Armor.',
                explaination: 'Very good for Elysium and higher Heats in general.'
            }
        ],
        funAlternative: 'There\'s a couple of solid variations on this build, mostly involving taking a Status Curse other than Ares for your Special. One build that I beat the game with using this aspect was taking Artemis Special with Aphrodite Attack, although that build is way more effective with the Chiron aspect of the bow.'
    },
    {
        weapon: 'Heart-Seeking Bow',
        title: 'Aspect of Chiron',
        playstyle: 'Ahh, Chiron, what would I do without you! Yes, this is the aspect I beat the game most times with. I don\'t blame you for judging me - playing this aspect is like playing the game on easy mode. The reason why Chiron is the most broken thing in the game is because of its design - if you hit something with your Attack, your Special arrows will become homing projectiles that go after that foe. While this means that with a Status Curse on both Attack and Special you\'re guaranteed to proc Privileged Status, we\'re not going to play like that. The most simple and effective build with this bow is this: Aphrodite Attack to make the foes Weak, Artemis Special to make them eat Crits, Athena Dash and Call to keep you safe and pretty much whatever else.',
        startingKeepsake: 'Take Adamant Arrowhead (Artemis\' keepsake) to get her Special as soon as possible.',
        mirror: 'Take Shadow Presence to deal extra damage from behind.',
        boons: [
            {
                name: 'Deadly Flourish (Artemis)', 
                img: './img/deadly-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special is stronger, with +20% chance to deal Critical Damage.',
                explaination: 'This boon is absolutely nuts on Chiron because you\'re almost guaranteed to land all of your Special shots. Amplified with the Daedalus Upgrade that gives you more Special shots, you\'re going to be unstoppable.'
            },
            {
                name: 'Pressure Points (Artemis)', 
                img: './img/pressure-points.png',
                prerequisites: 'none',
                effect: 'Any damage you deal has a chance to be Critical.',
                explaination: 'Great boon if you\'re getting Support Fire'
            },
            {
                name: 'Clean Kill (Artemis)', 
                img: './img/clean-kill.png',
                prerequisites: 'Artemis\' Aid, Deadly Flourish, Deadly Strike, Pressure Points, or True Shot',
                effect: 'Your Critical effects deal even more damage.',
                explaination: 'Amazing boon to make you even more overpowered.'
            },
            {
                name: 'Support Fire (Artemis)', 
                img: './img/support-fire.png',
                prerequisites: 'Artemis\' Aid, Deadly Flourish, Deadly Strike, Hunter Dash, Pressure Points, or True Shot.',
                effect: 'After you Cast, or hit with an Attack or Special, fire a seeking arrow.',
                explaination: 'The damage it deals might seem insignificant but it adds up in the long run. Especially if the seeking arrows apply Crits.'
            },
            {
                name: 'Heartbreak Strike (Aphrodite)', 
                img: './img/heartbreak-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack deals more damage and inflicts Weak.',
                explaination: 'Take this boon to unlock Aphrodite and Artemis duo boon. The Weak effect is also nice on its own :)'
            },
            {
                name: 'Sweet Surrender (Aphrodite)', 
                img: './img/sweet-surrender.png', 
                prerequisites: 'Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish.',
                effect: 'Weak-afflicted foes are also more susceptible to damage.',
                explaination: 'You know the drill, bonus damage is always welcome. Your Attacks will always be followed up by your Special, so there\'s no good reason not to take this.'
            },
            {
                name: 'Heart Rend (Aphrodite & Artemis Duo)', 
                img: './img/heart-rend.png', 
                prerequisites: 'One of each of these Aphrodite and Artemis boons: <br />Aphrodite: Passion Dash, Crush Shot, Heartbreak Strike, or Heartbreak Flourish. <br />Artemis: Deadly Strike, Deadly Flourish, or True Shot.',
                effect: 'Your Critical effects deal even more damage to Weak foes. Bonus Critical Damage vs. Weak: +150%',
                explaination: 'From now on, refer to this boon simply as "The Game-Breaker". Not only will you do bonus damage thanks to Weak foes thanks to Sweet Surrender, not only will you do bonus damage thanks to Clean Kill, but you will also deal bonus damage on top of that. Absolutely disgusting. Makes you feel like playing Stealth Archer in Skyrim.'
            },
            {
                name: 'Divine Dash (Athena)', 
                img: './img/divine-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash deals damage and can Deflect.',
                explaination: 'Not mandatory but highly recommended, will make you safe while repositioning. Also opens up Exposing your foes, dealing extra Backstab damage, which is nuts in combination with Shadow Presence and your seeking Special that often hits from behind.'
            },
            {
                name: 'Blinding Flash (Athena)', 
                img: './img/blinding-flash.png', 
                prerequisites: 'Divine Strike, Phalanx Shot, Divine Dash, or Divine Flourish.',
                effect: 'Your abilities that can Deflect also make foes Exposed for 5 Sec.',
                explaination: 'This one is going to help you a ton, especially when you take extra ammo for your Special from a Daedalus Upgrade.'
            },
            {
                name: 'Athena\'s Aid (Athena)', 
                img: './img/athenas-aid.png', 
                prerequisites: 'none',
                effect: 'Your Call briefly makes you Invulnerable and Deflect all attacks.',
                explaination: 'Using this Call is just silly, especially when upgraded. Stand in place and spam Attacks and Specials without much thinking.'
            },
            {
                name: 'Swift Flourish (Hermes)', 
                img: './img/swift-flourish.png', 
                prerequisites: 'none',
                effect: 'Your Special is +X% faster.',
                explaination: 'To make you able to get more Specials in before the Chiron homing effects wears off.'
            }
        ],
        daedalus: [
            {
                name: 'Relentless Volley',
                img: './img/relentless-volley.png',
                effect: 'Your Special shoots +4 shots.',
                explaination: 'If you get this in Tartarus, it\'s gg. By simple maths, makes you deal over 50% more damage in general compared to playing without this upgrade.'
            },
            {
                name: 'Piercing Volley',
                img: './img/piercing-volley.png',
                effect: 'Your Special pierces foes and deals +400% damage to Armor.',
                explaination: 'Not bad on higher Heats, Armored foes can be a pain in the butt.'
            }
        ],
        funAlternative: 'Take Demeter on Special to play Ashe from League of Legends, quite good synergy with Aphrodite on Attack. Dionysus Special isn\'t bad either, as his synergy with Aphrodite is even better. I also heard that Aphrodite Special and Lightning focus on the rest is mighty overpowered, but I have yet to test that build out.'
    },
    {
        weapon: 'Heart-Seeking Bow',
        title: 'Aspect of Hera',
        playstyle: 'Hera is an aspect that focuses on playing Cast builds. It\'s just like Zagreus, except that you can load Casts for your Attacks. Just like Beowulf, this aspect changes the Cast boons to be aimed differently, since they will be fired with your Attacks, which helps us make better use of some Casts that are harder to land otherwise. This is the reason why the build will focus on Dionysus\' Trippy Shot.',
        startingKeepsake: 'Take Overflowing Cup (Dionysus\' keepsake) to get his Cast. You can take Blood-Filled Vial (Ares\' keepsake) later to get his Special.',
        mirror: 'Take Shadow Presence for damage from behind and Privileged Status because you will be applying Hangover and Doom. It doesn\'t matter whether you take Infernal Soul or Stygian Soul, it\'s up to you.',
        boons: [
            {
                name: 'Trippy Shot (Dionysus)', 
                img: './img/trippy-shot.png',
                prerequisites: 'none',
                effect: 'Your Cast lobs a projectile that bursts into Festive Fog.',
                explaination: 'Considered one of the strongest Casts damage-wise, so you will focus on building around this boon.'
            },
            {
                name: 'Curse of Pain (Ares)', 
                img: './img/curse-of-pain.png',
                prerequisites: 'none',
                effect: 'Your Special inflicts Doom.',
                explaination: 'Just like with Zagreus aspect, you will want to shotgun your foes point black range from the back. After loading Cast on your Attacks and landing your Attacks, dash close to your foes and use your Special.'
            },
            {
                name: 'Curse of Nausea (Ares & Dionysus Duo)', 
                img: './img/curse-of-nausea.png', 
                prerequisites: 'One of each of these Ares and Dionysus boons: <br />Ares: Curse of Agony, Curse of Pain, or Curse of Vengeance. <br />Dionysus: Dionysus\' Aid, Drunken Dash, Drunken Flourish, or Drunken Strike.',
                effect: 'Your Hangover effects deal damage faster. Damage Rate: .50 sec -> .35 sec.',
                explaination: 'A simple yet effective boon that will make this build smoother to play. Really melts through foes and bosses alike.'
            },
            {
                name: 'Divine Dash (Athena)', 
                img: './img/divine-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash deals damage and can Deflect.',
                explaination: 'As you might have guessed, it\'s not mandatory that you take this boon, but it\'s just my recommendation because it is very safe. If you prefer, go for something more rewarding.'
            },
            {
                name: 'Quick Reload (Hermes)', 
                img: './img/quick-reload.png', 
                prerequisites: 'Infernal Soul from the Mirror',
                effect: 'Foes drop Cast Ammo stuck in them faster.',
                explaination: 'If you take Infernal Soul Talent from the Mirror, take this one.'
            },
            {
                name: 'Auto Reload (Hermes)', 
                img: './img/auto-reload.png', 
                prerequisites: 'Stygian Soul from the Mirror',
                effect: 'You regenerate Cast Ammo faster.',
                explaination: 'If you take Stygian Soul Talent from the Mirror, take this one.'
            },
            {
                name: 'Greater Recall (Hermes)', 
                img: './img/greater-recall.png', 
                prerequisites: 'Infernal Soul from the Mirror, Flurry Cast, Quick Reload, Auto Reload, or Lambent Plume (Keepsake Ability).',
                effect: 'Your Cast Ammo automatically return to you.',
                explaination: 'If you take Infernal Soul Talent from the Mirror, take this one.'
            },
            {
                name: 'Bad News (Hermes)', 
                img: './img/bad-news.png', 
                prerequisites: 'Stygian Soul from the Mirror, Auto Reload or Lambent Plume (Keepsake Ability)',
                effect: 'Your cast deals more damage to foes without Cast Ammo on them. First shot damage: +50%.',
                explaination: 'If you take Stygian Soul Talent from the Mirror, take this one.'
            }

        ],
        daedalus: [
            {
                name: 'Relentless Volley',
                img: './img/relentless-volley.png',
                effect: 'Your Special shoots +4 shots.',
                explaination: 'Since you will be shotgunning a lot, this one isn\'t a bad idea.'
            },
            {
                name: 'Flurry Shot',
                img: './img/flurry-shot.png',
                effect: 'Hold Attack to shoot rapidly, but you cannot Power Shot.',
                explaination: 'This boon is pretty great for this build, since you won\'t have to charge your Attack. Thanks to this one, you can unload your Casts on your foes much faster.'
            }
        ],
        funAlternative: 'If you search for builds for this aspect, you will find that everyone has their own way to play it. Sure, Trippy Shot is the Cast that deals the most damage, but you can always opt in for Artemis-focused build since she has a lot of built-in support for Cast builds. Going for Demeter and Dionysus duo is good, too. Zeus is helpful, Aphrodite is helpful, there\'s just way too many builds to list here.'
    },
    {
        weapon: 'Heart-Seeking Bow',
        title: 'Aspect of Rama',
        playstyle: 'Rama is the legendary aspect of the bow and as such, it has quite a different gameplay from the rest of the bows. The Attack on it is slow and wide but super powerful, while the Special bounces off of foes and stacks a debuff so that they take extra damage from the Attack. Since the Special bounces off of foes, focusing on Zeus\' Special is the way to go for this aspect. Using Attack is less reliable - it is good for Tartarus, but as the time goes on, you will rely on your Special more. That being said, you can make the Attack more reliable by using Dash Attacks and Doom effects to compensate for not charging the Attack fully. Using Doom effects on the Attack and Lightning effects on your special means that you can go for Privileged Status, which is great.',
        startingKeepsake: 'Take Thunder Signet (Zeus\' keepsake) to get his Special early.',
        mirror: 'Privileged Status is good.',
        boons: [
            {
                name: 'Thunder Flourish (Zeus)', 
                img: './img/thunder-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special causes a lightning bolt to strike nearby foes.',
                explaination: 'Your Special bounces off of your foes, so it would be smart to take this one. Guarantees very fast clears.'
            },
            {
                name: 'High Voltage (Zeus)', 
                img: './img/high-voltage.png',
                prerequisites: 'Thunder Dash, Thunder Flourish, or Zeus\' Aid',
                effect: 'Your lightning bolt effects deal damage in a larger area.',
                explaination: 'Anything that powers up your lightning bolts is good.'
            },
            {
                name: 'Static Discharge (Zeus)', 
                img: './img/static-discharge.png',
                prerequisites: 'Thunder Flourish, Zeus\' Aid, Thunder Dash, Heaven\'s Vengeance, Lightning Strike, Electric Shot, or Lightning Reflexes.',
                effect: 'Your lightning effects also make foes Jolted.',
                explaination: 'Amazing boon for any Zeus-focused build, also works well with Privileged Status.'
            },
            {
                name: 'Splitting Bolt (Zeus)', 
                img: './img/splitting-bolt.png',
                prerequisites: 'Double Strike, High Voltage, or Storm Lightning.',
                effect: 'All your lightning effects create an additional burst. Lightning Damage: 40.',
                explaination: 'Zeus\' legendary boon is absolutely bonkers, you\'re gonna want to pick this up.'
            },
            {
                name: 'Curse of Agony (Ares)', 
                img: './img/curse-of-pain.png',
                prerequisites: 'none',
                effect: 'Your Attack inflicts Doom.',
                explaination: 'As mentioned before, taking Doom on Attack will make it deal a lot of damage even if you don\'t get the full charge off. Also works well with Privileged Status.'
            },
            {
                name: 'Divine Dash (Athena)', 
                img: './img/divine-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash deals damage and can Deflect.',
                explaination: 'The safest Dash in the game, take it if you need safety. Feel free to take something more ballsy if you\'re feeling the flow.'
            },
            {
                name: 'Swift Strike (Hermes)', 
                img: './img/swift-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is +X% faster.',
                explaination: 'Great syngery with your Attack, always get this if possible.'
            }
        ],
        daedalus: [
            {
                name: 'Relentless Volley',
                img: './img/relentless-volley.png',
                effect: 'Your Special shoots +4 shots.',
                explaination: 'Great synergy with your Special, this one will make you clear Encounters in an instant.'
            },
            {
                name: 'Repulse Shot',
                img: './img/repulse-shot.png',
                effect: 'Your Celestial Sharanga Attack creates a Blast Wave around you.',
                explaination: 'If you feel like relying on your Attack more, this makes it safer to execute.'
            }
        ],
        funAlternative: 'If you end up taking Repulse Shot, having Poseidon on Attack is good since your Repulse Shot will knock foes back. Not only that, but it also unlocks the possibility to go for Rupture Status Curse and taking duo boon for Poseidon and Zeus. Take Chain Shot if you\'re going for this build. <br /> I\'ve also seen people play Artemis and Ares combo for Doom crits.'
    },
    {
        weapon: 'Twin Fists of Malphon',
        title: 'Aspect of Zagreus',
        playstyle: 'The first aspect of the fists isn\'t all that impressive. It gives you a dodge chance buff, which is kinda lame. No bonus damage, no nothing, just plain dodge chance buff, making a lot of players go for a dodge chance build with Hermes and his keepsake. However, what most people do with this aspect is just straight up ignore the dodge chance and focus on dealing damage. Your main playstyle will revolve around dashing in and out and using your Attack on your foes to deal damage, preferably Backstab damage. Given that most of your Attacks will Backstab, I like running an Athena-focused build. Athena on the Attack means that you\'re going to be Deflecting while dunking hits in, which will be very often. One nice thing is that even when you\'re unable to Deflect an attack from your foes, you will still have 15% chance to dodge it. Athena can empower your Backstabs to Deflected foes so that\'s a nice plus, too.',
        startingKeepsake: 'Take Owl Pendant (Athena\'s keepsake) to get her Attack as soon as possible. Keep it throughout the run to get higher chances of getting better rarity on her boons.',
        mirror: 'Shadow Presence is very important here.',
        boons: [
            {
                name: 'Divine Strike (Athena)', 
                img: './img/divine-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is stronger, and can Deflect.',
                explaination: 'You will want to Dash behind your foes, get some quick Attacks in, Dash back. If you\'re attacked during the deed, you\'re just gonna Deflect the attacks with your fists.'
            },
            {
                name: 'Divine Flourish (Athena)', 
                img: './img/divine-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special is stronger, and can Deflect.',
                explaination: 'Nice choice to go well with your Attacks, although not particularly that important.'
            },
            {
                name: 'Divine Dash (Athena)', 
                img: './img/divine-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash deals damage and can Deflect.',
                explaination: 'Safest boon in the game, and given that you will want to make your foes Exposed, it\'s only natural that you\'re going to look out for this boon.'
            },
            {
                name: 'Blinding Flash (Athena)', 
                img: './img/blinding-flash.png', 
                prerequisites: 'Divine Strike, Phalanx Shot, Divine Dash, or Divine Flourish.',
                effect: 'Your abilities that can Deflect also make foes Exposed for 5 Sec.',
                explaination: 'This is one of the main boons of the build, making. It will allow you to beat your foes mercilessly while Deflecting attacks and making the foes of those attacks Exposed, thus allowing you to deal extra Backstab damage to them.'
            },
            {
                name: 'Swift Strike (Hermes)', 
                img: './img/swift-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is +X% faster.',
                explaination: 'Always welcome.'
            },
            {
                name: 'Hyper Sprint (Hermes)', 
                img: './img/hyper-sprint.png',
                prerequisites: 'none',
                effect: 'For X seconds after you Dash, become Sturdy and run +100% faster.',
                explaination: 'This one and Athena\'s Dash make a really nice combination, giving you safety even after your busted Dash.'
            }
        ],
        daedalus: [
            {
                name: 'Long Knuckle',
                img: './img/long-knuckle.png',
                effect: 'Your Attack has more range and deals +10% damage.',
                explaination: 'More range and more damage, what\'s there not to like?'
            },
            {
                name: 'Draining Cutter',
                img: './img/draining-cutter.png',
                effect: 'Whenever your Special slays foes, restore 2% life.',
                explaination: 'It\'s not too important that you get this since you\'re already very safe, but it\'s a nice addition to your arsenal.'
            }
        ],
        funAlternative: 'There are some interesting alternatives to this build that are more fun to play, but I chose the Athena one because it\'s super safe. If you want to, you can take Poseidon\'s Dash in order to go for Poseidon and Athena duo boon, which makes you unstunnable and gives you damage resistance against bosses. If you want to focus on damage, go for Zeus attack. If you want to be a nasty person, take Dionysus Attack, because you can stack it up to 5 in one combo. Demeter\'s Attack is also nice because not only does it do nice damage, but also slows your foes down considerably if you stack it up to 10. If you want to, you can even get the boon that makes your foes explode at 10 stacks, but it\'s more convenient not to do that against bosses, since you will want them to be slow. Crit on Attacks from Artemis is also very viable, there\'s just so much variety with this weapon. Movement Speed focused build with focus on Hermes is also fun to play, too.'
    },
    {
        weapon: 'Twin Fists of Malphon',
        title: 'Aspect of Talos',
        playstyle: 'Talos is a very fun aspect to play. The gist of the weapon is that you can pull your foes in with your Special and then deal extra damage to them with your Attack and Cast for the next 4 seconds, which makes it a decent aspect for playing a more Cast-focused build. Getting Ares\' Blade Rifts out while you pull your foe toward you pretty much guarantees that you\'re going to hit them, so that\'s a nice thing to have in your arsenal. For Special, you\'re going to take Poseidon, because it\'s safe and deals nice damage. You will pull your foes in and immediately knock them away thanks to Poseidon\'s Special. Then you will unleash your Cast on them and you\'re free to Dash behind them and pummel them with Attacks (take whatever you want for it). Pretty nutty, right?',
        startingKeepsake: 'Take Blood-Filled Vial (Ares\' keepsake) to get his Cast early, or take Conch Shell (Poseidon\'s keepsake) to get his Special early. Your choice.',
        mirror: 'Take Infernal Soul to enable Hermes\' Flurry Cast, or take Stygian Soul to enable Hermes\' Bad News. Take Privileged Status if you\'re going to have 2 or more Status Curses.',
        boons: [
            {
                name: 'Tempest Flourish (Poseidon)', 
                img: './img/tempest-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special deals more damage and knocks foes away.',
                explaination: 'As mentioned earlier, this one is very useful in combination with this aspect\'s effect, keeping you safe while pulling foes in and dishing out decent damage.'
            },
            {
                name: 'Slicing Shot (Ares)', 
                img: './img/slicing-shot.png',
                prerequisites: 'none',
                effect: 'Your Cast sends a Blade Rift hurling ahead.',
                explaination: 'Since you will pull your foes toward you, you\'re pretty much guaranteed to land this, leaving you free to Dash behind and Attack your foes.'
            },
            
            {
                name: 'Blade Dash (Ares)', 
                img: './img/blade-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash creates a Blade Rift where you started.',
                explaination: 'Since you will be Dashing straight through your foes, this is a nice thing to have.'
            },
            {
                name: 'Black Metal (Ares)', 
                img: './img/black-metal.png',
                prerequisites: 'Ares\' Aid, Blade Dash, Slicing Flare, or Slicing Shot.',
                effect: 'Your Blade Rift powers deal damage in a wider area.',
                explaination: 'Pretty self-explainatory, take this for extra damage.'
            },
            {
                name: 'Engulfing Vortex (Ares)', 
                img: './img/engulfing-vortex.png',
                prerequisites: 'Ares\' Aid, Blade Dash, Slicing Flare, or Slicing Shot.',
                effect: 'Your Blade Rift effects last longer and pull foes in.',
                explaination: 'This is essential for the build, take it as soon as possible.'
            },
            {
                name: 'Vicious Cycle (Ares)', 
                img: './img/vicious-cycle.png',
                prerequisites: 'Black Metal or Engulfing Vortex',
                effect: 'Your Blade Rift effects deal more damage for each consecutive hit. Damage Increase per Hit: 2.',
                explaination: 'As this boon is legendary, it\'s not mandatory that you take it. However, if you do, you\'re going to be thankful.'
            },
            {
                name: 'Flurry Cast (Hermes)',
                img: './img/flurry-cast.png',
                prerequisites: 'Infernal Soul from the Mirror',
                effect: 'Your Cast is +X% faster and fully automatic.',
                explaination: 'Pretty useful since you will use your Cast as soon as you pull your foes in with your Special.'
            },
            {
                name: 'Bad News (Hermes)', 
                img: './img/bad-news.png', 
                prerequisites: 'Stygian Soul from the Mirror, Auto Reload or Lambent Plume (Keepsake Ability)',
                effect: 'Your cast deals more damage to foes without Cast Ammo on them. First shot damage: +50%.',
                explaination: 'If you take Stygian Soul Talent from the Mirror, take this one.'
            }
        ],
        daedalus: [
            {
                name: 'Long Knuckle',
                img: './img/long-knuckle.png',
                effect: 'Your Attack has more range and deals +10% damage.',
                explaination: 'More range and more damage, what\'s there not to like?'
            },
            {
                name: 'Rolling Knuckle',
                img: './img/draining-cutter.png',
                effect: 'Your Dash-Strike deals +60% damage; added to Attack sequence.',
                explaination: 'Nice addition to your already decent damage output.'
            }
        ],
        funAlternative: 'There\'s a lot of interesting variations with this one, just like the Zagreus aspect. You can take Dionysus on Attack to stack it to 5 to deal very nice damage, same for Demeter. Taking Artemis on Special or Attack allows your Blade Rifts from Ares to be even better, so you might want to consider playing something like that, as well.'
    },
    {
        weapon: 'Twin Fists of Malphon',
        title: 'Aspect of Demeter',
        playstyle: 'Aspect of Demeter is a really fun aspect that relies on you hitting your Attack 12 times and then smacking the ever living crap out of your foes with your Special. There are plenty fun ways to play this aspect, but my favorite has to be the good old Zeus and Poseidon combo. That is, Zeus on Attack, Poseidon on Special, and getting their duo boon. Since you will mostly use your Attacks to deal damage, you will have to get used to dashing and dash-attacking often in order to stack up your passive. For Dash you can go Athena if you want to keep it safe, but I prefer going for Poseidon\'s Dash for this build just to do as much damage as possible.',
        startingKeepsake: 'Either take Conch Shell (Poseidon\'s keepsake) to get his Special early, or take Thunder Signet (Zeus\'s keepsake) to get his Attack early. I would recommend going Zeus first since you will use Attack more often than your Special.',
        mirror: 'Take Privileged Status to deal more damage.',
        boons: [
            {
                name: 'Tempest Flourish (Poseidon)', 
                img: './img/tempest-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special deals more damage and knocks foes away.',
                explaination: 'This boon will deal crazy amounts of damage after you stack up your passive. Not only that, but it will also knock its target back, keeping you safe and making it possible for you to deal Ruptured damage.'
            },
            {
                name: 'Tidal Dash (Poseidon)',
                img: './img/tidal-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash damages foes in an area and knocks them away.',
                explaination: 'You will want to take this Dash over Zeus\' because it works better with their duo boon.'
            },
            {
                name: 'Razor Shoals (Poseidon)', 
                img: './img/razor-shoals.png',
                prerequisites: 'Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash.',
                effect: 'Using knock-away effects also Rupture foes.',
                explaination: 'Take this in order to apply Status Curse which will help you get the most use out of Privileged Status.'
            },
            {
                name: 'Wave Pounding (Poseidon)', 
                img: './img/wave-pounding.png',
                prerequisites: 'Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash.',
                effect: 'Your boons with Knock-Away effects deal bonus damage to bosses.',
                explaination: 'Pretty self-explainatory, get this if you can.'
            },
            {
                name: 'Lightning Strike (Zeus)', 
                img: './img/lightning-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack emits chain-lightning when you damage a foe.',
                explaination: 'Very good for fast clears and stacking up your passive, even better if you can apply Jolted to your foes.'
            },
            {
                name: 'Storm Lightning (Zeus)', 
                img: './img/storm-lightning.png',
                prerequisites: 'Electric Shot or Lightning Strike.',
                effect: 'Your chain-lightning effects bounce more times before expiring.',
                explaination: 'Great for fast clears.'
            },
            {
                name: 'Zeus\' Aid (Zeus)', 
                img: './img/zeus-aid.png',
                prerequisites: 'none',
                effect: 'Your Call makes lightning strike nearby foes repeatedly for 1.5 Sec.',
                explaination: 'You mostly want to take this because you need it for other Zeus\' boons, but the fact that it\'s one of the best Calls damage-wise is a nice bonus :)'
            },
            {
                name: 'High Voltage (Zeus)', 
                img: './img/high-voltage.png',
                prerequisites: 'Thunder Dash, Thunder Flourish, or Zeus\' Aid',
                effect: 'Your lightning bolt effects deal damage in a larger area.',
                explaination: 'Anything that powers up your lightning bolts is good on this build.'
            },
            {
                name: 'Double Strike (Zeus)', 
                img: './img/double-strike.png',
                prerequisites: 'Thunder Dash, Thunder Flourish, or Zeus\' Aid',
                effect: 'Your lightning bolt effects have a chance to strike twice.',
                explaination: 'Incredibly strong boon, must-pick if you can.'
            },
            {
                name: 'Static Discharge (Zeus)', 
                img: './img/static-discharge.png',
                prerequisites: 'Thunder Flourish, Zeus\' Aid, Thunder Dash, Heaven\'s Vengeance, Lightning Strike, Electric Shot, or Lightning Reflexes.',
                effect: 'Your lightning effects also make foes Jolted.',
                explaination: 'This boon is a must. Not only does it deal Jolt damage, but it also helps you to use your Privileged Status.'
            },
            {
                name: 'Sea Storm (Poseidon & Zeus Duo)', 
                img: './img/sea-storm.png', 
                prerequisites: 'One of each of these Poseidon and Zeus boons: <br />Poseidon: Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash. <br />Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus\' Aid.',
                effect: 'Your knock-away effects also cause foes to be struck by lightning. Lightning Damage 40.',
                explaination: 'If you can get this, it\'s gg. Haven\'t lost a single time with this build when I got this boon.'
            },
            {
                name: 'Swift Strike (Hermes)', 
                img: './img/swift-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is +X% faster.',
                explaination: 'You will be using your Attack very often, so why not make it faster, right?'
            },
        ],
        daedalus: [
            {
                name: 'Long Knuckle',
                img: './img/long-knuckle.png',
                effect: 'Your Attack has more range and deals +10% damage.',
                explaination: 'Really nice boon, no reason not to take it.'
            },
            {
                name: 'Rolling Knuckle',
                img: './img/draining-cutter.png',
                effect: 'Your Dash-Strike deals +60% damage; added to Attack sequence.',
                explaination: 'You will Dash-Strike often, take this to make yourself stronger.'
            }
        ],
        funAlternative: 'You can play this boon with Aphrodite\'s Attack and Artemis\' Special, which will do ridiculous damage if it Crits and if you have their duo boon. Using Special after stacking your passive while having Dionysus on your Special is a pretty nice way to stack his Hangover to max stacks, so you might go for that build, too.'
    },
    {
        weapon: 'Twin Fists of Malphon',
        title: 'Aspect of Gilgamesh',
        playstyle: 'Easily one of the most unique aspects in the game, this aspect unlocks a lot of fun Dash-focused builds. Your Special can mark foes with Maim, which gives you additional damage toward them and, 2 bonus dashes and 400 flat damage after some time. The downside is that you take extra damage from Maimed foes, but taking Ruthless Reflex gives you 50% dodge chance on your Dashes, and you get 2 Dashes for free from the aspect as mentioned before. Not only that, but you can hold your Dash button to Dash repeatedly. <br /> The build relies on Poseidon\'s Dash and boons that complement it. Gilgamesh has a high base damage on its Attack, and taking Zeus is only going to make it feel stronger. It will also allow you to go for his duo boon with Poseidon, which will break the game wide open once you get those Poseidon boons I mentioned.',
        startingKeepsake: 'Take Conch Shell (Poseidon\'s keepsake) to get his Dash as soon as possible. Thunder Signet (Zeus\'s keepsake) is good for Asphodel to get your build going',
        mirror: 'Take Ruthless Reflex because you get 2 additional Dashes with the aspect as-is. Take Privileged Status if you think you\'re gonna deal both Ruptured and Jolted damage.',
        boons: [
            {
                name: 'Tidal Dash (Poseidon)',
                img: './img/tidal-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash damages foes in an area and knocks them away.',
                explaination: 'Dashing will be your main damage output, so take this one.'
            },
            {
                name: 'Razor Shoals (Poseidon)', 
                img: './img/razor-shoals.png',
                prerequisites: 'Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash.',
                effect: 'Using knock-away effects also Rupture foes.',
                explaination: 'Take this in order to apply Poseidon\'s Status Curse, which will help you get the most use out of Privileged Status.'
            },
            {
                name: 'Wave Pounding (Poseidon)',
                img: './img/wave-pounding.png',
                prerequisites: 'Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash.',
                effect: 'Your boons with Knock-Away effects deal bonus damage to bosses.',
                explaination: 'Great for beating the shit out of your dad.'
            },
            {
                name: 'Typhoon\'s Fury (Poseidon)',
                img: './img/typhoons-fury.png',
                prerequisites: 'Tempest Strike, Tidal Dash, Flood Shot, Tempest Flourish, or Poseidon\'s Aid.',
                effect: 'You deal more damage when slamming foes into barriers.',
                explaination: 'You mainly want this one in order to unlock Poseidon\'s Legendary boon.'
            },
            {
                name: 'Second Wave (Poseidon)',
                img: './img/second-wave.png',
                prerequisites: 'One of each: <br /> Breaking Wave or Typhoon\'s Fury. <br /> Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash.',
                effect: 'Your knock-away effects shove foes a second time after the first.',
                explaination: 'Huuuuuge boon, although very hard to get.'
            },
            {
                name: 'Divine Flourish (Athena)', 
                img: './img/divine-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special is stronger, and can Deflect.',
                explaination: 'I like getting this one in order to apply Maimed safely, but you don\'t have to get it if you don\'t want to.'
            },
            {
                name: 'Lightning Strike (Zeus)', 
                img: './img/lightning-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack emits chain-lightning when you damage a foe.',
                explaination: 'We\'re gonna go for Zeus and Poseidon combo, so taking this as your Attack is recommended.'
            },
            {
                name: 'Storm Lightning (Zeus)', 
                img: './img/storm-lightning.png',
                prerequisites: 'Electric Shot or Lightning Strike.',
                effect: 'Your chain-lightning effects bounce more times before expiring.',
                explaination: 'Not a mandatory pick-up, but pretty good if you can get it.'
            },
            {
                name: 'Zeus\' Aid (Zeus)', 
                img: './img/zeus-aid.png',
                prerequisites: 'none',
                effect: 'Your Call makes lightning strike nearby foes repeatedly for 1.5 Sec.',
                explaination: 'If you want boons from Zeus that amplify your lightning bolts, you will have to take either this for your Call or Thunder Flourish for your Special.'
            },
            {
                name: 'High Voltage (Zeus)', 
                img: './img/high-voltage.png',
                prerequisites: 'Thunder Dash, Thunder Flourish, or Zeus\' Aid',
                effect: 'Your lightning bolt effects deal damage in a larger area.',
                explaination: 'Nice pick-up if available.'
            },
            {
                name: 'Double Strike (Zeus)', 
                img: './img/double-strike.png',
                prerequisites: 'Thunder Dash, Thunder Flourish, or Zeus\' Aid',
                effect: 'Your lightning bolt effects have a chance to strike twice.',
                explaination: 'Unreliable, but when it hits it\'s really useful.'
            },
            {
                name: 'Static Discharge (Zeus)', 
                img: './img/static-discharge.png',
                prerequisites: 'Thunder Flourish, Zeus\' Aid, Thunder Dash, Heaven\'s Vengeance, Lightning Strike, Electric Shot, or Lightning Reflexes.',
                effect: 'Your lightning effects also make foes Jolted.',
                explaination: 'Super important boon, prioritize it over all other Zeus boons.'
            },
            {
                name: 'Sea Storm (Poseidon & Zeus Duo)', 
                img: './img/sea-storm.png', 
                prerequisites: 'One of each of these Poseidon and Zeus boons: <br />Poseidon: Flood Shot, Poseidon\'s Aid, Tempest Flourish, Tempest Strike, or Tidal Dash. <br />Zeus: Electric Shot, Lightning Strike, Thunder Dash, Thunder Flourish, or Zeus\' Aid.',
                effect: 'Your knock-away effects also cause foes to be struck by lightning. Lightning Damage 40.',
                explaination: 'The run-winner, this boon will allow you to just hold your Dash button and win. Simple as that.'
            },
            {
                name: 'Greatest Reflex (Hermes)', 
                img: './img/hyper-sprint.png',
                prerequisites: 'none',
                effect: 'You can Dash +X more time(s) in a row.',
                explaination: 'Extra Dashes = extra damage.'
            },
            {
                name: 'Hyper Sprint (Hermes)', 
                img: './img/hyper-sprint.png',
                prerequisites: 'none',
                effect: 'For X seconds after you Dash, become Sturdy and run +100% faster.',
                explaination: 'If you\'re gonna Dash a lot, might as well pick this up for extra safety.'
            },
        ],
        daedalus: [
            {
                name: 'Rending Claws',
                img: './img/rending-claws.png',
                effect: 'Maim-afflicted foes take +25% damage and move 30% slower.',
                explaination: 'As with every hidden aspect Daedalus Upgrade, it is recommended that you always take it.'
            },
            {
                name: 'Rolling Knuckle',
                img: './img/draining-cutter.png',
                effect: 'Your Dash-Strike deals +60% damage; added to Attack sequence.',
                explaination: 'You will Dash-Strike all the time, so give this one a go.'
            }
        ],
        funAlternative: 'Athena Dash and Ares Attack and their duo is one fun way to play this build. Other than that, you can go for a safe build like Athena and Demeter combo to get Stubborn Roots.'
    },
    {
        weapon: 'Adamant Rail',
        title: 'Aspect of Zagreus',
        playstyle: 'Since this weapon relies on your Attacks for the damage, you will want to take something that can stack a Status Curse. For this build, you\'re going to take Demeter for Attack, focusing mainly on her boons. In order to maximize your damage, it is important that you take a Daedalus Upgrade that will make your Special more useful, as it will stack Status Curses in combination with your Attacks, which will help you get the most use out of Privileged Status.',
        startingKeepsake: 'Take Frostbitten Horn (Demeter\'s keepsake) to get Demeter\'s Attack early. You can switch it out for Athena\'s keepsake if you want to go maximum safety route and get her Dash ASAP.',
        mirror: 'As mentioned before, Privileged Status will help you tons.',
        boons: [
            {
                name: 'Frost Strike (Demeter)', 
                img: './img/frost-strike.png',
                prerequisites: 'none',
                effect: 'Your Attack is stronger and inflicts Chill.',
                explaination: 'Chill works very well with this weapon in general, slowing down your foes, while also dealing tons of damage in combination with other Demeter boons.'
            },
            {
                name: 'Arctic Blast (Demeter)', 
                img: './img/arctic-blast.png',
                prerequisites: 'Demeter\'s Aid, Frost Flourish, Frost Strike, Mistral Dash, or Snow Burst.',
                effect: 'Applying 10 stacks of Chill causes a blast, clearing the effect.',
                explaination: 'While this boon increases your damage output, sometimes I prefer not taking it because I want to keep 10 stacks on my foes, especially bosses. It\'s up to personal taste with this one.'
            },
            {
                name: 'Killing Freeze (Demeter)', 
                img: './img/killing-freeze.png',
                prerequisites: 'Demeter\'s Aid, Frost Flourish, Frost Strike, Mistral Dash, or Snow Burst.',
                effect: 'Applying Chill to all enemies causes them to Slow and Decay.',
                explaination: 'Pretty self-explainatory, works wonders against bosses.'
            },
            {
                name: 'Drunken Flourish (Dionysus)', 
                img: './img/drunken-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special inflicts Hangover.',
                explaination: 'You will be using this primarily to get Privileged Status stacks.'
            },
            {
                name: 'Divine Dash (Athena)', 
                img: './img/divine-dash.png',
                prerequisites: 'none',
                effect: 'Your Dash deals damage and can Deflect.',
                explaination: 'Take this if you want to be super safe, or something that can help with applying Privileged Status if you\'re more daring.'
            },
            {
                name: 'Support Fire (Artemis)', 
                img: './img/support-fire.png',
                prerequisites: 'Artemis\' Aid, Deadly Flourish, Deadly Strike, Hunter Dash, Pressure Points, or True Shot.',
                effect: 'After you Cast, or hit with an Attack or Special, fire a seeking arrow.',
                explaination: 'This boon works wonderfully with your Attacks. If you see an Artemis pick-up, make sure you take this boon.'
            }
        ],
        daedalus: [
            {
                name: 'Rocket Bomb',
                img: './img/rocket-bomb.png',
                effect: 'Your Special is replaced with a rocket that deals 80 base damage.',
                explaination: 'Not mandatory, but it will help out with hitting your Special more reliably, especially if you\'re playing with a controller. Cluster Bomb is a good alternative, too, since it helps stack your Hangover stacks faster.'
            },
            {
                name: 'Flurry Fire',
                img: './img/flurry-fire.png',
                effect: 'Your Attack is faster and more accurate; gain +6 ammo capacity.',
                explaination: 'My favorite Attack-empowering Daedalus Upgrade simply because it helps you stack Chill faster.'
            }
        ],
        funAlternative: 'If you really want to maximize damage, put Zeus on Attack instead of Demeter. Another alternative is doing Dionysus on Attack instead of Demeter. It\'s pretty open with the combinations, actually, but I\'d most recommend sticking to the Privileged Status tactics.'
    },
]

const htmlGenerator = (build) => {
    const title = build.title;
    const playstyle = build.playstyle;
    const boons = build.boons;
    const daedalus = build.daedalus;
    let boonBoilerplate = '';
    let daedalusBoilerplate = '';
    for (let i = 0; i < boons.length; i++) {
        boonBoilerplate += `
        <div class="boon__wrapper">
            <h4 class="boon__name">${boons[i].name}</h4>
            <div class="boon__container">
                <img class="boon__img" src=${boons[i].img} />
                <div class="boon__text">
                    <p class="boon__prerequisites">Prerequisites: ${boons[i].prerequisites}</p>
                    <p class="boon__effect">Effect: ${boons[i].effect}</p>
                </div>
            </div>
            <p class="boon__explaination">${boons[i].explaination}</p>
        </div>
        `
    };
    for (let j = 0; j < daedalus.length; j++) {
        daedalusBoilerplate += `
        <div class="boon__wrapper">
            <h4 class="boon__name">${daedalus[j].name}</h4>
            <div class="boon__container">
                <img class="boon__img" src=${daedalus[j].img} />
                <div class="boon__text">
                    <p class="boon__effect">Effect: ${daedalus[j].effect}</p>
                </div>
            </div>
            <p class="boon__explaination">${daedalus[j].explaination}</p>
        </div>
        `
    };
    const htmlString = `
    <h3 class="build__title">${title}</h3>
    <p class="build__text">${playstyle}</p>
    <h3 class="build__list__title">Mirror of Night</h4>
    <p class="build__mirror__text">${build.mirror}</p>
    <h3 class="build__list__title">Starting Keepsake</h4>
    <p class="build__mirror__text">${build.startingKeepsake}</p>
    <div class="build__list">
        <h3 class="build__list__title">Recommended Boons</h3>
        ${boonBoilerplate}
    </div>
    <div class="build__list">
        <h3 class="build__list__title">Daedalus Upgrades</h3>
        ${daedalusBoilerplate}
    </div>
    <h3 class="build__list__title">Fun Alternative</h4>
    <p class="build__mirror__text">${build.funAlternative}</p>
    `;
    return htmlString;
};

for (let i = 0; i < buttonContainers.length; i++) {
    console.log(i);
    buttonContainers[i].addEventListener('click', () => {
        if(!(buttonAspects[i].classList.contains('aspect--active'))) {
            for(let j = 0; j < buttonAspects.length; j++) {
                if(buttonAspects[j].classList.contains('aspect--active')) {
                    buttonAspects[j].classList.remove('aspect--active');
                }
            }
            console.log(i);
            buttonAspects[i].classList.add('aspect--active');
            buildBoilerplate.innerHTML = htmlGenerator(buildArray[i]);
        }
    })
}

const weaponSelect = (weapons) => {
    for(let i = 0; i < weaponsArray.length; i++) {
        weaponsArray[i].classList.remove('aspects--active');
        buildBoilerplate.innerHTML = '';
    }
    switch(weapons.value) {
        case 'bow':
            weaponBow.classList.toggle('aspects--active');
            break;
        case 'blade':
            weaponBlade.classList.toggle('aspects--active');
            break;
        case 'spear':
            weaponSpear.classList.toggle('aspects--active');
            break;
        case 'shield':
            weaponShield.classList.toggle('aspects--active');
            break;
        case 'rail':
            weaponRail.classList.toggle('aspects--active');
            break;
        case 'fists':
            weaponFists.classList.toggle('aspects--active');
            break;
        default:
            break;
    }
}