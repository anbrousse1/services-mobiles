/**
 * @api {get} Utilisateur/id/Avis Obtention de tout les avis pour un utilisateur
 * @apiName GetAllAvisForOneUtilisateur
 * @apiGroup Avis
 *
 *
 * @apiSuccess {Utilisateur} Utilisateur utilisateur ayant écrit l'avis.
 * @apiSuccess {String} commentaire  Commentaire de l'avis.
 * @apiSuccess {Integer} note  Note de l'avis.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis",
 *               "fields": {
 *                   "Utilisateur": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Utilisateur/RvAHHe6t1ndYvFtucOBU"
 *                   },
 *                   "date": {
 *                        "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "commentaire": {
 *                       "stringValue": "Voyage très sympathique avec mon peitit Anthony"
 *                  },
 *                   "note": {
 *                       "integerValue": "5"
 *                   }
 *               },
 *               "createTime": "2018-01-31T16:05:32.844468Z",
 *               "updateTime": "2018-01-31T16:08:05.774570Z"
 *           },
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis/flD5DhbAhkMuoPUQyWNF",
 *              "fields": {
 *                   "commentaire": {
 *                       "stringValue": "Voyage Bof"
 *                  },
 *                   "note": {
 *                       "integerValue": "1"
 *                   },
 *                   "date": {
 *                       "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "utilisateur": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Utilisateur/TtmaugyLlkKnJw0AxUGN"
 *                   }
 *               },
 *               "createTime": "2018-01-31T16:23:14.322541Z",
 *               "updateTime": "2018-01-31T16:25:27.758381Z"
 *           }
 *       ]
 *     }
 * 
 */

/**
 * @api {get} Utilisateur/id/Avis/id Obtention d'un les avis pour un utilisateur
 * @apiName GetOneAvisForOneUtilisateur
 * @apiGroup Avis
 *
 *
 * @apiSuccess {Utilisateur} Utilisateur utilisateur ayant écrit l'avis.
 * @apiSuccess {String} commentaire  Commentaire de l'avis.
 * @apiSuccess {Integer} note  Note de l'avis.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis/flD5DhbAhkMuoPUQyWNF",
 *               "fields": {
 *                   "Utilisateur": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Utilisateur/RvAHHe6t1ndYvFtucOBU"
 *                   },
 *                   "date": {
 *                        "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "commentaire": {
 *                       "stringValue": "Voyage très sympathique avec mon peitit Anthony"
 *                  },
 *                   "note": {
 *                       "integerValue": "5"
 *                   }
 *               },
 *               "createTime": "2018-01-31T16:05:32.844468Z",
 *               "updateTime": "2018-01-31T16:08:05.774570Z"
 *           }
 *       ]
 *     }
 * 
 */

 
 /**
 * @api {post} Utilisateur/id/Avis Ajout d'un avis
 * @apiName CreateAvis
 * @apiGroup Avis
 *
 * @apiSuccess {Utilisateur} Utilisateur utilisateur ayant écrit l'avis.
 * @apiSuccess {String} commentaire  Commentaire de l'avis.
 * @apiSuccess {Integer} note  Note de l'avis.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis/flD5DhbAhkMuoPUQyWNF",
 *               "fields": {
 *                   "Utilisateur": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Utilisateur/RvAHHe6t1ndYvFtucOBU"
 *                   },
 *                   "date": {
 *                        "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "commentaire": {
 *                       "stringValue": "Voyage très sympathique avec mon peitit Anthony"
 *                  },
 *                   "note": {
 *                       "integerValue": "5"
 *                   }
 *               },
 *               "createTime": "2018-01-31T16:05:32.844468Z",
 *               "updateTime": "2018-01-31T16:08:05.774570Z"
 *           }
 *       ]
 *     }
 * 
 * @apiError UtilisateurNotFound The id of the Utilisateur was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UtilisateurNotFound"
 *     }
 */

 
 /**
 * @api {patch} Utilisateur/id/Avis/id Modification d'un utilisateur
 * @apiName UpdateAvis
 * @apiGroup Avis 
 *
 * @apiSuccess {Utilisateur} Utilisateur utilisateur ayant écrit l'avis.
 * @apiSuccess {String} commentaire  Commentaire de l'avis.
 * @apiSuccess {Integer} note  Note de l'avis.
 *
 *
* @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis/flD5DhbAhkMuoPUQyWNF",
 *               "fields": {
 *                   "Utilisateur": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Utilisateur/RvAHHe6t1ndYvFtucOBU"
 *                   },
 *                   "date": {
 *                        "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "commentaire": {
 *                       "stringValue": "Voyage très sympathique avec mon peitit Anthony"
 *                  },
 *                   "note": {
 *                       "integerValue": "5"
 *                   }
 *               },
 *               "createTime": "2018-01-31T16:05:32.844468Z",
 *               "updateTime": "2018-01-31T16:08:05.774570Z"
 *           }
 *       ]
 *     }
 * 
 * @apiError UtilisateurNotFound The id of the Utilisateur was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UtilisateurNotFound"
 *     }
 * 
 * @apiError AVISNotFound The id of the Avis was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "AvisNotFound"
 *     }
 */