const capitalize = require('capitalize-first-letter');
class UserInfo {
    constructor(rawUser) {
        this.user_id      = rawUser[0].user_id;
        this.first_name   = rawUser[0].first_name;
        this.last_name    = rawUser[0].last_name;
        this.birth_date   = rawUser[0].birth_date;
        this.gender       = rawUser[0].gender;
        this.email        = rawUser[0].email;
        this.relationship = rawUser[0].relationship;
        this.user_avatar  = rawUser[0].user_avatar;
        this.phone_number = rawUser[0].phone_number;
        this.address      = rawUser[0].address;
        this.password     = rawUser[0].password;
        this.user_avatar  = rawUser[0].user_avatar;
        this.user_cover   = rawUser[0].user_cover;
    }

    getUserId() {
        return this.user_id;
    }
    getUserPassword() {
        return this.password;
    }
    getName() {
        return capitalize(this.first_name);
    }
    getFirstName() {
        return this.first_name;
    }
    getLastName() {
        return this.last_name;
    }
    getPresentationName() {
        return capitalize(this.first_name + ' ' + this.last_name);
    }
    getBirthDate() {
        return this.birth_date.toISOString().split("T")[0];
    }
    getGender() {
        return this.gender;
    }
    getEmail() {
        return this.email;
    }
    getRelationship () {
        return this.relationship;
    }
    getUserAvatar() {
        return '/uploadedFiles/' + this.user_avatar;        
    }
    getUserCover() {
        return '/uploadedFiles/' + this.user_cover;
    }
    getPhoneNumber() {
        return this.phone_number;
    }
    getAddress() {
        return this.address;
    }
    getExistAvatar() {
        return this.user_avatar;
    }
    getDefaultAvatar() {
        return 'img/default-user.png';
    }
}

module.exports = UserInfo;
