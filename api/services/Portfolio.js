var schema = new Schema({
    name: {
        type: String,
    },
    imgback: {
        type: String,
    },
    img: [{
        image: {
            type: String
        },
        sequence: {
            type: Number
        }
    }],

});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Portfolio', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
    getAllPortfolio: function (data, callback) {
        Portfolio.find({}).deepPopulate('')
            .exec(function (err, found) {
                if (err) {
                    callback(err, null);
                } else if (_.isEmpty(found)) {
                    callback(null, "noDataound");
                } else {
                    callback(null, found);
                }

            });
    },
};
module.exports = _.assign(module.exports, exports, model);