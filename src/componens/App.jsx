import SearchBar from "./SearchBar/SearchBar";


export default function App() {
    
  const handleSubmit = (values) => {
    console.log("Form data submitted:", values);
   
};

    return (
        <SearchBar onSubmit={handleSubmit}/>
    );
}
