import { useForm } from 'react-hook-form'
import { addPost } from '../../../redux/actions/profile-actions'
import addImage from '../../../images/add.svg'

import '../../../styles/Posts.scss'
import { useAppDispatch } from '../../../utils/hooks'

const AddPostForm = () => {
    interface PostInputValues {
        newPostText: string
    }
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<PostInputValues>()
    const onSubmit = (data: PostInputValues) => {
        dispatch(addPost(data.newPostText))
        reset()
    }

    return (
        <>
            <form className='posts-newpost' onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('newPostText', {
                        required: 'Post cannot be empty',
                        maxLength: { value: 10, message: 'The post should be under 10 characters' },
                    })}
                    placeholder="What's on your meownd?"
                    className={errors.newPostText ? 'red-border' : ''}
                />
                <button>
                    <img src={addImage} alt='' className='posts-addbutton' />
                </button>
            </form>
            {errors.newPostText && (
                <div className='post-input-error'>{errors.newPostText.message}</div>
            )}
        </>
    )
}

export default AddPostForm
