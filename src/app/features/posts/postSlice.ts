import { PayloadAction, createSlice, nanoid } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { sub } from 'date-fns'

export type Reactions = {
  thumbsUp: number
  wow: number
  heart: number
  rocket: number
  coffee: number
}

export type Post = {
  id: number
  title: string
  content: string
  date: string
  userId?: number
  reactions: Record<keyof Reactions, number>
  body?: any
}

const initialState: Post[] = [
  {
    id: 1,
    title: 'First post',
    content: 'First post content',
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
  // { id: 2, title: 'Second post', content: 'Second post content', },
  {
    id: 3,
    title: 'Third post',
    content: ' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est aut iure accusantium aspernatur reiciendis suscipit eveniet soluta non aperiam amet? Alias repellendus ab temporibus nostrum fuga et harum, voluptates saepe deleniti commodi. Minima placeat, necessitatibus quaerat voluptates labore inventore illo excepturi consequuntur saepe doloribus reprehenderit. Beatae dolores ipsum deserunt dignissimos dicta iusto maxime a perferendis nemo sed dolorem amet molestiae vitae possimus, nesciunt saepe quos provident maiores incidunt laborum!  Atque quia non placeat unde aliquid error ea ipsam dolor sunt fugit, vero consectetur praesentium aliquam ullam officia repudiandae impedit quidem ut! Eveniet, explicabo voluptates, rerum officia dolore maiores magnam assumenda sint eos eaque eius sequi ad fugiat alias accusamus harum maxime voluptas! Quas corrupti inventore amet, ipsum a odio porro corporis, veniam iure deserunt alias saepe placeat, facilis dolores? Et qui laudantium neque, quo aliquam deleniti labore doloribus, nihil consequatur, atque illo magnam inventore vero rerum similique tenetur quisquam voluptatem temporibus velit? Eaque ipsa libero illum impedit odit facilis soluta iure perferendis voluptate consequatur ad quibusdam velit corrupti adipisci, praesentium ullam quidem repellendus cupiditate similique. Accusamus ab unde cupiditate doloribus dolores tempora dolorum, maiores soluta, optio, alias quo culpa temporibus.',
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0
    }
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: parseInt(nanoid(), 36),
            title,
            content,
            date: new Date().toISOString(),
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0
            }
          },
        }
      }
    },
    reactionAdded: (state, action: PayloadAction<{ postId: number, reaction: keyof Reactions }>) => {
      const { postId, reaction } = action.payload
      const existingPost = state.find(post => post.id === postId)
      if (existingPost) {
        existingPost.reactions[reaction]++  
      }
    }
  }
})

export const selectAllPosts = (state: RootState) => state.posts

export const { addPost, reactionAdded } = postsSlice.actions

export default postsSlice.reducer;