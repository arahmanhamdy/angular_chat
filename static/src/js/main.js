odoo.define('angular_chat.main', function (require) {
"use strict";
var core = require('web.core');
var AbstractAction = require('web.AbstractAction');
var ChatMain = AbstractAction.extend({
    template: 'ChatPageTemplate',
});
core.action_registry.add('angular_chat.mainpage', ChatMain);
return ChatMain
});
