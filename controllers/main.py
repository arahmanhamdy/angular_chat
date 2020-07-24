# -*- coding: utf-8 -*-
from odoo import http


class MainPage(http.Controller):
    @http.route('/chat', type='http', auth='user', website=True)
    def render_main_page(self):
        return http.request.render('angular_chat.chat_main_page', {})
