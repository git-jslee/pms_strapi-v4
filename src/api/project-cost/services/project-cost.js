'use strict';

/**
 * project-cost service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::project-cost.project-cost');
