import React, { useEffect, useState } from 'react';
import './styles.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { TextInput, Textarea, Icon, Button } from 'react-materialize';
import firebase from '../../fireCinnection';
import Alert from '@material-ui/lab/Alert';
import { useHistory, useParams } from 'react-router-dom';


function EditPost() {
     let id = useParams().id;
     let history = useHistory();
     const [loading, setLoading] = useState(false);
     const [imageType, setImageType] = useState(false);
     const [img, setImg] = useState(null);
     const [des, setDes] = useState(null);
     const [link, setLink] = useState(null);
     const [text, setText] = useState(null);
     const [title, setTitle] = useState(null);
     const [error, setError] = useState(false);

     useEffect(() => {
          firebase.getPost(id, (info) => {
               if (info.val() !== null) {
                    let { title, imagem, des, link, text } = info.val();
                    setImg(imagem);
                    setTitle(title);
                    setDes(des);
                    setLink(link);
                    setText(text);
               } else {
                    history.push("/notFound")
               }
          });

     }, []);

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
                              //     setImg(loading);
                              setLoading(true);
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
                                        setImg(url);
                                   })
                         })
               } else {
                    setImageType(true);
                    return null;
               }
          }
     };

     async function handleSubmit(e) {
          if (img !== "" && title !== "" && des !== "" && text !== "") {
               setError(false);
               const currentUid = firebase.getCurrentUid();

               let info = {
                    imagem: img,
                    title,
                    des,
                    text,
                    link,
                    autor: currentUid
               };

               await firebase.editPost(id, info);

               history.goBack()
          } else {
               setError(true);
          }
          e.preventDefault()
     }
     return (
          <>
               <main className="edit">
                    <div className="container">
                         {imageType && (
                              <Alert variant="filled" severity="error">
                                   Envie uma imagem do tipo PNG, JPEG ou JPG!
                              </Alert>
                         )}
                         {error && (
                              <Alert variant="filled" severity="warning">
                                   Por favor, preencha todos os campos obrigatórios!
                              </Alert>
                         )}
                         <form onSubmit={handleSubmit}>
                              <div class="file-field input-field" accept="image/png, image/jpeg, image/jpg" onChange={handleFile}>
                                   <input type="file" />
                                   <div class="file-path-wrapper">
                                        <img src={img} alt="Prévia da imagem" className="responsive-img" />
                                   </div>
                              </div>
                              <TextInput
                                   icon="title"
                                   id="title"
                                   label="Título *"
                                   value={title}
                                   onChange={e => setTitle(e.target.value)}
                                   noLayout
                              />
                              <TextInput
                                   icon="short_text"
                                   id="textShort"
                                   label="Descrição *"
                                   value={des}
                                   onChange={e => setDes(e.target.value)}
                                   noLayout
                              />
                              <Textarea
                                   icon={<Icon>sort</Icon>}
                                   id="Textarea-12"
                                   label="Texto do post *"
                                   value={text}
                                   data-length={300}
                                   onChange={e => setText(e.target.value)}
                                   noLayout
                              />
                              <TextInput
                                   icon="insert_link"
                                   id="link"
                                   label="Saber mais Link"
                                   value={link}
                                   onChange={e => setLink(e.target.value)}
                                   noLayout
                              />

                              <div className="buttons">
                                   <Button
                                        node="button"
                                        type="submit"
                                        waves="light"
                                        disabled={loading}
                                   >
                                        Editar
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

export default EditPost