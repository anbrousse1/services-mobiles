define({ "api": [
  {
    "type": "post",
    "url": "Utilisateur/id/Avis",
    "title": "Ajout d'un avis",
    "name": "CreateAvis",
    "group": "Avis",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Utilisateur",
            "optional": false,
            "field": "Utilisateur",
            "description": "<p>utilisateur ayant écrit l'avis.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commentaire",
            "description": "<p>Commentaire de l'avis.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "note",
            "description": "<p>Note de l'avis.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis/flD5DhbAhkMuoPUQyWNF\",\n          \"fields\": {\n              \"Utilisateur\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/RvAHHe6t1ndYvFtucOBU\"\n              },\n              \"date\": {\n                   \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage très sympathique avec mon peitit Anthony\"\n             },\n              \"note\": {\n                  \"integerValue\": \"5\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:05:32.844468Z\",\n          \"updateTime\": \"2018-01-31T16:08:05.774570Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurNotFound",
            "description": "<p>The id of the Utilisateur was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UtilisateurNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/avis.js",
    "groupTitle": "Avis"
  },
  {
    "type": "get",
    "url": "Utilisateur/id/Avis",
    "title": "Obtention de tout les avis pour un utilisateur",
    "name": "GetAllAvisForOneUtilisateur",
    "group": "Avis",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Utilisateur",
            "optional": false,
            "field": "Utilisateur",
            "description": "<p>utilisateur ayant écrit l'avis.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commentaire",
            "description": "<p>Commentaire de l'avis.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "note",
            "description": "<p>Note de l'avis.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis\",\n          \"fields\": {\n              \"Utilisateur\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/RvAHHe6t1ndYvFtucOBU\"\n              },\n              \"date\": {\n                   \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage très sympathique avec mon peitit Anthony\"\n             },\n              \"note\": {\n                  \"integerValue\": \"5\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:05:32.844468Z\",\n          \"updateTime\": \"2018-01-31T16:08:05.774570Z\"\n      },\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis/flD5DhbAhkMuoPUQyWNF\",\n         \"fields\": {\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage Bof\"\n             },\n              \"note\": {\n                  \"integerValue\": \"1\"\n              },\n              \"date\": {\n                  \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"utilisateur\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/TtmaugyLlkKnJw0AxUGN\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:23:14.322541Z\",\n          \"updateTime\": \"2018-01-31T16:25:27.758381Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/avis.js",
    "groupTitle": "Avis"
  },
  {
    "type": "get",
    "url": "Utilisateur/id/Avis/id",
    "title": "Obtention d'un les avis pour un utilisateur",
    "name": "GetOneAvisForOneUtilisateur",
    "group": "Avis",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Utilisateur",
            "optional": false,
            "field": "Utilisateur",
            "description": "<p>utilisateur ayant écrit l'avis.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commentaire",
            "description": "<p>Commentaire de l'avis.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "note",
            "description": "<p>Note de l'avis.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis/flD5DhbAhkMuoPUQyWNF\",\n          \"fields\": {\n              \"Utilisateur\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/RvAHHe6t1ndYvFtucOBU\"\n              },\n              \"date\": {\n                   \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage très sympathique avec mon peitit Anthony\"\n             },\n              \"note\": {\n                  \"integerValue\": \"5\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:05:32.844468Z\",\n          \"updateTime\": \"2018-01-31T16:08:05.774570Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/avis.js",
    "groupTitle": "Avis"
  },
  {
    "type": "patch",
    "url": "Utilisateur/id/Avis/id",
    "title": "Modification d'un utilisateur",
    "name": "UpdateAvis",
    "group": "Avis",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Utilisateur",
            "optional": false,
            "field": "Utilisateur",
            "description": "<p>utilisateur ayant écrit l'avis.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commentaire",
            "description": "<p>Commentaire de l'avis.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "note",
            "description": "<p>Note de l'avis.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw/Avis/flD5DhbAhkMuoPUQyWNF\",\n          \"fields\": {\n              \"Utilisateur\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/RvAHHe6t1ndYvFtucOBU\"\n              },\n              \"date\": {\n                   \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage très sympathique avec mon peitit Anthony\"\n             },\n              \"note\": {\n                  \"integerValue\": \"5\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:05:32.844468Z\",\n          \"updateTime\": \"2018-01-31T16:08:05.774570Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurNotFound",
            "description": "<p>The id of the Utilisateur was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AVISNotFound",
            "description": "<p>The id of the Avis was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UtilisateurNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"AvisNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/avis.js",
    "groupTitle": "Avis"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "../docBabaCar/apidoc/main.js",
    "group": "C__Users_Anthony_Desktop_services_mobiles_docBabaCar_apidoc_main_js",
    "groupTitle": "C__Users_Anthony_Desktop_services_mobiles_docBabaCar_apidoc_main_js",
    "name": ""
  },
  {
    "type": "post",
    "url": "Localisation",
    "title": "Ajout d'une Localisation",
    "name": "AddLocalisation",
    "group": "Localisation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Localisation unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LocalisationNotFound",
            "description": "<p>The id of the Localisation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LocalisationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/localisation.js",
    "groupTitle": "Localisation"
  },
  {
    "type": "get",
    "url": "Localisation",
    "title": "Obtention de toutes les localisations",
    "name": "GetAllLocalisation",
    "group": "Localisation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Localisation unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LocalisationNotFound",
            "description": "<p>The id of the Localisation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LocalisationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/localisation.js",
    "groupTitle": "Localisation"
  },
  {
    "type": "get",
    "url": "Localisation/id",
    "title": "Obtention d'une Localisation",
    "name": "GetLocalisation",
    "group": "Localisation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Localisation unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LocalisationNotFound",
            "description": "<p>The id of the Localisation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LocalisationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/localisation.js",
    "groupTitle": "Localisation"
  },
  {
    "type": "patch",
    "url": "Localisation",
    "title": "Modification d'une Localisation",
    "name": "PutLocalisation",
    "group": "Localisation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Localisation unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "LocalisationNotFound",
            "description": "<p>The id of the Localisation was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"LocalisationNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/localisation.js",
    "groupTitle": "Localisation"
  },
  {
    "type": "post",
    "url": "Trajet/id_trajet/Segments/id_segment/Passagers/",
    "title": "Ajout d'un passager pour un segment",
    "name": "GetAllPassagerForOneSegment",
    "group": "Passager",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Passager unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Utilisateur",
            "optional": false,
            "field": "utilisateur",
            "description": "<p>Utilisateur</p> <pre><code>HTTP/1.1 200 OK </code></pre> <p>{ &quot;documents&quot;: [ { &quot;name&quot;: &quot;projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q/Segments/06Vp6L8ckkbxekSw94Fe/Passagers/fZMoyhuau3ve12b0LfZC&quot;, &quot;fields&quot;: { &quot;Utilisateur&quot;: { &quot;referenceValue&quot;: &quot;projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw&quot; } }, &quot;createTime&quot;: &quot;2018-02-07T15:45:06.862550Z&quot;, &quot;updateTime&quot;: &quot;2018-02-14T14:54:30.305046Z&quot; } ] }</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PassagerNotFound",
            "description": "<p>The id of the Passager was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PassagerNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/passager.js",
    "groupTitle": "Passager"
  },
  {
    "type": "patch",
    "url": "Trajet/id_trajet/Segments/id_segment/Passagers/",
    "title": "Ajout d'un passager pour un segment",
    "name": "GetAllPassagerForOneSegment",
    "group": "Passager",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Passager unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Utilisateur",
            "optional": false,
            "field": "utilisateur",
            "description": "<p>Utilisateur</p> <pre><code>HTTP/1.1 200 OK </code></pre> <p>{ &quot;documents&quot;: [ { &quot;name&quot;: &quot;projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q/Segments/06Vp6L8ckkbxekSw94Fe/Passagers/fZMoyhuau3ve12b0LfZC&quot;, &quot;fields&quot;: { &quot;Utilisateur&quot;: { &quot;referenceValue&quot;: &quot;projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw&quot; } }, &quot;createTime&quot;: &quot;2018-02-07T15:45:06.862550Z&quot;, &quot;updateTime&quot;: &quot;2018-02-14T14:54:30.305046Z&quot; } ] }</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/passager.js",
    "groupTitle": "Passager"
  },
  {
    "type": "get",
    "url": "Trajet/id_trajet/Segments/id_segment/Passagers/",
    "title": "Obtention de tout les Passagers d'un segment",
    "name": "GetAllPassagerForOneSegment",
    "group": "Passager",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Passager unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Utilisateur",
            "optional": false,
            "field": "utilisateur",
            "description": "<p>Utilisateur * @api {get} Trajet/id_trajet/Segments/id_segment/Passagers/ Obtention de tout les Passagers d'un segment</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n\"documents\": [\n    {\n        \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q/Segments/06Vp6L8ckkbxekSw94Fe/Passagers/fZMoyhuau3ve12b0LfZC\",\n        \"fields\": {\n            \"Utilisateur\": {\n                \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw\"\n            }\n        },\n        \"createTime\": \"2018-02-07T15:45:06.862550Z\",\n        \"updateTime\": \"2018-02-14T14:54:30.305046Z\"\n    }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PassagerNotFound",
            "description": "<p>The id of the Passager was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PassagerNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/passager.js",
    "groupTitle": "Passager"
  },
  {
    "type": "get",
    "url": "Trajet/id_trajet/Segments/id_segment/Passagers/id_passager",
    "title": "Obtention d'un passager pour un segment donné",
    "name": "GetPassagerForOneSegment",
    "group": "Passager",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Passager unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Utilisateur",
            "optional": false,
            "field": "utilisateur",
            "description": "<p>Utilisateur</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n {\n\"documents\": [\n    {\n        \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q/Segments/06Vp6L8ckkbxekSw94Fe/Passagers/fZMoyhuau3ve12b0LfZC\",\n        \"fields\": {\n            \"Utilisateur\": {\n                \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw\"\n            }\n        },\n        \"createTime\": \"2018-02-07T15:45:06.862550Z\",\n        \"updateTime\": \"2018-02-14T14:54:30.305046Z\"\n    }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "PassagerNotFound",
            "description": "<p>The id of the Passager was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"PassagerNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/passager.js",
    "groupTitle": "Passager"
  },
  {
    "type": "post",
    "url": "Trajet/id/Segment",
    "title": "Ajout d'un Segment",
    "name": "CreateSegment",
    "group": "Segment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Trajet",
            "optional": false,
            "field": "Trajet",
            "description": "<p>Trajet ayant écrit l'Segment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commentaire",
            "description": "<p>Commentaire de l'Segment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "note",
            "description": "<p>Note de l'Segment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment/flD5DhbAhkMuoPUQyWNF\",\n          \"fields\": {\n              \"Trajet\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Trajet/RvAHHe6t1ndYvFtucOBU\"\n              },\n              \"date\": {\n                   \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage très sympathique avec mon peitit Anthony\"\n             },\n              \"note\": {\n                  \"integerValue\": \"5\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:05:32.844468Z\",\n          \"updateTime\": \"2018-01-31T16:08:05.774570Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrajetNotFound",
            "description": "<p>The id of the Trajet was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"TrajetNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/segment.js",
    "groupTitle": "Segment"
  },
  {
    "type": "get",
    "url": "Trajet/id/Segment",
    "title": "Obtention de tout les Segment pour un Trajet",
    "name": "GetAllSegmentForOneTrajet",
    "group": "Segment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Trajet",
            "optional": false,
            "field": "Trajet",
            "description": "<p>Trajet contenant le Segment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commentaire",
            "description": "<p>Commentaire de l'Segment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "note",
            "description": "<p>Note de l'Segment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment\",\n          \"fields\": {\n              \"Trajet\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Trajet/RvAHHe6t1ndYvFtucOBU\"\n              },\n              \"date\": {\n                   \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage très sympathique avec mon peitit Anthony\"\n             },\n              \"note\": {\n                  \"integerValue\": \"5\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:05:32.844468Z\",\n          \"updateTime\": \"2018-01-31T16:08:05.774570Z\"\n      },\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment/flD5DhbAhkMuoPUQyWNF\",\n         \"fields\": {\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage Bof\"\n             },\n              \"note\": {\n                  \"integerValue\": \"1\"\n              },\n              \"date\": {\n                  \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"Trajet\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Trajet/TtmaugyLlkKnJw0AxUGN\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:23:14.322541Z\",\n          \"updateTime\": \"2018-01-31T16:25:27.758381Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/segment.js",
    "groupTitle": "Segment"
  },
  {
    "type": "get",
    "url": "Trajet/id/Segment/id",
    "title": "Obtention d'un les Segment pour un Trajet",
    "name": "GetOneSegmentForOneTrajet",
    "group": "Segment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Trajet",
            "optional": false,
            "field": "Trajet",
            "description": "<p>Trajet ayant écrit l'Segment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commentaire",
            "description": "<p>Commentaire de l'Segment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "note",
            "description": "<p>Note de l'Segment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment/flD5DhbAhkMuoPUQyWNF\",\n          \"fields\": {\n              \"Trajet\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Trajet/RvAHHe6t1ndYvFtucOBU\"\n              },\n              \"date\": {\n                   \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage très sympathique avec mon peitit Anthony\"\n             },\n              \"note\": {\n                  \"integerValue\": \"5\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:05:32.844468Z\",\n          \"updateTime\": \"2018-01-31T16:08:05.774570Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/segment.js",
    "groupTitle": "Segment"
  },
  {
    "type": "patch",
    "url": "Trajet/id/Segments/id",
    "title": "Modification d'un Trajet",
    "name": "UpdateSegment",
    "group": "Segment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Trajet",
            "optional": false,
            "field": "Trajet",
            "description": "<p>Trajet ayant écrit l'Segment.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "commentaire",
            "description": "<p>Commentaire de l'Segment.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "note",
            "description": "<p>Note de l'Segment.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/B9QDHmD7E3E5nGPzYNWw/Segment/flD5DhbAhkMuoPUQyWNF\",\n          \"fields\": {\n              \"Trajet\": {\n                  \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Trajet/RvAHHe6t1ndYvFtucOBU\"\n              },\n              \"date\": {\n                   \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"commentaire\": {\n                  \"stringValue\": \"Voyage très sympathique avec mon peitit Anthony\"\n             },\n              \"note\": {\n                  \"integerValue\": \"5\"\n              }\n          },\n          \"createTime\": \"2018-01-31T16:05:32.844468Z\",\n          \"updateTime\": \"2018-01-31T16:08:05.774570Z\"\n      }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrajetNotFound",
            "description": "<p>The id of the Trajet was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "SegmentNotFound",
            "description": "<p>The id of the Segment was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"TrajetNotFound\"\n}",
          "type": "json"
        },
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"SegmentNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/segment.js",
    "groupTitle": "Segment"
  },
  {
    "type": "post",
    "url": "Trajet",
    "title": "Ajout d'un Trajet",
    "name": "AddTrajet",
    "group": "Trajet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Trajet unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "nb-place",
            "description": "<p>Nombre de place disponible pour le trajet.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestampValue",
            "optional": false,
            "field": "date",
            "description": "<p>Date du trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarque",
            "description": "<p>Remarque concernant le trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "prix",
            "description": "<p>Prix du trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "Conducteur",
            "optional": false,
            "field": "conducteur",
            "description": "<p>conducteur du trajet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"documents\": [\n        {\n            \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q\",\n            \"fields\": {\n                \"nb-place\": {\n                    \"integerValue\": \"0\"\n                },\n                \"date\": {\n                    \"timestampValue\": \"2018-01-25T14:00:00Z\"\n                },\n                \"remarque\": {\n                   \"stringValue\": \"\"\n                },\n                \"prix\": {\n                    \"integerValue\": \"20\"\n                },\n                \"conducteur\": {\n                    \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Conducteur/0bYWCLnc47awsLMJ17wK\"\n                }\n            },\n            \"createTime\": \"2018-01-17T14:49:33.751636Z\",\n            \"updateTime\": \"2018-01-24T16:02:48.830770Z\"       \n        \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/trajet.js",
    "groupTitle": "Trajet"
  },
  {
    "type": "get",
    "url": "Trajet",
    "title": "Obtention de tout les trajets",
    "name": "GetAllTrajet",
    "group": "Trajet",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "nb-place",
            "description": "<p>Nombre de place disponible pour le trajet.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestampValue",
            "optional": false,
            "field": "date",
            "description": "<p>Date du trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarque",
            "description": "<p>Remarque concernant le trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "prix",
            "description": "<p>Prix du trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "Conducteur",
            "optional": false,
            "field": "conducteur",
            "description": "<p>conducteur du trajet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"documents\": [\n        {\n            \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q\",\n            \"fields\": {\n                \"nb-place\": {\n                    \"integerValue\": \"0\"\n                },\n                \"date\": {\n                    \"timestampValue\": \"2018-01-25T14:00:00Z\"\n                },\n                \"remarque\": {\n                   \"stringValue\": \"\"\n                },\n                \"prix\": {\n                    \"integerValue\": \"20\"\n                },\n                \"conducteur\": {\n                    \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Conducteur/0bYWCLnc47awsLMJ17wK\"\n                }\n            },\n            \"createTime\": \"2018-01-17T14:49:33.751636Z\",\n            \"updateTime\": \"2018-01-24T16:02:48.830770Z\"       \n        \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/trajet.js",
    "groupTitle": "Trajet"
  },
  {
    "type": "get",
    "url": "Trajet/id",
    "title": "Obtention d'un Trajet",
    "name": "GetTrajet",
    "group": "Trajet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Trajet unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "nb-place",
            "description": "<p>Nombre de place disponible pour le trajet.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestampValue",
            "optional": false,
            "field": "date",
            "description": "<p>Date du trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarque",
            "description": "<p>Remarque concernant le trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "prix",
            "description": "<p>Prix du trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "Conducteur",
            "optional": false,
            "field": "conducteur",
            "description": "<p>conducteur du trajet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"documents\": [\n        {\n            \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q\",\n            \"fields\": {\n                \"nb-place\": {\n                    \"integerValue\": \"0\"\n                },\n                \"date\": {\n                    \"timestampValue\": \"2018-01-25T14:00:00Z\"\n                },\n                \"remarque\": {\n                   \"stringValue\": \"\"\n                },\n                \"prix\": {\n                    \"integerValue\": \"20\"\n                },\n                \"conducteur\": {\n                    \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Conducteur/0bYWCLnc47awsLMJ17wK\"\n                }\n            },\n            \"createTime\": \"2018-01-17T14:49:33.751636Z\",\n            \"updateTime\": \"2018-01-24T16:02:48.830770Z\"       \n        \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrajetNotFound",
            "description": "<p>The id of the Trajet was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n       \"error\": {\n       \"code\": 404,\n       \"message\": \"Document \\\"projects/babacar-88701/databases/(default)/documents/Trajet/ffdfsd\\\" not found.\",\n       \"status\": \"NOT_FOUND\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/trajet.js",
    "groupTitle": "Trajet"
  },
  {
    "type": "patch",
    "url": "Trajet",
    "title": "Modification d'un Trajet",
    "name": "PutTrajet",
    "group": "Trajet",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Trajet unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "nb-place",
            "description": "<p>Nombre de place disponible pour le trajet.</p>"
          },
          {
            "group": "Success 200",
            "type": "timestampValue",
            "optional": false,
            "field": "date",
            "description": "<p>Date du trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "remarque",
            "description": "<p>Remarque concernant le trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "prix",
            "description": "<p>Prix du trajet</p>"
          },
          {
            "group": "Success 200",
            "type": "Conducteur",
            "optional": false,
            "field": "conducteur",
            "description": "<p>conducteur du trajet</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "  HTTP/1.1 200 OK\n  {\n    \"documents\": [\n        {\n            \"name\": \"projects/babacar-88701/databases/(default)/documents/Trajet/0pfKKbFvRY0IIsMPTB0Q\",\n            \"fields\": {\n                \"nb-place\": {\n                    \"integerValue\": \"0\"\n                },\n                \"date\": {\n                    \"timestampValue\": \"2018-01-25T14:00:00Z\"\n                },\n                \"remarque\": {\n                   \"stringValue\": \"\"\n                },\n                \"prix\": {\n                    \"integerValue\": \"20\"\n                },\n                \"conducteur\": {\n                    \"referenceValue\": \"projects/babacar-88701/databases/(default)/documents/Conducteur/0bYWCLnc47awsLMJ17wK\"\n                }\n            },\n            \"createTime\": \"2018-01-17T14:49:33.751636Z\",\n            \"updateTime\": \"2018-01-24T16:02:48.830770Z\"       \n        \n        }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "TrajetNotFound",
            "description": "<p>The id of the Trajet was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": " HTTP/1.1 404 Not Found\n{\n       \"error\": {\n       \"code\": 404,\n       \"message\": \"Document \\\"projects/babacar-88701/databases/(default)/documents/Trajet/ffdfsd\\\" not found.\",\n       \"status\": \"NOT_FOUND\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/trajet.js",
    "groupTitle": "Trajet"
  },
  {
    "type": "post",
    "url": "Utilisateur",
    "title": "Ajout d'un utilisateur",
    "name": "AddUtilisateur",
    "group": "Utilisateur",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Utilisateur unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Prenom",
            "description": "<p>Prénom de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telephone",
            "description": "<p>Téléphone de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Mail de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ddn",
            "description": "<p>Date de naissance de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mdp",
            "description": "<p>Mot de passe de l'utilisateur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw\",\n          \"fields\": {\n              \"mdp\": {\n                  \"stringValue\": \"anthony\"\n              },\n              \"ddn\": {\n                  \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"telephone\": {\n                  \"stringValue\": \"0585957841\"\n              },\n              \"Nom\": {\n                  \"stringValue\": \"Brousse\"\n              },\n              \"Prenom\": {\n                  \"stringValue\": \"Antho\"\n              },\n              \"mail\": {\n                  \"stringValue\": \"anthobrousse@live.com\"\n              }\n          },\n          \"createTime\": \"2018-01-31T15:12:44.965252Z\",\n          \"updateTime\": \"2018-01-31T15:39:59.269147Z\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurNotFound",
            "description": "<p>The id of the Utilisateur was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UtilisateurNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/utilisateur.js",
    "groupTitle": "Utilisateur"
  },
  {
    "type": "get",
    "url": "Utilisateur",
    "title": "Obtention de tout les utilisateurs",
    "name": "GetAllUtilisateur",
    "group": "Utilisateur",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Prenom",
            "description": "<p>Prénom de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telephone",
            "description": "<p>Téléphone de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Mail de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "TimeStampValue",
            "optional": false,
            "field": "ddn",
            "description": "<p>Date de naissance de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mdp",
            "description": "<p>Mot de passe de l'utilisateur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw\",\n          \"fields\": {\n              \"mdp\": {\n                  \"stringValue\": \"anthony\"\n              },\n              \"ddn\": {\n                  \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"telephone\": {\n                  \"stringValue\": \"0585957841\"\n              },\n              \"Nom\": {\n                  \"stringValue\": \"Brousse\"\n              },\n              \"Prenom\": {\n                  \"stringValue\": \"Antho\"\n              },\n              \"mail\": {\n                  \"stringValue\": \"anthobrousse@live.com\"\n              }\n          },\n          \"createTime\": \"2018-01-31T15:12:44.965252Z\",\n          \"updateTime\": \"2018-01-31T15:39:59.269147Z\"\n      },\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/NEOM3HM5nKe7ybHN9ZhN\",\n          \"fields\": {\n              \"ddn\": {\n                  \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"telephone\": {\n                  \"stringValue\": \"0523526545\"\n              },\n              \"nom\": {\n                  \"stringValue\": \"Bob\"\n              },\n              \"prenom\": {\n                  \"stringValue\": \"BABAR\"\n              },\n              \"mail\": {\n                  \"stringValue\": \"bab@live.fr\"\n              },\n              \"mdp\": {\n                  \"stringValue\": \"123456\"\n              }\n          },\n          \"createTime\": \"2018-01-31T15:34:37.721486Z\",\n          \"updateTime\": \"2018-01-31T15:34:37.721486Z\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/utilisateur.js",
    "groupTitle": "Utilisateur"
  },
  {
    "type": "get",
    "url": "Utilisateur/id",
    "title": "Obtention d'un utilisateur",
    "name": "GetUtilisateur",
    "group": "Utilisateur",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Utilisateur unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Prenom",
            "description": "<p>Prénom de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telephone",
            "description": "<p>Téléphone de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Mail de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ddn",
            "description": "<p>Date de naissance de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mdp",
            "description": "<p>Mot de passe de l'utilisateur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw\",\n          \"fields\": {\n              \"mdp\": {\n                  \"stringValue\": \"anthony\"\n              },\n              \"ddn\": {\n                  \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"telephone\": {\n                  \"stringValue\": \"0585957841\"\n              },\n              \"Nom\": {\n                  \"stringValue\": \"Brousse\"\n              },\n              \"Prenom\": {\n                  \"stringValue\": \"Antho\"\n              },\n              \"mail\": {\n                  \"stringValue\": \"anthobrousse@live.com\"\n              }\n          },\n          \"createTime\": \"2018-01-31T15:12:44.965252Z\",\n          \"updateTime\": \"2018-01-31T15:39:59.269147Z\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurNotFound",
            "description": "<p>The id of the Utilisateur was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n   {\n       \"error\": {\n    \"code\": 404,\n    \"message\": \"Document \\\"projects/babacar-88701/databases/(default)/documents/Utilisateur/TtmaugyLlkKnJw0\\\" not found.\",\n    \"status\": \"NOT_FOUND\"\n}\n   }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/utilisateur.js",
    "groupTitle": "Utilisateur"
  },
  {
    "type": "patch",
    "url": "Utilisateur/id",
    "title": "Modification d'un utilisateur",
    "name": "PutUtilisateur",
    "group": "Utilisateur",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Utilisateur unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Nom",
            "description": "<p>Nom de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Prenom",
            "description": "<p>Prénom de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "telephone",
            "description": "<p>Téléphone de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mail",
            "description": "<p>Mail de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "ddn",
            "description": "<p>Date de naissance de l'utilisateur.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "mdp",
            "description": "<p>Mot de passe de l'utilisateur.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{      \n  \"documents\": [\n      {\n          \"name\": \"projects/babacar-88701/databases/(default)/documents/Utilisateur/B9QDHmD7E3E5nGPzYNWw\",\n          \"fields\": {\n              \"mdp\": {\n                  \"stringValue\": \"anthony\"\n              },\n              \"ddn\": {\n                  \"timestampValue\": \"2018-01-14T23:00:00Z\"\n              },\n              \"telephone\": {\n                  \"stringValue\": \"0585957841\"\n              },\n              \"Nom\": {\n                  \"stringValue\": \"Brousse\"\n              },\n              \"Prenom\": {\n                  \"stringValue\": \"Antho\"\n              },\n              \"mail\": {\n                  \"stringValue\": \"anthobrousse@live.com\"\n              }\n          },\n          \"createTime\": \"2018-01-31T15:12:44.965252Z\",\n          \"updateTime\": \"2018-01-31T15:39:59.269147Z\"\n      }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UtilisateurNotFound",
            "description": "<p>The id of the Utilisateur was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UtilisateurNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/utilisateur.js",
    "groupTitle": "Utilisateur"
  },
  {
    "type": "post",
    "url": "Vehicule",
    "title": "Ajout d'un Vehicule",
    "name": "AddVehicule",
    "group": "Vehicule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicule unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VehiculeNotFound",
            "description": "<p>The id of the Vehicule was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"VehiculeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/vehicule.js",
    "groupTitle": "Vehicule"
  },
  {
    "type": "get",
    "url": "Vehicule",
    "title": "Obtention de tout les Vehicules",
    "name": "GetAllVehicule",
    "group": "Vehicule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicule unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VehiculeNotFound",
            "description": "<p>The id of the Vehicule was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"VehiculeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/vehicule.js",
    "groupTitle": "Vehicule"
  },
  {
    "type": "get",
    "url": "Vehicule/id",
    "title": "Obtention d'un Vehicule",
    "name": "GetVehicule",
    "group": "Vehicule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicule unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VehiculeNotFound",
            "description": "<p>The id of the Vehicule was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"VehiculeNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/vehicule.js",
    "groupTitle": "Vehicule"
  },
  {
    "type": "patch",
    "url": "Vehicule",
    "title": "Modification d'un Vehicule",
    "name": "PutVehicule",
    "group": "Vehicule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Vehicule unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "VehiculeNotFound",
            "description": "<p>The id of the Vehicule was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"Vehicule NotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "../docBabaCar/vehicule.js",
    "groupTitle": "Vehicule"
  }
] });
