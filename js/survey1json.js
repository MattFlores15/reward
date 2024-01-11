const json = {
    "locale": "nl",
    "title": "Half jaarlijkse survey 1",
    "description": "Dit is het eerste deel van de halfjaarlijkse survey",
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "rating",
        "name": "uitdagend_werk",
        "title": "Het werk dat ik doe is erg belangrijk voor me",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       },
       {
        "type": "rating",
        "name": "question1",
        "title": "Mijn werk is voor mij persoonlijk zinvol",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       },
       {
        "type": "rating",
        "name": "question3",
        "title": "Het werk dat ik doe is zinvol voor mij",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       }
      ],
      "title": "Betekenis:"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "rating",
        "name": "question2",
        "title": "Ik heb vertrouwen in mijn vermogen om mijn werk te doen",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       },
       {
        "type": "rating",
        "name": "question4",
        "title": "Ik ben zelfverzekerd over mijn capaciteiten om mijn werk uit te voeren",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       },
       {
        "type": "rating",
        "name": "question5",
        "title": "Ik beheers de vaardigheden die nodig zijn voor mijn werk",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       }
      ],
      "title": "Bekwaamheid:"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "rating",
        "name": "question6",
        "title": "Ik heb een aanzienlijke autonomie in het bepalen hoe ik mijn werk doe",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       },
       {
        "type": "rating",
        "name": "question7",
        "title": "Ik kan zelfstandig beslissen hoe ik mijn werk doe",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       },
       {
        "type": "rating",
        "name": "question8",
        "title": "Ik heb aanzienlijke mogelijkheden voor onafhankelijkheid en vrijheid in hoe ik mijn werk doe",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       }
      ],
      "title": {
       "default": "Zelfbeschikking",
       "nl": "Zelfbeschikking:"
      }
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "rating",
        "name": "question9",
        "title": "Mijn invloed op wat er in mijn afdeling gebeurt is groot",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       },
       {
        "type": "rating",
        "name": "question10",
        "title": "Ik heb veel controle over wat er in mijn afdeling gebeurt",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       },
       {
        "type": "rating",
        "name": "question11",
        "title": "Ik heb veel invloed op wat er in mijn afdeling gebeurt",
        "description": "Links = zeer mee oneens en rechts = zeer mee eens",
        "isRequired": true,
        "rateType": "smileys",
        "scaleColorMode": "colored",
        "autoGenerate": false,
        "rateValues": [
         1,
         3,
         2,
         4,
         5
        ]
       }
      ],
      "title": {
       "default": "Impact",
       "nl": "Impact:"
      }
     }
    ],
    "sendResultOnPageNext": true,
    "showCompletedPage": false,
    "navigateToUrl": "https://samenaanz.netlify.app/components/surveys/survey-finish",
    "showPageNumbers": true,
    "showQuestionNumbers": "off",
    "showProgressBar": "both",
    "pagePrevText": {
     "nl": "Terug"
    },
    "pageNextText": {
     "nl": "Volgende"
    },
    "completeText": {
     "nl": "Voltooi"
    },
    "previewText": {
     "nl": "Voorbeeld"
    },
    "editText": {
     "nl": "Bewerk"
    }
   }