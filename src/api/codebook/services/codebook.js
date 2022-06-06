'use strict';

/**
 * codebook service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::codebook.codebook');
