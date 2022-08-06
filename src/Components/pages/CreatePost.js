import { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { useNavigate } from 'react-router-dom'
import { StyledCreatePost, CreatePostContainer, InputGroupContainer } from "../styled/CreatePost.styled";


const CreatePost = ( { isAuth }) => {
    const [title, setTitle] = useState('')
    const [postText, setPostText] = useState('')
    
    const postsCollectionRef = collection(db, 'posts')
    let navigate = useNavigate()

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
            title,
            postText,
            author: {name: auth.currentUser.displayName, id: auth.currentUser.uid, photo: auth.currentUser.providerData[0].photoURL },
        })
        navigate('/')
    }

    useEffect(() => {
      if(!isAuth) {
        navigate('/login')
      }
    }, )
    

    return ( 
        <StyledCreatePost>
            <CreatePostContainer>
                <h1>Create a Post</h1>

                <InputGroupContainer>
                    <label> Title: </label>
                    <input
                        placeholder="Give a title for your post"
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }}
                    />
                </InputGroupContainer>
                <InputGroupContainer>
                    <label> Post: </label>
                    <textarea
                        placeholder="Type your post here"
                        onChange={(e) => {
                            setPostText(e.target.value)
                        }}    
                    />
                </InputGroupContainer>
                <button onClick={createPost}> Submit Post </button>
            </CreatePostContainer>
        </StyledCreatePost>
    );
}
 
export default CreatePost;