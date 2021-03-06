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

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Restores the specified backup data. This is an asynchronous operation. To
 * know the status of this API call, use GetProtectedItemOperationResult API.
 *
 * @param {string} vaultName The name of the Recovery Services vault.
 *
 * @param {string} resourceGroupName The name of the resource group associated
 * with the Recovery Services vault.
 *
 * @param {string} fabricName The fabric name associated with the backup items.
 *
 * @param {string} containerName The container name associated with the backup
 * items.
 *
 * @param {string} protectedItemName The backup item to be restored.
 *
 * @param {string} recoveryPointId The recovery point ID for the backup data to
 * be restored.
 *
 * @param {object} resourceRestoreRequest The resource restore request.
 *
 * @param {object} [resourceRestoreRequest.properties]
 *
 * @param {string} resourceRestoreRequest.properties.objectType Polymorphic
 * Discriminator
 *
 * @param {string} [resourceRestoreRequest.id] Resource ID represents the
 * complete path to the resource.
 *
 * @param {string} [resourceRestoreRequest.name] Resource name associated with
 * the resource.
 *
 * @param {string} [resourceRestoreRequest.type] Resource type represents the
 * complete path of the form Namespace/ResourceType/ResourceType/...
 *
 * @param {string} [resourceRestoreRequest.location] Resource location.
 *
 * @param {object} [resourceRestoreRequest.tags] Resource tags.
 *
 * @param {string} [resourceRestoreRequest.eTag] Optional ETag.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {null} [result]   - The deserialized result object if an error did not occur.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _trigger(vaultName, resourceGroupName, fabricName, containerName, protectedItemName, recoveryPointId, resourceRestoreRequest, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let apiVersion = '2016-06-01';
  // Validate
  try {
    if (vaultName === null || vaultName === undefined || typeof vaultName.valueOf() !== 'string') {
      throw new Error('vaultName cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (fabricName === null || fabricName === undefined || typeof fabricName.valueOf() !== 'string') {
      throw new Error('fabricName cannot be null or undefined and it must be of type string.');
    }
    if (containerName === null || containerName === undefined || typeof containerName.valueOf() !== 'string') {
      throw new Error('containerName cannot be null or undefined and it must be of type string.');
    }
    if (protectedItemName === null || protectedItemName === undefined || typeof protectedItemName.valueOf() !== 'string') {
      throw new Error('protectedItemName cannot be null or undefined and it must be of type string.');
    }
    if (recoveryPointId === null || recoveryPointId === undefined || typeof recoveryPointId.valueOf() !== 'string') {
      throw new Error('recoveryPointId cannot be null or undefined and it must be of type string.');
    }
    if (resourceRestoreRequest === null || resourceRestoreRequest === undefined) {
      throw new Error('resourceRestoreRequest cannot be null or undefined.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'Subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.RecoveryServices/vaults/{vaultName}/backupFabrics/{fabricName}/protectionContainers/{containerName}/protectedItems/{protectedItemName}/recoveryPoints/{recoveryPointId}/restore';
  requestUrl = requestUrl.replace('{vaultName}', encodeURIComponent(vaultName));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{fabricName}', encodeURIComponent(fabricName));
  requestUrl = requestUrl.replace('{containerName}', encodeURIComponent(containerName));
  requestUrl = requestUrl.replace('{protectedItemName}', encodeURIComponent(protectedItemName));
  requestUrl = requestUrl.replace('{recoveryPointId}', encodeURIComponent(recoveryPointId));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'POST';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  // Serialize Request
  let requestContent = null;
  let requestModel = null;
  try {
    if (resourceRestoreRequest !== null && resourceRestoreRequest !== undefined) {
      let requestModelMapper = new client.models['RestoreRequestResource']().mapper();
      requestModel = client.serialize(requestModelMapper, resourceRestoreRequest, 'resourceRestoreRequest');
      requestContent = JSON.stringify(requestModel);
    }
  } catch (error) {
    let serializationError = new Error(`Error "${error.message}" occurred in serializing the ` +
        `payload - ${JSON.stringify(resourceRestoreRequest, null, 2)}.`);
    return callback(serializationError);
  }
  httpRequest.body = requestContent;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 202) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          if (parsedErrorResponse.error) parsedErrorResponse = parsedErrorResponse.error;
          if (parsedErrorResponse.code) error.code = parsedErrorResponse.code;
          if (parsedErrorResponse.message) error.message = parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['CloudError']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;

    return callback(null, result, httpRequest, response);
  });
}

/**
 * @class
 * Restores
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the RecoveryServicesBackupClient.
 * Initializes a new instance of the Restores class.
 * @constructor
 *
 * @param {RecoveryServicesBackupClient} client Reference to the service client.
 */
class Restores {
  constructor(client) {
    this.client = client;
    this._trigger = _trigger;
  }

  /**
   * Restores the specified backup data. This is an asynchronous operation. To
   * know the status of this API call, use GetProtectedItemOperationResult API.
   *
   * @param {string} vaultName The name of the Recovery Services vault.
   *
   * @param {string} resourceGroupName The name of the resource group associated
   * with the Recovery Services vault.
   *
   * @param {string} fabricName The fabric name associated with the backup items.
   *
   * @param {string} containerName The container name associated with the backup
   * items.
   *
   * @param {string} protectedItemName The backup item to be restored.
   *
   * @param {string} recoveryPointId The recovery point ID for the backup data to
   * be restored.
   *
   * @param {object} resourceRestoreRequest The resource restore request.
   *
   * @param {object} [resourceRestoreRequest.properties]
   *
   * @param {string} resourceRestoreRequest.properties.objectType Polymorphic
   * Discriminator
   *
   * @param {string} [resourceRestoreRequest.id] Resource ID represents the
   * complete path to the resource.
   *
   * @param {string} [resourceRestoreRequest.name] Resource name associated with
   * the resource.
   *
   * @param {string} [resourceRestoreRequest.type] Resource type represents the
   * complete path of the form Namespace/ResourceType/ResourceType/...
   *
   * @param {string} [resourceRestoreRequest.location] Resource location.
   *
   * @param {object} [resourceRestoreRequest.tags] Resource tags.
   *
   * @param {string} [resourceRestoreRequest.eTag] Optional ETag.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<null>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  triggerWithHttpOperationResponse(vaultName, resourceGroupName, fabricName, containerName, protectedItemName, recoveryPointId, resourceRestoreRequest, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._trigger(vaultName, resourceGroupName, fabricName, containerName, protectedItemName, recoveryPointId, resourceRestoreRequest, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Restores the specified backup data. This is an asynchronous operation. To
   * know the status of this API call, use GetProtectedItemOperationResult API.
   *
   * @param {string} vaultName The name of the Recovery Services vault.
   *
   * @param {string} resourceGroupName The name of the resource group associated
   * with the Recovery Services vault.
   *
   * @param {string} fabricName The fabric name associated with the backup items.
   *
   * @param {string} containerName The container name associated with the backup
   * items.
   *
   * @param {string} protectedItemName The backup item to be restored.
   *
   * @param {string} recoveryPointId The recovery point ID for the backup data to
   * be restored.
   *
   * @param {object} resourceRestoreRequest The resource restore request.
   *
   * @param {object} [resourceRestoreRequest.properties]
   *
   * @param {string} resourceRestoreRequest.properties.objectType Polymorphic
   * Discriminator
   *
   * @param {string} [resourceRestoreRequest.id] Resource ID represents the
   * complete path to the resource.
   *
   * @param {string} [resourceRestoreRequest.name] Resource name associated with
   * the resource.
   *
   * @param {string} [resourceRestoreRequest.type] Resource type represents the
   * complete path of the form Namespace/ResourceType/ResourceType/...
   *
   * @param {string} [resourceRestoreRequest.location] Resource location.
   *
   * @param {object} [resourceRestoreRequest.tags] Resource tags.
   *
   * @param {string} [resourceRestoreRequest.eTag] Optional ETag.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {null} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {null} [result]   - The deserialized result object if an error did not occur.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  trigger(vaultName, resourceGroupName, fabricName, containerName, protectedItemName, recoveryPointId, resourceRestoreRequest, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._trigger(vaultName, resourceGroupName, fabricName, containerName, protectedItemName, recoveryPointId, resourceRestoreRequest, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._trigger(vaultName, resourceGroupName, fabricName, containerName, protectedItemName, recoveryPointId, resourceRestoreRequest, options, optionalCallback);
    }
  }

}

module.exports = Restores;
