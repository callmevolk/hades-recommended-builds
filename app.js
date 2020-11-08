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
                effect: 'Your knock-away effects also cause foes to be struck by lightning. Lightning Damage 40',
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
                name: 'Drunken Flourish (Dionysus)', 
                img: './img/drunken-flourish.png',
                prerequisites: 'none',
                effect: 'Your Special inflicts Hangover.',
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
    <div class="build__list">
        <h3 class="build__list__title">Recommended Boons</h3>
        ${boonBoilerplate}
    </div>
    <div class="build__list">
        <h3 class="build__list__title">Daedalus Upgrades</h3>
        ${daedalusBoilerplate}
    </div>
    <h3 class="build__list__title">Mirror of Night</h4>
    <p class="build__mirror__text">${build.mirror}</p>
    <h3 class="build__list__title">Starting Keepsake</h4>
    <p class="build__mirror__text">${build.startingKeepsake}</p>
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

