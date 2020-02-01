A
                name: 'After 2 minutes'
            }, {
                value: '300',
                name: 'After 5 minutes'
            }, {
                value: '600',
                name: 'After 10 minutes'
            }, {
                value: '900',
                name: 'After 15 minutes'
            }]
        }))['append'](FormBuilder['button']({
            name: DM['getl10n']('notes')['btn_save'],
            style: 'top: 120px;'
        })['on']('click', function() {
            var _0x8bc3x2 = $('#Assistant_settings')['serializeObject']();
            Assistant['settings']['town_names'] = _0x8bc3x2['assistant_town_names'] != undefined;
            Assistant['settings']['player_name'] = _0x8bc3x2['assistant_player_names'] != undefined;
            Assistant['settings']['alliance_name'] = _0x8bc3x2['assistant_alliance_names'] != undefined;
            Assistant['settings']['auto_relogin'] = parseInt(_0x8bc3x2['assistant_auto_relogin']);
            HumanMessage.success('The settings were saved!');
            Assistant.initSettings();

        }))
    },
}
