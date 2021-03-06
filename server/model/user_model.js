const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    // phone_number
    authyId: String,
    hashed_password: String
});

mongoose.model('User', UserSchema);

