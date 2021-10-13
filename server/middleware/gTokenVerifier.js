const config = require("../config/default");    //for google auth client key
const {OAuth2Client} = require('google-auth-library');  //client for google authentication

//client using Google auth key
const client = new OAuth2Client(config.googleAuthKey);

async function gTokenVerifier(req, res, next)
{
    try
    {
        //get tokenId for google account
        const tokenId = req.body.tokenId;

        //verify tokenId and fetch data of account using its tokenId and googleAuthKey
        const response = await client.verifyIdToken({idToken: tokenId, audience : config.googleAuthKey
        });

        console.log("Google token verified");

        //get account data from above response
        const {name, picture, email, email_verified} = response.payload;

        if(!email_verified) //if tokenId is wrong
        {
            res.status(401).json({msg : "Google Account Token Id is Invalid"});
        }
        else
        {
            //push account data into request body
            const googleAccountData = {
                name,
                picture,
                email
            }
            req.body.googleAccountData = googleAccountData;

            //call next middleware
            next();
        }

    }
    catch(err)
    {
        console.log(err);
        res.status(505).json({msg : "Server Error"});
    }
}

module.exports = gTokenVerifier;