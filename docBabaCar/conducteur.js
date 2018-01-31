/**
 * @api {get} Conducteur Obtention de tout les Conducteurs
 * @apiName GetAllConducteur
 * @apiGroup Conducteur
 *
 * @apiParam {String} id Conducteur unique ID.
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
 * @apiError ConducteurNotFound The id of the Conducteur was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ConducteurNotFound"
 *     }
 */

 /**
 * @api {get} Conducteur/id Obtention d'un Conducteur
 * @apiName GetConducteur
 * @apiGroup Conducteur
 *
 * @apiParam {String} id Conducteur unique ID.
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
 * @apiError ConducteurNotFound The id of the Conducteur was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ConducteurNotFound"
 *     }
 */

 
 /**
 * @api {post} Conducteur Ajout d'un Conducteur
 * @apiName AddConducteur
 * @apiGroup Conducteur
 *
 * @apiParam {String} id Conducteur unique ID.
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
 * @apiError ConducteurNotFound The id of the Conducteur was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "ConducteurNotFound"
 *     }
 */

 
 /**
 * @api {patch} Conducteur Modification d'un Conducteur
 * @apiName PutConducteur
 * @apiGroup Conducteur
 *
 * @apiParam {String} id Conducteur unique ID.
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
 * @apiError ConducteurNotFound The id of the Conducteur was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Conducteur NotFound"
 *     }
 */