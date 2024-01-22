import Image from "next/image"

export default function Competences() {
  return (
    <div className="flex flex-col items-start">
        <h1 className="title leading-big-title my-8 ">Compé<wbr/>tences</h1>
        <h2 className="subtitle mt-8">Front-end</h2>
        {/* [&_*>div] cible les div dans les descendants directs */}
        <ul role="list" className="flex flex-wrap *:text-center *:m-2 [&_*>div]:h-24 [&_*>div]:min-w-24 [&_*>div]:relative">
          <li>            
              <div className="dark:p-2 dark:bg-white">
                <Image className="object-contain p-2" src="/images/logos/nextjs.png" alt="logo Next.js" fill={true}></Image>
              </div>
              <p>Next.js</p>            
          </li>
          <li>            
            <div>
              <Image className="object-contain p-2" src="/images/logos/twig.png" alt="logo Twig" fill={true}></Image>
            </div>
              <p>Twig</p>            
          </li>
          <li>
            <div>
              <Image className="object-contain p-2" src="/images/logos/bootstrap.png" alt="logo Bootstrap" fill={true}></Image>
            </div>
            <p>Bootstrap</p>
          </li>
          <li>
            <div>
              <Image className="object-contain p-2" src="/images/logos/tailwind.png" alt="logo Tailwind" fill={true}></Image> 
            </div>
            <p>Tailwind</p>            
          </li>
          <li>
            <div className="dark:p-2 dark:bg-white">
              <Image className="object-contain p-2" src="/images/logos/jquery.png" alt="logo jQuery" fill={true}></Image>  
            </div>
            <p>jQuery</p>
          </li>
        </ul>
        <h2 className="subtitle mt-8">Back-end</h2>
        <ul role="list" className="flex *:text-center *:m-2 [&_*>div]:h-24 [&_*>div]:min-w-24 [&_*>div]:relative">
          <li>
            <div>
              <Image className="object-contain p-2" src="/images/logos/php.png" alt="logo PHP" fill={true}></Image>
            </div>
            <p>PHP</p>
          </li>
          <li>
            <div>
              <Image className="object-contain p-2" src="/images/logos/symfony.png" alt="logo Symfony" fill={true}></Image>
            </div>
            <p>Symfony</p>
          </li>
          <li>
            <div>
              <Image className="object-contain p-2 dark:hidden" src="/images/logos/mariadb.png" alt="logo MariaDB" fill={true}></Image>
              <Image className="object-contain p-2 hidden dark:block" src="/images/logos/darkmariadb.png" alt="logo MariaDB" fill={true}></Image>
            </div>
            <p>MariaDB</p>
          </li>
        </ul> 
    </div>    
  )
  }  