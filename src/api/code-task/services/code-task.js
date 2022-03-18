'use strict';

/**
 * code-task service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::code-task.code-task');
