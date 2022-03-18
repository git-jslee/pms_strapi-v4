module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '1f672c26f50f39e5b029ae13175721cd'),
  },
});
