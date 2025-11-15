console.log("---------------------------------Exercise 1: Contact List---------------------------------");
const contacts = [
    { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "Curabitur.egestas.nunc@nonummya.c.o.uk" },
    { name: "Raja Villarreal", phone: "0866 398 2895", email: "posuere.vulputate@sed.com" },
    { name: "Helen Richards", phone: "0800 1111", email: "libero@convallis.edu" }
];

// Show the contact list
contacts.forEach((contact, index) => {
    console.log(`Contact ${index + 1}:`);
    console.log(`  Namee: ${contact.name}`);
    console.log(`  Phone: ${contact.phone}`);
    console.log(`  Email: ${contact.email}`);
    console.log('---');
});