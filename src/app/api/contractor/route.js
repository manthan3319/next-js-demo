// pages/api/contractor/route.js
import { Joi } from "../../../lib/utilities/schemaValidate";
import { addContractor } from "../../../lib/services/contractor";
import { NextResponse } from "next/server"; 

/**
 * @swagger
 * /api/contractor:
 *   post:
 *     summary: Add a contractor
 *     description: This endpoint is used to add a new contractor to the system.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 description: The email address of the contractor
 *               password:
 *                 type: string
 *                 description: The password for the contractor
 *     responses:
 *       200:
 *         description: Contractor added successfully
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Internal server error
 */

const dataSchema = Joi.object({
  email: Joi.string().required().label("email"),
  password: Joi.string().required("password"),
});

export async function POST(req) {
  try {
    const body = await req.json();

    const { error } = dataSchema.validate(body);
    if (error) {
      console.error("Validation error:", error.details[0].message);
      return NextResponse.json(
        { message: error.details[0].message.toString().replace(/[\""]+/g, "") },
        { status: 400 }
      );
    }

    const result = await addContractor(body);

    return NextResponse.json({
      message: "Contractor added successfully",
      data: result,
    });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
