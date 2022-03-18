'use strict';

/**
 * code-service router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::code-service.code-service');
