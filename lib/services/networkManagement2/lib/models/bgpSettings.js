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
 * Initializes a new instance of the BgpSettings class.
 * @constructor
 * @member {number} [asn] Gets or sets this BGP speaker's ASN
 * 
 * @member {string} [bgpPeeringAddress] Gets or sets the BGP peering address
 * and BGP identifier of this BGP speaker
 * 
 * @member {number} [peerWeight] Gets or sets the weight added to routes
 * learned from this BGP speaker
 * 
 */
function BgpSettings() {
}

/**
 * Defines the metadata of BgpSettings
 *
 * @returns {object} metadata of BgpSettings
 *
 */
BgpSettings.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'BgpSettings',
    type: {
      name: 'Composite',
      className: 'BgpSettings',
      modelProperties: {
        asn: {
          required: false,
          serializedName: 'asn',
          type: {
            name: 'Number'
          }
        },
        bgpPeeringAddress: {
          required: false,
          serializedName: 'bgpPeeringAddress',
          type: {
            name: 'String'
          }
        },
        peerWeight: {
          required: false,
          serializedName: 'peerWeight',
          type: {
            name: 'Number'
          }
        }
      }
    }
  };
};

module.exports = BgpSettings;