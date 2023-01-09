
import React from 'react'
import axios from 'axios';


const Projects = ({repo}) => {
    console.log(repo);

  return (
    <div>projects</div>
  )
}

export async function getServerSideProps(){
    let username = '123rishujha';
    let res = await axios.get(`https://api.github.com/search/repositories?q=user:${username}fork:true&sort=updated&per_page=10&type=Repositories`);
    
    console.log(res.data);
    return{
        props: {repo:data}
    }
  }

export default Projects

