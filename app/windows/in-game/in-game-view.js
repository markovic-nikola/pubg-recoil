define([
    '../../scripts/constants/window-names.js',
    '../../scripts/services/windows-service.js',
    '../../scripts/services/drag-service.js',
    '../../scripts/constants/weapons.js',
    '../../scripts/constants/options.js',
    '../../lib/lodash.js'
], function (WindowNames,
    windowsService,
    DragService,
    WEAPONS,
    OPTIONS,
    _lo) {

    const img = document.querySelector('img');
    const closeButton = document.getElementById('closeButton');
    const settingsButton = document.getElementById('settingsButton');
    const minimizeButton = document.getElementById('minimizeButton');
    const supportButton = document.getElementById('supportButton');
    const header = document.getElementsByClassName('app-header')[0];
    const categoryView = document.getElementById('categoryView');
    const weaponsView = document.getElementById('weaponsView');
    const singleWeaponView = document.getElementById('weaponView');

    let dragService = null;

    closeButton.addEventListener('click', onCloseClicked);
    settingsButton.addEventListener('click', onSettingsClicked);
    minimizeButton.addEventListener('click', onMimizeClicked);
    supportButton.addEventListener('click', onSupportClicked);

    overwolf.windows.getCurrentWindow(result => {
        dragService = new DragService(result.window, header);
    });

    function onCloseClicked(event) {
        windowsService.minimize(WindowNames.IN_GAME)
    }

    function onSettingsClicked(event) {
        windowsService.restore(WindowNames.SETTINGS)
    }

    async function onMimizeClicked(event) {
        windowsService.minimize(WindowNames.IN_GAME);
    }

    async function onSupportClicked(event) {
        overwolf.utils.openUrlInDefaultBrowser(OPTIONS.SUPPORT_LINK);
    }

    function updateScreenshot(url) {
        img.src = url;
    }

    function loadWeaponCategories() {
        _lo.forEach(WEAPONS.categories, function(category) {
            let list_item = document.createElement('LI');
            let link = document.createElement('A');
            link.setAttribute('href', '#');
            link.setAttribute('data-value', category.id);
            let img = document.createElement('IMG');
            img.src = '../../assets/weapon_icons/' + category.icon;
            link.appendChild(img);
            link.appendChild(document.createTextNode(category.name));
            link.addEventListener('click', function(e) {
                loadWeaponsWithinCategory(this.getAttribute('data-value'));
            })

            list_item.appendChild(link);
            categoryView.querySelector('ul').appendChild(list_item);
        });
    }

    function loadWeaponsWithinCategory(categoryId) {
        let list = WEAPONS.list[categoryId].slice(0);
        list.unshift({name: '&lt; Back', id: 0});
        let ul = weaponsView.querySelector('ul');
        ul.innerHTML = '';

        _lo.forEach(list, function(weapon) {
            let list_item = document.createElement('LI');
            let link = document.createElement('A');
            link.setAttribute('href', '#');
            link.setAttribute('data-value', weapon.id);
            link.setAttribute('data-category', categoryId);
            link.innerHTML = weapon.name;

            if (weapon.id != 0) {
                let img = document.createElement('IMG');
                img.src = '../../assets/weapon_icons/' + weapon.icon;
                link.prepend(img);
            }
            
            link.addEventListener('click', function(e) {
                
                if (this.getAttribute('data-value') == '0') {
                    showView(categoryView);
                } else {
                    loadWeapon(this.getAttribute('data-value'), this.getAttribute('data-category'));
                }
                
            })
            list_item.appendChild(link);
            ul.appendChild(list_item);

            showView(weaponsView);
        });
    }

    function loadWeapon(weaponId, categoryId) {
        
        let weapon = getWeapon(categoryId, weaponId);
        singleWeaponView.innerHTML = '';

        let topDivContainer = document.createElement('DIV');
        topDivContainer.className = 'top_div';

        let topDivContainerInnerLeft = document.createElement('DIV');

        let backLink = document.createElement('A');
        backLink.setAttribute('href', '#');
        backLink.innerHTML = '&lt; Back';
        backLink.addEventListener('click', function(e) {
            showView(weaponsView);
        });
        topDivContainerInnerLeft.appendChild(backLink);

        let h1 = document.createElement('H1');
        h1.appendChild(document.createTextNode(weapon.name));
        topDivContainerInnerLeft.appendChild(h1);
        topDivContainer.appendChild(topDivContainerInnerLeft);

        let img = document.createElement('IMG');
        img.src = '../../assets/weapons/' + weapon.image;
        topDivContainer.appendChild(img);
        singleWeaponView.appendChild(topDivContainer);

        let muzzles = [];
        let lower_rails = [];
        let stocks = [];
        _lo.forEach(weapon.attachments, (obj) => {
            if (obj.parts.muzzle_id) {
                muzzles.push(obj.parts.muzzle_id);
            }

            if (obj.parts.lower_rail_id) {
                lower_rails.push(obj.parts.lower_rail_id);
            }

            if (obj.parts.stock_id) {
                stocks.push(obj.parts.stock_id);
            }
        });
        muzzles = _lo.uniq(muzzles);
        lower_rails = _lo.uniq(lower_rails);
        stocks = _lo.uniq(stocks);

        let bottomDivContainer = `
            <div class="bottom_div">
                <div class="col_left">
                    <h4>Muzzle</h4>
                    <div class="muzzles">
                    ${_lo.map(muzzles, (id) => {
                            
                            let muzzle = _lo.find(WEAPONS.muzzle, ['id', id]);
                            return insertInputFilter({
                                title: muzzle.name,
                                name: 'muzzle',
                                value: muzzle.id,
                                image: muzzle.image,
                            });
                        }).join('')
                    }</div>
                    <hr>
                    <h4>Lower Rail</h4>
                    <div class="lower_rails">${
                        _lo.map(lower_rails, (id) => {
                            let lower_rail = _lo.find(WEAPONS.lower_rail, ['id', id]);
                            return insertInputFilter({
                                title: lower_rail.name,
                                name: 'lower_rail',
                                value: lower_rail.id,
                                image: lower_rail.image
                            });
                        }).join('')
                    }</div>
                    <hr>
                    <h4>Stock</h4>
                    <div class="stocks">${
                        _lo.map(stocks.length ? stocks : [1], (id) => {
                            let stock = _lo.find(WEAPONS.stock, ['id', id]);
                            return insertInputFilter({
                                title: stock.name,
                                name: 'stock',
                                value: stock.id,
                                image: stock.image
                            });
                        }).join('')
                    }</div>
                </div>
                <div class="col_right"></div>
            </div>
        `;

        singleWeaponView.insertAdjacentHTML('beforeend', bottomDivContainer);
        _lo.forEach(singleWeaponView.querySelectorAll('input[type="radio"]'), (el, i) => {
            el.addEventListener('change', () => {
                let selectedMuzzle = singleWeaponView.querySelector('input[type="radio"][name="muzzle"]:checked');
                let selectedLowerRail = singleWeaponView.querySelector('input[type="radio"][name="lower_rail"]:checked');
                let selectedStock = singleWeaponView.querySelector('input[type="radio"][name="stock"]:checked');
                loadChart(categoryId, weaponId, {
                    muzzle_id: selectedMuzzle ? selectedMuzzle.value : 1, 
                    lower_rail_id: selectedLowerRail ? selectedLowerRail.value : 1,
                    stock_id: selectedStock? selectedStock.value : 1
                });
            });
        });

        showView(singleWeaponView);
        singleWeaponView.querySelector('input[type="radio"][name="muzzle"][value="1"]').checked = true;
        singleWeaponView.querySelector('input[type="radio"][name="lower_rail"][value="1"]').checked = true;
        singleWeaponView.querySelector('input[type="radio"][name="stock"][value="1"]').checked = true;
        loadChart(categoryId, weaponId, {
            muzzle_id: 1,
            lower_rail_id: 1,
            stock_id: 1
        });
    }

    function showView(el) {
        categoryView.style.display = 'none';
        weaponsView.style.display = 'none';
        singleWeaponView.style.display = 'none';

        el.style.display = 'block';
    }

    function getWeapon(categoryId, weaponId) {
        return _lo.find(WEAPONS.list[categoryId], (weapon) => {
            return weapon.id == weaponId;
        });
    }

    function insertInputFilter(settings) {
        let label = document.createElement('LABEL');
        let input = document.createElement('INPUT');
        input.setAttribute('type', 'radio');
        input.setAttribute('name', settings.name);
        input.setAttribute('value', settings.value);
        label.appendChild(input);

        let img = document.createElement('IMG');
        img.src = '../../assets/attachments/' + settings.image;
        img.setAttribute('title', settings.title);
        label.appendChild(img);

        return label.outerHTML;
    }

    function loadChart(categoryId, weaponId, attachments) {
        let container = singleWeaponView.querySelector('.bottom_div .col_right');
        container.innerHTML = '';
        let weapon = _lo.find(WEAPONS.list[categoryId], ['id', parseInt(weaponId)]);
        let recoil = _lo.find(weapon.attachments, (obj) => {
            return obj.parts.muzzle_id == attachments.muzzle_id && obj.parts.lower_rail_id == attachments.lower_rail_id && obj.parts.stock_id == attachments.stock_id;
        });

        let object = document.createElement('OBJECT');
        object.setAttribute('type', 'image/svg+xml');
        object.setAttribute('data', '../../assets/recoils/' + recoil.recoil);
        object.setAttribute('width', '100%');
        object.setAttribute('height', '100%');
        object.setAttribute('onload', 'styleSvg(this)');
        object.style.opacity = 0;
        container.appendChild(object);

        let category = _lo.find(WEAPONS.categories, {id: parseInt(categoryId)});
        if (category && category.show_vertical_line) {
            let verticalLine = document.createElement('DIV');
            verticalLine.className = 'vertical_line';
            container.appendChild(verticalLine);
        }
    }

    return {
        updateScreenshot,
        loadWeaponCategories
    }
});