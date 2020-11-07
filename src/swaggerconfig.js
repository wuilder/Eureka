const swaggerDefinition  = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Eureka Heroes API",
      description: "Marvel Heroes",
    },
    host: 'localhost:5000',
    basePath: '/',
  },
  apis: ['src/routs/*.js', 'src/models/*.js']
};

module.exports = swaggerDefinition;