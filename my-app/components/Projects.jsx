import React from 'react'


const Projects = ({repo}) => {
    // console.log(repo);

  return (
    <div>projects</div>
  )
}

export async function getServerSideProps(){
    let username = '123rishujha';
    const res = await fetch(`https://api.github.com/search/repositories?q=user:123rishujha+fork:true&sort=updated&per_page=10&type=Repositories`);
    let data = await res.json();
    console.log(data);
    return{
        props: {repo:data}
    }
  }

export default Projects

