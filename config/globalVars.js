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
            ClientID: '312814f90da0193828d7',
            clientSecret: '4eea08630a40bcde48db83184c51819780a70623',
            callbackUrl: 'https://assigntworichweb.herokuapp.com/github/callback' //change later,
        }

    },
};