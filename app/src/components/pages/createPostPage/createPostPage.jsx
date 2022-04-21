import React from 'react'
import './createPostPage.scss'
import {Header} from '../../organisms/header/header'
import { CreatePostForm } from '../../organisms/createPostForm/createPostForm';


export const CreatePostPage = () => {
  return (
    <div className="container-post">   
        <Header />
        <div className='background-img'>
          <CreatePostForm />
        </div>
       
    </div>
  );
}
