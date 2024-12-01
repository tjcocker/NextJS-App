import type { NextPage } from 'next'
import Head from 'next/head'
import { WrenchScrewdriverIcon, WrenchIcon, ExclamationTriangleIcon, TrashIcon, ArchiveBoxArrowDownIcon, ArrowPathRoundedSquareIcon, ChartBarSquareIcon, DocumentTextIcon, BeakerIcon } from '@heroicons/react/24/solid';
import { KeyIcon, SwatchIcon, UsersIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Home',
};

const Home: NextPage = () => {
    return (
        <div>
            {/* <Head>
                <meta name="description" content="A static html home page" />
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <main>
                <h1>
                    <b data-cy="welcomeText">Welcome!</b>
                </h1><br></br>
                <p><i>This is a project for learning and testing a React web app. Feel free to look around and test it out.</i></p>
                <br></br>
                <p className="flex items-center"
                ><BeakerIcon className="w-8 md:w-8" /><span>&nbsp;&nbsp;<a
                    href="https://tim-cockerham.com/videos/cypressAppTest.mp4"><b>Cypress</b></a> e2e testing &amp; <a
                        href="https://tim-cockerham.com/videos/appTest.mp4"><b>Selenium</b></a> tests for database functions </span></p>
                <br></br>
                <p>It started as the basic tutorial project: &nbsp;<a
                    href="https://nextjs.org/learn/dashboard-app" ><b><span>https://nextjs.org/learn/dashboard-app</span></b>
                </a></p><br></br>
                <a className="flex items-center"
                ><KeyIcon className="w-8 md:w-8" /><span>&nbsp;&nbsp;I removed authentication so anyone can access the app </span></a>

                <a className="flex items-center"
                ><WrenchIcon className="w-8 md:w-8" /><span>&nbsp;&nbsp;Created a new &apos;Delete All&apos; function to clear the Postgres database </span></a>

                <a className="flex items-center"
                ><UsersIcon className="w-8 md:w-8" /><span>&nbsp;&nbsp;Made the existing &apos;Seed Database&apos; function public so users could repopulate the database </span></a>

                <a className="flex items-center"
                ><WrenchScrewdriverIcon className="w-8 md:w-8" /><span>&nbsp;&nbsp;Merged both Delete and Seed into a more user friendly &apos;Reset&apos; function </span></a>

                <a className="flex items-center"
                ><SwatchIcon className="w-8 md:w-8" /><span>&nbsp;&nbsp;Added this home page, a contact page, and other cosmetic changes </span></a>
                <br></br>
                
                <Link
                    href="/dashboard"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <ChartBarSquareIcon className="w-5 md:w-7" />
                    <span>Start with the Dashboard</span>
                </Link>
                <br></br>
                <p><b>Feel free to create, edit, or delete invoices.</b></p><br></br>
                <Link
                    href="/dashboard/invoices"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <DocumentTextIcon className="w-5 md:w-7" />
                    <span>Go to Invoices</span>
                </Link><br></br>
                <p><b>Want to start over? Click below:</b></p>
                <br></br>
                <a
                    href="/reset"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <ArrowPathRoundedSquareIcon className="w-5 md:w-7" />
                    <span>Click Here to reset the database</span>
                </a>
                <br></br>
                <br></br>
                <p>Separate Delete and Seed functions for testing purposes:</p><br></br>


                <a
                    href="/delete"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <TrashIcon className="w-5 md:w-7" />
                    <span>Click Here to clear the database</span>
                </a>
                <br></br>
                <a
                    href="/seed"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <ArchiveBoxArrowDownIcon className="w-5 md:w-7" />
                    <span>Click Here to reseed the database</span>
                </a>
                <p><br></br>  <a className="flex items-center"
                ><ExclamationTriangleIcon className="w-8 md:w-8" /><span>&nbsp;Invoices will be duplicated if not deleted </span></a>
                </p>

            </main>
        </div>
    )
}

export default Home