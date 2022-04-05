'use strict';

/**
 * sales-history service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::sales-history.sales-history');
