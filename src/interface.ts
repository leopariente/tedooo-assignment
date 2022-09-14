export interface Post {
    id: String,
    userId: String,
    username: String,
    avatar: String,
    shopName?: String,
    shopId?: String,
    images: String[],
    comments: Number,
    date: String,
    text: String,
    likes: Number,
    didLike: Boolean,
    premium: Boolean
}

export interface PostProps {
    post: Post
}