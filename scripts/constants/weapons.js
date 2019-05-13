define({
    categories: [
        {
            id: 1,
            name: 'Handgun',
            icon: 'handgun_icon.png',
            show_vertical_line: true
        },
        {
            id: 2,
            name: 'Shotgun',
            icon: 'shotgun_icon.png',
            show_vertical_line: false
        },
        {
            id: 3,
            name: 'LMG',
            icon: 'lmg_icon.png',
            show_vertical_line: true
        },
        {
            id: 4,
            name: 'SMG',
            icon: 'smg_icon.png',
            show_vertical_line: true
        },
        {
            id: 5,
            name: 'Rifle',
            icon: 'rifle_icon.png',
            show_vertical_line: true
        },
        {
            id: 6,
            name: 'Assault Rifle',
            icon: 'ar_icon.png',
            show_vertical_line: true
        },
        {
            id: 7,
            name: 'DMR',
            icon: 'dmr_icon.png',
            show_vertical_line: true
        },
        {
            id: 8,
            name: 'Sniper',
            icon: 'sniper_icon.png',
            show_vertical_line: true
        }
    ],
    muzzle: [
        {
            id: 1,
            name: 'Bare',
            image: 'bare.png'
        },
        {
            id: 2,
            name: 'Compensator - Large',
            image: 'compensator_large.png'
        },
        {
            id: 3,
            name: 'Compensator - Medium',
            image: 'compensator_medium.png'
        },
        {
            id: 4,
            name: 'Compensator - Small',
            image: 'compensator_small.png'
        },
        {
            id: 5,
            name: 'Flash Hider - Large',
            image: 'flash_hider_large.png'
        },
        {
            id: 6,
            name: 'Flash Hider - Medium',
            image: 'flash_hider_medium.png'
        },
        {
            id: 7,
            name: 'Flash Hider - Small',
            image: 'flash_hider_small.png'
        },
        /*{
            id: 8,
            name: 'Suppressor - Large',
            image: 'suppressor_large.png'
        },
        {
            id: 9,
            name: 'Suppressor - Medium',
            image: 'suppressor_medium.png'
        },
        {
            id: 10,
            name: 'Suppressor - Small',
            image: 'suppressor_small.png'
        },
        {
            id: 11,
            name: 'Suppressor - Pistol',
            image: 'suppressor_pistol.png'
        }*/
        {
            id: 12,
            name: 'Choke',
            image: 'choke.png'
        },
        {
            id: 13,
            name: 'Duckbill',
            image: 'duckbill.png'
        },
    ],
    lower_rail: [
        {
            id: 1,
            name: 'Bare',
            image: 'bare.png'
        },
        {
            id: 2,
            name: 'Angled Foregrip',
            image: 'angled_foregrip.png'
        },
        {
            id: 3,
            name: 'Vertical Foregrip',
            image: 'vertical_foregrip.png'
        },
        {
            id: 4,
            name: 'Half Grip',
            image: 'half_grip.png'
        },
        {
            id: 5,
            name: 'Laser Sight',
            image: 'laser_sight.png'
        },
        {
            id: 6,
            name: 'Light Grip',
            image: 'light_grip.png'
        },
        {
            id: 7,
            name: 'Thumb Grip',
            image: 'thumb_grip.png'
        }
    ],
    stock: [
        {
            id: 1,
            name: 'Bare',
            image: 'bare.png'
        },
        {
            id: 2,
            name: 'Cheek Pad',
            image: 'cheek_pad.png',
        },
        {
            id: 3,
            name: 'Tactical Stock',
            image: 'stock_medium.png'
        },
        {
            id: 4,
            name: 'Uzi Stock',
            image: 'stock_small.png'
        }
    ],
    list: {
        1: [
            {
                name: 'P18C',
                id: 1,
                icon: 'weapon_p18c.png',
                image: 'weapon_img_p18c.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'p18c_bare.svg'
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'p18c_bare_laser_sight.svg'
                    },
                ]
            },
            {
                name: 'P1911',
                id: 2,
                icon: 'weapon_p1911.png',
                image: 'weapon_img_p1911.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'p1911_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        }, 
                        recoil: 'p1911_bare_laser_sight.svg'
                    }
                ]
            },
            {
                name: 'P92',
                id: 3,
                icon: 'weapon_p92.png',
                image: 'weapon_img_p92.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'p92_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'p92_bare_laser_sight.svg',
                    }
                ]
            },
            {
                name: 'R1895',
                id: 4,
                icon: 'weapon_r1895.png',
                image: 'weapon_img_r1895.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'r1895_bare.svg',
                    }
                ]
            },
            {
                name: 'R45',
                id: 5,
                icon: 'weapon_r45.png',
                image: 'weapon_img_r45.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'r45_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'r45_bare_laser_sight.svg',
                    }
                ]
            },
            {
                name: 'Skorpion',
                id: 6,
                icon: 'weapon_skorpion.png',
                image: 'weapon_img_skorpion.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'skorpion_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'skorpion_bare_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'skorpion_bare_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'skorpion_bare_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'skorpion_bare_vertical_grip.svg',
                    }
                ]
            },
        ],
        2: [
            {
                name: 'S12K',
                id: 7,
                icon: 'weapon_s12k.png',
                image: 'weapon_img_s12k.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 's12k_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 13,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 's12k_duckbill.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 's12k_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 's12k_compensator.svg',
                    }
                ]
            },
            {
                name: 'S1897',
                id: 8,
                icon: 'weapon_s1897.png',
                image: 'weapon_img_s1897.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 's1897_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 12,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 's1897_choke.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 13,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 's1897_duckbill.svg',
                    }
                ]
            },
            {
                name: 'S686',
                id: 9,
                icon: 'weapon_s686.png',
                image: 'weapon_img_s686.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 's686_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 12,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 's686_choke.svg',
                    }
                ]
            },
            {
                name: 'Sawed-off',
                id: 10,
                icon: 'weapon_sawed_off.png',
                image: 'weapon_img_sawed_off.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'sawed_off_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 12,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'sawed_off_choke.svg',
                    }
                ]
            },
        ],
        3: [
            {
                name: 'DP-28',
                id: 11,
                icon: 'weapon_dp28.png',
                image: 'weapon_img_dp28.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'dp28_bare.svg',
                    }
                ]
            },
            {
                name: 'M249',
                id: 12,
                icon: 'weapon_m249.png',
                image: 'weapon_img_m249.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm249_bare.svg',
                    }
                ]
            },
        ],
        4: [
            {
                name: 'Micro UZI',
                id: 13,
                icon: 'weapon_micro_uzi.png',
                image: 'weapon_img_micro_uzi.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'uzi_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'uzi_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 1,
                            stock_id: 4
                        },
                        recoil: 'uzi_compensator_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'uzi_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 1,
                            stock_id: 4
                        },
                        recoil: 'uzi_flash_hider_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 4
                        },
                        recoil: 'uzi_stock.svg',
                    }
                ]
            },
            {
                name: 'Tommy Gun',
                id: 14,
                icon: 'weapon_tommy_gun.png',
                image: 'weapon_img_tommy_gun.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'tommy_gun_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'tommy_gun_vertical_grip.svg',
                    }
                ]
            },
            {
                name: 'UMP45',
                id: 15,
                icon: 'weapon_ump45.png',
                image: 'weapon_img_ump45.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'ump45_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'ump45_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'ump45_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'ump45_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'ump45_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'ump45_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'ump45_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'ump45_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'ump45_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'ump45_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'ump45_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'ump45_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'ump45_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'ump45_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'ump45_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'ump45_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'ump45_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'ump45_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'ump45_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'ump45_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'ump45_vertical_grip.svg',
                    }
                ]
            },
            {
                name: 'Vector',
                id: 16,
                icon: 'weapon_vector.png',
                image: 'weapon_img_vector.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'vector_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'vector_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'vector_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'vector_compensator_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'vector_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'vector_compensator_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'vector_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'vector_compensator_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'vector_compensator_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'vector_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'vector_compensator_vertical_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'vector_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'vector_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'vector_flash_hider_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'vector_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'vector_flash_hider_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'vector_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'vector_flash_hider_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'vector_flash_hider_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'vector_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'vector_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'vector_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'vector_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'vector_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'vector_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'vector_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'vector_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'vector_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'vector_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'vector_vertical_grip_stock.svg',
                    }
                ]
            },
            {
                name: 'PP-19 Bizon‎‎',
                id: 17,
                icon: 'weapon_pp_19_bizon.png',
                image: 'weapon_img_pp_19_bizon.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'bizon_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'bizon_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'bizon_flash_hider.svg',
                    }
                ]
            },
            {
                name: 'MP5K‎‎',
                id: 38,
                icon: 'weapon_mp5k.png',
                image: 'weapon_img_mp5k.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mp5k_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'mp5k_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 3
                        },
                        recoil: 'mp5k_angled_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mp5k_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'mp5k_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 2,
                            stock_id: 3
                        },
                        recoil: 'mp5k_compensator_angled_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'mp5k_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'mp5k_compensator_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'mp5k_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'mp5k_compensator_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'mp5k_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'mp5k_compensator_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'mp5k_compensator_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'mp5k_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 7,
                            stock_id: 3
                        },
                        recoil: 'mp5k_compensator_thumb_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'mp5k_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 4,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'mp5k_compensator_vertical_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mp5k_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'mp5k_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 2,
                            stock_id: 3
                        },
                        recoil: 'mp5k_flash_hider_angled_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'mp5k_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'mp5k_flash_hider_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'mp5k_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'mp5k_flash_hider_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'mp5k_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'mp5k_flash_hider_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'mp5k_flash_hider_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'mp5k_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 7,
                            stock_id: 3
                        },
                        recoil: 'mp5k_flash_hider_thumb_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'mp5k_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 7,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'mp5k_flash_hider_vertical_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'mp5k_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'mp5k_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'mp5k_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'mp5k_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'mp5k_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'mp5k_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'mp5k_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'mp5k_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 3
                        },
                        recoil: 'mp5k_thumb_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'mp5k_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'mp5k_vertical_grip_stock.svg',
                    }
                ]
            },
        ],
        5: [
            {
                name: 'Winchester Model 1894',
                id: 18,
                icon: 'weapon_winchester_1894.png',
                image: 'weapon_img_winchester_1894.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'winchester_1894_bare.svg',
                    }
                ]
            },
        ],
        6: [
            {
                name: 'AKM',
                id: 19,
                icon: 'weapon_akm.png',
                image: 'weapon_img_akm.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'akm_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'akm_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'akm_flash_hider.svg',
                    }/*,
                    {
                        parts: {
                            muzzle_id: 9,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'akm_suppressor.svg',
                    },*/
                ]
            },
            {
                name: 'Beryl M762',
                id: 20,
                icon: 'weapon_beryl_m762.png',
                image: 'weapon_img_beryl_m762.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'beryl_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'beryl_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'beryl_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'beryl_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'beryl_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'beryl_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'beryl_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'beryl_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'beryl_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'beryl_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'beryl_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'beryl_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'beryl_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'beryl_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'beryl_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'beryl_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'beryl_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'beryl_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'beryl_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'beryl_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'beryl_vertical_grip.svg',
                    }
                ]
            },
            {
                name: 'M16A4',
                id: 21,
                icon: 'weapon_m16a4.png',
                image: 'weapon_img_m16a4.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm16a4_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm16a4_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'm16a4_compensator_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm16a4_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'm16a4_flash_hider_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'm16a4_stock.svg',
                    }
                ]
            },
            {
                name: 'M416',
                id: 22,
                icon: 'weapon_m416.png',
                image: 'weapon_img_m416.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm416_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'm416_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 3
                        },
                        recoil: 'm416_angled_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm416_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'm416_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 2,
                            stock_id: 3
                        },
                        recoil: 'm416_compensator_angled_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'm416_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'm416_compensator_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'm416_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'm416_compensator_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'm416_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'm416_compensator_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'm416_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 7,
                            stock_id: 3
                        },
                        recoil: 'm416_compensator_thumb_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'm416_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'm416_compensator_vertical_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm416_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'm416_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 2,
                            stock_id: 3
                        },
                        recoil: 'm416_flash_hider_angled_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'm416_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'm416_flash_hider_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'm416_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'm416_flash_hider_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'm416_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'm416_flash_hider_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'm416_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 7,
                            stock_id: 3
                        },
                        recoil: 'm416_flash_hider_thumb_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'm416_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'm416_flash_hider_vertical_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'm416_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'm416_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'm416_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'm416_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'm416_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'm416_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'm416_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'm416_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 3
                        },
                        recoil: 'm416_thumb_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'm416_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'm416_vertical_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'm416_compensator_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'm416_flash_hider_stock.svg',
                    }
                ]
            },
            {
                name: 'Mk47 Mutant',
                id: 23,
                icon: 'weapon_mk47_mutant.png',
                image: 'weapon_img_mk47_mutant.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mutant_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'mutant_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 3
                        },
                        recoil: 'mutant_angled_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mutant_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'mutant_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 2,
                            stock_id: 3
                        },
                        recoil: 'mutant_compensator_angled_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'mutant_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'mutant_compensator_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'mutant_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'mutant_compensator_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'mutant_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'mutant_compensator_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'mutant_compensator_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'mutant_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 7,
                            stock_id: 3
                        },
                        recoil: 'mutant_compensator_thumb_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'mutant_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'mutant_compensator_vertical_grip_stock.svg',
                    },{
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mutant_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'mutant_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 2,
                            stock_id: 3
                        },
                        recoil: 'mutant_flash_hider_angled_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'mutant_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'mutant_flash_hider_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'mutant_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'mutant_flash_hider_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'mutant_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'mutant_flash_hider_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'mutant_flash_hider_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'mutant_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 7,
                            stock_id: 3
                        },
                        recoil: 'mutant_flash_hider_thumb_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'mutant_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'mutant_flash_hider_vertical_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'mutant_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 3
                        },
                        recoil: 'mutant_half_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'mutant_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 3
                        },
                        recoil: 'mutant_laser_sight_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'mutant_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 3
                        },
                        recoil: 'mutant_light_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 3
                        },
                        recoil: 'mutant_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'mutant_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 3
                        },
                        recoil: 'mutant_thumb_grip_stock.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'mutant_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 3
                        },
                        recoil: 'mutant_vertical_grip_stock.svg',
                    }
                ]
            },
            {
                name: 'QBZ95',
                id: 24,
                icon: 'weapon_qbz95.png',
                image: 'weapon_img_qbz95.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'qbz_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'qbz_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'qbz_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'qbz_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'qbz_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'qbz_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'qbz_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'qbz_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'qbz_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'qbz_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'qbz_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'qbz_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'qbz_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'qbz_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'qbz_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'qbz_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'qbz_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'qbz_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'qbz_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'qbz_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'qbz_vertical_grip.svg',
                    }
                ]
            },
            {
                name: 'SCAR-L',
                id: 25,
                icon: 'weapon_scar_l.png',
                image: 'weapon_img_scar_l.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'scarl_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'scarl_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'scarl_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'scarl_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'scarl_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'scarl_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'scarl_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'scarl_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'scarl_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'scarl_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'scarl_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'scarl_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'scarl_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'scarl_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'scarl_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'scarl_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'scarl_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'scarl_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'scarl_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'scarl_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'scarl_vertical_grip.svg',
                    }
                ]
            },
            {
                name: 'G36C',
                id: 26,
                icon: 'weapon_g36c.png',
                image: 'weapon_img_g36c.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'g36c_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'g36c_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'g36c_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'g36c_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'g36c_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'g36c_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'g36c_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'g36c_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'g36c_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'g36c_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'g36c_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'g36c_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'g36c_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'g36c_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'g36c_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'g36c_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'g36c_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'g36c_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'g36c_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'g36c_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'g36c_vertical_grip.svg',
                    }
                ]
            },
            {
                name: 'AUG A3',
                id: 27,
                icon: 'weapon_aug_a3.png',
                image: 'weapon_img_aug_a3.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'aug_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'aug_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'aug_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'aug_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'aug_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'aug_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'aug_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'aug_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 3,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'aug_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'aug_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'aug_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'aug_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'aug_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'aug_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'aug_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 6,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'aug_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'aug_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'aug_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'aug_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'aug_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'aug_vertical_grip.svg',
                    }
                ]
            },
            {
                name: 'Groza',
                id: 28,
                icon: 'weapon_groza.png',
                image: 'weapon_img_groza.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'groza_bare.svg',
                    }
                ]
            },
        ],
        7: [
            {
                name: 'Mini 14',
                id: 29,
                icon: 'weapon_mini_14.png',
                image: 'weapon_img_mini_14.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mini_14_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mini_14_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mini_14_flash_hider.svg',
                    }
                ]
            },
            {
                name: 'QBU',
                id: 30,
                icon: 'weapon_qbu.png',
                image: 'weapon_img_qbu.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'qbu_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'qbu_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'qbu_flash_hider.svg',
                    }
                ]
            },
            {
                name: 'SKS',
                id: 31,
                icon: 'weapon_sks.png',
                image: 'weapon_img_sks.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'sks_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'sks_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 2,
                            stock_id: 2
                        },
                        recoil: 'sks_angled_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'sks_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'sks_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'sks_compensator_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 2,
                            stock_id: 2
                        },
                        recoil: 'sks_compensator_angled_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'sks_compensator_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'sks_compensator_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 4,
                            stock_id: 2
                        },
                        recoil: 'sks_compensator_half_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'sks_compensator_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 5,
                            stock_id: 2
                        },
                        recoil: 'sks_compensator_laser_sight_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'sks_compensator_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 6,
                            stock_id: 2
                        },
                        recoil: 'sks_compensator_light_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'sks_compensator_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 7,
                            stock_id: 2
                        },
                        recoil: 'sks_compensator_thumb_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'sks_compensator_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 3,
                            stock_id: 2
                        },
                        recoil: 'sks_compensator_vertical_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'sks_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 2,
                            stock_id: 1
                        },
                        recoil: 'sks_flash_hider_angled_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 2,
                            stock_id: 2
                        },
                        recoil: 'sks_flash_hider_angled_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'sks_flash_hider_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'sks_flash_hider_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 4,
                            stock_id: 2
                        },
                        recoil: 'sks_flash_hider_half_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'sks_flash_hider_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 5,
                            stock_id: 2
                        },
                        recoil: 'sks_flash_hider_laser_sight_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'sks_flash_hider_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 6,
                            stock_id: 2
                        },
                        recoil: 'sks_flash_hider_light_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'sks_flash_hider_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 7,
                            stock_id: 2
                        },
                        recoil: 'sks_flash_hider_thumb_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'sks_flash_hider_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 3,
                            stock_id: 2
                        },
                        recoil: 'sks_flash_hider_vertical_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 1
                        },
                        recoil: 'sks_half_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 4,
                            stock_id: 2
                        },
                        recoil: 'sks_half_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 1
                        },
                        recoil: 'sks_laser_sight.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 5,
                            stock_id: 2
                        },
                        recoil: 'sks_laser_sight_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 1
                        },
                        recoil: 'sks_light_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 6,
                            stock_id: 2
                        },
                        recoil: 'sks_light_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 1
                        },
                        recoil: 'sks_thumb_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 7,
                            stock_id: 2
                        },
                        recoil: 'sks_thumb_grip_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 1
                        },
                        recoil: 'sks_vertical_grip.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 3,
                            stock_id: 2
                        },
                        recoil: 'sks_vertical_grip_cheekpad.svg',
                    }
                ]
            },
            {
                name: 'SLR',
                id: 32,
                icon: 'weapon_slr.png',
                image: 'weapon_img_slr.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'slr_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'slr_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'slr_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'slr_compensator_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'slr_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'slr_flash_hider_cheekpad.svg',
                    }
                ]
            },
            {
                name: 'VSS Vintorez',
                id: 33,
                icon: 'weapon_vss.png',
                image: 'weapon_img_vss.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'vss_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'vss_cheekpad.svg',
                    }
                ]
            },
            {
                name: 'Mk14 EBR',
                id: 34,
                icon: 'weapon_mk14_ebr.png',
                image: 'weapon_img_mk14_ebr.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mk14_ebr_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'mk14_ebr_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mk14_ebr_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'mk14_ebr_compensator_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'mk14_ebr_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'mk14_ebr_flash_hider_cheekpad.svg',
                    },
                ]
            },
        ],
        8: [
            {
                name: 'Karabiner 98 Kurz',
                id: 35,
                icon: 'weapon_kar98.png',
                image: 'weapon_img_kar98.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'kar98_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'kar98_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'kar98_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'kar98_compensator_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'kar98_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'kar98_flash_hider_cheekpad.svg',
                    },
                ]
            },
            {
                name: 'M24',
                id: 36,
                icon: 'weapon_m24.png',
                image: 'weapon_img_m24.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm24_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'm24_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm24_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'm24_compensator_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'm24_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'm24_flash_hider_cheekpad.svg',
                    },
                ]
            },
            {
                name: 'AWM',
                id: 37,
                icon: 'weapon_awm.png',
                image: 'weapon_img_awm.png',
                attachments: [
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'awm_bare.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 1,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'awm_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'awm_compensator.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 2,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'awm_compensator_cheekpad.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 1
                        },
                        recoil: 'awm_flash_hider.svg',
                    },
                    {
                        parts: {
                            muzzle_id: 5,
                            lower_rail_id: 1,
                            stock_id: 2
                        },
                        recoil: 'awm_flash_hider_cheekpad.svg',
                    },
                ]
            },
        ]
    }
  });