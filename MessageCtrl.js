module.exports = {
    sendMessage: function (req,res){
        let Data =req.body || '';
        let resData = {};
        resData.name =Data.name;
        resData.email=Data.email;
        res.subject=Data.subject;
        resData.message=Data.message;
        let returnData = {};
        returnData.data=resData;
        returnData.result = 'OK';
        res.status(200);
        res.contentType('json');
        res.json(returnData);
    },

    getMessage: function (req,res){
        let resData={};
        resData.name="do cong chi";
        resData.email="docongchi@gmail.com";
        let returnData ={};
        returnData.data=resData;
        returnData.result='OK';
        res.status(200);
        res.contentType('json');
        res.json(returnData);
    }
};