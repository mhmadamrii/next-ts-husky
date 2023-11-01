import Card from '@/_components/Card';
import MakeContact from '@/_components/MakeContact';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const saveContact = async (contact: any) => {
  'use server';
  const response = await fetch('/api/contacts', {
    method: 'POST',
    // body: JSON.stringify(contact),
    body: contact,
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};


export default async function Root() {
  const contacts = await prisma.contact.findMany();
  return (
    <div className="container mx-auto my-20">
      <MakeContact saveContact={saveContact} />
      {contacts.map((card, idx: number) => (
        <Card
          key={card.id}
          firstName={card.firstName}
          lastName={card.lastName}
          email={card.email}
          avatar={card.avatar}
        />
      ))}
    </div>
  );
}
