// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_SUBSCRIPTION_ID'] = 'e0b81f36-36ba-44f7-b550-7c9344a35893';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"etag\":\"AAAAAADqWBc=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"ipfilterrule2\",\"action\":\"Reject\",\"ipMask\":\"192.168.0.0/10\"}],\"hostName\":\"nodeTestHub.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestQueue1\",\"name\":\"Queue1\",\"id\":\"877d8efb-bdbd-4be9-9696-dedb4cb87b8b\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"serviceBusTopics\":[],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestEH2\",\"name\":\"EH2\",\"id\":\"4130ad71-e5a7-4530-bdb1-c22e90a2f2f6\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route3\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH2\"],\"isEnabled\":true},{\"name\":\"Route4\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Queue1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\",\"None\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":3}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2720',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '70d06100-18c6-480a-ba58-398751f16d11',
  'x-ms-correlation-request-id': '70d06100-18c6-480a-ba58-398751f16d11',
  'x-ms-routing-request-id': 'WESTUS:20170502T195218Z:70d06100-18c6-480a-ba58-398751f16d11',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:18 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub?api-version=2017-01-19')
  .reply(200, "{\"id\":\"/subscriptions/e0b81f36-36ba-44f7-b550-7c9344a35893/resourceGroups/nodetestrg/providers/Microsoft.Devices/IotHubs/nodeTestHub\",\"name\":\"nodeTestHub\",\"type\":\"Microsoft.Devices/IotHubs\",\"location\":\"East US\",\"tags\":{},\"subscriptionid\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourcegroup\":\"nodetestrg\",\"etag\":\"AAAAAADqWBc=\",\"properties\":{\"state\":\"Active\",\"provisioningState\":\"Succeeded\",\"ipFilterRules\":[{\"filterName\":\"ipfilterrule2\",\"action\":\"Reject\",\"ipMask\":\"192.168.0.0/10\"}],\"hostName\":\"nodeTestHub.azure-devices.net\",\"eventHubEndpoints\":{\"events\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"},\"operationsMonitoringEvents\":{\"retentionTimeInDays\":1,\"partitionCount\":4,\"partitionIds\":[\"0\",\"1\",\"2\",\"3\"],\"path\":\"nodetesthub-operationmonitoring\",\"endpoint\":\"sb://iothub-ns-nodetesthu-155746-fed68821d2.servicebus.windows.net/\"}},\"routing\":{\"endpoints\":{\"serviceBusQueues\":[{\"connectionString\":\"Endpoint=sb://nodetestsb-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestQueue1\",\"name\":\"Queue1\",\"id\":\"877d8efb-bdbd-4be9-9696-dedb4cb87b8b\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}],\"serviceBusTopics\":[],\"eventHubs\":[{\"connectionString\":\"Endpoint=sb://nodetesteh-ns1.servicebus.windows.net:5671/;SharedAccessKeyName=Send;SharedAccessKey=****;EntityPath=nodetestEH2\",\"name\":\"EH2\",\"id\":\"4130ad71-e5a7-4530-bdb1-c22e90a2f2f6\",\"subscriptionId\":\"e0b81f36-36ba-44f7-b550-7c9344a35893\",\"resourceGroup\":\"nodetestrg\"}]},\"routes\":[{\"name\":\"Route3\",\"source\":\"DeviceMessages\",\"condition\":\"false\",\"endpointNames\":[\"EH2\"],\"isEnabled\":true},{\"name\":\"Route4\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"Queue1\"],\"isEnabled\":true}],\"fallbackRoute\":{\"name\":\"$fallback\",\"source\":\"DeviceMessages\",\"condition\":\"true\",\"endpointNames\":[\"events\"],\"isEnabled\":false}},\"storageEndpoints\":{\"$default\":{\"sasTtlAsIso8601\":\"PT1H\",\"connectionString\":\"\",\"containerName\":\"\"}},\"messagingEndpoints\":{\"fileNotifications\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"enableFileUploadNotifications\":false,\"cloudToDevice\":{\"maxDeliveryCount\":10,\"defaultTtlAsIso8601\":\"PT1H\",\"feedback\":{\"lockDurationAsIso8601\":\"PT1M\",\"ttlAsIso8601\":\"PT1H\",\"maxDeliveryCount\":10}},\"operationsMonitoringProperties\":{\"events\":{\"C2DCommands\":\"Error\",\"DeviceTelemetry\":\"Error\",\"DeviceIdentityOperations\":\"Error\",\"Connections\":\"Error, Information\",\"None\":\"None\",\"FileUploadOperations\":\"None\",\"Routes\":\"None\"}},\"features\":\"None\",\"generationNumber\":0},\"sku\":{\"name\":\"S1\",\"tier\":\"Standard\",\"capacity\":3}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2720',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  server: 'Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14994',
  'x-ms-request-id': '70d06100-18c6-480a-ba58-398751f16d11',
  'x-ms-correlation-request-id': '70d06100-18c6-480a-ba58-398751f16d11',
  'x-ms-routing-request-id': 'WESTUS:20170502T195218Z:70d06100-18c6-480a-ba58-398751f16d11',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Tue, 02 May 2017 19:52:18 GMT',
  connection: 'close' });
 return result; }]];