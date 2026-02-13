import { contacts } from "@/data/contacts";
import type { Contact } from "@/data/contacts";

export function getAllContacts(): Contact[] {
  return [...contacts].sort((a, b) => a.ext - b.ext);
}

export function filterContacts(query: string): Contact[] {
  const normalizedQuery = query.trim().toLowerCase();
  
  if (!normalizedQuery) {
    return getAllContacts();
  }

  const allContacts = getAllContacts();
  
  return allContacts.filter((contact) => {
    const nameMatch = contact.name.toLowerCase().includes(normalizedQuery);
    const extMatch = contact.ext.toString().includes(normalizedQuery);
    return nameMatch || extMatch;
  });
}
