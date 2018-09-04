const mainUrl = 'https://xxx';
const APIV1 = mainUrl+'/api/'
const imgUrl = mainUrl+'/img/'
module.exports = {
  prefix: 'demo',
  // no layouts
  openPages: [
    '/login',
  ],
  imgUrl: imgUrl,
  serverUrl:APIV1
};
