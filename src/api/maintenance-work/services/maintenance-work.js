'use strict';

/**
 * maintenance-work service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::maintenance-work.maintenance-work');
