// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5157/providers/Microsoft.Cdn/profiles/cdnTestProfile6002/endpoints/testEndpoint-06466c93-ab2d-4268-b3ec-38bbc2a12e90/customDomains/cdnTestCustomDomain3998?api-version=2016-04-02')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '326548a8-7e39-420c-99f3-9595686e1826',
  'x-ms-client-request-id': '398d3ec2-d995-46da-a4d4-8ad8274d1c22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': 'ab31885a-8092-4650-acd0-09494675e054',
  'x-ms-routing-request-id': 'WESTUS:20160511T232111Z:ab31885a-8092-4650-acd0-09494675e054',
  date: 'Wed, 11 May 2016 23:21:11 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup5157/providers/Microsoft.Cdn/profiles/cdnTestProfile6002/endpoints/testEndpoint-06466c93-ab2d-4268-b3ec-38bbc2a12e90/customDomains/cdnTestCustomDomain3998?api-version=2016-04-02')
  .reply(404, "{\r\n  \"error\": {\r\n    \"code\": \"NotFound\",\r\n    \"message\": \"The requested resource was not found.\"\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '104',
  'content-type': 'application/json; charset=utf-8',
  'content-language': 'en-US',
  expires: '-1',
  'x-ms-request-id': '326548a8-7e39-420c-99f3-9595686e1826',
  'x-ms-client-request-id': '398d3ec2-d995-46da-a4d4-8ad8274d1c22',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14961',
  'x-ms-correlation-request-id': 'ab31885a-8092-4650-acd0-09494675e054',
  'x-ms-routing-request-id': 'WESTUS:20160511T232111Z:ab31885a-8092-4650-acd0-09494675e054',
  date: 'Wed, 11 May 2016 23:21:11 GMT',
  connection: 'close' });
 return result; }]];