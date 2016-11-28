/**
 * Created by RFreeman on 10/5/2016.
 *
 * added by ben dunn to the file for reference 10/14/2016
 *
 */
var DBName = 'Tester';
var DBPass = 'test'
//
module.exports = {
    db: 'mongodb://'+DBName+':'+DBPass+'@ds153677.mlab.com:53677/richassignmentmaygodhavemercy', //have mercy on my soul.
    secret: 'Today I crapped myself when I remembered I remember nothing...',
    //db: 'mongodb://gcrfreeman2:pass@ds048319.mlab.com:48319/comp2068-wed'
    //'mongodb://AnonMetric:heyheyhey21@ds153677.mlab.com:53677/richassignmentmaygodhavemercy'


    ids: { //github only at this point.
        gitHub: {
            ClientID: '',
            clientSecret: '',
            callbackUrl: 'http//localhost:3000/facebook/callback' //change later,
        }

    },
};