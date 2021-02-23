let menuObject = {
    menuCharacter: [document.getElementById('menuContentCharacter'),
        document.getElementById('characterImg'),
        document.getElementById('shadowImg')],
    menuAchievements: [document.getElementById('menuContentAchievements')],
    menuDungeons: [document.getElementById('menuContentDungeons')]
};

let generateAchievementsMenu = () => {
    let achievementTile = document.createElement('div');
    achievementTile.className = "achievement-tile";
    achievementTile.id='achievementTileId';
    achievementTile.innerHTML = `<div class="achievement-tile-content">
                            <div class="progress-donut">
                                <div class="ProgressDonut" >
                                    <svg class="ProgressDonut-svg" viewBox="0 0 100 100">
                                        <circle class="progress-circle-border-outer" cx="50" cy="50" r="37" />
                                        <circle class="progressBar-circle" cx="50" cy="50" r="37" />

                                        <circle class="progress-circle" cx="50" cy="50" r="37" />
                                        <div class="ProgressDonut-number">69%</div>
                                    </svg>


                                </div>
                            </div>

                            <div style="text-align: center">Персонаж</div>
                            <div class="achievements-amount">
                                <span class="achievements-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" class="achievements-icon-svg" data-src="https://assets.worldofwarcraft.com/static/components/Icon/svg/achievement-shield.69931dc20a64225f093d504faf2afb34.svg#achievement-shield" xmlns:xlink="http://www.w3.org/1999/xlink" data-queryselectoralways-ignore=""><path class="achievements-icon-svg" xmlns="http://www.w3.org/2000/svg" d="M51.492 3.677c-5.941 1.654-14.886 3.906-19.494 3.906-4.611 0-13.553-2.252-19.495-3.906-2.937-.815-5.875 1.255-5.875 4.144v34.684c0 1.336.657 2.597 1.778 3.415l20.792 15.176a4.765 4.765 0 002.8.904c.989 0 1.981-.3 2.805-.904L55.594 45.92c1.122-.818 1.778-2.08 1.778-3.415V7.823c-.002-2.888-2.942-4.961-5.88-4.146z" id="achievement-shield-199"></path></svg></span>
                                <span class="achievements-amount-number">190</span>
                            </div>
                        </div>`;

    let achievementsMenu = document.getElementById('achievementsMenuId');

    achievementsMenu.append(achievementTile);
}

const achievementTilesAmount = 10;
for(let i=0; i < achievementTilesAmount; i++){
    generateAchievementsMenu();
}

let createGearItem = (className, id, innerHTML) => {
    let gearItem = document.createElement('div');
    gearItem.className = className;
    gearItem.id = id;
    gearItem.innerHTML = innerHTML;
    return gearItem;
}

let generateGearItems = () => {
    let gearLeft = document.getElementById('gearLeft');
    let gearRight = document.getElementById('gearRight');
    gearLeft.append(createGearItem('gear-item', 'gearHelm',`<img class="gear-item-img legendary-img" src="gear/helm.jpg"><div class="gear-item-text"><span class="gear-item-desc legendary">Капюшон мрачной завесы</span><span class="ilvl-white">235</span></div>
                                <span class="tooltiptext">
                            <span class="tooltip-header legendary">Капюшон мрачной завесы</span>
                            <span class="tooltipILVL">Уровень предмета: 235</span>
                            <span class="transmog">Трансмогрификация:</span>
                            <span class="transmog">Скрытый шлем</span>
                            <span class="own-type">Становится персональным при получении</span>
                            <span class="unique">Уникальный использующийся предмет: Изготовленный легендарный предмет Темных Земель (1)</span>
                            <span class="part-and-material">
                                <span class="part">Голова</span>
                                <span class="material">Ткань</span>
                            </span>
                            <span class="usual-stats">
                                <span class="1-stat">+88 к интеллекту</span>
                                <span class="2-stat">+166 к выносливости</span>
                            </span>
                            <span class="additional-stats">
                                <span class="1-stat-additional">+74 к скорости</span>
                            <span class="1-stat-additional">+74 к искусности</span>
                            </span>
                            <span class="effect">Если на персонаже: Наносимый вами или вашим основным демоном урон может на 15 сек. увеличить урон, наносимый вторым из вас, на 10%.</span>
                            <span>Прочность: 120 / 120</span>
                            <span>Требуется 60-й уровень</span>

                            <span class="info">"Доспех искусной работы, который может усилить Резчик Рун."</span>

                        </span>`));

    gearLeft.append(createGearItem('gear-item', 'gearAmulet', `<img class="gear-item-img epic-img" src="gear/amulet.jpg"><div class="gear-item-text"><span class="gear-item-desc epic">Амулет вечной зимы</span><span class="ilvl-white">200</span></div>
                                <div class="tooltiptext">
                            <span class="tooltip-header epic">Амулет вечной зимы</span>
                            <span class="tooltipILVL">Уровень предмета: 200</span>
                            <span class="own-type">Становится персональным при получении</span>
                            <span class="unique">Уникальный использующийся предмет: Изготовленный легендарный предмет Темных Земель (1)</span>
                            <span class="part-and-material">
                                <span class="part">Шея</span>
                            </span>
                            <span class="usual-stats">
                                <span class="1-stat">+60 к выносливости</span>
                            </span>
                            <span class="additional-stats">
                                <span class="1-stat-additional">+44 к скорости</span>
                            <span class="1-stat-additional">+127 к искусности</span>
                            </span>
                            <span class="effect">Использование: Околдовывает зверя, обитающего вне помещений в Темных Землях. Пораженная цель будет помогать вам в течение 5 мин. (Восстановление: 1 ч.)</span>
                            <span>Требуется 60-й уровень</span>

                            <span class="info">"Холодный ветер гудит в звеньях цепочки этого амулета."</span>
                            <span>
                                <span>Цена продажи:</span>
                                <span class="gold">38</span>
                                <span class="silver">5</span>
                                <span class="copper">87</span>
                            </span>

                        </div>`));

    for (let i = 0; i < 6; i++){
        gearLeft.append(createGearItem('gear-item', 'shoulder', `<img class="gear-item-img rare-img" src="gear/helm.jpg"><div class="gear-item-text"><span class="gear-item-desc rare">Капюшон мрачной завесы</span><span class="ilvl-white">235</span></div>
                                <span class="tooltiptext">
                            <span class="tooltip-header rare">Капюшон мрачной завесы</span>
                            <span class="tooltipILVL">Уровень предмета: 235</span>
                            <span class="transmog">Трансмогрификация:</span>
                            <span class="transmog">Скрытый шлем</span>
                            <span class="own-type">Становится персональным при получении</span>
                            <span class="unique">Уникальный использующийся предмет: Изготовленный легендарный предмет Темных Земель (1)</span>
                            <span class="part-and-material">
                                <span class="part">Голова</span>
                                <span class="material">Ткань</span>
                            </span>
                            <span class="usual-stats">
                                <span class="1-stat"></span>
                                <span class="2-stat"></span>
                            </span>
                            <span class="additional-stats">
                                <span class="1-stat-additional"></span>
                            <span class="1-stat-additional"></span>
                            </span>
                            <span class="effect">Если на персонаже: Наносимый вами или вашим основным демоном урон может на 15 сек. увеличить урон, наносимый вторым из вас, на 10%.</span>
                            <span>Прочность: 120 / 120</span>
                            <span>Требуется 60-й уровень</span>

                            <span class="info">"Доспех искусной работы, который может усилить Резчик Рун."</span>

                        </span>`));
    }

    for (let i = 0; i < 8; i++) {
        gearRight.append(createGearItem('gear-item', 'shoulder', `<div class="gear-item-text rare"><span class="gear-item-desc">Капюшон мрачной завесы</span><span class="ilvl-white">235</span></div><img class="gear-item-img rare-img" src="gear/helm.jpg">
                                <span class="tooltiptext tooltiptextRight">
                            <span class="tooltip-header rare">Капюшон мрачной завесы</span>
                            <span class="tooltipILVL">Уровень предмета: 235</span>
                            <span class="transmog">Трансмогрификация:</span>
                            <span class="transmog">Скрытый шлем</span>
                            <span class="own-type">Становится персональным при получении</span>
                            <span class="unique">Уникальный использующийся предмет: Изготовленный легендарный предмет Темных Земель (1)</span>
                            <span class="part-and-material">
                                <span class="part">Голова</span>
                                <span class="material">Ткань</span>
                            </span>
                            <span class="usual-stats">
                                <span class="1-stat"></span>
                                <span class="2-stat"></span>
                            </span>
                            <span class="additional-stats">
                                <span class="1-stat-additional"></span>
                            <span class="1-stat-additional"></span>
                            </span>
                            <span class="effect">Если на персонаже: Наносимый вами или вашим основным демоном урон может на 15 сек. увеличить урон, наносимый вторым из вас, на 10%.</span>
                            <span>Прочность: 120 / 120</span>
                            <span>Требуется 60-й уровень</span>

                            <span class="info">"Доспех искусной работы, который может усилить Резчик Рун."</span>

                        </span>`));
    }
}

generateGearItems();

const initTooltips = () => {
    let rect = document.getElementById('gearLeft').getBoundingClientRect();

    console.log(rect.top, rect.left);

    let gearTooltips = document.querySelectorAll('.tooltiptext');
    document.addEventListener('mousemove', gearTooltipMousemoveEventHandler);
    let tooltipOffset = 16;

    function gearTooltipMousemoveEventHandler(e) {
        for (let gearTooltip of gearTooltips) {
            let bounds = gearTooltip.parentElement.getBoundingClientRect();
            let x = e.clientX - bounds.left;
            let y = e.clientY - bounds.top;

            console.log(x, y);
            if (gearTooltip.classList.contains('tooltiptextRight')) {
                gearTooltip.style.left = e.clientX - gearTooltip.parentElement.getBoundingClientRect().left - 430 - tooltipOffset + 'px';
            } else {
                gearTooltip.style.left = e.clientX - gearTooltip.parentElement.getBoundingClientRect().left + tooltipOffset + 'px';
            }

            gearTooltip.style.top = e.clientY - gearTooltip.parentElement.getBoundingClientRect().top + tooltipOffset + 'px';
        }

    }
}

let showMenu = () => {
    let transitionTimer;
    let lastClicked;

    return (clickedMenuOption) => {
        lastClicked = clickedMenuOption;
        if (transitionTimer)
            clearTimeout(transitionTimer);
        for (let menuElement in menuObject){
            document.getElementById(menuElement).classList.remove("active");
            menuObject[menuElement].forEach((element) => {
                element.classList.add('hidden');
                element.classList.add('menuContentElementVisuallyHidden');
            });
        }
        document.getElementById(clickedMenuOption).classList.add("active");
        if (clickedMenuOption == 'menuCharacter') {
            document.getElementById('backgroundImg').classList.remove('darkened');
        } else {
            document.getElementById('backgroundImg').classList.add('darkened');
        }
        menuObject[clickedMenuOption].forEach((element) => {
            element.classList.remove("hidden");
            transitionTimer = setTimeout(() => {
                element.classList.remove('menuContentElementVisuallyHidden');
            }, 500);
        });
        return [transitionTimer, lastClicked]; //вряд ли что то пригодится возвращать?
    }
};

let menu = showMenu();

initTooltips();