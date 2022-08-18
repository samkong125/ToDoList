
var expect = require('chai').expect;
var assert = require("assert");
var request = require("request");

require("../app.js");

describe('Testing the add todo item function', function() {
    it("it should take in string", function() {
        var url = "http://localhost:3000/gettodo";
        
        request(url, function(req, res){
            expect(res.statusCode).to.equal(200);
        });

        /*request(url, function (req, res, body){
            expect(res.statusCode).to.equal(200);
        });*/
    });

});

describe("Gettodo", () => {
    //Test to get all todo items
    it("should get all to do items", (done) => {
        chai.request(app)
            .get("/")
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a("object");
                done();
            });
    });
});