const buttonContainers = document.querySelectorAll('.button__container');
const buttonAspects = document.querySelectorAll('.button--aspects');
const weapons = document.getElementById('weapons');
const weaponBow = document.querySelector('.aspects--bow');
const weaponBlade = document.querySelector('.aspects--blade');
const weaponShield = document.querySelector('.aspects--shield');
const weaponSpear = document.querySelector('.aspects--spear');
const weaponRail = document.querySelector('.aspects--rail');
const weaponFists = document.querySelector('.aspects--fists');
const weaponsArray = [weaponBow, weaponBlade, weaponShield, weaponSpear, weaponRail, weaponFists];

for (let i = 0; i < buttonContainers.length; i++) {
    buttonContainers[i].addEventListener('click', () => {
        if(!(buttonAspects[i].classList.contains('aspect--active'))) {
            for(let j = 0; j < buttonAspects.length; j++) {
                if(buttonAspects[j].classList.contains('aspect--active')) {
                    buttonAspects[j].classList.remove('aspect--active');
                }
            }
            buttonAspects[i].classList.add('aspect--active');
        }
    })
}

const weaponSelect = (weapons) => {
    for(let i = 0; i < weaponsArray.length; i++) {
        weaponsArray[i].classList.remove('aspects--active');
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

