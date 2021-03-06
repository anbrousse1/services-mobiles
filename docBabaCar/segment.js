/**
 * @api {get} Trajet/id/Segment Obtention de tout les Segment pour un Trajet
 * @apiName GetAllSegmentForOneTrajet
 * @apiGroup Segment
 *
 *
 * @apiSuccess {Trajet} Trajet Trajet contenant le Segment.
 * @apiSuccess {String} commentaire  Commentaire de l'Segment.
 * @apiSuccess {Integer} note  Note de l'Segment.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment",
 *               "fields": {
 *                   "Trajet": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Trajet/RvAHHe6t1ndYvFtucOBU"
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
 *               "name": "projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment/flD5DhbAhkMuoPUQyWNF",
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
 *                   "Trajet": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Trajet/TtmaugyLlkKnJw0AxUGN"
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
 * @api {get} Trajet/id/Segment/id Obtention d'un les Segment pour un Trajet
 * @apiName GetOneSegmentForOneTrajet
 * @apiGroup Segment
 *
 *
 * @apiSuccess {Trajet} Trajet Trajet ayant écrit l'Segment.
 * @apiSuccess {String} commentaire  Commentaire de l'Segment.
 * @apiSuccess {Integer} note  Note de l'Segment.
 * 
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment/flD5DhbAhkMuoPUQyWNF",
 *               "fields": {
 *                   "Trajet": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Trajet/RvAHHe6t1ndYvFtucOBU"
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
 * @api {post} Trajet/id/Segment Ajout d'un Segment
 * @apiName CreateSegment
 * @apiGroup Segment
 *
 * @apiSuccess {Trajet} Trajet Trajet ayant écrit l'Segment.
 * @apiSuccess {String} commentaire  Commentaire de l'Segment.
 * @apiSuccess {Integer} note  Note de l'Segment.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment/flD5DhbAhkMuoPUQyWNF",
 *               "fields": {
 *                   "Trajet": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Trajet/RvAHHe6t1ndYvFtucOBU"
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
 * @apiError TrajetNotFound The id of the Trajet was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TrajetNotFound"
 *     }
 */

 
 /**
 * @api {patch} Trajet/id/Segments/id Modification d'un Trajet
 * @apiName UpdateSegment
 * @apiGroup Segment 
 *
 * @apiSuccess {Trajet} Trajet Trajet ayant écrit l'Segment.
 * @apiSuccess {String} commentaire  Commentaire de l'Segment.
 * @apiSuccess {Integer} note  Note de l'Segment.
 *
 *
* @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {      
 *       "documents": [
 *           {
 *               "name": "projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment/flD5DhbAhkMuoPUQyWNF",
 *               "fields": {
 *                   "Trajet": {
 *                       "referenceValue": "projects/babacar-88701/databases/(default)/documents/Trajet/RvAHHe6t1ndYvFtucOBU"
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
 * @apiError TrajetNotFound The id of the Trajet was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "TrajetNotFound"
 *     }
 * 
 * @apiError SegmentNotFound The id of the Segment was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "SegmentNotFound"
 *     }
 */