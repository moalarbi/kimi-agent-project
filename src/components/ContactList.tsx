import type { Contact } from "@/data/contacts";
import { ContactCard } from "./ContactCard";
import { SearchX } from "lucide-react";

interface ContactListProps {
  contacts: Contact[];
}

export function ContactList({ contacts }: ContactListProps) {
  if (contacts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
          <SearchX className="h-8 w-8 text-white/30" />
        </div>
        <p className="text-base text-white/60">
          لا توجد نتائج مطابقة
        </p>
        <p className="mt-1 text-sm text-white/40">
          جرّب اسمًا آخر أو رقم تحويلة مختلف
        </p>
      </div>
    );
  }

  return (
    <div className="w-full px-4 pb-8 sm:px-6">
      <div className="space-y-2">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <span className="text-xs text-white/30">
          {contacts.length} جهة اتصال
        </span>
      </div>
    </div>
  );
}
