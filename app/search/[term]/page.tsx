import { getFetchUrl } from "@/lib/getFetchUrl";
import { PageResults, SearchParams } from "@/typings";
import { redirect } from "next/navigation";


type Props ={
    searchParams: SearchParams;
   params:{
    term: string
   };
};

 async function SearchPage({searchParams, params: {term}}: Props) {
    if(!term){
        redirect("/")
    }

    //fetch from API
    const response = await fetch(getFetchUrl('api/search'),{
      method: "POST",
      body: JSON.stringify({ searchTerm: term, ...searchParams}),
    });

    const results = await response.json() as PageResults[];

  return (
    <div>
        <ResultsList results={ results} term={term}/>
    </div>
  )
}

export default SearchPage