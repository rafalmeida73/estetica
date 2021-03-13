import React, {useState} from 'react';
import './styles.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { TextInput, Textarea, Icon, Button } from 'react-materialize';
import firebase from '../../fireCinnection';
import { useHistory } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import upload from '../../assets/img/upload.png'

function NewPost() {
     let history = useHistory();
     const [imageType, setImageType] = useState(false);
     const [loading, setLoading] = useState(false);
     const [url, setUrl] = useState(upload);
     const [title, setTitle] = useState(null);
     const [des, setDesc] = useState(null);
     const [text, setText] = useState(null);
     const [link, setLink] = useState(null);

     const handleFile = async (e) => {

          if (e.target.files[0]) {
      
            const image = e.target.files[0];
      
            if (image.type === 'image/png' || image.type === 'image/jpeg' || image.type === 'image/jpg') {
              const currentUid = firebase.getCurrentUid();
      
              const uploadTaks = firebase.storage
                .ref(`images/${currentUid}/${image.name}`)
                .put(image);
      
              await uploadTaks.on('state_changed',
                (snapshot) => {
                  //progress
                  console.log("progress");
                  setLoading(true);
               //    setUrl(loading); img preloader
                },
                (error) => {
                  //error
                  console.log('Error imagem: ' + error);
                },
                () => {
                  //sucessO!
                  setLoading(false);
                  firebase.storage.ref(`images/${currentUid}`)
                    .child(image.name).getDownloadURL()
                    .then(url => {
                      setUrl(url);
                    })
                })
            } else {
              setImageType(true);
              return null;
            }
          }
          e.preventDefault()
        };

          function handleSubmit(e){
          const currentUid = firebase.getCurrentUid();
          let posts = firebase.app.ref('posts');
          let key = posts.push().key;
          posts.child(key).set({
            imagem: url,
            title,
            des,
            text,
            link,
            autor: currentUid
          });
          console.log('rafa')
      
          history.push(`/post/${key}`);
          e.preventDefault()
     }

 return (
  <>
   <main className="create">
    <div className="container">
    {imageType && (
              <Alert variant="filled" severity="error">
                Envie uma imagem do tipo PNG, JPEG ou JPG!
              </Alert>
     )}
     <form onSubmit={handleSubmit}>
      <div class="file-field input-field" accept="image/png, image/jpeg, image/jpg">
       <input type="file" accept="image/png, image/jpeg, image/jpg" onChange={handleFile}/>
       <div class="file-path-wrapper">
        <img src={url} alt="Prévia da imagem" width="340" className="responsive-img" />
       </div>
      </div>
      <TextInput
       icon="title"
       id="title"
       label="Título"
       onChange={e => setTitle(e.target.value)}
      />
      <TextInput
       icon="short_text"
       id="textShort"
       label="Descrição"
       onChange={e => setDesc(e.target.value)}
      />
      <Textarea
       icon={<Icon>sort</Icon>}
       id="Textarea-12"
       label="Texto do post"
       data-length={300}
       onChange={e => setText(e.target.value)}
      />
      <TextInput
       icon="insert_link"
       id="link"
       label="Saber mais Link"
       onChange={e => setLink(e.target.value)}
      />

      <div className="buttons">
       <Button
        node="button"
        type="submit"
        waves="light"
        disabled={loading}
       >
        Salvar
    <Icon left>
         edit
    </Icon>
       </Button>
      </div>
     </form>
    </div>
   </main>
  </>
 )
}

export default NewPost