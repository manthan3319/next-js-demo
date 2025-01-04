import { NextResponse } from "next/server";

const swaggerHtml = `
<!DOCTYPE html>
<html>
  <head>
    <title>API Documentation</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.2/swagger-ui.css" />
  </head>
  <body>
    <div id="swagger-ui"></div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.2/swagger-ui-bundle.js"></script>
    <script>
      window.onload = function () {
        SwaggerUIBundle({
          url: "/api/docs-json", // Swagger JSON endpoint
          dom_id: "#swagger-ui",
        });
      };
    </script>
  </body>
</html>
`;

export async function GET() {
  return new NextResponse(swaggerHtml, { headers: { "Content-Type": "text/html" } });
}
