const Comment = require('./Comment');
const dateTime = require('date-time');

class CommentRepository {
    constructor(knex) {
        this.knex = knex;
    }

    async findCommentOwner(user_id, post_id, comment_id) {
        return await this.knex.select('*').from('comment').where({
            user_id: user_id,
            post_id: post_id,
            comment_id: comment_id
        });
    }

    async findComment(post_id) {
        let comments = await this.knex.select(
                                            'first_name',
                                            'last_name',
                                            'comment_id',
                                            'comment.user_id',
                                            'post_id',
                                            'comment_text',
                                            'comment_time'
                                        )
                                        .from('comment')
                                        .leftJoin('users', 'comment.user_id', 'users.user_id')
                                        .where({
                                            post_id: post_id
                                        })
                                        .orderBy('comment_time', 'desc');

        return comments.map((comment) => { return new Comment(comment)} );
    }

    async postComment(user_id, post_id, comment_text) {
        let comment = await this.knex('comment')
                                    .insert([{
                                        user_id: user_id,
                                        post_id: post_id,
                                        comment_text: comment_text,
                                        comment_time: dateTime()
                                    }]);
        return new Comment(comment[0]);
    }

    async editComment(user_id, post_id, comment_id, comment_text) {
        let comment = await this.knex('comment')
                                    .update([{
                                        post_id: post_id,
                                        comment_text: comment_text
                                    }])
                                    .where({
                                        comment_id: comment_id
                                    });
        return new Comment(comment[0]);
    }

    async deleteComment(comment_id) {
        let comment = await this.knex('comment')
                                    .where({
                                        comment_id: comment_id
                                    })
                                    .del();
        return new Comment(comment[0]);
    }
}

module.exports = CommentRepository;