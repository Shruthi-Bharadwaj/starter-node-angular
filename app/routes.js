module.exports = function(app) {
    var AWS = require('aws-sdk');
    var s3Config = {
        accessKeyId: 'AKIAIKCIUHYBONKDTTBQ',
        secretAccessKey: '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'
    };
    var s3 = new AWS.S3(s3Config);
    var Promise = require('bluebird');
    // server routes ===========================================================
    // handle things like api calls
    // authentication routes
    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('/getS3Video', function(req, res) {
        var params = {
        	Bucket : 'tntitrack',
        	Key: 'videos/SampleVideo_1280x720_1mb.mp4'
        };
        s3.getSignedUrl('getObject', params, function(err, url) {
        	if(err) {
        		res.json(err);
        	}
        	else {
        		res.json({videoURL: url});
        	}
        });
    });
};