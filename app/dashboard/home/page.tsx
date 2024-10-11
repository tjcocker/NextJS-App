import type { NextPage } from 'next'
import Head from 'next/head'
import { ChartBarSquareIcon, ArchiveBoxArrowDownIcon, DocumentDuplicateIcon, TrashIcon } from '@heroicons/react/24/outline';
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
                <br></br><p>It started as the basic tutorial project: &nbsp;<a
                    href="https://nextjs.org/learn/dashboard-app" ><span>https://nextjs.org/learn/dashboard-app</span>
                </a><br></br><br></br>
                    * I removed authentication so anyone can access the app<br></br>
                    * Created a new &apos;Delete All&apos; function to clear the Postgres database<br></br>
                    * Made the existing &apos;Seed Database&apos; function public so users can repopulate the database<br></br>
                    * Added this home page, a contact page, and other cosmetic changes<br></br>
                    * Created Selenium/Python and Cypress/JavaScript testing for database functions &amp; invoice actions</p><br></br><br></br>
                <Link
                    href="/dashboard"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <ChartBarSquareIcon className="w-5 md:w-6" />
                    <span>Start with the Dashboard</span>
                </Link><br></br>
                <p><b>Feel free to create, edit, or delete invoices.</b></p><br></br>
                <Link
                    href="/dashboard/invoices"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <DocumentDuplicateIcon className="w-5 md:w-6" />
                    <span>Go to Invoices</span>
                </Link><br></br><br></br>
                <p><b>Deleted all the invoices?</b> </p><br></br> <p><i>You can repopulate the original data:</i></p>
                <br></br>

                <a
                    href="/seed"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <ArchiveBoxArrowDownIcon className="w-5 md:w-6" />
                    <span>Click Here to reseed the database</span>
                </a>
                <p><br></br> * Invoices will be duplicated if not deleted</p><br></br>

                <br></br>
                <p><b>Want to delete all the invoices?</b></p>
                <br></br>
                <a
                    href="/delete"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <TrashIcon className="w-5 md:w-6" />
                    <span>Click Here to clear the database</span>
                </a>
            </main>
        </div>
    )
}

export default Home