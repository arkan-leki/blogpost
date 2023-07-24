// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body


    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' })
      return
    }

    // store in database
    const newMessage = {
      email,
      name,
      message
    };

    let client;

    try {
      client = await MongoClient.connect('mongodb+srv://arkan_laki:arkan1234@cluster0.7vxzzgx.mongodb.net/next-course?retryWrites=true&w=majority')
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }

    client.close();

    return res.status(201).json({ message: 'Message sent', message: newMessage })
  }
}