'use strict';

/**
 * maintenance-history service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maintenance-history.maintenance-history');
