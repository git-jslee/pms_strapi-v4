'use strict';

/**
 * scrape-review service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::scrape-review.scrape-review');
