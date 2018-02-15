/**
 * @api {get} Utilisateur/id/Vehicule Obtention de tout les Vehicules
 * @apiName GetAllVehiculeForOneUtilisateur
 * @apiGroup Vehicule
 *
 * @apiParam {String} id Vehicule unique ID.
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
 * @apiError VehiculeNotFound The id of the Vehicule was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "VehiculeNotFound"
 *     }
 */

 /**
 * @api {get} Utilisateur/id/Vehicule/id Obtention d'un Vehicule
 * @apiName GetVehiculeForOneUtilisateur
 * @apiGroup Vehicule
 *
 * @apiParam {String} id Vehicule unique ID.
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
 * @apiError VehiculeNotFound The id of the Vehicule was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "VehiculeNotFound"
 *     }
 */

 
 /**
 * @api {post} Utilisateur/id/Vehicule Ajout d'un Vehicule
 * @apiName AddVehiculeForOneUtilisateur
 * @apiGroup Vehicule
 *
 * @apiParam {String} id Vehicule unique ID.
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
 * @apiError VehiculeNotFound The id of the Vehicule was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "VehiculeNotFound"
 *     }
 */

 
 /**
 * @api {patch} Utilisateur/id/Vehicule Modification d'un Vehicule
 * @apiName PutVehicule
 * @apiGroup Vehicule
 *
 * @apiParam {String} id Vehicule unique ID.
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
 * @apiError VehiculeNotFound The id of the Vehicule was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Vehicule NotFound"
 *     }
 */