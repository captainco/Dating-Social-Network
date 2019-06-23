class SentFriendRequestByUserId {
    constructor(user_id) {
        this.user_id = user_id;
    }

    buildSearchQuery(query) {
        return query.select('*')
                    .from('followers')
                    .where({'followers.user_id' : user_id, status : 'waiting' })
    }
}

module.exports = SentFriendRequestByUserId;
