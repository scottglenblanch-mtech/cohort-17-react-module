'use client'
import { Card, Input } from '@mui/material';
import { Fragment, useRef, useState } from 'react';
import styles from './page.module.css'
/*
Create a React page...

Form
- input for name
- input for email
- input for favorite movie


- Button to submit form
    - When you click the submit form it will
        - display the data submitted
        - clear out the inputs
- Multiple submitted data can be displayed on the page
    - This can be displayed as a list

*/
export default function Home() {

  const [submittedData, setSubmittedData] = useState([]);
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const favoriteMovieInputRef = useRef(null);


  const onClickSubmit = (e) => {
    e.preventDefault();

    const nameInputElement = nameInputRef.current;
    const emailInputElement = emailInputRef.current;
    const favoriteMovieElement = favoriteMovieInputRef.current;

    const nameValue = nameInputElement.value;
    const emailValue = emailInputElement.value;
    const favoriteMovieValue = favoriteMovieElement.value;

    const isAllFilledOut = nameValue.length > 0 
      && emailValue.length > 0 
      && favoriteMovieValue.length > 0;

    if (isAllFilledOut) {
      const newSubmittedDataItem = {
        name: nameValue,
        email: emailValue,
        favoriteMovie: favoriteMovieValue
      }

      setSubmittedData([...submittedData, newSubmittedDataItem])
    }


  }

  return (
    <main className={styles.main}>
      <form>
        <div>
          <label>Name</label>
          <Input inputRef={nameInputRef} type="text" name="name" placeholder="name" />
        </div>
        <div>
          <label>Email</label>
          <Input inputRef={emailInputRef} type="text" name="email" placeholder="email" />
        </div>
        <div>
          <label>Favorite Movie</label>
          <Input inputRef={favoriteMovieInputRef} type="text" name="favorite-movie" placeholder="favorite movie" />
        </div>
        <Input type="submit" onClick={(e) => onClickSubmit(e)} />
      </form>
      <div>
        {
          submittedData.map(({ name, email, favoriteMovie }, key)=> (
            <Fragment key={key}>
              <Card variant="outlined" >
                <p>
                  Name: {name}
                  <br />
                  Email: {email}
                  <br />
                  Favorite Movie: {favoriteMovie}
                  <br />
                </p>        
              </Card>
              <br /><br />
            </Fragment>

          ))
        }
      </div>
    </main>
  )
}
 