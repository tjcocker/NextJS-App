import type { NextPage } from 'next'
import Head from 'next/head'
import { CogIcon, BriefcaseIcon, ComputerDesktopIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const Contact: NextPage = () => {
    return (
        <div>
            <Head>
                <meta name="description" content="A static html contact page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1>
                    <b>Contact:</b>
                </h1><br></br>
                <br></br>
                <Link
                    href="mailto:tim@tim-cockerham.com"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <EnvelopeIcon className="w-5 md:w-6" />
                    <span>Email</span>
                </Link>
                <br></br> <br></br>

                <Link
                    href="https://www.linkedin.com/in/timcockerham/"
                    className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                > <BriefcaseIcon className="w-5 md:w-6" />
                    <span>LinkedIn</span>
                </Link>
                <br></br>

                <div><br></br>
                    <Link
                        href="https://github.com/tjcocker/NextJS-App"
                        className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    > <CogIcon className="w-5 md:w-6" />
                        <span>GitHub repo for this app</span><br></br>
                    </Link><br></br><br></br>
                    <Link
                        href="https://tim-cockerham.com/"
                        className="flex items-center gap-5 self-start rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
                    > <ComputerDesktopIcon className="w-5 md:w-6" />
                        <span>Back to my portfolio website</span><br></br>
                    </Link><br></br>
                </div>
            </main>
        </div>
    )
}

export default Contact