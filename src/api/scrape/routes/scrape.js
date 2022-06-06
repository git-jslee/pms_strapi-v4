'use strict';

/**
 * scrape router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::scrape.scrape');
