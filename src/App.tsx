import React, {FC, useCallback, useState} from 'react';
import Welcome from './pages/Welcome';
import Quiz from './pages/Quiz';
import LeaderBoard from './pages/LeaderBoard';
import {PageProps} from './types/page.type';



type Page = 'welcome' | 'quiz' | 'leaderboard'

const PageDictionary: { [key in Page]: FC<PageProps> } = {
  welcome: Welcome,
  quiz: Quiz,
  leaderboard: LeaderBoard
}

const App = () => {
  // const [page, setPage] = useState<Page>('leaderboard')
  const [page, setPage] = useState<Page>('welcome')

  const Component = PageDictionary[page]

  const onNextPage = useCallback(() => {
    const newPage: Page = (
      page === 'welcome'
        ? 'quiz'
        : page === 'quiz'
          ? 'leaderboard'
          : 'welcome'
    )
    
    setPage(newPage)
  }, [page, setPage])

  return (
    <main className='main'>
      <Component onNextClick={onNextPage} buttonText={page === 'welcome' ? 'Next Page' : page === 'quiz' ? 'Next' : ''}  />
    </main>
  )
}

export default App;
