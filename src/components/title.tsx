
interface TitlePage{

  children: string

}


export function Title({children} : TitlePage){


return(

<h1 className="font-bold text-2xl sm:text-3xl">{children}</h1>




)




}