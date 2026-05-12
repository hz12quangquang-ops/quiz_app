import swaggerUi from "swagger-ui-express";

const swaggerDocument = {
  openapi: "3.0.0",

  info: {
    title: "Quiz App API",
    version: "3.0.0",
    description: "Online Quiz System API Documentation",
  },

  servers: [
    {
      url: "http://localhost:5001",
    },
  ],

  paths: {
    // =========================================
    // AUTH
    // =========================================
    "/api/auth/register": {
      post: {
        summary: "Register User",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  name: {
                    type: "string",
                    example: "Quang",
                  },
                  email: {
                    type: "string",
                    example: "quang@gmail.com",
                  },
                  password: {
                    type: "string",
                    example: "123456",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Register successfully",
          },
        },
      },
    },

    "/api/auth/login": {
      post: {
        summary: "Login User",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  email: {
                    type: "string",
                    example: "quang@gmail.com",
                  },
                  password: {
                    type: "string",
                    example: "123456",
                  },
                },
              },
            },
          },
        },
        responses: {
          200: {
            description: "Login successfully",
          },
        },
      },
    },

    // =========================================
    // USER EXAMS
    // =========================================
    "/api/user/exams": {
      get: {
        summary: "Get All Exams",
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },

    "/api/user/exams/timer/{id}": {
      get: {
        summary: "Get Exam Timer",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },

    "/api/user/exams/{id}/random": {
      get: {
        summary: "Get Random Questions",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },

    // =========================================
    // USER RESULTS
    // =========================================
    "/api/user/results/submit": {
      post: {
        summary: "Submit Exam",

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  examId: {
                    type: "integer",
                    example: 1,
                  },

                  answers: {
                    type: "array",
                    example: [
                      {
                        questionId: 1,
                        answer: "A",
                      },
                      {
                        questionId: 2,
                        answer: "B",
                      },
                    ],
                  },
                },
              },
            },
          },
        },

        responses: {
          200: {
            description: "Submit successfully",
          },
        },
      },
    },

    "/api/user/results": {
      get: {
        summary: "Get My Results",
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },

    // =========================================
    // USER PROFILE
    // =========================================
    "/api/user/profile/upload-avatar": {
      post: {
        summary: "Upload Avatar",
        responses: {
          200: {
            description: "Upload successfully",
          },
        },
      },
    },

    "/api/user/profile/change-password": {
      put: {
        summary: "Change Password (User Only)",

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  oldPassword: {
                    type: "string",
                    example: "123456",
                  },
                  newPassword: {
                    type: "string",
                    example: "654321",
                  },
                },
              },
            },
          },
        },

        responses: {
          200: {
            description: "Password changed successfully",
          },
        },
      },
    },

    // =========================================
    // ADMIN EXAMS
    // =========================================
    "/api/admin/exams": {
      get: {
        summary: "Get All Exams (Admin)",
        responses: {
          200: {
            description: "Success",
          },
        },
      },

      post: {
        summary: "Create Exam",

        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  title: {
                    type: "string",
                    example: "JavaScript Quiz",
                  },
                  description: {
                    type: "string",
                    example: "Basic JS Quiz",
                  },
                  timeLimit: {
                    type: "integer",
                    example: 30,
                  },
                },
              },
            },
          },
        },

        responses: {
          201: {
            description: "Created",
          },
        },
      },
    },

    "/api/admin/exams/search": {
      get: {
        summary: "Search Exams",
        parameters: [
          {
            name: "q",
            in: "query",
            required: true,
            schema: {
              type: "string",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },

    "/api/admin/exams/{id}": {
      put: {
        summary: "Update Exam",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Updated",
          },
        },
      },

      delete: {
        summary: "Delete Exam",
        parameters: [
          {
            name: "id",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Deleted",
          },
        },
      },
    },

    // =========================================
    // ADMIN QUESTIONS
    // =========================================
    "/api/admin/questions": {
      post: {
        summary: "Create Question",
        responses: {
          201: {
            description: "Created",
          },
        },
      },
    },

    "/api/admin/questions/exam/{examId}": {
      get: {
        summary: "Get Questions By Exam",
        parameters: [
          {
            name: "examId",
            in: "path",
            required: true,
            schema: {
              type: "integer",
            },
          },
        ],
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },

    // =========================================
    // ADMIN RESULTS
    // =========================================
    "/api/admin/results": {
      get: {
        summary: "Get All Results",
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },

    "/api/admin/results/dashboard": {
      get: {
        summary: "Dashboard Statistics",
        responses: {
          200: {
            description: "Success",
          },
        },
      },
    },
  },
};

export const swaggerDocs = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
