import React, { useEffect, useState } from 'react'
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Link } from 'react-router-dom';
import { Icon, Card, CardTitle } from 'react-materialize';
import firebase from '../../fireCinnection';

function Blog() {
 const [posts, setPosts] = useState([]);


 useEffect(() => {
  localStorage.setItem("uid", firebase.getCurrentUid())

  firebase.app.ref('posts').on('value', (snapshot) => {
   let info = [];
   snapshot.forEach((childItem) => {

    info.push({
     key: childItem.key,
     title: childItem.val().title,
     img: childItem.val().imagem,
     des: childItem.val().des,
    })
   });

   setPosts(info);
  })
 });

 return (
  <>
   <main className='blog'>

    <h1>Blog Rhoades</h1>
    <div className="row cardData">
     {posts.map(post => {
      let { key, title, img, des } = post;
      return (
       <div className="col s12 m4 l4" key={key}>
        <Card
         actions={[
          <Link to={`post/${key}`}>Saber Mais</Link>
         ]}
         closeIcon={<Icon>close</Icon>}
         header={<CardTitle image={img}>{title}</CardTitle>}
         revealIcon={<Icon>more_vert</Icon>}
        >
         {des}
        </Card>
       </div>
      )
     })}

    </div>
   </main>
  </>
 )
}

export default Blog;