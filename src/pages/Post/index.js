import React from 'react';
import './styles.css'
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css';
import { TextInput, Textarea, Icon, Button, MediaBox } from 'react-materialize';
import circle from '../../assets/img/circle.png';
import { motion } from "framer-motion";


function Post() {
 return (
  <>
   <main className="post">
    <div className="container">
     <MediaBox
      id="MediaBox_7"
      options={{
       inDuration: 275,
       onCloseEnd: null,
       onCloseStart: null,
       onOpenEnd: null,
       onOpenStart: null,
       outDuration: 200
      }}
     >
      <img
       alt=""
       src="https://materializecss.com/images/sample-1.jpg"
       width="650"
      />
     </MediaBox>
     <h1>Title</h1>
     <p>
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

      The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
    </p>

     <div className="more">
      <a>
       Saber mais
      </a>
     </div>

     <div className="profile">
      <h2>Escrito por:</h2>
      <div className="row">
       <div className="col s12 m6 l6">
        <div className="circle">
         <motion.div
          transition={{ delay: 0.5, duration: 0.5 }}
          variants={{
           show: { opacity: 1 },
           hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
         >
          <img
           src={circle}
           alt="olhos"
           width={200}
           height={200}
          />
         </motion.div>
        </div>
       </div>
       <div className="col s12 m6 l6 dataprofile">
        <h3>Lana Rhoades</h3>
        <p>Esteticista</p>
        <div className="icons">
         <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
         >
          <svg
           width="48"
           height="48"
           viewBox="0 0 48 48"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            className="facebook"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM26.5016 38.1115V25.0542H30.1059L30.5836 20.5546H26.5016L26.5077 18.3025C26.5077 17.1289 26.6192 16.5001 28.3048 16.5001H30.5581V12H26.9532C22.6231 12 21.0991 14.1828 21.0991 17.8536V20.5551H18.4V25.0547H21.0991V38.1115H26.5016Z"
            fill="white"
           />
          </svg>
         </a>

         {/* <!-- INSTAGRAM --> */}
         <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
         >
          <svg
           width="48"
           height="48"
           viewBox="0 0 48 48"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
           className="instagram"
          >
           <g id="instagram">
            <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM24.0012 11.2C20.5249 11.2 20.0886 11.2152 18.7233 11.2773C17.3606 11.3397 16.4305 11.5555 15.6166 11.872C14.7747 12.1989 14.0606 12.6363 13.3491 13.348C12.6371 14.0595 12.1997 14.7736 11.8717 15.6152C11.5544 16.4294 11.3384 17.3598 11.2771 18.7219C11.216 20.0873 11.2 20.5238 11.2 24.0001C11.2 27.4764 11.2155 27.9114 11.2773 29.2767C11.34 30.6394 11.5557 31.5695 11.872 32.3834C12.1992 33.2253 12.6365 33.9394 13.3483 34.6509C14.0595 35.3629 14.7736 35.8013 15.615 36.1283C16.4294 36.4448 17.3598 36.6605 18.7222 36.7229C20.0876 36.7851 20.5236 36.8003 23.9996 36.8003C27.4762 36.8003 27.9111 36.7851 29.2765 36.7229C30.6391 36.6605 31.5703 36.4448 32.3848 36.1283C33.2264 35.8013 33.9394 35.3629 34.6506 34.6509C35.3626 33.9394 35.8 33.2253 36.128 32.3837C36.4427 31.5695 36.6587 30.6391 36.7227 29.277C36.784 27.9116 36.8 27.4764 36.8 24.0001C36.8 20.5238 36.784 20.0876 36.7227 18.7222C36.6587 17.3595 36.4427 16.4294 36.128 15.6155C35.8 14.7736 35.3626 14.0595 34.6506 13.348C33.9386 12.636 33.2266 12.1987 32.384 11.872C31.5679 11.5555 30.6373 11.3397 29.2746 11.2773C27.9092 11.2152 27.4746 11.2 23.9972 11.2H24.0012Z"
             fill="white"
            />
            <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M22.8529 13.5067C23.1937 13.5062 23.574 13.5067 24.0012 13.5067C27.4188 13.5067 27.8239 13.519 29.1735 13.5803C30.4215 13.6374 31.0989 13.8459 31.5501 14.0211C32.1474 14.2531 32.5733 14.5304 33.021 14.9784C33.469 15.4264 33.7464 15.8531 33.9789 16.4505C34.1541 16.9011 34.3629 17.5785 34.4197 18.8265C34.481 20.1758 34.4944 20.5812 34.4944 23.9972C34.4944 27.4132 34.481 27.8186 34.4197 29.1679C34.3626 30.4159 34.1541 31.0933 33.9789 31.5439C33.7469 32.1413 33.469 32.5666 33.021 33.0144C32.573 33.4624 32.1477 33.7397 31.5501 33.9717C31.0994 34.1477 30.4215 34.3557 29.1735 34.4128C27.8242 34.4741 27.4188 34.4874 24.0012 34.4874C20.5833 34.4874 20.1782 34.4741 18.8289 34.4128C17.5809 34.3552 16.9035 34.1466 16.4521 33.9714C15.8547 33.7394 15.428 33.4621 14.98 33.0141C14.532 32.5661 14.2547 32.1405 14.0222 31.5429C13.847 31.0922 13.6382 30.4149 13.5814 29.1669C13.52 27.8175 13.5078 27.4122 13.5078 23.994C13.5078 20.5758 13.52 20.1726 13.5814 18.8233C13.6384 17.5753 13.847 16.8979 14.0222 16.4467C14.2542 15.8494 14.532 15.4227 14.98 14.9747C15.428 14.5267 15.8547 14.2494 16.4521 14.0168C16.9033 13.8408 17.5809 13.6328 18.8289 13.5755C20.0097 13.5222 20.4673 13.5062 22.8529 13.5035V13.5067ZM30.8338 15.632C29.9858 15.632 29.2978 16.3193 29.2978 17.1675C29.2978 18.0155 29.9858 18.7035 30.8338 18.7035C31.6818 18.7035 32.3698 18.0155 32.3698 17.1675C32.3698 16.3195 31.6818 15.632 30.8338 15.632ZM24.0012 17.4267C20.371 17.4267 17.4278 20.37 17.4278 24.0001C17.4278 27.6303 20.371 30.5722 24.0012 30.5722C27.6314 30.5722 30.5735 27.6303 30.5735 24.0001C30.5735 20.37 27.6314 17.4267 24.0012 17.4267Z"
             fill="white"
            />
            <path
             fill-rule="evenodd"
             clip-rule="evenodd"
             d="M24.0012 19.7334C26.3575 19.7334 28.2679 21.6436 28.2679 24.0001C28.2679 26.3564 26.3575 28.2668 24.0012 28.2668C21.6446 28.2668 19.7345 26.3564 19.7345 24.0001C19.7345 21.6436 21.6446 19.7334 24.0012 19.7334Z"
             fill="white"
            />
           </g>
          </svg>
         </a>

         {/* <!-- whatsApp --> */}
         <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp"
          aria-label="whatsApp"
         >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M24 48C10.7452 48 0 37.2548 0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48ZM24.7911 37.3525C32.6595 37.3493 39.059 30.9483 39.0621 23.0815C39.0637 19.2683 37.5806 15.6828 34.8862 12.9854C32.1918 10.2879 28.6086 8.80165 24.7909 8.8C16.9248 8.8 10.5228 15.2017 10.5196 23.0702C10.5186 25.5855 11.1757 28.0405 12.4246 30.2048L10.4 37.6L17.9653 35.6155C20.0498 36.7524 22.3967 37.3517 24.7852 37.3525H24.7911Z" fill="white" />
           <path fill-rule="evenodd" clip-rule="evenodd" d="M18.3159 33.0319L13.8265 34.2096L15.0248 29.8324L14.7428 29.3836C13.5554 27.4951 12.9283 25.3124 12.9292 23.0711C12.9318 16.5311 18.2529 11.2104 24.7958 11.2104C27.964 11.2115 30.9422 12.4469 33.1817 14.689C35.4212 16.9311 36.6538 19.9112 36.6526 23.0807C36.6499 29.6212 31.3289 34.9424 24.7911 34.9424H24.7863C22.6578 34.9415 20.5702 34.3697 18.749 33.289L18.3159 33.0319ZM31.9808 26.4751C31.8917 26.3264 31.654 26.2372 31.2974 26.0586C30.9408 25.8801 29.1877 25.0176 28.8608 24.8985C28.534 24.7795 28.2961 24.7201 28.0585 25.0769C27.8208 25.4339 27.1374 26.2372 26.9294 26.4751C26.7214 26.7131 26.5133 26.7429 26.1569 26.5644C25.8003 26.3859 24.6513 26.0094 23.2893 24.7945C22.2292 23.8489 21.5135 22.6813 21.3055 22.3243C21.0975 21.9673 21.2834 21.7743 21.4619 21.5965C21.6223 21.4367 21.8185 21.1799 21.9968 20.9718C22.1751 20.7636 22.2345 20.6148 22.3533 20.377C22.4722 20.1389 22.4128 19.9307 22.3236 19.7522C22.2345 19.5737 21.5213 17.8185 21.2242 17.1045C20.9347 16.4092 20.6408 16.5034 20.4219 16.4924C20.2141 16.482 19.9762 16.4798 19.7385 16.4798C19.5008 16.4798 19.1144 16.569 18.7876 16.926C18.4607 17.283 17.5395 18.1457 17.5395 19.9008C17.5395 21.656 18.8173 23.3516 18.9956 23.5896C19.1739 23.8276 21.51 27.4293 25.0871 28.9739C25.9379 29.3413 26.602 29.5607 27.12 29.725C27.9742 29.9965 28.7516 29.9582 29.3659 29.8663C30.0511 29.764 31.4756 29.0038 31.7729 28.1709C32.0699 27.3378 32.0699 26.6238 31.9808 26.4751Z" fill="white" />
          </svg>
         </a>

         {/* <!-- LINKEDIN --> */}
         <a
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
          aria-label="Linkedin"
         >
          <svg
           width="48"
           height="48"
           viewBox="0 0 48 48"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            id="linkedin"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM16.9605 19.8778H11.5216V36.2196H16.9605V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM36.5754 26.8497C36.5754 21.8303 33.8922 19.4941 30.3131 19.4941C27.4254 19.4941 26.1325 21.0802 25.4107 22.1929V19.8783H19.9711C20.0428 21.4117 19.9711 36.22 19.9711 36.22H25.4107V27.0934C25.4107 26.605 25.446 26.1178 25.5898 25.7682C25.9829 24.7924 26.8779 23.7822 28.3805 23.7822C30.3494 23.7822 31.1365 25.2807 31.1365 27.4767V36.2196H36.5752L36.5754 26.8497Z"
            fill="white"
           />
          </svg>
         </a>
        </div>
       </div>
      </div>
     </div>

    </div>
   </main>
  </>
 )
}

export default Post