/**
 * @api {get} Passager Obtention de tout les Passagers
 * @apiName GetAllPassager
 * @apiGroup Passager
 *
 * @apiParam {String} id Passager unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError PassagerNotFound The id of the Passager was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PassagerNotFound"
 *     }
 */

 /**
 * @api {get} Passager/id Obtention d'un Passager
 * @apiName GetPassager
 * @apiGroup Passager
 *
 * @apiParam {String} id Passager unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError PassagerNotFound The id of the Passager was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PassagerNotFound"
 *     }
 */

 
 /**
 * @api {post} Passager Ajout d'un Passager
 * @apiName AddPassager
 * @apiGroup Passager
 *
 * @apiParam {String} id Passager unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError PassagerNotFound The id of the Passager was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "PassagerNotFound"
 *     }
 */

 
 /**
 * @api {patch} Passager Modification d'un Passager
 * @apiName PutPassager
 * @apiGroup Passager
 *
 * @apiParam {String} id Passager unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError PassagerNotFound The id of the Passager was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Passager NotFound"
 *     }
 */