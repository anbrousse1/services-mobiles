/**
 * @api {get} Trajet/id_trajet/Segments/id_segment/Passagers/ Obtention de tout les Passagers d'un segment
 * @apiName GetAllPassagerForOneSegment
 * @apiGroup Passager
 *
 * @apiParam {String} id Passager unique ID.
 *
 * @apiSuccess {Utilisateur} utilisateur Utilisateur * @api {get} Trajet/id_trajet/Segments/id_segment/Passagers/ Obtention de tout les Passagers d'un segment
 * @apiName GetAllPassagerForOneSegment
 * @apiGroup Passager
 *
 * @apiParam {String} id Passager unique ID.
 *
 * @apiSuccess {Utilisateur} utilisateur Utilisateur
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *   "documents": [
 *       {
 *           "name": "projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q/Segments/06Vp6L8ckkbxekSw94Fe/Passagers/fZMoyhuau3ve12b0LfZC",
 *           "fields": {
 *               "Utilisateur": {
 *                   "referenceValue": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw"
 *               }
 *           },
 *           "createTime": "2018-02-07T15:45:06.862550Z",
 *           "updateTime": "2018-02-14T14:54:30.305046Z"
 *       }
 *      ]
 *    }
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
 * @api {get} Trajet/id_trajet/Segments/id_segment/Passagers/id_passager Obtention d'un passager pour un segment donné
 * @apiName GetPassagerForOneSegment
 * @apiGroup Passager
 *
 * @apiParam {String} id Passager unique ID.
 *
 * @apiSuccess {Utilisateur} utilisateur Utilisateur
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *   "documents": [
 *       {
 *           "name": "projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q/Segments/06Vp6L8ckkbxekSw94Fe/Passagers/fZMoyhuau3ve12b0LfZC",
 *           "fields": {
 *               "Utilisateur": {
 *                   "referenceValue": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw"
 *               }
 *           },
 *           "createTime": "2018-02-07T15:45:06.862550Z",
 *           "updateTime": "2018-02-14T14:54:30.305046Z"
 *       }
 *      ]
 *    }
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
 * @api {post} Trajet/id_trajet/Segments/id_segment/Passagers/ Ajout d'un passager pour un segment
 * @apiName GetAllPassagerForOneSegment
 * @apiGroup Passager
 *
 * @apiParam {String} id Passager unique ID.
 *
 * @apiSuccess {Utilisateur} utilisateur Utilisateur
 *
  *     HTTP/1.1 200 OK
 *    {
 *   "documents": [
 *       {
 *           "name": "projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q/Segments/06Vp6L8ckkbxekSw94Fe/Passagers/fZMoyhuau3ve12b0LfZC",
 *           "fields": {
 *               "Utilisateur": {
 *                   "referenceValue": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw"
 *               }
 *           },
 *           "createTime": "2018-02-07T15:45:06.862550Z",
 *           "updateTime": "2018-02-14T14:54:30.305046Z"
 *       }
 *      ]
 *    }
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
 * @api {patch} Trajet/id_trajet/Segments/id_segment/Passagers/ Ajout d'un passager pour un segment
 * @apiName GetAllPassagerForOneSegment
 * @apiGroup Passager
 *
 * @apiParam {String} id Passager unique ID.
 *
 * @apiSuccess {Utilisateur} utilisateur Utilisateur
 *
  *     HTTP/1.1 200 OK
 *    {
 *   "documents": [
 *       {
 *           "name": "projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q/Segments/06Vp6L8ckkbxekSw94Fe/Passagers/fZMoyhuau3ve12b0LfZC",
 *           "fields": {
 *               "Utilisateur": {
 *                   "referenceValue": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw"
 *               }
 *           },
 *           "createTime": "2018-02-07T15:45:06.862550Z",
 *           "updateTime": "2018-02-14T14:54:30.305046Z"
 *       }
 *      ]
 *    }
 */