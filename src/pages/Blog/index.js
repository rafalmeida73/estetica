import React, { useEffect, useState } from 'react'
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Link } from 'react-router-dom';
import { Icon, Card, CardTitle } from 'react-materialize';
import firebase from '../../fireCinnection';
import { Fab, Action } from 'react-tiny-fab';
import fire from 'firebase/app';
import { motion } from "framer-motion";

function Blog() {
 const [posts, setPosts] = useState([]);
 const [uid] = useState(localStorage.uid);
 const [autor, setAutor] = useState(false);

 useEffect(() => {
  Auth();
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

 function Auth() {
  var user = fire.auth().currentUser;

  if (user) {
   setAutor(true);
   return true
  } else {
   setAutor(false);
   return false
  }
 }

 return (
  <>
   <main className='blog'>
    {autor && (
     <Fab
      icon={<Icon>add</Icon>}
      event="hover"
      alwaysShowTitle={true}
      key={uid}
     >
      <Action
       text="Novo post"
      >
       <Link to={`/create`}>
        <Icon className="white-text">add</Icon>
       </Link>
      </Action>
     </Fab>
    )}

    <h1>Blog Rhoades</h1>
    <div className="row cardData">
     {posts.map(post => {
      let { key, title, img, des } = post;
      return (
       <div className="col s12 m4 l4" key={key}>
         <motion.div
                animate={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1 }}
              >
               <Link to={`post/${key}`}>
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
        </Link>
        </motion.div>
       </div>
      )
     })}

    </div>
   </main>
  </>
 )
}

export default Blog;