import React from 'react';
import './styles.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { TextInput, Textarea, Icon, Button } from 'react-materialize';


function EditPost() {
 return (
  <>
   <main className="edit">
    <div className="container">
     <form>
      <div class="file-field input-field" accept="image/png, image/jpeg, image/jpg">
       <input type="file" />
       <div class="file-path-wrapper">
        <img src={"https://img.freepik.com/fotos-gratis/3d-rendem-de-uma-mesa-de-madeira-com-uma-imagem-defocussed-de-um-barco-em-um-lago_1048-3432.jpg"} alt="Prévia da imagem" className="responsive-img" />
       </div>
      </div>
      <TextInput
       icon="title"
       id="title"
       label="Título"
      />
      <TextInput
       icon="short_text"
       id="textShort"
       label="Descrição"
      />
      <Textarea
       icon={<Icon>sort</Icon>}
       id="Textarea-12"
       label="Texto do post"
       data-length={300}
      />
      <TextInput
       icon="insert_link"
       id="link"
       label="Saber mais"
      />

      <div className="buttons">
       <Button
        node="button"
        type="submit"
        waves="light"
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