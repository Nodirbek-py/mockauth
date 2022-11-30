import Head from 'next/head';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function Home(): React.ReactNode {
    return (
        <div>
            <Head>
                <title>MockAuth</title>
                <meta name='description' content='Mock your authentication and authorization for your learning' />
                <link rel='icon' href='/icon.png' />
            </Head>
            <header className='min-h-screen'>
                <div className='h-12 shadow-md fixed w-screen backdrop-blur bg-white/0 z-50'>
                    <nav className='max-w-7xl mx-auto h-full flex items-center justify-between px-6'>
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
                    <p className='mb-4'>
                        Powered by{' '}
                        <a className='text-cyan-500' target='_blank' href='https://nextjs.org' rel='noreferrer'>
                            Next.js
                        </a>{' '}
                        and{' '}
                        <a href='https://www.mongodb.com' className='text-cyan-500' target='_blank' rel='noreferrer'>
                            MongoDB
                        </a>
                    </p>
                    <button className='bg-cyan-500 px-4 py-2 rounded-md shadow-md shadow-cyan-500'>
                        <a href='#about'>Get Started</a>
                    </button>
                </div>
            </header>
            <main>
                <section className='max-w-7xl min-h-screen mx-auto p-8' id='about'>
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
                <section className='max-w-7xl min-h-screen mx-auto p-8' id='docs'>
                    <h1 className='text-neutral-200 text-3xl mb-6'>Try it</h1>
                    <p className='text-neutral-200 text-xl mb-6'>Run this code here, in a console or from any site:</p>
                    <SyntaxHighlighter language='javascript' style={a11yDark}>
                        {`
fetch('https://mockauth.vercel.com/api/posts/', 
    { method: 'GET', headers: { Authorization: 'Bearer <token>' }})
        .then((res) => res.json())
        .then((data) => console.log(data))
                        `}
                    </SyntaxHighlighter>
                    <p className='text-neutral-200 text-xl my-4'>
                        You can see that we have authorization here, we need token in order to send requests ang get
                        desired response. To get this token you need to login to your account or register if you don
                        {'\''}t have one. See the following snippet for registration
                    </p>
                    <SyntaxHighlighter language='javascript' style={a11yDark}>
                        {`
fetch('https://mockauth.vercel.com/api/auth/register', 
    { 
        method: 'POST',
        body: JSON.stringify({username: 'john.doe', password: '*********', password2: '**********'})   
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
                        `}
                    </SyntaxHighlighter>
                    <p className='text-neutral-200 text-xl my-4'>
                        It has its own validation and error messages. Once you send correct request body you will get{' '}
                        <code className='text-orange-300'>accessToken</code> and{' '}
                        <code className='text-orange-300'>refreshToken</code>. So you can use these tokens in further
                        steps.
                    </p>
                    <p className='text-neutral-200 text-xl my-4'>
                        Here you can see how to use <code className='text-orange-300'>/login</code> endpoint
                    </p>
                    <SyntaxHighlighter language='javascript' style={a11yDark}>
                        {`
fetch('https://mockauth.vercel.com/api/auth/login', 
    { 
        method: 'POST',
        body: JSON.stringify({username: 'john.doe', password: '*********'})   
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
                        `}
                    </SyntaxHighlighter>
                    <p className='text-neutral-200 text-xl my-4'>
                        One thing you have to keep in mind. There is one endpoint{' '}
                        <code className='text-orange-300'>/private</code>. Which requires one thing additional to{' '}
                        <code className='text-orange-300'>accesToken</code>. It is{' '}
                        <code className='text-orange-300'>isAdmin</code> property which is after decoding token. It will
                        be <code className='text-orange-300'>true</code> or{' '}
                        <code className='text-orange-300'>false</code>. You can get those datas from private endpoint
                        only if you are logged in as admin (that property will be true). And there is only one admin
                        user, here are the credentials <br />
                        <code className='text-orange-300'>
                            username: <b>adminuser</b>
                        </code>
                        <br />
                        <code className='text-orange-300'>
                            password: <b>adminpassword</b>
                        </code>
                    </p>
                    <p className='text-neutral-200 text-xl my-4'>
                        Your <code className='text-orange-300'>accessToken</code> will expire in 3 days, so you need to
                        refresh it via <code className='text-orange-300'>refreshToken</code>. This token expires in 7
                        days. In order to refresh your access token you need to send{' '}
                        <code className='text-orange-300'>POST</code> to this endpoint{' '}
                        <code className='text-orange-300'>/auth/refresh</code>, and in the body you need to pass{' '}
                        <code className='text-orange-300'>refreshToken</code>. See the sample below:
                    </p>
                    <SyntaxHighlighter language='javascript' style={a11yDark}>
                        {`
fetch('https://mockauth.vercel.com/api/auth/refresh', 
    { 
        method: 'POST',
        body: JSON.stringify({refreshToken: '<token>'})   
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
                        `}
                    </SyntaxHighlighter>
                    <p className='text-neutral-200 text-md my-4 italic'>
                        Note: If <span className='text-orange-300'>refreshToken</span> is also expired, you need to log in again
                    </p>
                    <p className='text-neutral-200 text-xl my-4'>
                        Here are the sample responses from various endpoints
                        <br />
                        <code className='text-orange-300'>/private</code>:
                        <SyntaxHighlighter language='json' style={a11yDark}>
                            {`
{
    "posts": [
        {
            "_id": "6381050c3255440503fa839d",
            "firstName": "Tabb",
            "lastName": "Swarbrigg",
            "dob": "31/01/1988",
            "address": "8 Knutson Lane",
            "phoneNumber": "379-558-9861",
            "bankAccount": {
                "bankName": "Greenholt-Watsica",
                "iban": "AZ60 QOOZ SBWZ D3TY SMSD HFXC 9GQW",
                "country": "Brazil",
                "_id": "6381050c3255440503fa839e"
            },
            "__v": 0
        },
        ...
    ]
}
                        `}
                        </SyntaxHighlighter>
                        <code className='text-orange-300'>/posts</code>:
                        <SyntaxHighlighter language='json' style={a11yDark}>
                            {`
{
    "posts": [
        {
            "_id": "6380ea7639cd79f3d505ad2b",
            "title": "Post title 1",
            "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "__v": 0
        },
        ...
    ]
}
`}
                        </SyntaxHighlighter>
                        <code className='text-orange-300'>/posts/:_id</code>:
                        <p>
                            You need to send <code className='text-orange-300'>_id</code> property of the post in order
                            to get single post as a response
                        </p>
                        <SyntaxHighlighter language='json' style={a11yDark}>
                            {`
{
    "posts": [
        {
            "_id": _id,
            "title": "Post title 1",
            "body": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "__v": 0
        },
        ...
    ]
}
`}
                        </SyntaxHighlighter>
                        <code className='text-orange-300'>/auth/login</code> or{' '}
                        <code className='text-orange-300'>/auth/register</code>:
                        <SyntaxHighlighter language='json' style={a11yDark}>
                            {`
{
    "message": "Welcome",
    "accessToken": "<accessToken>",
    "refreshToken": "<refreshToken>"
}
`}
                        </SyntaxHighlighter>
                    </p>
                    <code className='text-orange-300'>/auth/refresh</code>:
                    <SyntaxHighlighter language='json' style={a11yDark}>
                            {`
{
    "accessToken": "<accessToken>",
}
`}
                        </SyntaxHighlighter>
                </section>
            </main>

            <footer className='border-t border-neutral-600 py-6 px-4'>
                <p className='text-center text-neutral-200'>
                    Made with ❤️ and{' '}
                    <a className='text-cyan-400' href='https://nextjs.org' target='_blank' rel='noreferrer'>
                        Next.js
                    </a>{' '}
                    by{' '}
                    <a className='text-cyan-400' href='https://github.com/nodirbek-py' target='blank' rel='noreferrer'>
                        Nodirbek Vositov
                    </a>
                </p>
            </footer>
        </div>
    );
}
