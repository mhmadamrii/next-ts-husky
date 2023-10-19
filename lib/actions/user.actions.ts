'use server';

import { revalidatePath } from 'next/cache';
import User from '../models/user.model';
import { connectToDB } from '../mongoose';
import { TParamsUpdateUser } from '../types';

export async function updateUser({
  userId,
  bio,
  name,
  path,
  username,
  image,
}: TParamsUpdateUser): Promise<void> {
  try {
    connectToDB();
    await User.findOneAndUpdate(
      {
        id: userId,
      },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      {
        upsert: true,
      },
    );

    if (path === '/profile/edit') {
      revalidatePath(path);
    }
  } catch (error) {
    console.log('error');
    throw new Error('failed to create/update user');
  }
}

export async function fetchUsers(userId: string) {
  try {
    connectToDB();
  } catch (error) {
    console.log({ error });
    throw new Error('Something went wrong');
  }
}
