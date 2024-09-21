import type { NextPage } from 'next'
import Head from 'next/head'
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="A static html home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    <b>Welcome!</b>
                </h1><br></br>
                <p>Take a look around. Feel free to create, update, or delete invoices. (I can re-seed the data)</p>
                <br></br>
                <p><i>This is a project for learning Next.js and playing around with testing tools for web apps.</i></p>
                <br></br>  <br></br>     <br></br>   <Link
            href="/dashboard"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          > <ArrowLeftIcon className="w-5 md:w-6" />
            <span>Go to the Dashboard</span>
          </Link>
                <div>

                </div>
            </main>
        </div>
    )
}

export default Home