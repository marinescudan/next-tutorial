import React from 'react'
import getUserPosts from '@/lib/getUserPosts'
type Params = {
    params: {
        userId: string
    }
}

export default async function UserPage({ params: { userId }}: Params) {
    const userData: Promise<User> = getUserPosts(userId)
    return (
        <div>UserPage</div>
    )
}
