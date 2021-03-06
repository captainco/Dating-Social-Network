class FindVideByUserId {
    constructor(user_id) {
        this.user_id = user_id;
    }
    
    buildSearchQuery(query) {
        return query.select('*')
                    .from('medias')
                    .where({ user_id: this.user_id })
                    .andWhere('file_type', 'like', 'video/%')
    }
}

module.exports = FindVideByUserId;
