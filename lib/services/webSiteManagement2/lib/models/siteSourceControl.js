/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * @class
 * Initializes a new instance of the SiteSourceControl class.
 * @constructor
 * Source control configuration for an app.
 *
 * @member {string} [repoUrl] Repository or source control URL.
 *
 * @member {string} [branch] Name of branch to use for deployment.
 *
 * @member {boolean} [isManualIntegration] <code>true</code> to limit to manual
 * integration; <code>false</code> to enable continuous integration (which
 * configures webhooks into online repos like GitHub).
 *
 * @member {boolean} [deploymentRollbackEnabled] <code>true</code> to enable
 * deployment rollback; otherwise, <code>false</code>.
 *
 * @member {boolean} [isMercurial] <code>true</code> for a Mercurial
 * repository; <code>false</code> for a Git repository.
 *
 */
class SiteSourceControl extends models['Resource'] {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SiteSourceControl
   *
   * @returns {object} metadata of SiteSourceControl
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SiteSourceControl',
      type: {
        name: 'Composite',
        className: 'SiteSourceControl',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          repoUrl: {
            required: false,
            serializedName: 'properties.repoUrl',
            type: {
              name: 'String'
            }
          },
          branch: {
            required: false,
            serializedName: 'properties.branch',
            type: {
              name: 'String'
            }
          },
          isManualIntegration: {
            required: false,
            serializedName: 'properties.isManualIntegration',
            type: {
              name: 'Boolean'
            }
          },
          deploymentRollbackEnabled: {
            required: false,
            serializedName: 'properties.deploymentRollbackEnabled',
            type: {
              name: 'Boolean'
            }
          },
          isMercurial: {
            required: false,
            serializedName: 'properties.isMercurial',
            type: {
              name: 'Boolean'
            }
          }
        }
      }
    };
  }
}

module.exports = SiteSourceControl;
