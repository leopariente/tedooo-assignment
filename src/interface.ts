export interface Post {
    id: string,
    userId: string,
    username: string,
    avatar: string,
    shopName?: string,
    shopId?: string,
    images: string[],
    comments: Number,
    date: string,
    text: string,
    likes: Number,
    didLike: Boolean,
    premium: Boolean
}

export interface PostProps {
    post: Post
}