var schema = new Schema({
    heading: {
        type: String
    },
    content: {
        type: String
    },
    img: [{
        icon: {
            type: String
        },
        title: {
            type: String
        },
        discription: {
            type: String
        }
    }]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Services', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);