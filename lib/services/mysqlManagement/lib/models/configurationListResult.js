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

/**
 * @class
 * Initializes a new instance of the ConfigurationListResult class.
 * @constructor
 * A list of server configurations.
 *
 */
class ConfigurationListResult extends Array {
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ConfigurationListResult
   *
   * @returns {object} metadata of ConfigurationListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ConfigurationListResult',
      type: {
        name: 'Composite',
        className: 'ConfigurationListResult',
        modelProperties: {
          value: {
            required: false,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ConfigurationElementType',
                  type: {
                    name: 'Composite',
                    className: 'Configuration'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ConfigurationListResult;