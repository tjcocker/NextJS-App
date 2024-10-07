import type { NextPage } from 'next'
import Head from 'next/head'
import { ChartBarSquareIcon, ArchiveBoxArrowDownIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
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
                <p><i>This is a project for learning Next.js and React. Feel free to look around and test it out.</i></p>
                <br></br>
                <Link
                    href="/dashboard"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <ChartBarSquareIcon className="w-5 md:w-6" />
                    <span>Start with the Dashboard</span>
                </Link><br></br><br></br>
                <p><b>Feel free to create, edit, or delete invoices.</b></p><br></br>
                <Link
                    href="/dashboard/invoices"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <DocumentDuplicateIcon className="w-5 md:w-6" />
                    <span>Go to Invoices</span>
                </Link><br></br><br></br>
                <p><b>Deleted <i>all</i> the invoices?</b> Don&apos;t worry, I can re-seed the data.</p><br></br> <p><i>Or you can re-seed the database yourself:</i></p>
                <br></br>
                <a
                    href="/seed"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <ArchiveBoxArrowDownIcon className="w-5 md:w-6" />
                    <span>1. Click Here to re-seed the database</span>
                </a>
                <br></br><p>2. Click the back button on your browser when you see the message, &quot;Database Seeded Successfully&quot;.</p><br></br>
                
                <div>
                    <Link
                        href="/dashboard/invoices"
                        className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    > <DocumentDuplicateIcon className="w-5 md:w-6" />
                        <span>3. Click Here to see the repopulated database</span><br></br>
                    </Link><br></br>
                    <p><i>* Invoices will be duplicated if not deleted</i></p>
                </div>
            </main>
        </div>
    )
}

export default Home