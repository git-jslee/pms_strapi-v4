'use strict';

/**
 *  scrape controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::scrape.scrape');
