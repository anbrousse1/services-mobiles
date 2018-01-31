/**
 * @api {get} Trajet Obtention de tout les trajets
 * @apiName GetAllTrajet
 * @apiGroup Trajet
 *
 *
 * @apiSuccess {Integer} nb-place Nombre de place disponible pour le trajet.
 * @apiSuccess {timestampValue} date  Date du trajet
 * @apiSuccess {String} remarque  Remarque concernant le trajet
 * @apiSuccess {Integer} prix  Prix du trajet
 * @apiSuccess {Conducteur} conducteur  conducteur du trajet
 * 
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q",
 *               "fields": {
 *                   "nb-place": {
 *                       "integerValue": "0"
 *                   },
 *                   "date": {
 *                       "timestampValue": "2018-01-25T14:00:00Z"
 *                   },
 *                   "remarque": {
 *                      "stringValue": ""
 *                   },
 *                   "prix": {
 *                       "integerValue": "20"
 *                   },
 *                   "conducteur": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Conducteur/0bYWCLnc47awsLMJ17wK"
 *                   }
 *               },
 *               "createTime": "2018-01-17T14:49:33.751636Z",
 *               "updateTime": "2018-01-24T16:02:48.830770Z"       
 *           
 *           }
 *       ]
 *   }
 *
 */

 /**
 * @api {get} Trajet/id Obtention d'un Trajet
 * @apiName GetTrajet
 * @apiGroup Trajet
 *
 * @apiParam {String} id Trajet unique ID.
 *
 * @apiSuccess {Integer} nb-place Nombre de place disponible pour le trajet.
 * @apiSuccess {timestampValue} date  Date du trajet
 * @apiSuccess {String} remarque  Remarque concernant le trajet
 * @apiSuccess {Integer} prix  Prix du trajet
 * @apiSuccess {Conducteur} conducteur  conducteur du trajet
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q",
 *               "fields": {
 *                   "nb-place": {
 *                       "integerValue": "0"
 *                   },
 *                   "date": {
 *                       "timestampValue": "2018-01-25T14:00:00Z"
 *                   },
 *                   "remarque": {
 *                      "stringValue": ""
 *                   },
 *                   "prix": {
 *                       "integerValue": "20"
 *                   },
 *                   "conducteur": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Conducteur/0bYWCLnc47awsLMJ17wK"
 *                   }
 *               },
 *               "createTime": "2018-01-17T14:49:33.751636Z",
 *               "updateTime": "2018-01-24T16:02:48.830770Z"       
 *           
 *           }
 *       ]
 *   }
 *
 * @apiError TrajetNotFound The id of the Trajet was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *           "error": {
 *           "code": 404,
 *           "message": "Document \"projects/babacar-88701/databases/(default)/documents/Trajet/ffdfsd\" not found.",
 *           "status": "NOT_FOUND"
 *           }
 *       }
 */

 
 /**
 * @api {post} Trajet Ajout d'un Trajet
 * @apiName AddTrajet
 * @apiGroup Trajet
 *
 * @apiParam {String} id Trajet unique ID.
 *
 * @apiSuccess {Integer} nb-place Nombre de place disponible pour le trajet.
 * @apiSuccess {timestampValue} date  Date du trajet
 * @apiSuccess {String} remarque  Remarque concernant le trajet
 * @apiSuccess {Integer} prix  Prix du trajet
 * @apiSuccess {Conducteur} conducteur  conducteur du trajet
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q",
 *               "fields": {
 *                   "nb-place": {
 *                       "integerValue": "0"
 *                   },
 *                   "date": {
 *                       "timestampValue": "2018-01-25T14:00:00Z"
 *                   },
 *                   "remarque": {
 *                      "stringValue": ""
 *                   },
 *                   "prix": {
 *                       "integerValue": "20"
 *                   },
 *                   "conducteur": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Conducteur/0bYWCLnc47awsLMJ17wK"
 *                   }
 *               },
 *               "createTime": "2018-01-17T14:49:33.751636Z",
 *               "updateTime": "2018-01-24T16:02:48.830770Z"       
 *           
 *           }
 *       ]
 *   }
 *
 */

 
 /**
 * @api {patch} Trajet Modification d'un Trajet
 * @apiName PutTrajet
 * @apiGroup Trajet
 *
 * @apiParam {String} id Trajet unique ID.
 *
 * @apiSuccess {Integer} nb-place Nombre de place disponible pour le trajet.
 * @apiSuccess {timestampValue} date  Date du trajet
 * @apiSuccess {String} remarque  Remarque concernant le trajet
 * @apiSuccess {Integer} prix  Prix du trajet
 * @apiSuccess {Conducteur} conducteur  conducteur du trajet
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError TrajetNotFound The id of the Trajet was not found.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q",
 *               "fields": {
 *                   "nb-place": {
 *                       "integerValue": "0"
 *                   },
 *                   "date": {
 *                       "timestampValue": "2018-01-25T14:00:00Z"
 *                   },
 *                   "remarque": {
 *                      "stringValue": ""
 *                   },
 *                   "prix": {
 *                       "integerValue": "20"
 *                   },
 *                   "conducteur": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Conducteur/0bYWCLnc47awsLMJ17wK"
 *                   }
 *               },
 *               "createTime": "2018-01-17T14:49:33.751636Z",
 *               "updateTime": "2018-01-24T16:02:48.830770Z"       
 *           
 *           }
 *       ]
 *   }
 *
 * @apiError TrajetNotFound The id of the Trajet was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *    {
 *           "error": {
 *           "code": 404,
 *           "message": "Document \"projects/babacar-88701/databases/(default)/documents/Trajet/ffdfsd\" not found.",
 *           "status": "NOT_FOUND"
 *           }
 *       }
 */