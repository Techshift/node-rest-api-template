/**
 * @swagger
 * components:
 *   parameters:
 *     limitQueryParam:
 *       name: limit
 *       in: query
 *       schema:
 *         type: integer
 *         minimum: 0
 *         maximum: 50
 *         default: 25
 *       description: The number of items to return.
 *       required: false
 *     skipQueryParam:
 *       name: skip
 *       in: query
 *       schema:
 *         type: integer
 *         minimum: 0
 *         default: 0
 *       description: The offset.
 *       required: false
 *     sectionIdQueryParam:
 *       name: sectionId
 *       in: query
 *       schema:
 *         type: string
 *       description: The section id
 *       required: false
 *     companyIdQueryParam:
 *       name: companyId
 *       in: query
 *       schema:
 *         type: string
 *       description: The company id
 *       required: false
 */
