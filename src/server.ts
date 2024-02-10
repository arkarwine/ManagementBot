import { webhookCallback } from 'grammy';
import { bot } from './bot';

addEventListener('fetch', webhookCallback(bot, 'cloudflare'));
