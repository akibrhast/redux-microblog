import React from 'react';
import TitleList from "./TitleList";

function Home() {
  return (
    <main>
      <p>
        Welcome to <b>Microblog</b>, a place where you can bare your soul and share your thoughts without any restrictions.
      </p>
      <TitleList />
    </main>
  );
}

export default Home;