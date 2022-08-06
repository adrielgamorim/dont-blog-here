import { useEffect, useState } from "react";
import { doc, getDocs, deleteDoc, collection } from 'firebase/firestore'
import { auth, db } from '../../firebase-config'
import { StyledHome } from "../styled/Home.styled";
import { Post, PostHeader, PostTitle, PostContent, PostAuthor, DeletePost } from "../styled/Post.styled";

const Home = ({ isAuth }) => {
    const [postList, setPostList] = useState([])
    const postsCollectionRef = collection(db, 'posts')

    const getPosts = async () => {
        const data = await getDocs(postsCollectionRef)
        setPostList(data.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })))
    }

    useEffect(() => {
        getPosts()
    // [] nedded to not loop infinitely
    // Next line disables the warning that [] causes
    // eslint-disable-next-line 
    }, [])

    // 
    const deletePost = async (id) => {
        if(window.confirm('ARE YOU SURE YOU WANT TO DELETE THIS POST?')) {
            const deletionDoc = doc(db, 'posts', id)
            await deleteDoc(deletionDoc)
            getPosts()
        }
        else {
            return
        }
    }


    // RENDERED SECTION
    return ( 
        <StyledHome>
            {postList.map((post) => {
                return (
                    <Post key={post.id}>
                        <PostHeader>
                            <PostTitle>
                                <h1>{ post.title }</h1>
                            </PostTitle>

                            {isAuth && post.author.id === auth.currentUser.uid && (
                                <DeletePost>
                                    <button onClick={() => {deletePost(post.id)}}>
                                        &#8855;
                                    </button>
                                    
                                </DeletePost>
                            )}
                        </PostHeader>

                        <PostContent>{ post.postText }</PostContent>
                        <PostAuthor>
                            <h3>@{ post.author.name }</h3>
                            <img src={post.author.photo} referrerPolicy="no-referrer" alt="" />
                        </PostAuthor>
                    </Post>
                )
            })}
        </StyledHome>
     );
}
 
export default Home;