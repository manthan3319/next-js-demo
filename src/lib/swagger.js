const swaggerJsDocs = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.0", 
    info: {
      title: "My Project API Documentation",
      version: "1.0.0",
      description: "All API endpoints",
      contact: {
        name: "Manthan Vaghasiya",
      },
    },
    servers: [
      {
        url: "http://localhost:3000", 
        description: "Local server",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ["./src/app/api/**/*.js"], 
};

const swaggerSpec = swaggerJsDocs(swaggerOptions);

module.exports = swaggerSpec;
