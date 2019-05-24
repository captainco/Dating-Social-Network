class CommentController {

    async postComment(ctx) {
        let main_user        = await ctx.userRepository.getUserInfo(ctx.session.loggedInUserId);
        const {comment_text} = ctx.request.body;
        let newcomment       =  ctx.commentRepository.postComment(main_user.getUserId(), ctx.query.id, comment_text);
        return ctx.redirect('/post?id=' + ctx.query.id, newcomment);
    }
    
    async editComment(ctx) {
        const {comment_text} = ctx.request.body;
        let main_user        = await ctx.userRepository.getUserInfo(ctx.session.loggedInUserId);
        let editComment      = await ctx.commentRepository.editComment(ctx.session.loggedInUserId, ctx.query.idcomment, comment_text);
        return ctx.redirect('/post?id=' + ctx.query.id, {main_user, editComment});
    }

    async deleteComment(ctx) {
        let deletecomment = ctx.commentRepository.deleteComment(ctx.query.idcomment);
        return ctx.redirect('/post?id=' + ctx.query.id, deletecomment);
    }
}

module.exports = CommentController;