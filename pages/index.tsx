import Head from 'next/head';

export default function Home(): React.ReactNode {
    return (
        <div>
            <Head>
                <title>MockAuth</title>
                <meta name='description' content='Mock your authentication and authorization for your learning' />
                <link rel='icon' href='/icon.png' />
            </Head>
            <header className='min-h-screen'>
                <div className='h-12 shadow-md fixed w-screen backdrop-blur bg-white/0'>
                    <nav className='max-w-7xl mx-auto h-full border-x flex items-center justify-between px-6'>
                        <div>
                            <h1 className='text-neutral-200 text-xl text-opacity-80 hover:text-opacity-100 cursor-pointer'>
                                MockAuth
                            </h1>
                        </div>
                        <ul className='flex list-none w-3/4 justify-end'>
                            <li className='text-sm text-opacity-60 text-neutral-200 cursor-pointer hover:text-opacity-75 '>
                                <a href='#about'>About</a>
                            </li>
                            <li className='text-sm text-opacity-60 mx-6 text-neutral-200 cursor-pointer hover:text-opacity-75 '>
                                <a href='#docs'>Docs</a>
                            </li>
                            <li className='text-sm text-opacity-60 text-neutral-200 cursor-pointer hover:text-opacity-75 '>
                                <a target='_blank' href='https://github.com/Nodirbek-py/mockauth' rel='noreferrer'>
                                    Github
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex items-center justify-center flex-col h-screen'>
                    <h1 className='text-neutral-200 text-5xl mb-6 text-center'>MockAuth</h1>
                    <p className='text-neutral-200 font-thin text-xl mb-6 text-center'>
                        An Application for mocking authentication process. <br />
                        You can use this application as a backend for learning purposes.
                    </p>
                    <button className='bg-cyan-500 px-4 py-2 rounded-md shadow-md shadow-cyan-500'>
                        <a href='#about'>Get Started</a>
                    </button>
                </div>
            </header>
            <main>
                <section className='max-w-7xl border min-h-screen mx-auto p-8' id='about'>
                    <h1 className='text-neutral-200 text-5xl mb-6 text-center'>About the project</h1>
                    <p className='text-neutral-200 font-thin text-xl text-center mb-10'>
                        I created this application in order to help guys who are learning development. When I was
                        learning frontend development I had some difficulties to practice authentication process since
                        there are no public APIs for this stuff. So I hope this app will help you to get through that
                        little difficulty that I have experienced.
                    </p>
                    <h1 className='text-neutral-200 text-2xl mb-3'>With this app:</h1>
                    <ul className='list-disc ml-10 mb-10'>
                        <li className='text-neutral-200 font-thin text-xl'>You can mock Signing up</li>
                        <li className='text-neutral-200 font-thin text-xl'>You can mock Signing in</li>
                        <li className='text-neutral-200 font-thin text-xl'>You can work with JWT</li>
                        <li className='text-neutral-200 font-thin text-xl'>
                            You can get some posts like you did with{' '}
                            <a className='text-cyan-500' href='https://jsonplaceholder.typicode.com/'>
                                jsonplaceholder
                            </a>{' '}
                            only if you are <span className='bg-cyan-500 px-2 rounded-md text-white'>signed in!</span>
                        </li>
                        <li className='text-neutral-200 font-thin text-xl'>
                            You can get some private information only if you are{' '}
                            <span className='bg-cyan-500 px-2 rounded-md text-white'>admin</span> user
                        </li>
                    </ul>
                    <h1 className='text-neutral-200 text-xl mb-6 text-center'>
                        Wanna try? Read the{' '}
                        <span className='bg-cyan-500 px-2 rounded-md text-white'>
                            <a href='#docs'>docs</a>
                        </span>
                    </h1>
                </section>
                <section className='max-w-7xl border min-h-screen mx-auto p-8' id='docs'>
                    
                </section>
            </main>

            <footer></footer>
        </div>
    );
}
