/**
 * @api {get} Utilisateur Obtention de tout les utilisateurs
 * @apiName GetAllUtilisateur
 * @apiGroup Utilisateur
 *
 *
 * @apiSuccess {String} Nom Nom de l'utilisateur.
 * @apiSuccess {String} Prenom  Prénom de l'utilisateur.
 * @apiSuccess {String} telephone  Téléphone de l'utilisateur.
 * @apiSuccess {String} mail  Mail de l'utilisateur.
 * @apiSuccess {TimeStampValue} ddn  Date de naissance de l'utilisateur.
 * @apiSuccess {String} mdp  Mot de passe de l'utilisateur.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw",
 *               "fields": {
 *                   "mdp": {
 *                       "stringValue": "anthony"
 *                   },
 *                   "ddn": {
 *                       "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "telephone": {
 *                       "stringValue": "0585957841"
 *                   },
 *                   "Nom": {
 *                       "stringValue": "Brousse"
 *                   },
 *                   "Prenom": {
 *                       "stringValue": "Antho"
 *                   },
 *                   "mail": {
 *                       "stringValue": "anthobrousse@live.com"
 *                   }
 *               },
 *               "createTime": "2018-01-31T15:12:44.965252Z",
 *               "updateTime": "2018-01-31T15:39:59.269147Z"
 *           },
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/NEOM3HM5nKe7ybHN9ZhN",
 *               "fields": {
 *                   "ddn": {
 *                       "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "telephone": {
 *                       "stringValue": "0523526545"
 *                   },
 *                   "nom": {
 *                       "stringValue": "Bob"
 *                   },
 *                   "prenom": {
 *                       "stringValue": "BABAR"
 *                   },
 *                   "mail": {
 *                       "stringValue": "bab@live.fr"
 *                   },
 *                   "mdp": {
 *                       "stringValue": "123456"
 *                   }
 *               },
 *               "createTime": "2018-01-31T15:34:37.721486Z",
 *               "updateTime": "2018-01-31T15:34:37.721486Z"
 *           }
 *     }
 * 
 */

 /**
 * @api {get} Utilisateur/id Obtention d'un utilisateur
 * @apiName GetUtilisateur
 * @apiGroup Utilisateur
 *
 * @apiParam {String} id Utilisateur unique ID.
 *
 * @apiSuccess {String} Nom Nom de l'utilisateur.
 * @apiSuccess {String} Prenom  Prénom de l'utilisateur.
 * @apiSuccess {String} telephone  Téléphone de l'utilisateur.
 * @apiSuccess {String} mail  Mail de l'utilisateur.
 * @apiSuccess {String} ddn  Date de naissance de l'utilisateur.
 * @apiSuccess {String} mdp  Mot de passe de l'utilisateur.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw",
 *               "fields": {
 *                   "mdp": {
 *                       "stringValue": "anthony"
 *                   },
 *                   "ddn": {
 *                       "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "telephone": {
 *                       "stringValue": "0585957841"
 *                   },
 *                   "Nom": {
 *                       "stringValue": "Brousse"
 *                   },
 *                   "Prenom": {
 *                       "stringValue": "Antho"
 *                   },
 *                   "mail": {
 *                       "stringValue": "anthobrousse@live.com"
 *                   }
 *               },
 *               "createTime": "2018-01-31T15:12:44.965252Z",
 *               "updateTime": "2018-01-31T15:39:59.269147Z"
 *           }
 *     }
 *
 * @apiError UtilisateurNotFound The id of the Utilisateur was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
       {
           "error": {
        "code": 404,
        "message": "Document \"projects/babacar-88701/databases/(default)/documents/Utilisateur/TtmaugyLlkKnJw0\" not found.",
        "status": "NOT_FOUND"
    }
       } 
 */

 
 /**
 * @api {post} Utilisateur Ajout d'un utilisateur
 * @apiName AddUtilisateur
 * @apiGroup Utilisateur
 *
 * @apiParam {String} id Utilisateur unique ID.
 *
 * @apiSuccess {String} Nom Nom de l'utilisateur.
 * @apiSuccess {String} Prenom  Prénom de l'utilisateur.
 * @apiSuccess {String} telephone  Téléphone de l'utilisateur.
 * @apiSuccess {String} mail  Mail de l'utilisateur.
 * @apiSuccess {String} ddn  Date de naissance de l'utilisateur.
 * @apiSuccess {String} mdp  Mot de passe de l'utilisateur.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw",
 *               "fields": {
 *                   "mdp": {
 *                       "stringValue": "anthony"
 *                   },
 *                   "ddn": {
 *                       "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "telephone": {
 *                       "stringValue": "0585957841"
 *                   },
 *                   "Nom": {
 *                       "stringValue": "Brousse"
 *                   },
 *                   "Prenom": {
 *                       "stringValue": "Antho"
 *                   },
 *                   "mail": {
 *                       "stringValue": "anthobrousse@live.com"
 *                   }
 *               },
 *               "createTime": "2018-01-31T15:12:44.965252Z",
 *               "updateTime": "2018-01-31T15:39:59.269147Z"
 *           }
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
 * @api {patch} Utilisateur Modification d'un utilisateur
 * @apiName PutUtilisateur
 * @apiGroup Utilisateur
 *
 * @apiParam {String} id Utilisateur unique ID.
 *
  * @apiSuccess {String} Nom Nom de l'utilisateur.
 * @apiSuccess {String} Prenom  Prénom de l'utilisateur.
 * @apiSuccess {String} telephone  Téléphone de l'utilisateur.
 * @apiSuccess {String} mail  Mail de l'utilisateur.
 * @apiSuccess {String} ddn  Date de naissance de l'utilisateur.
 * @apiSuccess {String} mdp  Mot de passe de l'utilisateur.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw",
 *               "fields": {
 *                   "mdp": {
 *                       "stringValue": "anthony"
 *                   },
 *                   "ddn": {
 *                       "timestampValue": "2018-01-14T23:00:00Z"
 *                   },
 *                   "telephone": {
 *                       "stringValue": "0585957841"
 *                   },
 *                   "Nom": {
 *                       "stringValue": "Brousse"
 *                   },
 *                   "Prenom": {
 *                       "stringValue": "Antho"
 *                   },
 *                   "mail": {
 *                       "stringValue": "anthobrousse@live.com"
 *                   }
 *               },
 *               "createTime": "2018-01-31T15:12:44.965252Z",
 *               "updateTime": "2018-01-31T15:39:59.269147Z"
 *           }
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