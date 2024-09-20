import { CodeBracketSquareIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function MyLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <CodeBracketSquareIcon className="size-15"/>
      <p className="text-[40px]">Tim Cockerham</p>
    </div>
  );
}

