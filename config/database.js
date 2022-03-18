module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '10.10.10.10'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'cwcc_strapi_v4'),
      user: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'Crea0425!@12'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
