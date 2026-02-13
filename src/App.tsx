import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { SearchBar } from "@/components/SearchBar";
import { ContactList } from "@/components/ContactList";
import { filterContacts } from "@/services/contacts";
import type { Contact } from "@/data/contacts";

function App() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialContacts = filterContacts("");
    setContacts(initialContacts);
    setIsLoading(false);
  }, []);

  const handleSearch = (query: string) => {
    const filtered = filterContacts(query);
    setContacts(filtered);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
      </div>
    );
  }

  return (
    <div dir="rtl" lang="ar" className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-3xl">
        <SearchBar onSearch={handleSearch} />
        <ContactList contacts={contacts} />
      </main>
    </div>
  );
}

export default App;
