import React from 'react'
import './styles.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { Link } from 'react-router-dom';
import { Icon, Card, CardTitle } from 'react-materialize';

function Blog() {
 return (
  <>
   <main className='blog'>

    <h1>Blog Rhoades</h1>
    <div className="row cardData">
     <div className="col s12 m4 l4">

      <Card
       actions={[
        <Link key="1" to="/">Saber Mais</Link>
       ]}
       closeIcon={<Icon>close</Icon>}
       header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Titulo</CardTitle>}
       revealIcon={<Icon>more_vert</Icon>}
      >
       Here is the standard card with an image thumbnail.
      </Card>
     </div>

    </div>
   </main>
  </>
 )
}

export default Blog;