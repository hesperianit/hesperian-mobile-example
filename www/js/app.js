/*
 *  Family Planning
 *  Copyright Hesperian Health Guides 2017-2018
 *
 */

import '../css/styles.scss';

import { resources as enResources } from '../locales/en/resources/resources';
import { resources as esResources } from '../locales/es/resources/resources';
import { createApp } from 'hesperian-mobile';


(function() {
  window.app = createApp({
    f7: {
      id: 'org.hesperian.HelloWorld', // App bundle ID
      name: 'Family Planning' // App name    
    },
    configVersion: '0.0.2',
    locales: [{
        language: 'English',
        language_code: 'en',
        resources: enResources
      },
      {
        language: 'Español',
        language_code: 'es',
        resources: esResources
      }
    ]
  });
})();