import Image from "next/image"

export default function Competences() {
  return (
    <div className="flex flex-col items-start">
        <h1 className="title leading-big-title my-8 ">Compé<wbr/>tences</h1>
        <p className="text-2xl/loose my-5"> J&apos;ai effectué une reconversion professionnelle en 2022-2023 et décroché mon titre professionnel Développeur web et web mobile en Octobre 2023 en suivant le cursus <b>Développeur web Full-stack</b> de l&apos;école en ligne&nbsp;
        <a className="text-grapefruit underline" href="https://www.studi.com/fr" rel="noopener noreferrer" target="_blank">Studi</a>. 
        </p>
        <h2 className="subtitle mt-8 mb-4">Front-end</h2>
        {/* [&_*>div] cible les div dans les descendants directs */}
        <ul role="list" className="flex flex-wrap *:text-center *:m-4 [&_*>div]:h-24 [&_*>div]:min-w-24 [&_*>div]:relative [&_*>p]:mt-2">
          <li className=""> 
            <div className="dark:p-2 dark:bg-white [&_img]:hover:blur-lg [&_div>p]:hidden [&_div>p]:hover:block">              
              <Image className="object-contain p-2" src="/images/logos/nextjs.png" alt="logo Next.js" fill={true}></Image>
              <div className="size-24 flex items-center justify-center">
                <p className="text-xl font-bold  dark:text-serious-blue">Next.js</p>
              </div>                
            </div>                          
          </li>      
          <li>
            <div className="[&_img]:hover:blur-lg [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2" src="/images/logos/tailwind.png" alt="logo Tailwind" fill={true}></Image>
              <div className="size-24 flex items-center justify-center">
                <p className="text-xl font-bold ">Tailwind</p>
              </div>   
            </div>          
          </li>    
          <li>
            <div className="[&_img]:hover:blur-lg [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2" src="/images/logos/bootstrap.png" alt="logo Bootstrap" fill={true}></Image>
              <div className="size-24 flex items-center justify-center">
                <p className="text-xl font-bold ">Bootstrap</p>
              </div>
            </div>
          </li>
          <li>            
            <div className="[&_img]:hover:blur-lg [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2" src="/images/logos/twig.png" alt="logo Twig" fill={true}></Image>
              <div className="size-24 flex items-center justify-center">
                <p className="text-xl font-bold ">Twig</p>
              </div>
            </div>            
          </li>
          <li>
            <div className="[&_img]:hover:blur-lg [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2" src="/images/logos/jquery.png" alt="logo jQuery" fill={true}></Image>
              <div className="size-24 flex items-center justify-center">
                <p className="text-xl font-bold ">jQuery</p>
              </div>
            </div>
          </li>
        </ul>
        <h2 className="subtitle mt-8 mb-4">Back-end</h2>
        <ul role="list" className="flex *:text-center *:m-4 [&_*>div]:h-24 [&_*>div]:min-w-24 [&_*>div]:relative">
          <li>
            <div className="[&_img]:hover:blur-lg [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2" src="/images/logos/php.png" alt="logo PHP" fill={true}></Image>
            <div className="size-24 flex items-center justify-center">
              <p className="text-xl font-bold ">PHP</p>
            </div>
            </div>
          </li>
          <li>
            <div className="[&_img]:hover:blur-lg [&_img]:hover:brightness-200 [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2" src="/images/logos/symfony.png" alt="logo Symfony" fill={true}></Image>
            <div className="size-24 flex items-center justify-center">
              <p className="text-xl font-bold ">Symfony</p>
            </div>
            </div>
          </li>
          <li>
            <div className="[&_img]:hover:blur-lg [&_img]:hover:brightness-100 [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2 dark:hidden" src="/images/logos/mariadb.png" alt="logo MariaDB" fill={true}></Image>
              <Image className="object-contain p-2 hidden dark:block" src="/images/logos/darkmariadb.png" alt="logo MariaDB" fill={true}></Image>
              <div className="size-24 flex items-center justify-center">
                <p className="text-xl font-bold ">MariaDB</p>
              </div>
            </div>
          </li>
        </ul>
        <h2 className="subtitle mt-8 mb-4">Conception</h2>
        <ul role="list" className="flex *:text-center *:m-4 [&_*>div]:h-24 [&_*>div]:min-w-24 [&_*>div]:relative">
          <li>
            <div className="[&_img]:hover:blur-lg [&_img]:hover:brightness-100 [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2" src="/images/logos/figma.png" alt="logo Figma" fill={true}></Image>              
              <div className="size-24 flex items-center justify-center">
                <p className="text-xl font-bold ">Figma</p>
              </div>
            </div>
          </li>  
        </ul>
        <h2 className="subtitle mt-8 mb-4">Bonnes pratiques</h2>
        <ul role="list" className="flex *:text-center *:m-4 [&_*>div]:h-24 [&_*>div]:min-w-24 [&_*>div]:relative">
          <li>
            <div className="[&_img]:hover:blur-lg [&_img]:hover:brightness-100 [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2" src="/images/logos/typescript.png" alt="logo Typescript" fill={true}></Image>
              <div className="size-24 flex items-center justify-center">
                <p className="text-xl font-bold ">Typescript</p>
              </div>
            </div>
          </li>
          <li>
            <div className="flex justify-center items-center [&_svg]:hover:blur-lg [&_svg]:hover:brightness-200 [&_div>p]:hidden [&_div>p]:hover:block">
            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="absolute dark:fill-pale-yellow" viewBox="0 0 16 16"> <path d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"/> <path d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"/> </svg> 
              <div className="size-24 flex items-center justify-center">
                <p className="text-xl font-bold ">Tests unitaires</p>
              </div>
            </div>
          </li>
          <li>
            <div className="[&_img]:hover:blur-lg [&_img]:hover:brightness-100 [&_div>p]:hidden [&_div>p]:hover:block">
              <Image className="object-contain p-2 rounded" src="/images/logos/psr.png" alt="logo Typescript" fill={true}></Image>
              <div className="size-24 flex items-center justify-center">                
                <p className="text-xl font-bold ">PSR</p>
              </div>
            </div>
            
          </li>
        </ul> 
    </div>    
  )
  }  