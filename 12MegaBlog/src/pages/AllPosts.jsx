import React,{useState,useEffect} from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/config';
const AllPosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
      try {
        const response = await service.getPosts([]);

        if (response && response.rows) {
          setPosts(response.rows);
        } else {
          setPosts([]); // fallback safety
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
        setPosts([]);
      }
    };

    fetchPosts();
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts