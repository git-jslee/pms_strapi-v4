'use strict';

/**
 * code-service service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::code-service.code-service');
